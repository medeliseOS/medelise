const http = require('http');

const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'svc-billing', status: 'running (stub)', port: PORT }));
});

server.listen(PORT, () => {
    console.log(`[svc-billing] stub running on port ${PORT}`);
});
