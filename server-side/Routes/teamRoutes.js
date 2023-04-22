const express = require("express")
const route = express.Router()
const Member = require("../Models/MemberModel")
const fs = require("fs")
const path = require('path')

route.route("/create").post(async (req, res) => {
    const image = await req.body.image
    const binaryData = await fs.readFileSync('public/images/team/' + image, (err, data) => {
        if(err){ throw err}
    })
    const base64 = Buffer.from(binaryData).toString('base64')
    const imageUrl = `data:image/png;base64,${base64}`;
    const newMember = await new Member({
        name:req.body.name,
        specialization: req.body.specialization,
        src: imageUrl,
        desc:req.body.desc,
        socials: [
            {
                name:"instagram",
                link:req.body.instagram
            },
            {
                name:"facebook",
                link:req.body.facebook
            },
            {
                name:"linkedin",
                link:req.body.linkedin
            },
            {
                name:"telegram",
                link:req.body.telegram
            }
        ]
    })
    await newMember.save()
    res.redirect('/admin#members-management')

}) 

route.route("/:id/delete").delete((req, res) => {
    const id = req.params.id
    const isExist = Member.findById(id)
    if(!isExist){
        res.send("Member Not Found")
    }
    Member.findByIdAndDelete(id)
            .then((result) => {
                res.json(result)
            })
            .catch(err => {console.log(err)})
})

route.route("/:id").get((req, res) => {
    const id = req.params.id
    Member.findById(id)
          .then((member) => {
            res.render('member', {member:member})
          })  
})
module.exports = route