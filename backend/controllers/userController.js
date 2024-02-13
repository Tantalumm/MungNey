const userModel = require("../modules/userModel");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      console.log(email, password);
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      err,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(200).json({
      success: true,
      newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: fasle,
      err,
    });
  }
};

module.exports = { loginController, registerController };
