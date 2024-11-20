import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sequelize from "./config/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
