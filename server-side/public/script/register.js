


//THUMB SCRIPT
const slider = document.querySelector(".slider")
const selectorBtn = document.querySelector(".selector")
const value = document.querySelector(".value")
const level = {
    0: 'A1',
    20:'A2',
    40:'B1',
    60:'B2',
    80:'C1',
    100:'C2'
}

value.innerHTML = level[slider.value]
selectorBtn.style.left= `${slider.value}%`
slider.oninput = () => {
    selectorBtn.style.left= `${slider.value}%`
    value.classList.add("value-active")
    value.innerHTML = level[slider.value]
}
slider.onmouseleave = () => {
    setTimeout(() => {
        value.classList.remove("value-active")
    }, 500)
}


// GLOW EFFECT 

const glow = document.querySelector('.glow')
window.onmousemove = (e) => {
    const x = e.clientX - 210
    const y = e.clientY - 70
    glow.style.top = y + "px"
    glow.style.left = x + "px"

}


//REGISTER 

const submitBtns = document.querySelectorAll(".submit-btns")
const nameVal = document.querySelector("#fullName")
const phoneNumberVal = document.querySelector("#phoneNumber")
const skillsLevel = document.querySelector("#skillsLevel")
const telegramVal = document.querySelector("#telegram")
const specializationVal = document.querySelector("#specialization")
const courseName = document.querySelector("#courseName")
const message = document.querySelector("#message")
// REGULAR EXPRETIONS

const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/
const telegramRegex = /^(?!.*[_.]{2})[a-zA-Z0-9_.]{5,32}$/
submitBtns.forEach((btn) => {
    btn.onclick = async (e) => {
        e.preventDefault()
        if(nameVal.value === '' || phoneNumberVal.value === '' || telegramVal.value === '' || specializationVal.value === ''){
           message.innerHTML = '.أرجوك أملأ جميع الحقول'
        }
        else if(!nameRegex.test(nameVal.value)){
           message.innerHTML = '.الأسم الثلاثي غير صالح'
        }else if(!telegramRegex.test(telegramVal.value)){
            message.innerHTML = '.معرف التليجرام غير صالح'
        }else {
            const data = await {
                fullName:nameVal.value,
                phoneNumber:phoneNumberVal.value,
                skillsLevel:level[slider.value],
                courseName:courseName.innerText,
                telegram:telegramVal.value,
                specialization:specializationVal.value,
            }
            emailjs.send('service_nctb50i', 'template_go3mbve', data)
                .then(function(response) {
                    const notification = document.querySelector(".notification")
                        notification.classList.add("notification-active")
                        setTimeout(() => {
                            notification.classList.remove("notification-active")
                        }, 2000)
                        
                        
                }, function(error) {
                console.log('FAILED...', error);
                });
           
        }
    }
})

//cursor 

const cursors = document.querySelectorAll(".cursors")

window.onmousemove= (e) => {
    const axis = [e.pageX, e.pageY]
    cursors.forEach((cursor) => {
        cursor.style.left = axis[0] + "px"
        cursor.style.top = axis[1] + "px"
    })
}



//FOOTER

const footer = document.querySelector('footer')
footer.onmouseover = () => {
    cursors[0].style.transform = 'scale(2)'
    cursors[1].style.transform = 'scale(7)'
}
footer.onmouseleave = () => {
    cursors[0].style.transform = 'scale(1)'
    cursors[1].style.transform = 'scale(4)'
}


const coursesBtn = document.querySelector("#courseName")
const handleChange = (e) => {
    const isActive = e.getAttribute('activity')
    if(isActive === 'true'){
        const val = e.querySelector(".name p").innerText
        coursesBtn.innerText = val
    }
}
