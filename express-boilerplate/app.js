const path = require("path");
const express = require("express");
const cors = require("cors");
const Idea = require("./models/idea");
require("./config/DBconnection");

/* const importFromExcel = require("./utils/importFromExcel");
importFromExcel(); */

const app = express();

app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 10000 })
);

app.use(cors());

app.set("json spaces", 10);

const server = app.listen(8081);

var router = express.Router();
app.use(router);

app.post("/votePoll", (req, res, next) => {
  console.log(req.body);
  const poll = req.body;
  const name = poll.name;
  const ideaID = [
    ...poll.comPicks,
    ...poll.bauPicks,
    ...poll.pplPicks,
    ...poll.infraPicks
  ];

  ideaID.forEach(idea =>
    Idea.vote(idea, name)
      .then(success => console.log(success))
      .catch(err => console.log(err))
  );
});

app.post("/addIdea", (req, res, next) => {
  console.log(req.body);

  const category = req.body.category;
  const idea = req.body.idea;
  console.log(category);
  console.log(idea);

  return Idea.addNew(idea, category)
    .then(success => res.status(200).json(success))
    .catch(err => console.log(err));
});
app.get("/getAll", (req, res, next) => {
  return Idea.getAll().then(ideas => res.status(200).json(ideas));
});
app.get("/get:category", (req, res, next) => {
  const category = req.params.category;
  console.log(category);
  return Idea.get(category).then(ideas => res.status(200).json(ideas));
});

app.use(express.static("public"));
app.use(express.static("build"));

app.get("*", (req, res, next) => {
  app.use(express.static(path.join(__dirname, "build")));
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log("server running at 8081");

/* voted:              -name

votation - option:  -name 
                    -id
                    -votes
                    -category

category :  1: communication
            2: BAU
            3: PPL
            3: Infra */
