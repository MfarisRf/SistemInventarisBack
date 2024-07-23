import express from 'express';
import cors from 'cors';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';

import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import SupplierRoute from './routes/SupplierRoute.js';
import CustomerRoute from './routes/CustomerRoute.js';
import BarangRoute from './routes/BarangRoute.js';
import BarangMasukRoute from './routes/BarangMasukRoute.js';
import BarangKeluarRoute from './routes/BarangKeluarRoute.js';
import LaporanRoute from './routes/LaporanRoute.js';
import KatalogRoute from './routes/KatalogRoute.js';

const app = express();

// Configure CORS to allow requests from your frontend domain
app.use(cors({
    origin: "*", // Frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
// Static file serving
app.use('/uploads', express.static('uploads'));

// Define routes
app.use(AuthRoute);
app.use(UserRoute);
app.use(SupplierRoute);
app.use(CustomerRoute);
app.use(BarangRoute);
app.use(BarangMasukRoute);
app.use(BarangKeluarRoute);
app.use(LaporanRoute);
app.use(KatalogRoute);

// Test Database Connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process with failure
    } else {
        console.log('Connected to the database.');
        app.listen(8081, () => {
            console.log('Server running on port 8081');
        });
    }
});
