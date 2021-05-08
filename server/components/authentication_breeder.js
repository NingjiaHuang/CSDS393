const router = require("express").Router();
const db = require("../Database/index_user.js");
const bcrypt = require('bcrypt');
const jwtGenerator = require("../utils/jwtGenerator");
const { Pool } = require("pg");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization")

// Registering
router.post("/register/breeder", validInfo, async(req, res) => {
    // 1. destructure the req.body 
    const{username, password, account_type, reg_email, reg_phone, cattery_name, organization, owner_name, city} = req.body;
    try {
        // 2. check if user exists (by checking user email)
        const user = await db.query("SELECT * FROM account WHERE reg_email = $1", [reg_email]);
        if(user.rows.length !== 0) {
            return res.status(401).json("User already exists.")
        }
        var newUser = null;
        // 3. Bcrypt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt)
        // 4. Enter the new  user inside the database
        newUser = await db.query("INSERT INTO breeder (username, user_password, account_type, reg_email, reg_phone, cattery_name, organization, owner_name, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *"
        , [username, bcryptPassword, account_type, reg_email, reg_phone, req.body.cattery_name, req.body.organization, req.body.owner_name, req.body.city]);
        // 5. generate jwt token for secure transaction of info and signature
        const token = jwtGenerator(newUser.rows[0].reg_email);
        res.json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error.");
    }
});

router.post("/register/parent", validInfo, async(req, res) => {
    // 1. destructure the req.body 
    const{username, password, account_type, reg_email, reg_phone, preferred_name} = req.body;
    try {
        // 2. check if user exists (by checking user email)
        const user = await db.query("SELECT * FROM account WHERE reg_email = $1", [reg_email]);
        if(user.rows.length !== 0) {
            return res.status(401).json("User already exists.")
        }
        var newUser = null;
        // 3. Bcrypt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt)
        // 4. Enter the new  user inside the database
        newUser = await db.query("INSERT INTO potential_parents (username, user_password, account_type, reg_email, reg_phone, preferred_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
        , [username, bcryptPassword, account_type, reg_email, reg_phone, req.body.preferred_name]);
        // 5. generate jwt token for secure transaction of info and signature
        const token = jwtGenerator(newUser.rows[0].reg_email);
        res.json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error.");
    }
});

router.post("/register/admin", validInfo, async(req, res) => {
    // 1. destructure the req.body 
    const{username, password, account_type, reg_email, reg_phone} = req.body;
    try {
        // 2. check if user exists (by checking user email)
        const user = await db.query("SELECT * FROM admini WHERE reg_email = $1", [reg_email]);
        if(user.rows.length !== 0) {
            return res.status(401).json("User already exists.")
        }
        var newUser = null;
        // 3. Bcrypt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt)
        // 4. Enter the new  user inside the database
        newUser = await db.query("INSERT INTO admini (username, user_password, account_type, reg_email, reg_phone) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        , [username, bcryptPassword, account_type, reg_email, reg_phone]);
        // 5. generate jwt token for secure transaction of info and signature
        const token = jwtGenerator(newUser.rows[0].reg_email);
        res.json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error.");
    }
});

// Login
router.post("/login/breeder", validInfo, async (req, res) => {
    try{
        // 1. destructure the req.body
        const {reg_email, password} = req.body;
        // 2. check if user doesn't exist (if not then we throw error)
        const user = await db.query("SELECT * FROM account WHERE reg_email = $1", [reg_email]);
        if(user.rows.length === 0) {
            return res.status(401).json("Password or email is incorrect.");
        }
        // 3. check if incoming password is the same as the database password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        if(!validPassword) {
            return res.status(401).json("Password or email is incorrect.");
        }
        // 4. given them a jwt token
        const token = jwtGenerator(user.rows[0].reg_email);
        res.json({token});
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error.");
    }
})

router.post("/login/parent", validInfo, async (req, res) => {
    try{
        // 1. destructure the req.body
        const {reg_email, password} = req.body;
        // 2. check if user doesn't exist (if not then we throw error)
        const user = await db.query("SELECT * FROM account WHERE reg_email = $1", [reg_email]);
        if(user.rows.length === 0) {
            return res.status(401).json("Password or email is incorrect.");
        }
        // 3. check if incoming password is the same as the database password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        if(!validPassword) {
            return res.status(401).json("Password or email is incorrect.");
        }
        // 4. given them a jwt token
        const token = jwtGenerator(user.rows[0].reg_email);
        res.json({token});
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error.");
    }
})

router.post("/login/admin", validInfo, async (req, res) => {
    try{
        // 1. destructure the req.body
        const {reg_email, password} = req.body;
        // 2. check if user doesn't exist (if not then we throw error)
        const user = await db.query("SELECT * FROM account WHERE reg_email = $1", [reg_email]);
        if(user.rows.length === 0) {
            return res.status(401).json("Password or email is incorrect.");
        }
        // 3. check if incoming password is the same as the database password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        if(!validPassword) {
            return res.status(401).json("Password or email is incorrect.");
        }
        // 4. given them a jwt token
        const token = jwtGenerator(user.rows[0].reg_email);
        res.json({token});
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error.");
    }
})

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch(err) {
        console.error(err.message)
        res.status(500).send("Server error.")
    }
})

// delete a user (for administrator only)
router.delete("/delete", (req, res)=>{
    try {
        const results = db.query("DELETE FROM account where reg_email = $1", [req.body.reg_email])
        res.status(204).json({
            status: "success"
        })
    } catch(err){
        console.log(err)
    }
})


module.exports = router;