let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/server");
//Assertion Style
chai.should();
chai.use(chaiHttp)

describe('Tasks API', () => {
    // All Get Method
    describe("GET /all_accounts", () =>{
        it("It should GET all users", (done) => {
            chai.request('http://localhost:4020/auth')
                .get("/all_accounts")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
        it("It should not GET users", (done) => {
            chai.request('http://localhost:4020/auth')
                .get("/all_account")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                })
        })

    describe("GET /api/v1/cats", () =>{
        it("It should GET all cats", (done) => {
            chai.request('http://localhost:4020')
                .get("/api/v1/cats")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    response.body.should.be.a('array')
                    response.body[0].should.have.property('cur_owner_cattery')
                    response.body[0].should.have.property('certi_num')
                    response.body[0].should.have.property('title')
                    response.body[0].should.have.property('cat_reg_name')
                    response.body[0].should.have.property('cat_name')
                    response.body[0].should.have.property('breed')
                    response.body[0].should.have.property('sex')
                    response.body[0].should.have.property('birth_date')
                    response.body[0].should.have.property('sire_name')
                    response.body[0].should.have.property('dam_name')
                    response.body[0].should.have.property('sale_status')
                done();
                })
        })
        it("It should not GET cats", (done) => {
            chai.request('http://localhost:4020')
                .get("/api/v1/cat")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                })
        })
    })

    describe("GET /api/v1/get_all_nodes", () =>{
        it("It should GET all cats nodes", (done) => {
            chai.request('http://localhost:4020')
                .get("/api/v1/get_all_nodes")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    response.body.should.be.a('array')
                    response.body[0].should.have.property('id')
                    response.body[0].should.have.property('cat_name')
                    response.body[0].should.have.property('sire_id')
                    response.body[0].should.have.property('dam_id')
                    response.body[0].should.have.property('sire_path')
                    response.body[0].should.have.property('dam_path')
                done();
                })
        })

        it("It should not GET all cat nodes", (done) => {
            chai.request('http://localhost:4020')
                .get("/api/v1/get_all_node")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                })
        })
    })

    describe("GET /api/v1/catteries", () =>{
        it("It should GET all catteries", (done) => {
            chai.request('http://localhost:4020')
                .get("/api/v1/catteries")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    response.body.should.be.a('array')
                    response.body[0].should.have.property('reg_email')
                    response.body[0].should.have.property('reg_phone')
                    response.body[0].should.have.property('cattery_name')
                    response.body[0].should.have.property('organization')
                    response.body[0].should.have.property('owner_name')
                    response.body[0].should.have.property('city')
                    response.body[1].should.have.property('reg_email')
                    response.body[1].should.have.property('reg_phone')
                    response.body[1].should.have.property('cattery_name')
                    response.body[1].should.have.property('organization')
                    response.body[1].should.have.property('owner_name')
                    response.body[1].should.have.property('city')
                done();
                })
        })

        it("It should not GET all catteries", (done) => {
            chai.request('http://localhost:4020')
                .get("/api/v1/cattery")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                })
        })
    })

    // All get by id methods
    describe("GET /api/v1/cats/:id", () =>{
        it("It should GET a cat by id", (done) => {
            const certi_num = 770
            chai.request('http://localhost:4020')
                .get("/api/v1/cats/" + certi_num)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.a('object');
                    response.body.should.have.property('certi_num');
                    response.body.should.have.property('cur_owner_cattery');
                    response.body.should.have.property('title');
                    response.body.should.have.property('cat_reg_name');
                    response.body.should.have.property('cat_name');
                    response.body.should.have.property('breed');
                    response.body.should.have.property('sex');
                    response.body.should.have.property('birth_date');
                    response.body.should.have.property('sire_name');
                    response.body.should.have.property('dam_name');
                    response.body.should.have.property('sire_name');
                done();
                })
        })
    })

    // All POST methods
    describe("POST /api/v1/cats/create_breed", () =>{
        it("It should create a breeding cats", (done) => {
            const breed_cat = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 5559599,
                "title": null,
                "cat_reg_name": "Legendabastet Canada of Kimuradolls",
                "cat_name": "Candy",
                "breed": "Ragdoll",
                "sex": "Female",
                "birth_date": "2020-04-24",
                "sire_name": "miao",
                "dam_name": "miaomiao",
                "sale_status": "NFS",
                "retire_statue": "I'm not retired!"
            }
            chai.request('http://localhost:4020')
                .post("/api/v1/cats/create_breed")
                .send(breed_cat)
                .end((err, response) => {
                    response.should.have.status(201)
                done();
                })
        })
    })

    describe("POST /api/v1/cats/create_preg", () =>{
        it("It should create a pregnant cats", (done) => {
            const preg_cat = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 145555,
                "title": null,
                "cat_reg_name": "Legendabastet Canada of Kimuradolls",
                "cat_name": "Kitty",
                "breed": "Ragdoll",
                "sex": "Female",
                "birth_date": "2020-04-24",
                "sire_name": "miao",
                "dam_name": "miaomiao",
                "sale_status": "NFS",
                "weight": 10,
                "health_cond": "good"
            }
            chai.request('http://localhost:4020')
                .post("/api/v1/cats/create_preg")
                .send(preg_cat)
                .end((err, response) => {
                    response.should.have.status(201)
                done();
                })
        })
    })

    describe("POST /api/v1/cats/create_kitten", () =>{
        it("It should create a kitten", (done) => {
            const kitten = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 3546605,
                "title": null,
                "cat_reg_name": "Legendabastet Canada of Kimuradolls",
                "cat_name": "bobby",
                "breed": "Ragdoll",
                "sex": "Female",
                "birth_date": "2020-04-24",
                "sire_name": "miao",
                "dam_name": "miaomiao",
                "sale_status": "NFS",
                "weight": 10,
                "health_cond": "good",
                "vaccination_cond": "vaccinated"
            }
            chai.request('http://localhost:4020')
                .post("/api/v1/cats/create_kitten")
                .send(kitten)
                .end((err, response) => {
                    response.should.have.status(201)
                done();
                })
        })
    })

    describe("PUT /api/v1/cats/update_breed/:id", () =>{
        it("It should update a breed cat", (done) => {
            const id = 770
            const breed = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 770,
                "title": "title",
                "cat_reg_name": "huhu",
                "cat_name": "Oakley",
                "breed": "Ragdoll",
                "sex": "Male", 
                "birth_date": "2018-02-02", 
                "sire_name": "Cherrydolls Black Mulberry", 
                "dam_name": "Dollheaven Angelica of USAPurrs", 
                "sale_status": "not known",
                "retire_statue": "Not Retired"
            }
            chai.request('http://localhost:4020')
                .put("/api/v1/cats/update_breed/" + id)
                .send(breed)
                .end((err, response) => {
                    response.body.should.be.a('object')
                    response.should.have.status(200)
                done();
                })
        })
    })

    describe("PUT /api/v1/cats/update_preg/:id", () =>{
        it("It should update a pregnant cat", (done) => {
            const id = 1101988
            const preg = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 1101988,
                "title": "title",
                "cat_reg_name": "Meow",
                "cat_name": "Oakley",
                "breed": "Ragdoll",
                "sex": "Male", 
                "birth_date": "2018-02-02", 
                "sire_name": "Cherrydolls Black Mulberry", 
                "dam_name": "Dollheaven Angelica of USAPurrs", 
                "sale_status": "not known",
                "weight": 66,
                "health_cond": "good"
            }
            chai.request('http://localhost:4020')
                .put("/api/v1/cats/update_preg/" + id)
                .send(preg)
                .end((err, response) => {
                    response.body.should.be.a('object')
                    response.should.have.status(200)
                done();
                })
        })
    })

    describe("PUT /api/v1/cats/update_kitten/:id", () =>{
        it("It should update a kitten", (done) => {
            const id = 770
            const kitten = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 770,
                "title": "title",
                "cat_reg_name": "java",
                "cat_name": "Oakley",
                "breed": "Ragdoll",
                "sex": "Male", 
                "birth_date": "2018-02-02", 
                "sire_name": "Cherrydolls Black Mulberry", 
                "dam_name": "Dollheaven Angelica of USAPurrs", 
                "sale_status": "not known",
                "weight": 66,
                "health_cond": "good", 
                "vaccination_cond": "vaccinated"
            }
            chai.request('http://localhost:4020')
                .put("/api/v1/cats/update_kitten/" + id)
                .send(kitten)
                .end((err, response) => {
                    response.body.should.be.a('object')
                    response.should.have.status(200)
                done();
                })
        })
    })

    describe("PUT /api/v1/cats/update_kitten/:id", () =>{
        it("It should update a kitten", (done) => {
            const id = 770
            const kitten = {
                "cur_owner_cattery": "lunarag",
                "certi_num": 770,
                "title": "title",
                "cat_reg_name": "java",
                "cat_name": "Oakley",
                "breed": "Ragdoll",
                "sex": "Male", 
                "birth_date": "2018-02-02", 
                "sire_name": "Cherrydolls Black Mulberry", 
                "dam_name": "Dollheaven Angelica of USAPurrs", 
                "sale_status": "not known",
                "weight": 66,
                "health_cond": "good", 
                "vaccination_cond": "vaccinated"
            }
            chai.request('http://localhost:4020')
                .put("/api/v1/cats/update_kitten/" + id)
                .send(kitten)
                .end((err, response) => {
                    response.body.should.be.a('object')
                    response.should.have.status(200)
                done();
                })
        })
    })

    describe("DELETE /api/v1/cats/:id", () => {
        it("It should delete an existing cat"), (done) => {
            const id = 770;
            chai.request('http://localhost:4020')
                .delete("/api/v1/cats/" + id)
                .end((err, response) => {
                    response.should.have.status(204);
                done();
                })
        }
    })

    describe("PUT /api/v1/cats/tree", () =>{
        it("It should update a cattery", (done) => {
            const id = 770
            const kitten = {
                "id": 110110114, 
                "cat_name" : "Ruben",
                "sire_id": 210110110, 
                "dam_id" : 216788999
            }
            chai.request('http://localhost:4020')
                .put("/api/v1/cats/update_kitten/" + id)
                .send(kitten)
                .end((err, response) => {
                    response.body.should.be.a('object')
                    response.should.have.status(200)
                done();
                })
        })
    })

    describe("DELETE /delete", () => {
        it("It should delete an existing account"), (done) => {
            const account = {
                "reg_email": "nxh@gmail.com"
            }
            chai.request('http://localhost:4020')
                .delete("/delete")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        }
    })

    describe("POST /register/breeder", () =>{
        it("It should create a breeder account", (done) => {
            const breeder = {
                "username": "Henry Zhong",
                "password": "henryzhong",
                "account_type": "breeder",
                "reg_email": "henryz@gmail.com",
                "reg_phone": "2168888888",
                "cattery_name": "shark shark",
                "organization": "sharkology",
                "owner_name": "Henry",
                "city": "Cleveland"
            }
            chai.request('http://localhost:4020')
                .post("/auth/register/breeder")
                .send(breeder)
                .end((err, response) => {
                    response.should.have.status(200)
                done();
                })
        })
        it("It should not create an account", (done) => {
            const breeder = {
                "username": "Henry Zhong",
                "password": "henryzhong",
                "account_type": "breeder",
                "reg_email": "henryzhong@gmail.com",
                "reg_phone": "2168888888",
                "cattery_name": "shark shark",
                "organization": "sharkology",
                "owner_name": "Henry",
                "city": "Cleveland"
            }
            chai.request('http://localhost:4020')
                .get("/auth/register/breeder")
                .send(breeder)
                .end((err, response) => {
                    response.should.have.status(500);
                done();
                })
        })
    })

})

    describe("POST /register/breeder", () =>{
        it("It should create a breeder account", (done) => {
            const breeder = {
                "username": "Henry Zhong",
                "password": "henryzhong",
                "account_type": "breeder",
                "reg_email": "henryz@gmail.com",
                "reg_phone": "2168888888",
                "cattery_name": "shark shark",
                "organization": "sharkology",
                "owner_name": "Henry",
                "city": "Cleveland"
            }
            chai.request('http://localhost:4020')
                .post("/auth/register/breeder")
                .send(breeder)
                .end((err, response) => {
                    response.should.have.status(200)
                done();
                })
        })
        it("It should not create an account", (done) => {
            const breeder = {
                "username": "Henry Zhong",
                "password": "henryzhong",
                "account_type": "breeder",
                "reg_email": "henryzhong@gmail.com",
                "reg_phone": "2168888888",
                "cattery_name": "shark shark",
                "organization": "sharkology",
                "owner_name": "Henry",
                "city": "Cleveland"
            }
            chai.request('http://localhost:4020')
                .get("/auth/register/breeder")
                .send(breeder)
                .end((err, response) => {
                    response.should.have.status(500);
                done();
                })
        })
        
    describe("POST /register/parent", () =>{
        it("It should create a parent account", (done) => {
            const parent = {
                "username": "Henry",
                "password": "helloworld",
                "account_type": "parent",
                "reg_email": "henryxiaozhu@gmail.com",
                "reg_phone": "2168888888",
                "preferred_name": "shark shark"
            }
            chai.request('http://localhost:4020')
                .post("/auth/register/parent")
                .send(parent)
                .end((err, response) => {
                    response.should.have.status(200)
                done();
                })
        })
        it("It should not create an account", (done) => {
            const parent = {
                "username": "Henry Zhong",
                "password": "henryzhong",
                "account_type": "parent",
                "reg_email": "henryguaguagua@gmail.com",
                "reg_phone": "2168888888",
                "cattery_name": "shark shark",
                "organization": "sharkology",
                "owner_name": "Henry",
                "city": "Cleveland"
            }
            chai.request('http://localhost:4020')
                .get("/auth/register/parent")
                .send(parent)
                .end((err, response) => {
                    response.should.have.status(500);
                done();
                })
        })
    })

    describe("POST /register/admin", () =>{
        it("It should create a admin account", (done) => {
            const admin = {
                "username": "Ningjia Huang",
                "password": "ningjiahuang",
                "account_type": "administrator",
                "reg_email": "admin@gmail.com",
                "reg_phone": 2168888888
            }
            chai.request('http://localhost:4020')
                .post("/auth/register/admin")
                .send(admin)
                .end((err, response) => {
                    response.should.have.status(200)
                done();
                })
        })
        it("It should not create an admin account", (done) => {
            const admin = {
                "username": "Ningjia Huang",
                "password": "ningjiahuang",
                "account_type": "administrator",
                "reg_email": "admin@gmail.com",
                "reg_phone": 2168888888
            }
            chai.request('http://localhost:4020')
                .post("/auth/register/admin")
                .send(admin)
                .end((err, response) => {
                    response.should.have.status(500)
                done();
                })
        })
        })
    })

    describe("POST /login/breeder", () =>{
        it("It should login breeder", (done) => {
            const breeder = {
                "reg_email": "admin1@gmail.com",
                "password": "ad1ad1"
            }
            chai.request('http://localhost:4020/auth')
                .post("/login/breeder")
                .send(breeder)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
    })
    

    describe("POST /login/parent", () =>{
        it("It should login parent", (done) => {
            const parent = {
                "reg_email": "henryshasha@gmail.com",
                "password": "helloworld"
            }
            chai.request('http://localhost:4020/auth')
                .post("/login/parent")
                .send(parent)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
    })


    describe("POST /login/admin", () =>{
        it("It should login admin", (done) => {
            const admin = {
                "username": "Ningjia Huang",
                "password": "ningjiahuang",
                "account_type": "administrator",
                "reg_email": "admin@gmail.com",
                "reg_phone": 2168888888
            }
            chai.request('http://localhost:4020/auth')
                .post("/login/admin")
                .send(admin)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
    })


    describe("POST /api/v1/genecalculator", () =>{
        it("It should return gene result", (done) => {
            const gene = {
                "blood_sire": "N/N",
                "blood_dam": "N/b",
                "hcm_sire": "N/N",
                "hcm_dam": "N/HCMrd",
                "pdk_sire": "N/N",
                "pdk_dam":  "P/P"
            }
            chai.request('http://localhost:4020')
                .get("/api/v1/genecalculator")
                .send(gene)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
        it("It should return gene result", (done) => {
            const gene = {
                "blood_sire": "N/c",
                "blood_dam": "b/b",
                "hcm_sire": "N/N",
                "hcm_dam": "N/HCMrd",
                "pdk_sire": "N/N",
                "pdk_dam":  "P/P"
            }
            chai.request('http://localhost:4020')
                .get("/api/v1/genecalculator")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
        it("It should return gene result", (done) => {
            chai.request('/api/v1/genecalculator')
                .get("/api/v1/cats")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })
    })
})
