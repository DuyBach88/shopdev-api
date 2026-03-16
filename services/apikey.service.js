const apikeyModel = require("../models/apikey.model.js");
const crypto = require("crypto");
const findById = async (key) => {
  // const newKey = await apikeyModel.create({
  //   key: crypto.randomBytes("hex"),
  //   permission: ["0000"],
  // });
  // console.log(newKey);
  const objKey = await apikeyModel.findById({ key, status: true }).lean();
  return objKey;
};
module.exports = { findById };
