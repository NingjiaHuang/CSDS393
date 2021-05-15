require("dotenv").config();
const e = require("express");
const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./Database/index.js");
//const db_ft = require("./Database/index_family_tree.js");
//const db_cattery = require("./Database/index_cattery.js");
//const db_gene = require("./Database/index_gene.js");

app.use(express.json());

app.use(cors());

// Register and login routes
app.use("/auth", require("./components/authentication_breeder.js")); 

app.use("/breeder_dashboard", require("./routes/breeder_dashboard"));
app.use("/breeder_dashboard", require("./routes/parent_dashboard"));
app.use("/breeder_dashboard", require("./routes/admin_dashboard"));
//--------------------------------------------------------------------------------------
// Gene Calculator
app.post("/api/v1/genecalculator", async (req, res) => {
    try{
        const blood_result = await db.query("SELECT blood_type_child FROM blood_type WHERE blood_type_sire = $1 AND blood_type_dam = $2", [req.body[0], req.body[1]]);
        const pdk_result = await db.query("SELECT pdk1_child_result FROM PKD1 WHERE pdk1_sire_result = $1 AND pdk1_dam_result = $2", [req.body[2], req.body[3]]);
        const hcm_result = await db.query("SELECT HCM_child_result FROM HCM WHERE HCM_sire_result = $1 AND HCM_dam_result = $2", [req.body[4], req.body[5]]);
        res.json({
            blood_type: blood_result.rows[0],
            pdk_result: pdk_result.rows[0],
            hcm_result: hcm_result.rows[0]
        })
    }catch(err){
        console.log(err)
    }
})
//--------------------------------------------------------------------------------------
// Routes for Cat Class
// get all cats information, both for breeders and parents
app.get("/api/v1/cats", async function(req, res) {
    try{
        const results = await db.query("SELECT * FROM cat");
        console.log(results);
        res.json(results.rows)
        // res.status(200).json({
        //     status:"success",
        //     results: results.rows.length, 
        //     data:{
        //         cat: results.rows,
        //     },
        // })
    } catch(err){
        console.log(err);
    }
})

// get individual cat information, both for breeders and parents (by certification number)
app.get("/api/v1/cats/:id", async (req, res) => {
    try{
        const results = await db.query(`SELECT * FROM cat WHERE certi_num = ${req.params.id}`);
        console.log(results)
        res.status(200).send(results.rows[0])
    }catch(err){
        res.status(404)
        console.log(err)
    }

});

// get individual cat information, both for breeders and parents (by cat name)
app.get("/api/v1/cats", async (req, res) => {
    try{
        const results = await db.query(`SELECT * FROM cat WHERE cat_reg_name = ${req.body.cat_name}`);
        console.log(results)
        res.status(200).json({
            status:"success",
            data:{
                cat: results.rows[0],
            },
        })
    }catch(err){
        console.log(err)
    }

});

// create a new breed cat, for breeder only (will also update cat family tree table)
app.post("/api/v1/cats/create_breed", async (req, res) => {
    try{
        if((await db.query("SELECT certi_num FROM cat WHERE certi_num = $1", [req.body.certi_num])).rows[0]){
            res.send("Cat already exists.")
        } else {
            result = req.body;
            const results = await db.query("INSERT INTO breed_cat (cur_owner_cattery, certi_num, title, cat_reg_name, cat_name, breed, sex, birth_date, sire_name, dam_name, retire_statue, sale_status) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)", 
            [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name, req.body.retire_statue, req.body.sale_status])
        }
            res.status(201).json({
                status: "success",
                data: {
                    cat: result
                }
            })
        } catch(err) {
        console.log(err)
    }
});

// create a new pregnant cat, for breeder only
app.post("/api/v1/cats/create_preg", async (req, res) => {
    try{
        if((await db.query("SELECT certi_num FROM cat WHERE certi_num = $1", [req.body.certi_num])).rows[0]){
            res.send("Cat already exists.")
        } else {
            result = req.body;
            const results = await db.query("INSERT INTO preg_cat (cur_owner_cattery, certi_num, title, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, sale_status, weight, health_cond) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", 
            [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name, req.body.sale_status, req.body.weight, req.body.health_cond])
        }
            res.status(201).json({
                status: "success",
                data: {
                    cat: result
                }
            })
        } catch(err) {
        console.log(err)
    }
});

// create a new kitten, for breeder only
app.post("/api/v1/cats/create_kitten", async (req, res) => {
    try{
        if((await db.query("SELECT certi_num FROM cat WHERE certi_num = $1", [req.body.certi_num])).rows[0]){
            res.send("Cat already exists.")
        } else {
            result = req.body;
            const results = await db.query("INSERT INTO kitten (cur_owner_cattery, certi_num, title, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, sale_status, weight, health_cond, vaccination_cond) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", 
            [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name, req.body.sale_status, req.body.weight, req.body.health_cond, req.body.vaccination_cond])
        }
            res.status(201).json({
                status: "success",
                data: {
                    cat: result
                }
            })
        } catch(err) {
        console.log(err)
    }
});

