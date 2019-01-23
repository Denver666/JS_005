run();
function run() {
    createPictureHolders();
    addPictures();
}

//Pics kunnen worden gezien
function createPictureHolders() {
    var pics = document.getElementById("pics");
    for(var i = 1; i <= 9; i++) {
        var pictureHolder = document.createElement("div");
        pictureHolder.className = "tijgerpicture";
        pictureHolder.id = "tijger_pic_" + i;
        var favHolder = document.createElement("div");
        favHolder.id = "tijger_fav_" + i;
        favHolder.className = "tijgerfavorite";
        favHolder.style.height = "150px";
        pictureHolder.appendChild(favHolder);
        pics.appendChild(pictureHolder);
    }
    return pics;
}

//De div elementen pics laten bevatten
function addPictures(pics) {
    tijgerPictures = document.getElementsByClassName("tijgerpicture");
    for(var i = 0; i < tijgerPictures.length; i++) {
        var tijgerPicture = tijgerPictures[i];
        var picture = createImage(i+1);
        tijgerPicture.appendChild(picture);
    }
}

//Zorgt ervoor dat er een afbeelding word gemaakt en dat het hartje werkt.
function createImage(i) {
    var picture = document.createElement("img");
    picture.src = "img/tijger" + i + ".jpg";
    picture.addEventListener("click", function() {
        addHeart(i);
    })
    return picture;
}

//Hartje werkt helemaal.
function addHeart(i) {
    notYourFavoriteTijgers = document.getElementsByClassName("tijgerfavorite");
    for(var x = 0; x <  notYourFavoriteTijgers.length; x++) {
        notYourFavoriteTijgers[x].style.backgroundImage = "none";
    }
    var favoriteTijger = document.getElementById("tijger_fav_" + i);
    favoriteTijger.style.backgroundImage = 'url("img/heart.png")';
    favoriteTijger.style.backgroundRepeat = 'no-repeat';
    favoriteTijger.style.backgroundPosition = 'center';
}

