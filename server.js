const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 80;

app.use(cors());
app.use(serveStatic('build'));
app.listen(port);
console.log(`Server started on port ${port}`);
