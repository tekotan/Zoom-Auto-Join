var enableAutoZoomJoin = true;
var joinedClass = false;
var currClass = "";
var evensZoomLinks = {
    509: ["AP CSA", "https://dublinusd.zoom.us/j/84969700643?pwd=RnV3dDN4TWZSOE8vZlVEQTF1RFRudz09"],
    594: ["AP French", "https://dublinusd.zoom.us/j/81877424149?pwd=blRnVHkwMVROUW9NQWhhYVFqb1Y4dz09"],
    679: ["AP Calc", "https://dublinusd.zoom.us/j/87047948086?pwd=WXVta2N2ZW1DeVUrU0xEMS9CVXJpZz09"]
};
var oddsZoomLinks = {
    509: ["AP Physics", "https://dublinusd.zoom.us/j/83588508994?pwd=OElpb3ZTb3M2SjJ3ZGpzaElXSkxTUT09"],
    594: ["Hon English", "https://dublinusd.zoom.us/j/88555758805?pwd=OVpIOTVnek4zNTRGZXhpUzRiN0Rldz09"],
    // 679: ["Mentorship", "https://dublinusd.zoom.us/j/89025856196?pwd=azUwd2xaNGc4QUdRZlJaazFBZ3VDQT09"],
    794: ["AP USH", "https://dublinusd.zoom.us/j/86809851339?pwd=L0hVUU5pSW5sK1E5NjAwTFRpOXlodz09"]
};


var functionID = setInterval(function() {
    var date = new Date();
    if (enableAutoZoomJoin){
        console.log("Checking");
        if (date.getDay() == 2 || date.getDay() == 5){
            for (let key in oddsZoomLinks){
                if ((date.getMinutes()+ date.getHours()*60) == key && !joinedClass){
                    // open zoom link in new tab
                    console.log("Open");
                    document.getElementById("classname").innerHTML = oddsZoomLinks[key][0];
                    joinedClass = true;
                    currClass = oddsZoomLinks[key][0]
                    window.open(oddsZoomLinks[key][1], "_blank");
                    setTimeout(5000);
                    window.close();
                }
                if (currClass != oddsZoomLinks[key][0] && (date.getMinutes() + date.getHours() * 60) == key){
                    joinedClass = false;
                }
                if ((date.getMinutes() + date.getHours() * 60) == key + 75) {
                    joinedClass = false;
                    document.getElementById("classname").innerHTML = "no class";
                }
            }
        } else if (date.getDay() == 1 || date.getDay() == 4){
            for (let key in evensZoomLinks) {
                if ((date.getMinutes() + date.getHours() * 60) == key && !joinedClass) {
                    // open zoom link in new tab
                    console.log("Open");
                    document.getElementById("classname").innerHTML = evensZoomLinks[key][0];
                    joinedClass = true;
                    currClass = evensZoomLinks[key][0]
                    window.open(evensZoomLinks[key][1], "_blank");
                }
                if (currClass != evensZoomLinks[key][0] && (date.getMinutes() + date.getHours() * 60) == key) {
                    joinedClass = false;
                }
                if ((date.getMinutes() + date.getHours() * 60) == key + 75) {
                    joinedClass = false;
                    document.getElementById("classname").innerHTML = "no class";
                }
            }
        }
        if (date.getDay() == 2 || date.getDay() == 4) {
            if ((date.getMinutes() + date.getHours() * 60) == 1034 && !joinedClass) {
                // open zoom link in new tab
                console.log("Open");
                document.getElementById("classname").innerHTML = "Data Structures and Algorithms";
                joinedClass = true;
                currClass = "Data Structures and Algorithms";
                window.open("https://pcvirtualclassroom.stanford.edu/p/canvas/redirectToRoomResource/OHS/6294//rag7x1rrpxmb//", "_blank");
            }
            if (currClass != "Data Structures and Algorithms" && (date.getMinutes() + date.getHours() * 60) == 1034) {
                joinedClass = false;
            }
            if ((date.getMinutes() + date.getHours() * 60) == 1034+60){
                joinedClass = false;
                document.getElementById("classname").innerHTML = "no class";
            }
        }
        if (date.getDay() == 5) {
            if ((date.getMinutes() + date.getHours() * 60) == 679 && !joinedClass) {
                // open zoom link in new tab
                console.log("Open");
                document.getElementById("classname").innerHTML = "Mentorship";
                joinedClass = true;
                currClass = "Mentorship";
                window.open("https://dublinusd.zoom.us/j/89025856196?pwd=azUwd2xaNGc4QUdRZlJaazFBZ3VDQT09", "_blank");
            }
            if (currClass != "Mentorship" && (date.getMinutes() + date.getHours() * 60) == 1034) {
                joinedClass = false;
            }
            if ((date.getMinutes() + date.getHours() * 60) == 1034 + 60) {
                joinedClass = false;
                document.getElementById("classname").innerHTML = "no class";
            }
        }
        if (date.getDay() == 3) {
            if ((date.getMinutes() + date.getHours() * 60) == 549 && !joinedClass) {
                // open zoom link in new tab
                console.log("Open");
                document.getElementById("classname").innerHTML = "Advisory";
                joinedClass = true;
                currClass = "Advisory";
                window.open("https://dublinusd.zoom.us/j/85400921995?pwd=WXhWUUgvbm8rVVFFbUhySTVsUWw3QT09", "_blank");
            }
            if (currClass != "Advisory" && (date.getMinutes() + date.getHours() * 60) == 1034) {
                joinedClass = false;
            }
            if ((date.getMinutes() + date.getHours() * 60) == 549 + 30) {
                joinedClass = false;
                document.getElementById("classname").innerHTML = "no class";
            }
        }
  }
}, 10*1000)