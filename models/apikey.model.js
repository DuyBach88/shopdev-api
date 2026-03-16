const { Schema, model } = require("mongoose");
const DOCUMENT_NAME = "Apikey";
const COLECTION_NAME = "Apikeys";

const KeyTokenSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    permission: {
      type: [String],
      require: true,
      enum: ["0000", "1111", "2222"],
    },
  },
  {
    collection: COLECTION_NAME,
    timestamps: true,
  }
);
module.exports = model(DOCUMENT_NAME, KeyTokenSchema);
