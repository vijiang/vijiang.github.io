function randomImage() {
    var imageList = [
        ["images/shanghai-2.jpg", "(shanghai, jul. 2018)"],
        ["images/shanghai-3.jpg", "(shanghai, jul. 2018)"], 
        ["images/beijing-1.jpg", "(beijing, jan. 2019)"],
        ["images/beijing-2.jpg", "(beijing, dec. 2016)"],
        ["images/kyoto-1.jpg", "(kyoto, jun. 2018)"],
        ["images/paris-1.jpg", "(paris, oct. 2017)"]];
    var imageSeen = document.getElementById('random-image');
    var imageCaption = document.getElementById('index-image-caption');
    console.log(imageCaption);
    var newImageNumber = Math.floor(Math.random() * imageList.length);
    imageSeen.setAttribute('data-src', imageList[newImageNumber][0]);
    console.log(imageList);
    imageCaption.innerHTML = imageList[newImageNumber][1];
    console.log(imageCaption)
}

randomImage()