
//MEMEBRS
const memberImage = document.querySelector(".member-image img")
const memberImageValue = document.querySelector(".image-input")
memberImageValue.onchange = (e) => {
    const message = document.querySelector(".upload-message")
    const src = memberImageValue.value.replace('C:\\fakepath\\', '')
    memberImage.src = `/images/team/${src}`
    document.querySelector(".member-image").removeChild(message)
}


const cursors = document.querySelectorAll(".cursors")

window.onmousemove= (e) => {
    const axis = [e.pageX, e.pageY]
    cursors.forEach((cursor) => {
        cursor.style.left = axis[0] + "px"
        cursor.style.top = axis[1] + "px"
    })
}


//REVIEWS
const reviewImg = document.querySelector(".testimonial-img")
const reviewName = document.querySelector(".review-demo h3")
const reviewContent = document.querySelector(".review-demo p")
// const reviewImgVal = document.querySelector(".reviewImageValue")
// const reviewNameVal = document.querySelector(".reviewNameValue")
// const reviewContentVal = document.querySelector(".reviewContentValue")
const reviewInputs = document.querySelectorAll('.add-review .form-container .inputs')
reviewInputs.forEach((input) => {
    input.onchange = () => {
        if(input.getAttribute("id") == 'image'){
            reviewImg.src = '/images/reviews/' + input.value.replace("C:\\fakepath\\", '')
        }else if (input.getAttribute("id") == 'name'){
            reviewName.innerHTML = input.value
        }else {
            reviewContent.innerHTML = input.value
        }
    }
})