const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req,res) {
    res.sendFile(__dirname+'/student.html')

})
app.post("/students", async (req, res) => {
    // ส่งข้อมูลผ่าน body-parser (Middleware)
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const email = req.body.email;
 
    const connection = await dbConn
    const rows = await connection.query("insert into students (name,age,phone,email) values('"+name+"','"+age+"',"+phone+",'"+email+"')")
    res.status(201).send(rows)
 })
 

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})

