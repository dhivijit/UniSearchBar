//jshint esversion: 8

if (sessionStorage.getItem("query") == null) {
    sessionStorage.setItem("query", "");
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('desktop-content').style.display = 'none';
    document.getElementById('mobile-content').style.display = 'block';
}


if(localStorage.getItem("hour24")=="true"){
    document.getElementById("clockChange").innerText="12 Hour";
}else{
    document.getElementById("clockChange").innerText="24 Hour";
}

if(localStorage.getItem("clock")=="true"){
    document.getElementById("secChange").innerText="Hide";
}else{
    document.getElementById("secChange").innerText="Show";
}

/******** JSON Data ****************/

const am_code = {
    "australia": ".com.au",
    "brazil": ".com.br",
    "canada": ".ca",
    "china": ".cn",
    "france": ".fr",
    "germany": ".de",
    "india": ".in",
    "italy": ".it",
    "japan": ".co.jp",
    "mexico": ".com.mx",
    "netherlands": ".nl",
    "spain": ".es",
    "unitedkingdom": ".co.uk",
    "unitedstates": ".com",
    "us": ".com",
    "uk": ".co.uk",
    "usa": ".com",
};

const eb_code={
    "australia": ".com.au",
    "brazil": ".com",
    "canada": ".ca",
    "china": ".com.cn",
    "france": ".fr",
    "germany": ".de",
    "india": ".in",
    "italy": ".it",
    "japan": ".co.jp",
    "mexico": ".com",
    "netherlands": ".nl",
    "spain": ".es",
    "unitedkingdom": ".co.uk",
    "unitedstates": ".com",
    "us": ".com",
    "uk": ".co.uk",
    "usa": ".com"
};
/***************User Name**************/

if (localStorage.getItem("user") == null) {
    localStorage.setItem("user", "User");
}

if (localStorage.getItem("user") == "undefined") {
    localStorage.setItem("user", "User");
}

var usersname = localStorage.getItem("user");
usersname = usersname.slice(0, 1).toUpperCase() + usersname.slice(1, ).toLowerCase();
localStorage.setItem("user", usersname);

/**********Thanking*************/
if (localStorage.getItem("New") == null) {
    localStorage.setItem("New", true);
}

function newUser(param) {
    localStorage.setItem("New", param);
    window.location.reload();
}

if (localStorage.getItem("New") == "true") {
    console.log("Hello, " + usersname);
    console.log("Thank you so much for using this Universal Search Bar");
    console.log("If you want more websites to be added, you are free to do so");
    console.log("Feel free to contact Me");
    console.log("This Document is copyrighted by Dhivijit");
    console.log("© Dhivijit");
    console.log("The manual of the UniSearchBar is available at : https://github.com/dhivijit/UniSearchBar#unisearchbar")
    console.log("To remove this message type 'newUser(false)' in the console of this webpage");
}
/************Time and Date**********/

if (localStorage.getItem("clock") == null) {
    localStorage.setItem("clock", false);
}

function showSec(param1) {
    localStorage.setItem("clock", param1);
}

if (localStorage.getItem("hour24") == null) {
    localStorage.setItem("hour24", false);
}

function clockChanger(){
    if(localStorage.getItem("hour24")=="true"){
        localStorage.setItem("hour24", false);
        document.getElementById("clockChange").innerText="24 Hour";
    }else{
        localStorage.setItem("hour24", true);
        document.getElementById("clockChange").innerText="12 Hour";
    }
}

function secChanger(){
    if(localStorage.getItem("clock")=="true"){
        localStorage.setItem("clock", false);
        document.getElementById("secChange").innerText="Show";
    }else{
        localStorage.setItem("clock", true);
        document.getElementById("secChange").innerText="Hide";
    }
}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    var hour = date.getHours();
    if (4 <= hour && hour <= 11) {
        document.getElementById("greeting").innerHTML = "Good Morning, " + usersname;
    } else if (12 <= hour && hour < 17) {
        document.getElementById("greeting").innerHTML = "Good Afternoon, " + usersname;
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening, " + usersname;
    }
    if (localStorage.getItem("hour24") == "true") {
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        if (localStorage.getItem("clock") == "true") {
            var time = h + ":" + m + ":" + s + " ";
        } else {
            var time = h + ":" + m + " ";
        }
    } else {
        if (h == 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        if (h == 12) {
            session = "PM";
        }

        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        if (localStorage.getItem("clock") == "true") {
            var time = h + ":" + m + ":" + s + " " + session;
        } else {
            var time = h + ":" + m + " " + session;
        }
    }
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;


    setTimeout(showTime, 100);
}

showTime();

