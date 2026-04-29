const { Task } = require("../models");

exports.createTask = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ msg: "Title is required" });
    }

    const task = await Task.create({
      title: req.body.title,
      status: "Pending",
      userId: req.user.id,
    });

    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id },
    });

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    task.status = task.status === "Completed" ? "Pending" : "Completed";

    await task.save();

    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!deleted) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};