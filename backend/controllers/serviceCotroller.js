const serviceModel = require("../modules/serviceModel.js");

const getAllservice = async (req, res) => {
  try {
    const services = await serviceModel.find({ userid: req.body.userid });
    res.status(200).json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const addAllservice = async (req, res) => {
  try {
    const newService = new serviceModel(req.body);
    await newService.save();
    res.status(201).send("Service Created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { getAllservice, addAllservice };
