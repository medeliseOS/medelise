const http = require('http');

const PORT = process.env.PORT || 3005;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'api-gateway', status: 'running (stub)', port: PORT }));
});

server.listen(PORT, () => {
    console.log(`[api-gateway] stub running on port ${PORT}`);
});
