var page = 1;

function addNav() {
    var next = paper.text(200, 50, "\uf053").attr({id: "next", fontFamily: "FontAwesome", fontSize: "36px", opacity: 0,cursor:"pointer"});
    next.click(function () {
        page++;
        init();
    });
    var previous = paper.text(600, 50, "\uf054").attr({id: "previous", fontFamily: "FontAwesome", fontSize: "36px", opacity: 0,cursor:"pointer"});
    previous.click(function () {
        page--;
        init();
    });
    if (page === 1) {
        hide("previous");
        show("next");
    } else if (page === 5) {
        hide("next");
        show("previous");
    }else{
        show("next");
        show("previous");
    }
}

function init() {

    window["goToPage" + page]();
}

function hide(e) {
    Snap.select("#" + e).attr({opacity: 0});
}

function show(e) {
    Snap.select("#" + e).attr({opacity: 1});
}

window["goToPage1"]();
