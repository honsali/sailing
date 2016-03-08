function goToPage1() {
    $('#svg').empty();
    addNav();
    //paper.path("M0,0 L800,600").attr({stroke: "black"});
    var title = paper.text(400, 50, "الشغل").attr({fontFamily: "Droid Arabic Kufi", fontSize: "36px",textAnchor:"middle"});
    var box1 = paper.rect(0, 100, 800, 180).attr({stroke: "#777", fill: "none"});
    var boat1 = paper.path("M580,250 L480,240 L500,270 L575,270 L580,250").attr({stroke: "black"});
    var boat2a = paper.path("M120 ,250 L220,240 L200,270 L125 ,270 L120 ,250").attr({stroke: "black"});
    var boat2b = paper.rect(160, 185, 3, 70).attr({stroke: "none", transform: "r-3"});
    var boat2c = paper.path("M215,235 L163,190 L166,240 L215,235").attr({stroke: "#777", fill: "none"});
    var boat2 = paper.group(boat2a, boat2b, boat2c);

    var text1 = paper.text(400, 350, " ما يشغلك -").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0,textAnchor:"middle"});
    var text2 = paper.text(400, 400, " نصب الشرك وصيد السمك، وأنت؟ -").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0,textAnchor:"middle"});
    var text3 = paper.text(400, 450, " زرع الشجر وجني الثمر -").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0,textAnchor:"middle"});
    var text4 = paper.text(400, 500, " لكن لا شجر في البحر -").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0,textAnchor:"middle"});
    var text5 = paper.text(400, 550, " نعم، لا قرار له -").attr({fontFamily: "Amiri", fontSize: "28px", opacity: 0,textAnchor:"middle"});
var text
    var net1a =paper.path("M500,250 L450,210").attr({stroke: "black",strokeWidth:2, opacity: 0});
    var net1b =paper.path("M455,213 L455,260").attr({stroke: "black", opacity: 0});
    var sea1 = paper.path("M0,260 L400,260  L800,260 L800,280 L0,280 L0,260").attr({stroke: "#777", fill: "#aaa"});

    var index = 0;
    var progress = 0;


    up1(boat1, sea1,net1a,net1b);
    up2(boat2);

    function up1(e, f,g,h) {
        if (index===1) {
            Snap.animate(0,1,function(value){
                net1a.attr({opacity:value});
                net1b.attr({opacity:value});
            },1000);

        }


        e.animate({transform: 't0,0 r3'}, 2000, mina.linear, down1.bind(null, e, f,g,h));
        f.animate({d: "M0,262 L400,257  L800,262 L800,280 L0,280 L0,262"}, 2000, mina.linear);
        g.animate({d: "M510,250 L450,210"}, 2000, mina.linear);
        h.animate({transform: 't0,0'}, 2000, mina.linear);
    }

    function down1(e, f,g,h) {
        e.animate({transform: 't0,0 r-6'}, 2000, mina.linear, up1.bind(null, e, f,g,h));
        f.animate({d: "M0,258 L400,263  L800,258 L800,280 L0,280 L0,258"}, 2000, mina.linear);
        g.animate({d: "M500,250 L450,215"}, 2000, mina.linear);
        h.animate({transform: 't0,5 r-2'}, 2000, mina.linear);
    }


    function up2(e) {
        if (index++ < 2) {
            progress = progress + 35;
        }
        e.animate({transform: 't' + progress + ',0 r-6'}, 2000, mina.linear, down2.bind(null, e));

    }

    function down2(e) {
        if (index < 2) {
            progress = progress + 30;
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
                                        }, 2000);
                                    });
                                }, 2000);
                            });
                        }, 2000);
                    });
                }, 2000);
            });
        }
        e.animate({transform: 't' + progress + ',0 r3'}, 2000, up2.bind(null, e));
    }


}
