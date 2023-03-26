function datasheet() {
    document.getElementById("sno").innerHTML = "1";
    document.getElementById("head").innerHTML = "20";
    document.getElementById("x").innerHTML = "70";
    document.getElementById("y").innerHTML = "17";
    document.getElementById("t").innerHTML = "10";

    var x=70;
    var y=17;
    var x1=60;
    var y1=19;
    var t=10;
    var area=30;
    var r=20;
    var qa= (area*r)/t;
    document.getElementById("qa").innerHTML = qa;

    var areaor=1.2667;
    var g=9.81;
    var c= areaor* Math.sqrt(2.5);
    var h=84.45;
    var qth= c * Math.sqrt(50);
    var qth=parseFloat(qth).toFixed( 4 );
    document.getElementById("qth").innerHTML = qth;

    
    var cd=qa/qth;
    var cd=parseFloat(cd).toFixed( 4 );
    document.getElementById("cd").innerHTML = cd;
    
    var de=4*x*h;
    var cv= x/Math.sqrt(de);
    var cv=parseFloat(cv).toFixed( 4 );
    document.getElementById("cv").innerHTML = cv;

    var cy=cd/cv;
    var cy=parseFloat(cy).toFixed( 4 );
    document.getElementById("cy").innerHTML = cy;

  }

