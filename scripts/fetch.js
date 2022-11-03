const img = document.getElementById('img')
const btn = document.getElementById('cat_btn')


btn.addEventListener('click', fetchCatImage);


function fetchCatImage() {
  fetch('https://aws.random.cat/meow')
  .then(response => response.json())
  .then(data => {
    img.innerHTML = `<img src="${data.file}"/>`;
  })  
}