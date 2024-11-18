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
    const hari = getQueryParam('hari');

    // define hari
    let countDownDate;
    if (hari === '1' || hari === 'pertama') {
        countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
    } else if (hari === '2' || hari === 'kedua') {
        countDownDate = new Date("19 Nov, 2024 07:00:00").getTime();
    } else {
        // Default tanggal jika parameter tidak sesuai
        countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
    }

    // perhitungan
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Perhitungan hari, jam, menit, dan detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Menampilkan hasil pada elemen HTML
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Jika hitung mundur selesai
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
// Fungsi untuk mendapatkan nilai dari query string
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Mendapatkan nilai dari parameter 'hari'
    const hari = getQueryParam('hari');

    // Menentukan tanggal hitung mundur berdasarkan nilai 'hari'
    let countDownDate;
    if (hari === '1' || hari === 'pertama') {
        countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
    } else if (hari === '2' || hari === 'kedua') {
        countDownDate = new Date("19 Nov, 2024 07:00:00").getTime();
    } else {
        // Default tanggal jika parameter tidak sesuai
        countDownDate = new Date("18 Nov, 2024 07:00:00").getTime();
    }

    // Fungsi hitung mundur
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Perhitungan hari, jam, menit, dan detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Menampilkan hasil pada elemen HTML
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Jika hitung mundur selesai
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
