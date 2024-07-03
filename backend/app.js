const express = require('express');
const wisataRoutes = require('./src/routes/route-wisata');
const app = express();
const port = 9000;

app.use(express.json());
app.use(wisataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
