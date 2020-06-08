// ---------- setting up packages
const express = require("express");
const app = express();
const session = require("express-session");
const pg = require("pg");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// ---------- package setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(express.static(path.join(__dirname, "/public")));
require("dotenv").config();

// ---------- database setup
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

// ---------- just so there is something too see when server is hosted
app.get("/", (req, res) => {
  res.send("Welcome to YEN HK's backend server");
});

// ---------- services setup
// --- login
// const setupPassport = require("./authentication/initPassport");
// const LoginService = require("./service/loginService");
// const loginRouter = require("./router/loginRouter");
// const loginService = new LoginService(knex);
// setupPassport(knex);

// ---------- benefits setup
const BenefitsService = require("./service/benefitsService");
const benefitsRouter = require("./router/benefitsRouter");
const benefitsService = new BenefitsService(knex);

// ---------- benefits setup
const MembersService = require("./service/membersService");
const membersRouter = require("./router/membersRouter");
const membersService = new MembersService(knex);

const PORT = process.env.PORT;

// ---------- routing
// app.use("/login", new loginRouter(loginService).router());
app.use("/members", new membersRouter(membersService).router());
app.use("/benefits", new benefitsRouter(benefitsService).router());

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}.`);
});
