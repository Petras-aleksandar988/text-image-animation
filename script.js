//animated text

const textTag = document.querySelector(".section1 h1")
let text = textTag.textContent

let splittedText = text.split("")
textTag.textContent = ""
for (i = 0; i < splittedText.length; i++){
    if (splittedText[i] === " ") {
        splittedText[i] = "&nbsp;"
    }
   textTag.innerHTML +=`<span>${splittedText[i]}</span>`
}

let spans = textTag.querySelectorAll(".section1 span")
let k = 0
let interval = setInterval(() => {
    let singleSpan = spans[k]
    singleSpan.classList.add("fadeMove")
    k++
    if (k === spans.length ) {
        clearInterval(interval)
    }
}, 30);

// border line
const border = document.querySelector(".border-line")
let animationWidth = 0
window.onscroll= ()=>{
    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1.5
    } else {
       animationWidth += 1.5
    }
        

    if (animationWidth >= 100) {
        animationWidth = 100
    } 

    if (animationWidth <= 0) {
        animationWidth =0
    }
    border.style.width = animationWidth + "%"

    this.oldScroll = this.scrollY

    
  imageAnimation()

   
}

// img transition
function imageAnimation() {
     const sectionForAnimation = document.querySelector(".section2 .images");
     const sectionPosition = sectionForAnimation.getBoundingClientRect().top;
     const screenPosition = window.innerHeight / 1.4;
     console.log("section" + sectionPosition);
     console.log("screen" + screenPosition);

     const leftImg = document.querySelector(".slideFromLeft");
     const rightImg = document.querySelector(".slideFromRight");
     if (sectionPosition < screenPosition) {
       leftImg.classList.add("animated");
       rightImg.classList.add("animated");
     }
}