const { Schema, model } = require("mongoose");
const DOCUMENT_NAME = "Key";
const COLECTION_NAME = "Keys";

const KeyTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Shop',
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: Array,
      default: [],
    },
  },
  {
    collection: COLECTION_NAME,
    timestamps: true,
  }
);
module.exports = model(DOCUMENT_NAME, KeyTokenSchema);
