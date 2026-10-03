const http = require("http");

function getMessage() {
    return "Version 2 - Docker ECS Deployment Successful";
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end(getMessage());
});

if (require.main === module) {
    server.listen(3000, "0.0.0.0", () => {
        console.log("Server running on port 3000");
    });
}

module.exports = { getMessage };
