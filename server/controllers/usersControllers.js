import Users from "../models/userModel.js";

const getUserDetails = async (req, res) => {

  let allUsers = await Users.find({})

  try {
    res.status(200).json({
      message: "success",
      data: allUsers,
    });
  } catch (err) {
    res.status(200).json({
      message: "fail",
      data: err.message,
    });
  }
};

const addUserFolder = async (req, res) => {
  let { folderName, id } = req.body;

  let user = await Users.findByIdAndUpdate(
    { _id: id },
    { $push: { userFolder: folderName } }
  );

  try {
    res.status(200).json({
      message: "success",
      data: user
    });
  } catch (err) {
    res.status(200).json({
      message: "fail",
      data: err.message,
    });
  }
};

export { getUserDetails, addUserFolder };
