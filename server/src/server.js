const app = require("./app");
const PORT = process.env.PORT || 8000;

const { loadPlanetData } = require("./models/planets.model.js");
const http = require("http");
const server = http.createServer(app);
async function startServer() {
  await loadPlanetData();
  server.listen(PORT, () => {
    console.log(`Server is starting at ${PORT}...`);
  });
}
startServer();