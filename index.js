import express from 'express';
import os from 'os';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const ENV = 'DEV';

// App
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello, World from Group 1!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

// Exporting the app (or server) for testing purposes or further use
export default app;
