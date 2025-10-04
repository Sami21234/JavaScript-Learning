console.log("script is intializing...");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let viewStr;
    if (views < 1000) {
        viewStr = views ;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "k";
    }

    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="Tutorial 9">
                <div class="capsule">${duration}</div>
            </div>
             
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

// Now function callback

createCard("Introduction to Backend | Sigma Web Dev Video #9", "CodeWithHarry", 500000, 7, "30:31", "image.png")