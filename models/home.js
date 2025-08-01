const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  homeName: { type: String, required: true },
  rentPerMonth: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  houseImage: {
  type: String,
  default: "default.jpg", 
},
  description: String,
});

// homeSchema.pre('findOneAndDelete', async function(next) {
//   const homeId = this.getQuery()["_id"];
//   await Favourites.deleteMany({houseId : homeId});
//   next();
// });

module.exports = mongoose.model("Home", homeSchema);