const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'manishhimalayaia@stude$nt';

//Create a User using : POST "/api/auth/createUser". Doesn't require Auth
router.post('/createUser', [
  body('email', 'Enter a valid name').isEmail(),
  body('name', 'enter a valid email').isLength({ min: 3 }),
  body('password', 'Password must be at least five charecters').isLength({ min: 5 }),
],
  async (req, res) => {
    let success = false;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    //check weather the user with this email exists already
    try {

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({success, error: "sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      })
      const data = {
        user: {
          id: user.id
        }
      }
      
      const jwtData = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({ success,jwtData })

      //.then(user => res.json(user))
      //.catch(err=> {console.log(err)
      //res.json({error: 'Please enter a unique email ID',message:err.message})})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error")
    }
  },
);

//authenticate a User using : POST "/api/auth/login". Doesn't require Auth
router.post('/login', [
  body('email', 'enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success=false
        return res.status(400).json({ error: "Please try to login with correcct credential" })
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success= false
        return res.status(400).json({success, error: "Please try to login with correct credential" })
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const expirationTime = '30m';
      const jwtData = jwt.sign(data, JWT_SECRET, { expiresIn: expirationTime });
      const decodedToken = jwt.verify(jwtData, JWT_SECRET);
      const expiryTimestamp = decodedToken.exp * 1000;
      const expiryDate = new Date(expiryTimestamp).toLocaleString();
      success=true;
      res.json({ success,jwtData ,name:user.name,expiryDate})
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error")
    }
  })

//Route 3:Get logged in user details ising POST"api/auth/getuser".login required 
router.post('/getuser',fetchuser, async (req, res) => {
try {
  userId =req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user);
}
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error")
  }
})
module.exports = router

//Create a Admin using : POST "/api/auth/createAdmin". Doesn't require Auth
router.post('/createAdmin', [
  body('email', 'Enter a valid name').isEmail(),
  body('name', 'enter a valid email').isLength({ min: 3 }),
  body('password', 'Password must be at least five charecters').isLength({ min: 5 }),
],
  async (req, res) => {
    let success = false;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    //check weather the user with this email exists already
    try {

      let user = await Admin.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({success, error: "sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await Admin.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      })
      const data = {
        user: {
          id: user.id
        }
      }
      const jwtData = jwt.sign(data, JWT_SECRET);
      
      success=true;
      res.json({ success,jwtData })

      //.then(user => res.json(user))
      //.catch(err=> {console.log(err)
      //res.json({error: 'Please enter a unique email ID',message:err.message})})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error")
    }
  },
);
//authenticate a Admin using : POST "/api/auth/adminlogin". Doesn't require Auth
router.post('/adminlogin', [
  body('email', 'enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;

    try {
      let user = await Admin.findOne({ email });
      if (!user) {
        success=false
        return res.status(400).json({ error: "Please try to login with correcct credential" })
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success= false
        return res.status(400).json({success, error: "Please try to login with correct credential" })
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const expirationTime = '30m';
      const jwtData = jwt.sign(data, JWT_SECRET, { expiresIn: expirationTime });
      const decodedToken = jwt.verify(jwtData, JWT_SECRET);
      const expiryTimestamp = decodedToken.exp * 1000;
      const expiryDate = new Date(expiryTimestamp).toLocaleString();
      success=true;
      res.json({ success,jwtData,name:user.name,expiryDate })
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error")
    }
  })

  //fetch all users
  router.post('/getallusers', async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.send(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  });
  module.exports = router;
