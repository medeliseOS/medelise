const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

async function startServer() {
    try {
        const server = http.createServer(app);

        server.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });

    } catch (err) {
        console.error("Server startup aborted", err);
        process.exit(1);
    }
}

startServer();