const User = require("../models/user.model");

async function getUsers(req, res) {
  try {
    let users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function createUser(req, res) {
  try {
    let user = await new User(req.body).save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function getUser(req, res) {
  try {
    let email = req.params.id;
    let user = await User.findOne({ email: `${email}` });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function editUser(req, res) {
  try {
    let email = req.params.id;
    let user = await User.update({ email: `${email}` }, req.body, {
      runValidators: true
    });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function deleteUser(req, res) {
  try {
    let email = req.params.id;
    let user = await User.deleteOne({ email: `${email}` });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser
};
