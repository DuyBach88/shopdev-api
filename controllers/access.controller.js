const AccessService = require("../services/access.service.js");
const { OK, CREATED } = require("../core/success.response");
class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log("[P]::signUp::", req.body);
      const result = await AccessService.signUp(req.body);
      new CREATED({
        message: "Register OK",
        metadata: result,
      }).send(res);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AccessController();
