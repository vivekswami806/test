const userModel = require("./userModel");

let userController = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email) {
      res.status(200).send({ message: "email is required" });
    }
    if (!password) {
      res.status(200).send({ message: "email is required" });
    }
    let existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      res
        .status(200)
        .send({ message: "Email and password are invalid ", success: false });
    } else {
      res.status(200).send({
        message: "you are successfully login",
        success: true,
        user: {
          name: existingUser.name,
          email: existingUser.email,
        },
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Somthing is error", success: false });
  }
};

module.exports = userController;
