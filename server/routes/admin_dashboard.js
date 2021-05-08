const router = require("express").Router();
const db = require("../Database/index_user.js");
const authorization = require('../middleware/authorization');

router.get("/", authorization, async(req, res) => 
{
    try{
        // res.json(req.user)
        const user = await db.query("SELECT username FROM admini WHERE reg_email = $1", [req.user])
        res.json(user.rows[0])
    }catch(err){
        console.error(err);
        res.status(500).json("Server Error")
    }
})
module.exports = router;