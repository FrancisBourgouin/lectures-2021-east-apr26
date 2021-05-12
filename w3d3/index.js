const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
// const { authenticateUser, fetchUser, createUser } = require("./helpers/userHelpers")
const userHelperGenerator = require('./helpers/userHelpersButBetter')
const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object

app.set("view engine", "ejs"); //

const userDatabaseIsh = [
  {
    name: "Doug Judy",
    email: "pontiac@bandit.com",
    password: "Rosa",
    avatar: "🚗"
  },
  {
    name: "Arsène Lupin",
    email: "gentleman@cambrioleur.com",
    password: "diamonds",
    avatar: "🎩"
  }
]
const { authenticateUser, fetchUser, createUser } = userHelperGenerator(userDatabaseIsh)

app.get("/", (req, res) => {
  const { email } = req.cookies
  const currentUser = fetchUser(email)
  const templateVariables = {
    currentUser
  }
  res.render("index", templateVariables);
});



app.post("/login", (req, res) => {
  const result = authenticateUser(req.body)

  if (result.error) {
    console.log(result.error)
    return res.send("bad person")
  }
  res.cookie('email', result.data.email)
  return res.redirect("/")
})

app.post("/logout", (req, res) => {
  res.clearCookie("email")
  res.redirect("/")
})

app.get("/register", (req, res) => {
  const templateVars = {
    currentUser: null
  }
  res.render("register", templateVars)
})


app.post("/register", (req, res) => {
  const result = createUser(req.body)

  if (result.error) {
    return res.send(result.error)
  }

  res.cookie("email", result.email)
  res.redirect("/")

})

app.listen(port, () => console.log(`Express server running on port ${port}`));
