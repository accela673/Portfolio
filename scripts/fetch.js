const img = document.querySelector('.img')
const btn = document.querySelector('.api button')


async function randomCat() {
    try {
      const res = await fetch('https://thecatapi.com/');
      const data = await res.json();
      img.src = data.url;
      }
      catch (e){
      console.log(e);
      }
  }

  btn.addEventListener("click", () => {
    let isLoaded = img.complete;

    if (isLoaded) {
        fetchHandler();
    }
});