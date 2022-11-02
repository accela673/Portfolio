const cat = document.getElementById('cat')
const btn = document.querySelector('.api button')

btn.addEventListener('click', randomCat)

async function randomCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => cat.innerHTML = `<img srs="${data.file}"/>`)
}