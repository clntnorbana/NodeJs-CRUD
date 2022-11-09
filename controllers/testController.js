const Test = require("../models/testModel");
const mongoose = require("mongoose");

// get all data
const getDatas = async (req, res) => {
  const datas = await Test.find({}).sort({ createdAt: -1 });
  res.status(200).json(datas);
};

// get single data
const getData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  const data = await Test.findById(id);

  if (!data) {
    return res.status(404).json({ error: "No such data" });
  }
  res.status(200).json(data);
};

// create data
const createData = async (req, res) => {
  const { name, age } = req.body;

  try {
    const data = await Test.create({ name, age });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete data
const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  const data = await Test.findOneAndDelete({ _id: id });

  if (!data) {
    return res.status(404).json({ error: "No such data" });
  }
  res.status(200).json(data);
};

// update data
const updateData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  const data = await Test.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!data) {
    return res.status(404).json({ error: "No such data" });
  }
  res.status(200).json(data);
};

module.exports = {
  getDatas,
  getData,
  createData,
  deleteData,
  updateData,
};
