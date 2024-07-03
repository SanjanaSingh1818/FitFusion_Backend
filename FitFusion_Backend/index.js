const express = require("express");
const path = require("path");
const routes = require("./routes");
const connectDB = require("./config/connection");
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
connectDB();

// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use(routes);
app.get('/', (req, res)=>{
    res.send("hello ji")
})


// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });

app.listen(process.env.PORT || 8000, ()=>{
  console.log(`Server is running at port 8000`);
})