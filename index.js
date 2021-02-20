//require('dotenv').config()  // NOT HERE - DEPLOYED SERVER WILL CONFUSE

const server = require("./api/server.js");
const welcomeRouter = require("./welcome/welcome-router")
const shoutsRouter = require("./shouts/shouts-router")

// .env variable for production or 5000 for local
const port = process.env.PORT || 5000;

server.use(welcomeRouter)
server.use(shoutsRouter)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

/*
linux set w/o cross-env
node  // to enter node   ctrl+c to exit
process.env
NAME=foobar
*/