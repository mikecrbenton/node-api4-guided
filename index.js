const server = require("./api/server.js");
const welcomeRouter = require("./welcome/welcome-router")
const shoutsRouter = require("./shouts/shouts-router")

const port = process.env.PORT || 5000;

server.use(welcomeRouter)
server.use(shoutsRouter)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
