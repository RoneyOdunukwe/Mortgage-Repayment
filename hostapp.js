const express = require("express");
const app = express();

app.use(express.static("mortgageRepaymentByMe"));

app.get("/", (req, res) => {
    res.send("My Website works!")
});
let port = 9134
app.listen(`9134`, () => {
    console.log(`Running on PORT: ${port}`);
})
