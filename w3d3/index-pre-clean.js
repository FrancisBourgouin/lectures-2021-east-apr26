const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const { authenticateUser, fetchUser, createUser } = require("./helpers/userHelpers")
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


app.get("/", (req, res) => {


  const { email } = req.cookies
  const currentUser = fetchUser(email)
  // for(const user of userDatabaseIsh){
  //   if(user.email === email){
  //     currentUser = user
  //   }
  // }
  const templateVariables = {
    currentUser
  }
  res.render("index", templateVariables);
});



app.post("/login", (req, res) => {
  // some kind of validation
  // const email = req.body.email
  // const password = req.body.password

  // const { email, password } = req.body
  // for (const user of userDatabaseIsh) {
  //   if (user.email === email) {
  //     if (user.password === password) {
  //       return res.redirect("/")
  //     }
  //     console.log("Bad password")
  //     return res.send("bad person")

  //   }
  // }
  // console.log("Bad email")
  // return res.send("bad person")

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
  // if (fetchUser(req.body.email)) {
  //   return res.send("user already exists")
  // }
  // const { email, name, avatar, password } = req.body

  // if (!email || !name || !avatar || !password) {
  //   return res.send("invalid fields")
  // }

  // userDatabaseIsh.push(req.body)

  const result = createUser(req.body)

  if (result.error) {
    return res.send(result.error)
  }

  res.cookie("email", result.email)
  res.redirect("/")

})
app.listen(port, () => console.log(`Express server running on port ${port}`));
