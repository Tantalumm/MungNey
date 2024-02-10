const express = require('express');
const app = express();
const ServiceRouter = require("./routers/servicesRouter");
const connectDB = require("./config/connectDB");
const cors = require('cors');
const morgan = require('morgan');

// callback Database
connectDB();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/service",ServiceRouter);

app.use("/api/v1/users", require("./routers/userRouter"));

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Here http://localhost:${PORT}`);
});

