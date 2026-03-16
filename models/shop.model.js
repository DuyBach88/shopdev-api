const { model, Schema } = require("mongoose");
const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

const shopSchema = new Schema(
  {
    name: { type: String, trim: true, maxlength: 100, required: true },
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "inactive" },
    verificationToken: { type: Schema.Types.Boolean, default: false },
    roles: { type: Array, default: [] },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = model(DOCUMENT_NAME, shopSchema);
