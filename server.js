const app = require("./app");
const http = require('http');

if (process.env.NODE_ENV === "production") {

}

const PORT = process.env.PORT || 8010; // for prod deployment

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
