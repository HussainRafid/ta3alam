

// const data = [
//     {
//         src:"../images/team/team-1.jpg",
//         name:"Walter White",
//         specialization:"Chief Executive Officer",
//         socials:[
//             {
//                 icon:"instagram",
//                 link:"#"
//             },
//             {
//                 icon:"linkedin",
//                 link:"#"
//             },
//             {
//                 icon:"twitter",
//                 link:"#"
//             }
//         ]
//     },
//     {
//         src:"../images/team/team-2.jpg",
//         name:"Sarah Jhonson",
//         specialization:"Product Manager",
//         socials:[
//             {
//                 icon:"instagram",
//                 link:"#"
//             },
//             {
//                 icon:"linkedin",
//                 link:"#"
//             }
//         ]
//     },
//     {
//         src:"../images/team/team-3.jpg",
//         name:"William Anderson",
//         specialization:"CTO",
//         socials:[
//             {
//                 icon:"instagram",
//                 link:"#"
//             },
//             {
//                 icon:"linkedin",
//                 link:"#"
//             },
//             {
//                 icon:"twitter",
//                 link:"#"
//             },
//             {
//                 icon:"facebook",
//                 link:"#"
//             }
//         ]
//     },
//     {
//         src:"../images/team/team-4.jpg",
//         name:"Amanda Jepson",
//         specialization:"Accounant",
//         socials:[
//             {
//                 icon:"instagram",
//                 link:"#"
//             },
//             {
//                 icon:"linkedin",
//                 link:"#"
//             }
//         ]
//     }
// ]

// const teamContainer = document.querySelector(".team .container .row")
// const cardModule =  (src, name, specialization, socials) => {
//     return (
//         `<div class="col-lg-3 col-md-6 d-flex align-items-stretch">` + 
//                     `<div class="member" data-aos="fade-up" data-aos-delay="100">` +
//                     `<div class="member-img">` +
//                         `<img src="${src}" class="img-fluid" alt="">` +
//                         `<div class="social">` +
//                         socials.map((data) => {
//                             return `<a href="${data.link}"><i class="bi bi-${data.icon}"></i></a>`
//                         }) +
//                         `</div>` +
//                     `</div>` +
//                     `<div class="member-info">` +
//                         `<h4>${name}</h4>` +
//                         `<span>${specialization}</span>` +
//                     `</div>` +
//                     `</div>` +
//                     `</div>`
//     )
// }

// teamContainer.innerHTML = ''
// data.map((data) => {
//     teamContainer.innerHTML += cardModule(data.src, data.name, data.specialization, data.socials)
// })