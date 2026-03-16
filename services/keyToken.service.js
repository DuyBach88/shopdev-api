const keytokenModel = require("../models/keyToken.model.js");

class KeyTokenService {
  static createKeyToken = async ({ userId, publicKey }) => {
    try {
      const publicKeyString = publicKey.toString();

      const tokens = await keytokenModel.create({
        user: userId,
        publicKey: publicKeyString,
      });

      return tokens ? tokens.publicKey : null;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = KeyTokenService;
