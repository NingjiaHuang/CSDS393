module.exports = (req, res, next) => {
    const { username, password, account_type, reg_email, reg_phone, cattery_name, organization, owner_name, city } = req.body;
    // check the format of email address
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
  
    if (req.path === "/register/breeder") {
      //console.log(reg_email, username, password, account_type, reg_phone)
      // check whether all required fields are filled
      if (![reg_email, username, password, account_type, reg_phone, cattery_name, organization, owner_name, city].every(Boolean)) {
        return res.status(401).json("Missing credentials.");
      } else if (!validEmail(reg_email)) {
        return res.status(401).json("Invalid Email.");
      }
    } else if (req.path === "/login/breeder") {
      if (![reg_email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials.");
      } else if (!validEmail(reg_email)) {
        return res.status(401).json("Invalid Email.");
      }
    }
    // continue on the route
    next();
  };