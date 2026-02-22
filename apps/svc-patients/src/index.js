const http = require('http');

const PORT = process.env.PORT || 3004;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'svc-patients', status: 'running (stub)', port: PORT }));
});

server.listen(PORT, () => {
    console.log(`[svc-patients] stub running on port ${PORT}`);
});
