function goToPage0() {
    $('#svg').empty();
    addNav();
    //paper.path("M0,0 L800,600").attr({stroke: "black"});
    var title = paper.text(400,50,"الوجهة").attr({fontFamily:"Droid Arabic Kufi",fontSize:"36px",textAnchor:"middle"});
    var box1 = paper.rect(0, 100, 800, 180).attr({stroke: "#777", fill: "none"});
    var boat1 = paper.path("M780,250 L680,240 L700,270 L775,270 L780,250").attr({stroke: "black"});
    var boat2a = paper.path("M20,250 L120,240 L100,270 L25,270 L20,250").attr({stroke: "black"});
    var boat2b = paper.rect(60, 185, 3, 70).attr({stroke: "none", transform: "r-3"});
    var boat2c = paper.path("M115,235 L63,190 L66,240 L115,235").attr({stroke: "#777", fill: "none"});
    var boat2 = paper.group(boat2a, boat2b, boat2c);
    var sea1 = paper.path("M0,260 L400,260  L800,260 L800,280 L0,280 L0,260").attr({stroke: "#777", fill: "#aaa"});
     var text1 = paper.text(400,380,"إلى أين؟ طريق البر من هنا -  ").attr({fontFamily:"Amiri",fontSize:"28px",opacity:0,textAnchor:"middle"});
    var text2 = paper.text(400,430,"أنا مع الموج، أسير حيث يحملني -  ").attr({fontFamily:"Amiri",fontSize:"28px",opacity:0,textAnchor:"middle"});

    var index = 0;
    var bx = 0;
    var progress = 0;


    up1(boat1, boat2, sea1);


    function up1(e,g, f) {
        if (index < 4) {
            progress = progress + 30;
        }else{
            text1.animate({opacity:1},1000, mina.linear,function(){
                setTimeout( function() {
                    text2.animate({opacity: 1}, 1000);
                },2000);
            })
        }
        if (index++ === 2) {
            f.animate({d: "M0,260 L800,260  L800,260 L800,280 L0,280 L0,260"}, 100, mina.linear, function () {

                g.animate({transform: 't' + progress + ',0 r3'}, 2000, mina.linear);
                e.animate({transform: 't0,0 r-5'}, 500, mina.linear, function () {

                    g.animate({transform: 't' + progress + ',-3 r-6'}, 2000, mina.linear);
                    e.animate({transform: 't-130,-25 r15'}, 2000, mina.linear, function () {

                        g.animate({transform: 't' + progress + ',-7 r-3'}, 1000, mina.linear);
                        e.animate({transform: 't-160,-8 r-10'}, 1000, mina.linear, function () {
                            progress = progress + 10;
                            g.animate({transform: 't' + progress + ',-15 r-15'}, 2000, mina.linear);
                            e.animate({transform: 't-190,-10 r5'}, 2000, mina.linear, function () {
                                bx = 200;
                                progress = progress + 10;
                                g.animate({transform: 't' + progress + ',0 r-6'}, 1000, mina.linear);
                                e.animate({transform: 't-200,-5 r-3'}, 1000, down1.bind(null, e,g, f));
                            });
                        });
                    });
                });
                f.animate({d: "M0,260 L600,235  L800,260 L800,280 L0,280 L0,260"}, 2000, mina.linear, function () {
                    f.animate({d: "M0,260 L400,235  L800,260 L800,280 L0,280 L0,260"}, 2000, mina.linear, function () {
                        f.animate({d: "M0,260 L0,260  L800,260 L800,280 L0,280 L0,260"}, 4000, mina.linear);
                    });
                });
            });

        } else {
            f.animate({d: "M0,262 L400,257  L800,262 L800,280 L0,280 L0,262"}, 2000, mina.linear);
            e.animate({transform: 't-' + bx + ',0 r3'}, 2000, mina.linear, down1.bind(null, e,g, f));
            g.animate({transform: 't' + progress + ',0 r-6'}, 2000, mina.linear);
        }


    }

    function down1(e, g,f) {
        if (index < 4) {
            progress = progress + 30;
        }
        f.animate({d: "M0,258 L400,263  L800,258 L800,280 L0,280 L0,258"}, 2000, mina.linear);
        e.animate({transform: 't-' + bx + ',0 r-6'}, 2000, mina.linear, up1.bind(null, e,g, f));
        g.animate({transform: 't' + progress + ',0 r3'}, 2000, mina.linear);


    }



}
