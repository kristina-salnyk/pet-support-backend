const mongoose = require("mongoose");


const noticesSchema = mongoose.Schema(
  {
    announcement: {
      type: String,
      required: true,
      category: ["sell", "lost/found", "in good hands"],
      default: "sell",
    },
    title: {
      type: String,
      required: [true, "Set title for notices"],
    },
    name: {
      type: String,
      required: [true, "Set name for pets"],
    },
    birthday: {
      type: String,
      required: true,
      default: "",
    },
    breed: {
      type: String,
      required: true,
      default: "",
    },
    theSex: {
      type: String,
      require: true,
      required: true,
      floor: ["Male", "Female"],
    },
    location: {
      type: String,
      required: true,
      default: "",
    },
    price: {
      type: String,
      required: true,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    comments: {
      type: String,
      default: "",
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const Notices = mongoose.model("notices", noticesSchema);

module.exports = {
  Pets,
};