// create a new cat, for breeder only
app.post("/api/v1/cats/create_cat", async (req, res) => {
    try{
        if((await db.query("SELECT certi_num FROM cat WHERE certi_num = $1", [req.body.certi_num])).rows[0]){
            res.send("Cat already exists.")
        } else {
            result = req.body;
            const results = await db.query("INSERT INTO cat (cur_owner_cattery, certi_num, title, cat_reg_name, cat_name,breed, sex, birth_date, sire_name, dam_name, sale_status) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", 
            [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name, req.body.sale_status])
        }
            res.status(201).json({
                status: "success",
                data: {
                    cat: result
                }
            })
        } catch(err) {
        console.log(err)
    }
});

// update a breed cat
app.put("/api/v1/cats/update_breed/:id", async (req, res) => {
    try{
        const results = await db.query("UPDATE breed_cat SET cur_owner_cattery = $1, certi_num = $2, title = $3, cat_reg_name = $4, cat_name = $5, breed = $6, sex = $7, birth_date = $8, sire_name = $9, dam_name = $10, sale_status = $11, retire_statue = $12 WHERE certi_num = $13",
        [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name,  req.body.sale_status, req.body.retire_statue, req.params.id])
        res.status(200).json({
            status: "success"
        })
    }catch(err){
        console.log(err)
    }
});

// update a pregnant cat
app.put("/api/v1/cats/update_preg/:id", async (req, res) => {
    try{
        const results = await db.query("UPDATE preg_cat SET cur_owner_cattery = $1, certi_num = $2, title = $3, cat_reg_name = $4, cat_name = $5, breed = $6, sex = $7, birth_date = $8, sire_name = $9, dam_name = $10, sale_status = $11, weight = $12, health_cond = $13 WHERE certi_num = $14",
        [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name,  req.body.sale_status, req.body.weight, req.body.health_cond, req.params.id])
        res.status(200).json({
            status: "success"
        })
    }catch(err){
        console.log(err)
    }
});

// update a kitten
app.put("/api/v1/cats/update_kitten/:id", async (req, res) => {
    try{
        const results = await db.query("UPDATE kitten SET cur_owner_cattery = $1, certi_num = $2, title = $3, cat_reg_name = $4, cat_name = $5, breed = $6, sex = $7, birth_date = $8, sire_name = $9, dam_name = $10, sale_status = $11, weight = $12, health_cond = $13, vaccination_cond = $14 WHERE certi_num = $15",
        [req.body.cur_owner_cattery, req.body.certi_num, req.body.title, req.body.cat_reg_name, req.body.cat_name, req.body.breed, req.body.sex, req.body.birth_date, req.body.sire_name, req.body.dam_name,  req.body.sale_status, req.body.weight, req.body.health_cond, req.body.vaccination_cond, req.params])
        res.status(200).json({
            status: "success"
        })
    }catch(err){
        console.log(err)
    }
});

// update a cat
app.patch("/api/v1/cats/update_cat", async (req, res) => {
    try{
        const results = await db.query("UPDATE cat SET certi_num = $1, cat_name=$2, title = $3, cat_reg_name = $4, sale_status = $5 WHERE certi_num = $6",
        [ req.body.certi_num, req.body.user_password, req.body.title, req.body.cat_reg_name, req.body.sale_status, req.body.certi_num])
        res.status(200).json({
            status: "success"
        })
    }catch(err){
        console.log(err)
    }
});

// delete cat, for breeder only
app.delete("/api/v1/cats/:id", (req, res)=>{
    try {
        const results = db.query("DELETE FROM cat WHERE certi_num = $1", [req.params.id])
        res.status(204).json({
            status: "success"
        })
    } catch(err){
        console.log(err)
    }
})
//--------------------------------------------------------------------------------------
// family tree pair two cat (as child)
app.post("/api/v1/cats/tree", async (req, res) =>{
    try{
        const node = await db.query("SELECT * FROM cat_node WHERE id = $1", [req.body.id])
        if(req.body.sire_name === "" || req.body.dam_name === "" || req.body.child_name === ""){
            res.status(403).send("Please fill in all the fields.")
        } else {
            const node_result = await db.query("INSERT INTO cat_node (id, cat_name, sire_id, dam_id) VALUES ($1, $2, $3, $4)", [req.body.id, req.body.cat_name, req.body.sire_id, req.body.dam_id])
        }
        res.status(204).json({
            status: "success",
        })
    } catch(err){
        res.send("Pairng two cats failed.")
    }
})

// get family tree
// get all nodes
app.get("/api/v1/get_all_nodes", async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM cat_node");
        res.status(200).send(results.rows)
    } catch(err){
        console.log(err);
    }
})
//--------------------------------------------------------------------------------------
// cattery routes 
// get all catteries
app.get("/api/v1/catteries", async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM cattery");
        console.log(results);
        res.status(200).send(results.rows)
    } catch(err){
        console.log(err);
    }
})

// update cattery info
app.put("/api/v1/cattery", async (req, res) => {
    try{
        const {reg_email, reg_phone, cattery_name, organization, owner_name, city} = req.body;
        const results = await db.query("UPDATE cattery SET cattery_name = $1, organization = $2, owner_name = $3, city = $4 WHERE reg_email = $5 AND reg_phone = $6", 
        [req.body.cattery_name, req.body.organization, req.body.owner_name, req.body.city, req.body.reg_email, req.body.reg_phone])
    }catch(err){
        console.log(err)
    }
    res.status(200).json({
        status: "success"
    })
});

// PORT Setup
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up ${port}`);
});