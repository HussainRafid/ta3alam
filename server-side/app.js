//Imports
const express = require("express")
const dotenv = require("dotenv").config()
const path = require("path")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const session = require("express-session")
const crypto = require("crypto")

// ROUTES
const teamRoutes = require("./Routes/teamRoutes")
const reviewsRoutes = require("./Routes/ReviewsRoutes")
const coursesRoutes = require("./Routes/CoursesRoutes")
//MODELS
const Member = require("./Models/MemberModel")
const Review = require('./Models/ReviewsModel')
const Course = require('./Models/CourseModel')
//App
const app = express()

//MONGODB
mongoose.connect(process.env.MONGODBCONNECTION)
        .then(() => {
            console.log("Database Connected")
        })
        .catch((err) => {
            console.log(err)
        })
//MONGODB

app.use(express.json({limit:100000}))
app.set('view engine', 'ejs')
app.set("views", path.resolve(__dirname, '../'))
app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(bodyParser.json());
app.use(express.static('public'))
const port = process.env.PORT
app.listen(port, () => {
    console.log(`App Is Running On Port ${port}`)
})

app.get('/', (req, res) => {
    Member.find()
            .then((members) => {
                res.render("index", {members: members})
            })
            .catch((err) => {console.log(err)})
})


app.get('/register', (req, res) => {
    Course.find()
          .then((courses) => {
            res.render("register", {courses:courses})
          })
          .catch(err => console.log(err))
})
// app.get('/admin', (req, res) => {
//     Member.find()
//     .then((members) => {
//         Review.find()
//                 .then((reviews) => {
//                     Course.find()
//                           .then((course) => {
//                             res.render("admin", {members: members, reviews:reviews,courses:course})
//                           })  
//                           .catch(err => console.log(err))
//                 })
//                 .catch(err => {console.log(err)})
//     })
//     .catch((err) => {console.log(err)})
// })


const secretGenerator = () => {
    return crypto.randomBytes(32).toString('hex');
}
app.use(session({
    secret: secretGenerator(), // Replace with a strong secret key
    resave: false,
    saveUninitialized: false
  }));

const validCredentials = {
  password: 'ta3alm'
};  
app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === validCredentials.password) {
      req.session.authenticated = true;
      res.redirect('/admin');
    } else {
      res.send('Invalid username or password');
    }
  });
  


app.get("/password", (req, res) => {
    res.render("password")
})

app.get('/admin', (req, res) => {
    if (req.session.authenticated) {
        Member.find()
        .then((members) => {
            Review.find()
                    .then((reviews) => {
                        Course.find()
                              .then((course) => {
                                res.render("admin", {members: members, reviews:reviews,courses:course})
                              })  
                              .catch(err => console.log(err))
                    })
                    .catch(err => {console.log(err)})
        })
        .catch((err) => {console.log(err)})
    } else {
      res.redirect('/password');
    }
  });

app.use('/team', teamRoutes)
app.use("/reviews", reviewsRoutes)
app.use("/courses", coursesRoutes)