function start() {
    //paper.path("M0,0 L800,600").attr({stroke: "black"});

    var box1 = paper.rect(0, 20, 800, 180).attr({stroke: "#777", fill: "none"});
    var box2 = paper.rect(0, 220, 800, 180).attr({stroke: "#777", fill: "none"});
    var boat1 = paper.path("M20,170 L120,160 L100,190 L25,190 L20,170").attr({stroke: "black"});
    var boat2a = paper.path("M780,370 L680,360 L700,390 L775,390 L780,370").attr({stroke: "black"});
    var boat2b = paper.rect(740, 305, 3, 70).attr({stroke: "none", transform: "r3"});
    var boat2c = paper.path("M685,355 L740,310 L737,360 L685,355").attr({stroke: "#777", fill: "none"});
    var boat2 = paper.group(boat2a, boat2b, boat2c);
    var sea1 = paper.path("M0,180 L400,180  L800,180 L800,200 L0,200 L0,180").attr({stroke: "#777", fill: "#aaa"});
    var sea2 = paper.path("M0,380 L400,380  L800,380 L800,400 L0,400 L0,380").attr({stroke: "#777", fill: "#aaa"});
    var text1 = paper.text(282,450,"إلى أين؟ طريق البر من هنا -  ").attr({fontFamily:"Amiri",fontSize:"28px",opacity:0});
    var text2 = paper.text(250,510,"أنا مع الموج، أسير حيث يحملني -  ").attr({fontFamily:"Amiri",fontSize:"28px",opacity:0});

    var index = 0;
    var bx = 0;
    var progress = 0;


    up1(boat1, sea1);
    up2(boat2, sea2);

    function up1(e, f) {
        if (index === 2) {
            f.animate({d: "M0,180 L0,180  L800,180 L800,200 L0,200 L0,180"}, 100, mina.linear, function () {
                e.animate({transform: 't0,0 r5'}, 500, mina.linear, function () {
                    e.animate({transform: 't150,-30 r-15'}, 2000, mina.linear, function () {
                        e.animate({transform: 't150,-5 r10'}, 1000, mina.linear, function () {
                            e.animate({transform: 't150,-10 r-5'}, 2000, mina.linear, function () {
                                bx = 150;
                                e.animate({transform: 't150,-5 r3'}, 1000, up1.bind(null, e, f));
                            });
                        });
                    });
                });
                f.animate({d: "M0,180 L200,150  L800,180 L800,200 L0,200 L0,180"}, 2000, mina.linear, function () {
                    f.animate({d: "M0,180 L800,180  L800,180 L800,200 L0,200 L0,180"}, 6000, mina.linear);
                });
            });
        } else {
            f.animate({d: "M0,182 L400,177  L800,182 L800,200 L0,200 L0,182"}, 2000, mina.linear);
            e.animate({transform: 't' + bx + ',0 r-3'}, 2000, mina.linear, down1.bind(null, e, f));
        }
    }

    function down1(e, f) {
        f.animate({d: "M0,178 L400,183  L800,178 L800,200 L0,200 L0,178"}, 2000, mina.linear);
        e.animate({transform: 't' + bx + ',0 r6'}, 2000, mina.linear, up1.bind(null, e, f));
    }


    function up2(e, f) {
        if (index++ === 4) {
            f.animate({d: "M0,380 L0,380  L800,380 L800,400 L0,400 L0,380"}, 100, mina.linear, function () {
                f.animate({d: "M0,380 L335,340  L800,380 L800,400 L0,400 L0,380"}, 2000, mina.linear, function () {
                    f.animate({d: "M0,380 L800,380  L800,380 L800,400 L0,400 L0,380"}, 4000, mina.linear);
                });
            });
            progress = progress + 20;
            e.animate({transform: 't-' + progress + ',-27 r30'}, 2000, mina.linear, down2.bind(null, e, f));
        } else {
            if (index < 8) {
                progress = progress + 45;
            }
            f.animate({d: "M0,382 L400,377  L800,382 L800,400 L0,400 L0,382"}, 2000, mina.linear);
            e.animate({transform: 't-' + progress + ',0 r6'}, 2000, mina.linear, down2.bind(null, e, f));
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
        f.animate({d: "M0,378 L400,383  L800,378 L800,400 L0,400 L0,378"}, 2000, mina.linear);
        e.animate({transform: 't-' + progress + ',0 r-3'}, 2000, up2.bind(null, e, f));
    }


}
