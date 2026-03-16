const shopModel = require("../models/shop.model.js");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.service.js");
const { createTokenPair } = require("../auth/authUtils.js");

const RoleShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop) {
        return {
          code: 409,
          message: "Shop already registered",
          status: "error",
        };
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });

      const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: "pkcs1",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs1",
          format: "pem",
        },
      });

      const savedPublicKey = await KeyTokenService.createKeyToken({
        userId: newShop._id,
        publicKey,
      });

      if (!savedPublicKey) {
        return {
          code: 500,
          message: "Save public key failed",
          status: "error",
        };
      }

      const tokens = await createTokenPair(
        { userId: newShop._id, email },
        publicKey,
        privateKey
      );

      return {
        code: 201,
        status: "success",
        metadata: {
          shop: {
            _id: newShop._id,
            name: newShop.name,
            email: newShop.email,
          },
          tokens,
        },
      };
    } catch (error) {
      return {
        code: 500,
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
