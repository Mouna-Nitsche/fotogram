let myImages = [
    { src: "./img/anime_style_town.jpg", alt: "Anime style town" },
    { src: "./img/bird_white_stones.jpg", alt: "White bird sitting on stones" },
    { src: "./img/bird_yellow_blue.jpg", alt: "Yellow and blue bird" },
    { src: "./img/duck.jpg", alt: "Duck in nature" },
    {
        src: "./img/person_dark_searching.jpg",
        alt: "Person searching in a dark environment",
    },
    { src: "./img/river_mountain.jpg", alt: "River flowing through mountains" },
    {
        src: "./img/sky_snow_mountain.jpg",
        alt: "Snow-covered mountains under dramatic sky",
    },
    {
        src: "./img/snow_mountain_water.jpg",
        alt: "Snowy mountains reflected in water",
    },
    { src: "./img/snow_tree.jpg", alt: "Tree covered in snow" },
    { src: "./img/space_view.jpg", alt: "View of space and stars" },
    { src: "./img/storm_clouds.png", alt: "Dark storm clouds in the sky" },
    { src: "./img/wild_cat.jpg", alt: "Wild cat in nature" },
];

let currentIndex = 0;

function generateImages() {
    const imagesContainer = document.getElementById("images-container");
    // const imagesSrc = ;
    for (let i = 0; i < myImages.length; i++) {
        imagesContainer.innerHTML += `<img src="${myImages[i].src}" alt="${myImages[i].alt}" onclick="openDialog(${i})">`;
    }
}
generateImages();

function openDialog(i) {
    currentIndex = i;
    const dialogRef = document.getElementById("myDialog");
    const dialogMainRef = document.getElementById("dialog-main");
    dialogMainRef.innerHTML = `<img src="${myImages[i].src}" alt="${myImages[i].alt}">`;
    dialogRef.showModal();

    const imageTitleRef = document.getElementById("image-title");
    const currentNumberRef = document.getElementById("current-index-number");
    imageTitleRef.innerHTML = `${myImages[i].alt}`;
    currentNumberRef.innerHTML = `${currentIndex + 1} /${myImages.length}`;
}

function showNextImage() {
    if (currentIndex + 1 === myImages.length) {
        currentIndex = 0;
        openDialog(currentIndex);
    } else {
        openDialog(currentIndex + 1);
    }
}

function showPreviousImage() {
    if (currentIndex === 0) {
        currentIndex = 11;
        openDialog(currentIndex);
        console.log(currentIndex);
    } else {
        openDialog(currentIndex - 1);
    }
}

function closeDialog() {
    const dialogRef = document.getElementById("myDialog");
    dialogRef.close();
}
