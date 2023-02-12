const express = require('express');
const router = express.Router();
const Users = require("../schema/user")

router.post("/addUser", (req, res) => {
    // console.log("Request: ",req)
    let newUser = req.body;
    const user = new Users(newUser)
    user.save(err => {
        if (err) {
            res.send(err)
        }
        else {
            // console.log(user)
            // res.send({message: "User Added To DB..."})
            res.send(user)
        }
    })
    console.log(newUser)
})
router.get('/getUser', (req, res) => {
    Users.find()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(error => console.log(error))
});
module.exports = router;