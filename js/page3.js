function goToPage3() {
    $('#svg').empty();
    addNav();
    //paper.path("M0,0 L800,600").attr({stroke: "black"});
    var title = paper.text(400, 50, "السباق").attr({fontFamily: "Droid Arabic Kufi", fontSize: "36px", textAnchor: "middle"});
    var box1 = paper.rect(0, 100, 800, 180).attr({stroke: "#777", fill: "none"});


    var boat2a = paper.path("M20,250 L120,240 L100,270 L25,270 L20,250").attr({stroke: "black", transform: "t-20,0"});
    var boat2b = paper.rect(60, 185, 3, 70).attr({stroke: "none", transform: "t-20,r-3"});
    var boat2c = paper.path("M115,235 L63,190 L66,240 L115,235").attr({stroke: "#777", fill: "none", transform: "t-20,0"});
    var boat2 = paper.group(boat2a, boat2b, boat2c);

    var boat3a = paper.path("M20,260 L120,255 L90,270 L30,270 L20,260").attr({stroke: "black", transform: "t-20,0"});
    var boat3b = paper.rect(40, 160, 3, 100).attr({stroke: "none", transform: "t-20,r-3"});
    var boat3c = paper.path("M113,250 L43,162 L48,255 L113,250").attr({stroke: "#777", fill: "none", transform: "t-20,0"});
    var boat3 = paper.group(boat3a, boat3b, boat3c);

    var boat1a = paper.path("M20,230 L180,200 L140,270 L30,270 L20,230").attr({stroke: "black", transform: "t-20,0"});
    var boat1b = paper.rect(80, 200, 3, 30).attr({stroke: "none", transform: "t-20,0 r-12"});
    var boat1c = paper.path("M100,212 L82,202 L85,215 L100,212").attr({stroke: "#777", fill: "none", transform: "t-20,0"});
    var boat1 = paper.group(boat1a, boat1b, boat1c);


    var sea1 = paper.path("M0,260 L400,260  L800,260 L800,280 L0,280 L0,260").attr({stroke: "#777", fill: "#aaa"});

    var index = 0;

    var progress1 = 0;
    var progress2 = 0;
    var progress3 = 0;


    up1(boat1, boat2, boat3);


    function up1(e, f, g) {
        if (index++ < 4) {
            progress1 = progress1 + 8;
            progress2 = progress2 + 50;
            progress3 = progress3 + 97;
        }
        e.animate({transform: 't' + progress1 + ',0 r3'}, 2000, mina.linear, down1.bind(null, e, f, g));
        f.animate({transform: 't' + progress2 + ',0 r3'}, 2000, mina.linear);
        g.animate({transform: 't' + progress3 + ',0 r3'}, 2000, mina.linear);
    }


    function down1(e, f, g) {
        if (index < 4) {
            progress1 = progress1 + 8;
            progress2 = progress2 + 50;
            progress3 = progress3 + 97;
        }
        e.animate({transform: 't' + progress1 + ',0 r-6'}, 2000, mina.linear, up1.bind(null, e, f, g));
        f.animate({transform: 't' + progress2 + ',0 r-6'}, 2000, mina.linear);
        g.animate({transform: 't' + progress3 + ',0 r-6'}, 2000, mina.linear);
    }
}
