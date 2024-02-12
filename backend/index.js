const express = require('express');
const app = express();
const connectDB = require("./config/connectDB");
const cors = require('cors');
const morgan = require('morgan');

// callback Database
connectDB();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/v1/users", require("./routers/userRouter"));
app.use("/api/v1/services", require("./routers/serviceRouter"));

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Here http://localhost:${PORT}`);
});

