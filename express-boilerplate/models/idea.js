const mongoose = require("mongoose");

const ideaSchema = mongoose.Schema({
  name: String,
  votes: [],
  category: Number
});

const Idea = (module.exports = mongoose.model("idea", ideaSchema));

module.exports.getAll = () => Idea.find({});
module.exports.get = category => Idea.find({ category });
module.exports.addNew = (idea, category) => {
  console.log(idea);
  console.log(category);
  return Idea.create({ name: idea, category: category });
};
module.exports.vote = (_id, voter) =>
  Idea.updateMany({ _id }, { $push: { votes: voter } });
