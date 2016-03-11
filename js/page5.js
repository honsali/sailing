function goToPage5() {
    $('#svg').empty();
    addNav();
    //paper.path("M0,0 L800,600").attr({stroke: "black"});
    var title = paper.text(400, 50, "السير").attr({fontFamily: "Droid Arabic Kufi", fontSize: "36px", textAnchor: "middle"});
    var box1 = paper.rect(0, 100, 800, 180).attr({stroke: "#777", fill: "none"});

    var boat1a = paper.path("M0,230 L160,200 L120,270 L10,270 L0,230").attr({stroke: "black"});
    // var boat1b = paper.rect(80, 200, 3, 30).attr({stroke: "none", transform: "r-12"});
    var boat1c = paper.path("M80,212 L62,202 L65,215 L80,212").attr({stroke: "#777", fill: "white"});
    //  var boat1 = paper.group(boat1a, boat1b, boat1c);

    var b2 = paper.group();
    b2.add(boat1c);


    var sea1 = paper.path("M0,260 L400,260  L800,260 L800,280 L0,280 L0,260").attr({stroke: "#777", fill: "#aaa"});

    var index =0   ;

    var progressX = [0, 50, 150, 300, 670];
    var progressY = [5, 9, 12, 14, 20];
    var rotate = [0, 3, 10, -10, 10];
    var scale1 = [1, 0.8, 0.6, 0.4, 0.2];
    var scale3 = [1, 2, 3, 4, 5];

    up1(boat1a, b2,sea1);


    function up1(e, g,f) {
        f.animate({d: "M0,262 L400,257  L800,262 L800,280 L0,280 L0,262"}, 2000, mina.linear);
        if (index < 3) {
            index = index + 1;
            console.log(progressX[index - 1]);
            console.log(progressX[index]);
            Snap.animate([progressX[index - 1], progressY[index - 1], rotate[index-1], scale1[index - 1], scale3[index - 1]], [progressX[index], progressY[index], rotate[index], scale1[index], scale3[index]], function (value) {
                e.attr({transform: 't' + value[0] + ',' + value[1] + ' r' + value[2] + ' s' + value[3]});
                g.attr({transform: 't' + value[0] + ',' + value[1] + ' r' + value[2] + ' s' + value[4]});
            }, 2000, mina.linear, down1.bind(null, e, g,f));

        } else {
            e.animate({transform: 't' + progressX[4] + ',' + progressY[4] + ' r6 s' + scale1[4]}, 2000, mina.linear, down1.bind(null, e, g,f));
            g.animate({transform: 't' + progressX[4] + ',' + progressY[4] + ' r13 s' + scale3[4]}, 2000, mina.linear);
        }
    }

    function down1(e, g,f) {
        f.animate({d: "M0,258 L400,263  L800,258 L800,280 L0,280 L0,258"}, 2000, mina.linear);

        if (index < 4) {
            index = index + 1;
            console.log(progressX[index - 1]);
            console.log(progressX[index]);
            Snap.animate([progressX[index - 1], progressY[index - 1], rotate[index-1], scale1[index - 1], scale3[index - 1]], [progressX[index], progressY[index], rotate[index], scale1[index], scale3[index]], function (value) {
                e.attr({transform: 't' + value[0] + ',' + value[1] + ' r' + value[2] + ' s' + value[3]});
                g.attr({transform: 't' + value[0] + ',' + value[1] + ' r' + value[2] + ' s' + value[4]});
            }, 2000, mina.linear, up1.bind(null, e, g,f));

        } else {
            e.animate({transform: 't' + progressX[4] + ',' + progressY[4] + ' r0 s' + scale1[4]}, 2000, mina.linear, up1.bind(null, e, g,f));
            g.animate({transform: 't' + progressX[4] + ',' + progressY[4] + ' r10 s' + scale3[4]}, 2000, mina.linear);
        }
    }
}
