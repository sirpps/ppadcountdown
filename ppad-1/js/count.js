/*(old) var countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    // if (distance < 0) {
    // 	clearInterval(x);
    // 	document.getElementById("count").innerHTML = "Happy New Year 2024!";
    // }
}, 1000);*/
    // get hari query
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/*    const hari = getQueryParam('hari');

    // define hari
    let countDownDate;
    if (hari === '1' || hari == 'pertama') {
        countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
    } else if (hari === '2' || hari == 'kedua') {
        countDownDate = new Date("19 Nov, 2024 07:00:00").getTime();
    } else if (hari === '3' || hari == 'ketiga') {
        countDownDate = new Date("20 Nov, 2024 07:00:00").getTime();
    } else {
        // Default tanggal jika parameter tidak sesuai
        countDownDate = new Date("1 Jan, 2024 07:00:00").getTime();
    }*/

function setCountdownDate() {
    let hari = getQueryParam("hari");
    let countDownDate;
    switch (hari) {
        case '1':
        case 'pertama':
            countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
            break;
        case '2':
        case 'kedua':
            countDownDate = new Date("19 Nov, 2024 07:00:00").getTime();
            break;
        case '3':
        case 'ketiga':
            countDownDate = new Date("20 Nov, 2024 07:00:00").getTime();
            break;
        case '4':
        case 'keempat':
            countDownDate = new Date("21 Nov, 2024 07:00:00").getTime();
        default:
            countDownDate = new Date("22 Nov, 2024 07:00:00").getTime(); // default ke hari pertama
    }
    return countDownDate;
}
var countDownDate = setCountdownDate();

    // perhitungan
//var countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    /* if (distance < 0) {
    // 	clearInterval(x);
    // 	document.getElementById("count").innerHTML = "Happy New Year 2024!";
    // }
}, 1000);*/
