const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const ImageModel = require('../models/Image');
const multer = require('multer')
const fs = require('fs');
const path = require('path');


const Storage = multer.diskStorage({
  destination: 'uploads',
  filename:(req,file,cb) => {
      cb(null, file.originalname);
  }
});


const upload = multer({
    storage:Storage
}).single('testImage')
// ROUTE 1:Get all the notes
// ROUTE 2:add the notes
router.post('/upload', (req, res) => {
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new ImageModel({
              name: req.body.name,
              image:{
                data:fs.readFileSync("uploads/" + req.file.filename) ,
                contentType:'image/png'
              }  
            })
            newImage.save()
            .then(()=>res.send('successfully uploaded'))
            .catch((err)=> console.log(err));
        }
    })
})

// ROUTE 3:update the notes, login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //Create a newnote object
    try {


        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find the note to be updatated and updateit
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error")
    }

})

// ROUTE 3:delete the notes, login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {
        //find the note to be updatated and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        //Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Sucess": "Note has been Deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error")
    }
})

// fetch all images
// router.get('/fetchallimages', (req, res) => {
//     const uploadsDir = path.join(__dirname, '../../uploads');
    
//     fs.readdir(uploadsDir, (err, files) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal server error');
//       } else {
//         const imageList = files.map((file) => ({
//           imageName: file,
//           imageUrl: `/uploads/${file}`,
//         }));
//         res.json(imageList);
//       }
//     });
//   });
  
router.get('/fetchallimages', async (req, res) => {
 const allData = await ImageModel.find()
 res.json(allData)   
});
// router.get('/fetchallimages', async (req, res) => {
//     try {
//       const images = await ImageModel.find();
  
//       if (images.length === 0) {
//         return res.status(404).json({ error: 'No images found' });
//       }
  
//       res.json(images);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send('Internal server error');
//     }
//   });


module.exports = router