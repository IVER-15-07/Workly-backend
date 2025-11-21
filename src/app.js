import express from "express";
import cors from "cors";
import responseTime from "response-time";
import morgan from "morgan";

import apiRoutes from "./api/endpoint.js";


const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(responseTime());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors ({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api", apiRoutes);

export default app;


