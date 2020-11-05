const server = require("./api/server.js");
const welcomeRouter = require("./welcome/welcome-router")

const port = process.env.PORT || 5000;

server.use(welcomeRouter)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
