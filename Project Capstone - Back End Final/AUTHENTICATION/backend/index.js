import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import DestinationRoute from "./routes/DestinationRoute.js";
import AkomodasiRoute from "./routes/AkomodasiRoute.js";
import OrderRoute from "./routes/OrderRoute.js"
import path from "path";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(DestinationRoute);
app.use(AkomodasiRoute);
app.use(OrderRoute);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.resolve('uploads')));

// Import models to initialize and define relationships
import './models/UserModel.js';
import './models/DestinationModel.js';
import './models/Relationships.js';
import './models/AkomodasiModel.js';
import './models/DestinationAkomodasiModel.js';
import './models/Order.js';
import './models/OrderDestination.js';

store.sync();

(async () => {
    try {
        await db.sync({ alter: true });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Unable to sync database:', error);
    }
})();

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running...');
});
