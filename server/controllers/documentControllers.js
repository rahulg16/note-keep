import Document from "../models/documentModel.js";

const getDocument = async (req, res) => {
  try {
    const authorId = req.params.id;
    const docType = req.query.type;

    const userDocs = await Document.find({ authorId, type: docType });

    res.status(200).json({
      message: "success",
      data: userDocs,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err.message,
    });
  }
};

const addNewDocument = async (req, res) => {
  try {
    const data = req.body;

    const { authorId, type, tags, title, heading, description } = data;

    const document = await Document.create({
      authorId,
      type,
      tags,
      title,
      heading,
      description,
    });

    res.status(201).json({
      message: "success",
      data: { document },
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err.message,
    });
  }
};

const updateDocument = async (req, res) => {
  try {
    const updateData = req.body;
    const docId = req.params.id;

    const updatedDoc = await Document.findByIdAndUpdate(docId, updateData);

    res.status(200).json({
      message: "success",
      data: updatedDoc,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err.message,
    });
  }
};

const deleteDocument = async (req, res) => {
  try {
    const docId = req.params.id;
    await Document.findByIdAndDelete(docId);

    res.status(200).json({
      message: "success",
      data: "successfully deleted",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err.message,
    });
  }
};

export { addNewDocument, updateDocument, getDocument, deleteDocument };
