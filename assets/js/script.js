const searchButton = document.querySelector('#search');
const imageResults = document.querySelector('.images');
const inputField = document.querySelector('#keyword');

function getApi() {
  imageResults.innerHTML = ""  //delete inside input field everytime
  const keyword = inputField.value  // save value of input field
  const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=75H8w8QDmwChkNA4yTHjlSaPk9jdUcDH&q=${keyword}&limit=5&rating=g`
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (giphs) {
      // console.log(giphs.data);
      for (const image of giphs.data) {
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', image.images.downsized.url)
        imageEl.style.border = "1px solid red"
        imageResults.appendChild(imageEl)
        // console.log(image.images.downsized.url)
      }
    })
}
searchButton.addEventListener('click', getApi);