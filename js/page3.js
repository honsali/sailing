function goToPage3() {
    $('#svg').empty();
    addNav();
    //paper.path("M0,0 L800,600").attr({stroke: "black"});
    var title = paper.text(400, 50, "الإرادة").attr({fontFamily: "Droid Arabic Kufi", fontSize: "36px", textAnchor: "middle"});
    var box1 = paper.rect(0, 100, 800, 180).attr({stroke: "#777", fill: "none"});
    var boat1 = paper.path("M320,250 L420,240 L400,270 L325,270 L320,250").attr({stroke: "black"});
    var rame1 = paper.path("M370,247 L400,267 L402,267 L372,247 L370,247").attr({fill: "red"});
    var boat2a = paper.path("M20,250 L120,240 L100,270 L25,270 L20,250").attr({stroke: "black"});
    var boat2b = paper.rect(60, 185, 3, 70).attr({stroke: "none", transform: "r-3"});
    var boat2c = paper.path("M115,235 L63,190 L66,240 L115,235").attr({stroke: "#777", fill: "none"});
    var boat2 = paper.group(boat2a, boat2b, boat2c);
    var sea1 = paper.path("M0,260 L400,260  L800,260 L800,280 L0,280 L0,260").attr({stroke: "#777", fill: "#aaa"});
    var text1 = paper.text(400, 350, "كنت أريد أن أنال البر - ").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0, textAnchor: "middle"});
    var text2 = paper.text(400, 400, "...ليس بمجذافيك - ").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0, textAnchor: "middle"});
    var text3 = paper.text(400, 450, "بل إفتح شراعك واجعله ينفخ فيه ويدفعك ...").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0, textAnchor: "middle"});
    var text4 = paper.text(400, 500, "الريح؟ - ").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0, textAnchor: "middle"});
    var text5 = paper.text(400, 550, "ما بدا لك - ").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0, textAnchor: "middle"});


    var index = 0;
    var bx = 0;
    var progress1 = 0;
    var progress2 = 0;


    up1(boat1, boat2, sea1, rame1);


    function up1(e, g, f, h) {

        if (index++ === 3) {
            f.animate({d: "M0,260 L800,260  L800,260 L800,280 L0,280 L0,260"}, 100, mina.linear, function () {

                g.animate({transform: 't' + progress2 + ',0 r3'}, 2000, mina.linear);
                h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + (progress1 - 50) + ',0 r-6'}, 500, mina.linear);
                e.animate({transform: 't' + (progress1 - 50) + ',-10 r-6'}, 500, mina.linear, function () {

                    g.animate({transform: 't' + progress2 + ',-3 r-6'}, 2000, mina.linear);
                    h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + (progress1 - 200) + ',-18 r15'}, 2000, mina.linear);
                    e.animate({transform: 't' + (progress1 - 160) + ',-22 r15'}, 2000, mina.linear, function () {

                        g.animate({transform: 't' + progress2 + ',-12 r-5'}, 1000, mina.linear);
                        h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + (progress1 - 220) + ',-8 r0'}, 1000, mina.linear);
                        e.animate({transform: 't' + (progress1 - 220) + ',-14 r0'}, 1000, mina.linear, function () {
                            progress2 = progress2 + 10;
                            g.animate({transform: 't' + progress2 + ',-16 r-14'}, 1600, mina.linear);
                            h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + (progress1 - 240) + ',-10 r5'}, 2000, mina.linear);
                            e.animate({transform: 't' + (progress1 - 240) + ',-12 r5'}, 2000, mina.linear, function () {
                                bx = 200;
                                progress1 = progress1 - 250;
                                progress2 = progress2 + 10;
                                g.animate({transform: 't' + progress2 + ',-5 r-10'}, 1000, mina.linear);
                                h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + progress1 + ',-5 r-3'}, 1000, mina.linear);
                                e.animate({transform: 't' + progress1 + ',-5 r-3'}, 1000, down1.bind(null, e, g, f, h));
                            });
                        });
                    });
                });

                    f.animate({d: "M0,260 L550,235  L800,260 L800,280 L0,280 L0,260"}, 2000, mina.easein, function () {
                        f.animate({d: "M0,260 L350,235  L800,260 L800,280 L0,280 L0,260"}, 2000, mina.linear, function () {
                            f.animate({d: "M0,260 L0,260  L800,260 L800,280 L0,280 L0,260"}, 4000, mina.linear);
                        });
                    });
                });


        } else {
            if (index < 4) {
                progress1 = progress1 + 55;
                progress2 = progress2 + 30;

            } else {
                text1.animate({opacity: 1}, 1000, mina.linear, function () {
                    setTimeout(function () {
                        text2.animate({opacity: 1}, 1000, mina.linear, function () {
                            setTimeout(function () {
                                text3.animate({opacity: 1}, 1000, mina.linear, function () {
                                    setTimeout(function () {
                                        text4.animate({opacity: 1}, 1000, mina.linear, function () {
                                            setTimeout(function () {
                                                text5.animate({opacity: 1}, 1000);
                                            }, 1000);
                                        });
                                    }, 1000);
                                });
                            }, 500);
                        });
                    }, 1000);
                });
            }
            f.animate({d: "M0,262 L400,257  L800,262 L800,280 L0,280 L0,262"}, 2000, mina.linear);
            h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + progress1 + ',3 r3'}, 2000, mina.linear);
            e.animate({transform: 't' + progress1 + ',0 r3'}, 2000, mina.linear, down1.bind(null, e, g, f, h));
            g.animate({transform: 't' + progress2 + ',0 r-6'}, 2000, mina.linear);
        }


    }

    function down1(e, g, f, h) {
        if (index < 4) {
            progress1 = progress1 + 55;
            progress2 = progress2 + 30;
            h.animate({d: "M370,247 L400,267 L402,267 L372,247 L370,247", transform: 't' + progress1 + ',0 r-6'}, 2000, mina.linear);
        } else {
            h.animate({d: "M370,247 L340,267 L342,267 L372,247 L370,247", transform: 't' + progress1 + ',0 r-3'}, 2000, mina.linear);
        }
        f.animate({d: "M0,258 L400,263  L800,258 L800,280 L0,280 L0,258"}, 2000, mina.linear);
        e.animate({transform: 't' + progress1 + ',0 r-6'}, 2000, mina.linear, up1.bind(null, e, g, f, h));
        g.animate({transform: 't' + progress2 + ',0 r3'}, 2000, mina.linear);


    }


}
