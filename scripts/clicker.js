const btn = document.querySelector('.click button')
let num = document.querySelector('.click h1')
btn.addEventListener('click', countUp)

async function countUp(){
    num.innerHTML++
}
