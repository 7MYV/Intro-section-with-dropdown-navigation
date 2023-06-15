const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const navLink = document.querySelectorAll(".nav-link")
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", e => {
    hamburger.classList.toggle("open")
    overlay.classList.toggle("slide")
    nav.classList.toggle("slide")
})



const removeClass = (el) => {
    navLink.forEach(link => {
        if (el != link) {
            link.classList.remove("active")
        }
    })
}

navLink.forEach(link => {
    link.addEventListener("click", e => {
        console.log(e.currentTarget)
        removeClass(e.currentTarget)
        e.currentTarget.classList.toggle("active")
    })
})


// close dropdown links if clicked anywhere outside the dropdown
window.onclick = (e) => {
    if (!e.target.matches("#company-link") & !e.target.matches("#features-link")) {
        navLink.forEach(link => {
            link.classList.remove("active")
        })
    }
}
