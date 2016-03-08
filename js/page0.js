function goToPage0() {
    $('#svg').empty();
    addNav();
    //paper.path("M0,0 L800,600").attr({stroke: "black"});
    var title = paper.text(400,50,"ولكل وجهة").attr({fontFamily:"Droid Arabic Kufi",fontSize:"36px",textAnchor:"middle"});
    var box1 = paper.rect(0, 100, 800, 180).attr({stroke: "#777", fill: "none"});
    var box2 = paper.rect(0, 300, 800, 180).attr({stroke: "#777", fill: "none"});
    var boat1 = paper.path("M780,250 L680,240 L700,270 L775,270 L780,250").attr({stroke: "black"});
    var boat2a = paper.path("M20,450 L120,440 L100,470 L25,470 L20,450").attr({stroke: "black"});
    var boat2b = paper.rect(60, 385, 3, 70).attr({stroke: "none", transform: "r-3"});
    var boat2c = paper.path("M115,435 L63,390 L66,440 L115,435").attr({stroke: "#777", fill: "none"});
    var boat2 = paper.group(boat2a, boat2b, boat2c);
    var sea1 = paper.path("M0,260 L400,260  L800,260 L800,280 L0,280 L0,260").attr({stroke: "#777", fill: "#aaa"});
    var sea2 = paper.path("M0,460 L400,460  L800,460 L800,480 L0,480 L0,460").attr({stroke: "#777", fill: "#aaa"});
    var text1 = paper.text(282,380,"إلى أين؟ طريق البر من هنا -  ").attr({fontFamily:"Amiri",fontSize:"28px",opacity:0});
    var text2 = paper.text(250,180,"أنا مع الموج، أسير حيث يحملني -  ").attr({fontFamily:"Amiri",fontSize:"28px",opacity:0});

    var index = 0;
    var bx = 0;
    var progress = 0;


    up1(boat1, sea1);
    up2(boat2, sea2);

    function up1(e, f) {
        if (index === 2) {
            f.animate({d: "M0,260 L800,260  L800,260 L800,280 L0,280 L0,260"}, 100, mina.linear, function () {
                e.animate({transform: 't0,0 r-5'}, 500, mina.linear, function () {
                    e.animate({transform: 't-150,-30 r15'}, 2000, mina.linear, function () {
                        e.animate({transform: 't-180,-5 r-10'}, 1000, mina.linear, function () {
                            e.animate({transform: 't-220,-10 r5'}, 2000, mina.linear, function () {
                                bx = 250;
                                e.animate({transform: 't-240,-5 r-3'}, 1000, up1.bind(null, e, f));
                            });
                        });
                    });
                });
                f.animate({d: "M0,260 L600,230  L800,260 L800,280 L0,280 L0,260"}, 2000, mina.linear, function () {
                    f.animate({d: "M0,260 L0,260  L800,260 L800,280 L0,280 L0,260"}, 6000, mina.linear);
                });
            });
        } else {
            f.animate({d: "M0,262 L400,257  L800,262 L800,280 L0,280 L0,262"}, 2000, mina.linear);
            e.animate({transform: 't-' + bx + ',0 r3'}, 2000, mina.linear, down1.bind(null, e, f));
        }
    }

    function down1(e, f) {
        f.animate({d: "M0,258 L400,263  L800,258 L800,280 L0,280 L0,258"}, 2000, mina.linear);
        e.animate({transform: 't-' + bx + ',0 r-6'}, 2000, mina.linear, up1.bind(null, e, f));
    }


    function up2(e, f) {
        if (index++ === 4) {
            f.animate({d: "M0,460 L800,460  L800,460 L800,480 L0,480 L0,460"}, 100, mina.linear, function () {
                f.animate({d: "M0,460 L465,420  L800,460 L800,480 L0,480 L0,460"}, 2000, mina.linear, function () {
                    f.animate({d: "M0,460 L0,460  L800,460 L800,480 L0,480 L0,460"}, 4000, mina.linear);
                });
            });
            progress = progress + 20;
            e.animate({transform: 't' + progress + ',-27 r-30'}, 2000, mina.linear, down2.bind(null, e, f));
        } else {
            if (index < 8) {
                progress = progress + 45;
            }
            f.animate({d: "M0,462 L400,457  L800,462 L800,480 L0,480 L0,462"}, 2000, mina.linear);
            e.animate({transform: 't' + progress + ',0 r-6'}, 2000, mina.linear, down2.bind(null, e, f));
        }
    }

    function down2(e, f) {
        if (index < 8) {
            progress = progress + 40;
        }else{
            text1.animate({opacity:1},1000, mina.linear,function(){
                setTimeout( function() {
                    text2.animate({opacity: 1}, 1000);
                },2000);
            })
        }
        f.animate({d: "M0,458 L400,463  L800,458 L800,480 L0,480 L0,458"}, 2000, mina.linear);
        e.animate({transform: 't' + progress + ',0 r3'}, 2000, up2.bind(null, e, f));
    }


}
