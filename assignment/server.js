/********************************************************************************
 *  WEB322 – Assignment 01
 *
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 *
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 *  Name: Yicheng Wang Student ID: 150868206 Date: 2025-09-15
 *
 ********************************************************************************/

const express = require("express");
const projectData = require("./modules/projects");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// Initialize data before starting server
projectData
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize:", err);
  });

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/solutions/projects", (req, res) => {
  if (req.query.sector) {
    projectData
      .getProjectsBySector(req.query.sector)
      .then((projects) => res.json(projects))
      .catch((err) => res.status(404).send(err));
  } else {
    projectData
      .getAllProjects()
      .then((projects) => res.json(projects))
      .catch((err) => res.status(500).send(err));
  }
});

app.get("/solutions/projects/:id", (req, res) => {
  projectData
    .getProjectById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(404).send(err));
});

app.use((req, res, next) => {
  res.status(404);

  if (req.accepts("html")) {
    res.render("404");
  } else if (req.accepts("json")) {
    res.json({ error: "Not Found", path: req.path });
  } else {
    res.type("txt").send("404 Not Found");
  }
});
