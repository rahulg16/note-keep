import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "An document must have an author "],
  },
  type: {
    type: String,
    required: [true, "please mention type of document"],
  },

  createdAt: {
    type: Date,
    default: Date.now().toString(),
  },

  lastModified: {
    type: Date,
    default: Date.now().toString(),
  },

  title: {
    type: String,
    required: [true, "An document must have an title"],
  },

  tags: {
    type: [String],
    required: false,
  },

  heading: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: [true, "An document must have an description"],
  },
});

const Document = mongoose.model("Document", documentSchema);

export default Document;