function showDate() {
    var date = new Date();
    var da = date.getDay();
    var dat = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var hour = date.getHours();

    switch (da) {
        case 0:
            da = "Sunday";
            break;
        case 1:
            da = "Monday";
            break;
        case 2:
            da = "Tuesday";
            break;
        case 3:
            da = "Wednesday";
            break;
        case 4:
            da = "Thursday";
            break;
        case 5:
            da = "Friday";
            break;
        case 6:
            da = "Saturday";
            break;
    }

    switch (m) {
        case 0:
            m = "January";
            break;
        case 1:
            m = "February";
            break;
        case 2:
            m = "March";
            break;
        case 3:
            m = "April";
            break;
        case 4:
            m = "May";
            break;
        case 5:
            m = "June";
            break;
        case 6:
            m = "July";
            break;
        case 7:
            m = "August";
            break;
        case 8:
            m = "September";
            break;
        case 9:
            m = "October";
            break;
        case 10:
            m = "November";
            break;
        case 11:
            m = "December";
            break;
    }
    var today = da + ",  " + dat + " " + m + ",  " + y;
    document.getElementById("today").innerText = today;
    document.getElementById("today").textContent = today;

    setTimeout(showDate, 10000);
}

showDate();

var sEngine = localStorage.getItem("engine");
function searchEngineChecker(s_Engine){
if (s_Engine == "google") {
    document.getElementById("sDuck").style.opacity = 0.5;
    document.getElementById("sYahoo").style.opacity = 0.5;
    document.getElementById("sBing").style.opacity = 0.5;
} else if (s_Engine == "duck") {
    document.getElementById("sGoogle").style.opacity = 0.5;
    document.getElementById("sYahoo").style.opacity = 0.5;
    document.getElementById("sBing").style.opacity = 0.5;
} else if (s_Engine == "yahoo") {
    document.getElementById("sDuck").style.opacity = 0.5;
    document.getElementById("sGoogle").style.opacity = 0.5;
    document.getElementById("sBing").style.opacity = 0.5;
} else if (s_Engine == "bing") {
    document.getElementById("sDuck").style.opacity = 0.5;
    document.getElementById("sYahoo").style.opacity = 0.5;
    document.getElementById("sGoogle").style.opacity = 0.5;
}
}
searchEngineChecker(sEngine);
if (localStorage.getItem("engine") == null) {
    localStorage.setItem("engine", "google");
}

function setEngine(param3) {
    localStorage.setItem("engine", param3);
    document.getElementById("sGoogle").style.opacity = 1;
    document.getElementById("sDuck").style.opacity = 1;
    document.getElementById("sYahoo").style.opacity = 1;
    document.getElementById("sBing").style.opacity = 1;
    searchEngineChecker(param3);
}



if (localStorage.getItem("co-code") == null) {
    localStorage.setItem("co-code", "us");
}

document.getElementById("dom_code").addEventListener("input", function (e) {
    localStorage.setItem("co-code", e.target.value.toLowerCase());
});

var usersDomain = localStorage.getItem("co-code");

if (am_code[usersDomain] === undefined) {
    usersDomain = "us";
    $("#shopCountry").show();
}

var domainAm = am_code[usersDomain];
var domainEb = eb_code[usersDomain];


function mainSearchExe(){
    $("#google").attr("href", "https://www.google.com/search?q=" + sessionStorage.getItem("query"));
    $("#duck").attr("href", "https://duckduckgo.com/?q=" + sessionStorage.getItem("query"));
    $("#yahoo").attr("href", "https://search.yahoo.com/search?p=" + sessionStorage.getItem("query"));
    $("#bing").attr("href", "https://www.bing.com/search?q=" + sessionStorage.getItem("query"));
    $("#youtube").attr("href", "https://www.youtube.com/results?search_query=" + sessionStorage.getItem("query"));
    $("#ebay").attr("href", "https://www.ebay" + domainEb + "/sch/" + sessionStorage.getItem("query"));
    $("#amazon").attr("href", "https://www.amazon" + domainAm + "/s?k=" + sessionStorage.getItem("query"));
    $("#github").attr("href", "https://github.com/search?q=" + sessionStorage.getItem("query"));
    $("#stackov").attr("href", "https://stackoverflow.com/search?q=" + sessionStorage.getItem("query"));
    $("#brainly").attr("href", "https://brainly.com/app/ask?entry=top&q=" + sessionStorage.getItem("query"));
    $("#wiki").attr("href", "https://wikipedia.org/w/index.php?search=" + sessionStorage.getItem("query"));
}

/********************Main Search Code**************/

document.getElementById("mainInput").addEventListener("input", function (e) {
    sessionStorage.setItem("query", e.target.value);

    mainSearchExe();
});

mainSearchExe();

document.getElementById("mainInput").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        document.getElementById(localStorage.getItem("engine")).click();
    }
});

/**************User Name Changer*************/

function hideWReload(){
    $("#name_dialog").slideUp();
    $("#user").show();
}

function showUsername() {
    $("#name_dialog").slideDown();
    $("#user").hide();
    $("#name_dialog").attr("autofocus", "true");
    $("#mainInput").attr("autofocus", "off");
    $("#user_name").attr("autofocus", "on");
}

document.getElementById("user_name").addEventListener("input", function (e) {
    localStorage.setItem("user", e.target.value);
    usersname=e.target.value;
});

document.getElementById("user_name").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        hideWReload();
    }
    if (e.keyCode === 27) {
        hideWReload();
    }
});

document.getElementById("dom_code").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        window.location.reload();
    }
    if (e.keyCode === 27) {
        hideWReload();
    }
});

$(document).mouseup(function (e) {
    if ($(e.target).closest(".userConfig").length === 0) {
        hideWReload();
    }
});