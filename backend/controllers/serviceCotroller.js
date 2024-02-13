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

const editService = async (req, res) => {
  try{
  await serviceModel.findOneAndUpdate({_id:req.body.serviceId}, req.body.payload);
  res.status(200).send('Edit Successfully');
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteService = async (req, res) => {
  try{
    await serviceModel.findByIdAndDelete({_id:req.body.serviceId})
    res.status(200).send('Service Delete')

  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { getAllservice, addAllservice, editService, deleteService};
