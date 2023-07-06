const getUserDetails = (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: "some data",
    });
  } catch (err) {
    res.status(200).json({
      message: "fail",
      data: err.message,
    });
  }
};

export { getUserDetails };
