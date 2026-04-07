function upDate(previewPic) {
    console.log("Active!");
    
    let displayDiv = document.getElementById("image-display");
    
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    let displayDiv = document.getElementById("image-display");
    
    displayDiv.innerHTML = "Description.";
    displayDiv.style.backgroundImage = "url('')";
}

window.onload = function() {
    console.log("Page load!");
    
    let images = document.querySelectorAll(".preview");
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Add " + (i + 1));
    }
}