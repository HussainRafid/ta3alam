const express = require("express")
const router = express.Router()
const Course = require("../Models/CourseModel")

router.route("/").get((req,res) => {
    res.send("course")
})

router.route("/create").post((req, res) => {
    const data = {
        title:req.body.title
    }
    const newCourse = new Course(data)
    newCourse.save()
    res.redirect("/admin#courses-management")
})

router.route("/:id/delete").delete((req, res) => {
    const id = req.params.id
    Course.findByIdAndDelete(id)
          .then((result) => res.json(result))
          .catch(err => console.log(err))  
})
router.route('/update').put(async (req, res) => {
    const id = req.body.id;

    try {
        // retrieve the document from the database
        const doc = await Course.findById(id);
    
        // toggle the value of the field
        doc.isActive = !doc.isActive;
    
        // save the updated document
        await doc.save();
    
        res.sendStatus(200);
      } catch (error) {
        console.error(error);
        res.sendStatus(500);
      }
  });
module.exports = router