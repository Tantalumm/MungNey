const userModel = require("../modules/userModel");

const loginController = (req, res) => {
  try {
    const {id ,password} = req.body
    userModel.findOne({id,password})
    if(!user){
        return res.status(404).send("User Not Found")
    }
    res.status(200).json({
        success : true,
        user,
    });

  } catch(err) {
    console.log(err);
    res.status(400).json({
        success : fasle,
        err
    });
  }
};

const registerController = (res, req) => {
  try {
    newUser = new userModel(req.body);
    newUser.save();
    res.status(201).json({
        success : true,
        newUser,

    });

  } catch(err) {
    console.log(err);
    res.status(400).json({
        success : fasle,
        err
    });
  }
};

module.exports = { loginController, registerController };
