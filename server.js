const express = require("express");
const app = express();
app.use(express.json());

let projects = [];

app.post("/project", (req, res) => {
  projects.push(req.body);
  res.json({ message: "Project created" });
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(3002, () => {
  console.log("Project tool running on port 3002");
});
