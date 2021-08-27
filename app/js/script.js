const featuresList = document.querySelector("#features__list");
const tabImage = document.querySelector("#tab-image");
const tabHeader = document.querySelector("#tab-header");
const tabPara = document.querySelector("#tab-para");

function toggleTab(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].classList.remove('active');
                } else if (current.classList.contains('active') === true) {
                    current.classList.remove('active');
                } else {
                    current.classList.add('active')
                }
            }
            e.preventDefault();
        });
    };
}

toggleTab(document.querySelectorAll('.tab-link'));

featuresList.addEventListener("click", (e) => {
    if (e.target.innerText === "Simple Bookmarking") {
        tabImage.src = "images/illustration-features-tab-1.svg";
        tabHeader.innerText = "Bookmark in one click";
        tabPara.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    }
    else if (e.target.innerText === "Speedy Searching") {
        tabImage.src = "images/illustration-features-tab-2.svg";
        tabHeader.innerText = "Intelligent search";
        tabPara.innerText = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    }
    else if (e.target.innerText === "Easy Sharing") {
        tabImage.src = "images/illustration-features-tab-3.svg";
        tabHeader.innerText = "Share your bookmarks";
        tabPara.innerText = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    }
    else {
        tabImage.src = "images/illustration-features-tab-1.svg";
        tabHeader.innerText = "Bookmark in one click";
        tabPara.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    }
});