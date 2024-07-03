const express = require('express');
const wisataRoutes = require('./src/routes/route-wisata');
const app = express();
const port = 9000;

app.use(express.json());
app.use(wisataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



// const express = require('express');
// // const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();

// // app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// const appRoute = require('./src/routes/route-wisata');
// app.use('/', appRoute);

// app.listen(7000, ()=>{
//     console.log('Server Berjalan di Port : 7000');
// });