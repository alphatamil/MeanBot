const FBUser = require("../models/fbuser.model");

async function getusers(req, res) {
  try {
    let fbusers = await FBUser.find();
    res.send(fbusers);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function createuser(user, userid) {
  try {
    var options = { upsert: true, new: true, setDefaultsOnInsert: true };
    await FBUser.findOneAndUpdate({ psId: userid }, user, options);
    return { res: "success", message: `${user.firstName} profile saved.` };
  } catch (err) {
    return err;
  }
}
async function getuser(req, res) {
  try {
    let email = req.params.id;
    let fbuser = await FBUser.findOne({ email: `${email}` });
    res.send(fbuser);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function edituser(req, res) {
  try {
    let email = req.params.id;
    let fbuser = await FBUser.update({ email: `${email}` }, req.body, {
      runValidators: true
    });
    res.send(fbuser);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function deleteuser(req, res) {
  try {
    let email = req.params.id;
    let fbuser = await FBUser.deleteOne({ email: `${email}` });
    res.send(fbuser);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getusers,
  getuser,
  createuser,
  edituser,
  deleteuser
};
