const http = require('http');

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'medelise-api', status: 'running (stub)', port: PORT }));
});

server.listen(PORT, () => {
    console.log(`[medelise-api] stub running on port ${PORT}`);
});
