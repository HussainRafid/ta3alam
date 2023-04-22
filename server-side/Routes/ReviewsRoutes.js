const express = require("express")
const Review = require("../Models/ReviewsModel")
const router = express.Router()
const fs = require('fs')
router.route("/create").post(async (req, res) => {
    const image = await req.body.image
    const binaryData = await fs.readFileSync('public/images/reviews/' + image, (err, data) => {
        if(err){ throw err}
    })
    const base64 = Buffer.from(binaryData).toString('base64')
    const imageUrl = `data:image/png;base64,${base64}`;

    const reviewData = await {
        name:req.body.name,
        src:imageUrl,
        content:req.body.content
    }
    const newReview = await new Review(reviewData)
    newReview.save()
    res.redirect("/admin#reviews-management")
    console.log(newReview)
})

router.route("/:id/delete").delete(async (req,res) => {
    const id = req.params.id  

    Review.findByIdAndDelete(id)
              .then((result) => res.json(result))
              .catch(err => console.log(err))
})

module.exports = router