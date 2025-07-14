require('dotenv').config();
const express = require("express");
const url_model = require("./models/shorturl.js");
const connectDB = require("./models/db.js");
const methodOverride = require("method-override");
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Routes
app.get("/", async (req, res) => {
  const urlLists = await url_model.find();
  res.render("index", { shorturls: urlLists });
});

app.post("/shorturls", async (req, res) => {
  await url_model.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shorturl", async (req, res) => {
  const shorturl = await url_model.findOne({ short: req.params.shorturl });
  if (shorturl == null) return res.sendStatus(404);

  shorturl.clicks++;
  shorturl.save();

  await res.redirect(shorturl.full);
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteAction = await url_model.findOneAndDelete({ _id: id });
  if (deleteAction == null) return res.sendStatus(404);
  res.redirect("/");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
  });
});
