// Fitur JavaScript:
// Membuat realtime coundown

const countDownEl = document.getElementById('countdown');

// Menentukan selisih waktu sekarang dengan waktu rilis One Piece tiap hari Minggu
const hariIni = new Date();
const zeroDate = new Date(0);
let selisihHari = (((hariIni-zeroDate)/(1000*60*60*24))%7); // Selisih hari ini dengan hari minggu selanjutnya
// Karena basis selisihnya adalah hari Kamis waktu EPOCH maka akan dikonversi menjadi hari Minggu dengan syarat berikut
if (selisihHari > 3) {
    selisihHari -= 3;
} else {
    selisihHari +=4;
};
let timer = Math.floor((7 - selisihHari)*24*60*60);

// Display & Update Timer
const updateCountdown = () => {
    const minutes = Math.floor((timer / 60)%60)
    const hours = Math.floor((timer/(60*60))%24)
    const days = Math.floor(timer/(60*60*24))
    let seconds = timer % 60;
    countDownEl.innerHTML = `${days}: ${hours}: ${minutes}: ${seconds}`
    timer--;
}

setInterval(updateCountdown, 1000)



