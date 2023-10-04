const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    mobileno: {
      type: Number,
      required: true,
      minLength: 10,
    },
    fees: {
      type: Number,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", schema);

module.exports = Doctor;
