const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    // default for no image field and set for frontend null image
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnGhia6QNAU_2AOGsv2p9NuRYOwnsAZg_1w&s",
    set: (v) =>
      v === ""
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnGhia6QNAU_2AOGsv2p9NuRYOwnsAZg_1w&s"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

// create model
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
