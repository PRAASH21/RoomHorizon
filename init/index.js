const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then((res) => {
  console.log(`connection successfully`);

}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RoomHorizon');
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "68120928181c5b3fdcd89c45" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();