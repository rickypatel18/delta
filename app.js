const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("hi there");
});

const validateListing = (req,res,next)  => {
  let {error} = listingSchema.validate(req.body);
  
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",")
    throw new ExpressError(400, errMsg)
  }
  else{
    next()
  }
}

// wrapAsync use not to stop server and send page not found message
// index route
app.get(
  "/listing",
  wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
  })
);

// new route
app.get(
  "/listing/new",
  wrapAsync(async (req, res) => {
    res.render("listings/new.ejs");
  })
);

// show route
app.get(
  "/listing/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  })
);

// create route
// app.post("/listing", async (req, res) => {
//   // let {title,description,iamge,price,country} = req.params;
//   //   let listing =await req.body.listing; //listing from new.ejs name field
//   //   console.log(listing);
//   try {
//     const newlisting = new Listing(req.body.listing);
//     await newlisting.save();
//     res.redirect("/listing");
//   } catch (err) {
//     next(err);
//   }
//   // can use wrapAsync instead of try catch
// });
app.post(
  "/listing",
  validateListing,
  wrapAsync(async (req, res) => {
    const newlisting = new Listing(req.body.listing);
    // if (!newlisting.title) {
    //   throw new ExpressError(400, "title is missing");
    // }
    // if (!newlisting.description) {
    //   throw new ExpressError(400, "description is missing");
    // }
    // if (!newlisting.price) {
    //   throw new ExpressError(400, "price is missing");
    // }
    // if (!newlisting.location) {
    //   throw new ExpressError(400, "location is missing");
    // }
    // if (!newlisting.country) {
    //   throw new ExpressError(400, "country is missing");
    // } do not need , we use joi schema validation
   
    
    await newlisting.save();
    res.redirect("/listing");
  })
);

// edit route
app.get(
  "/listing/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// update route
app.put(
  "/listing/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    // if (!req.body.Listing) { no need bcuz validateListing
    //   throw new ExpressError(400, "send valid data for listing");
    // }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listing/${id}`);
  })
);

// delete route
app.delete("/listing/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listing");
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "page not found by ricky"));
});

app.use((err, req, res, next) => {
  let { statuscode = 500, message = "something went wrong" } = err;
  // res.status(statuscode).send(message);
  // res.render("error.ejs",{err})
  res.status(statuscode).render("error.ejs", { err });
});

app.listen(8080, () => {
  console.log("server listning");
});
