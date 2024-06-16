const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let imageArr = [];

let imgCount = 0;
let totalImg = 0;
// Splash API fetch
const count = 10;
const apiKey = "bOamZFjydu4qaWojjNmU4wYRGjGW8Fg1ka5llzyBkk0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// display photos
function displayPhotos() {
  //loop in imageArray
  totalImg = imageArr.length;
  for (let i = 0; i < totalImg; i++) {
    const image = imageArr[i];
    imgCount++;
    // <a> to link unspalsh
    const item = document.createElement("a");
    item.setAttribute("href", image.links.html);
    item.setAttribute("target", "_blank");

    // create <img> to display image
    const dispImage = document.createElement("img");
    dispImage.setAttribute("src", image.urls.regular);
    dispImage.setAttribute("alt", image.alt_description);
    dispImage.setAttribute("title", image.alt_description);

    item.appendChild(dispImage);
    imageContainer.appendChild(item);
  }
  if (imgCount == totalImg) {
    // console.log("imgCount " + imgCount);
    // console.log("totalImg " + totalImg);
    // loadMore = true;
  }
}

//Get photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    imageArr = await response.json();
    // console.log(imageArr);
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

//add scroll event listener near bottom of page
window.addEventListener("scroll", () => {
  // console.log("scrolled");
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
    // &&
    // loadMore
  ) {
    console.log("load more");
    //onload
    getPhotos();
    // loadMore=False;
    // console.log(window.innerHeight);
    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight);
    // console.log(document.body.offsetHeight - 1000);
  }
});
