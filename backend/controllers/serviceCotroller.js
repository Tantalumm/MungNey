const serviceModel = require("../modules/serviceModel.js");

const getAllService = (req, res) => {
  try {
    const services = serviceModel.find({});
    res.status(200).json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const addAllService = () => {
  try {
    const newService = new serviceModel(req.body);
    newService.save();
    res.status(201).send("Service Created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { getAllService, addAllService };
