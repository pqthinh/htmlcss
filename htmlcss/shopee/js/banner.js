function AutoActiveBanner(id) {
    var imgs = document.querySelector(id);
    console.log(imgs)
    console.log(document.querySelector("#banner"))
}

var imgs = document.querySelectorAll("img");
console.log(imgs)

console.log(imgs[3].nextSibling.nextSibling == null)
console.log(document.querySelector("#banner"))