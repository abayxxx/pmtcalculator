let usiaAnak = document.querySelector("#inputUsia");
let biayaPendidikanAwal = document.querySelector("#inputPv");
let inflasi = document.querySelector("#inputInflasi");
let bungaInvestasi = document.querySelector("#inputInvestasi");
let jangkaWaktu = document.querySelector("#inputJangkaWaktu");
let button = document.querySelector("#button");
let fV = document.querySelector("#inputFv");
let tabunganReguler = document.querySelector("#inputReguler");

function biayaPendidikan(biayaPendidikanAwal, inflasi) {
    let biayaPendidikanNext = biayaPendidikanAwal * (Math.pow(1 + inflasi, 18 - usiaAnak.value));

    return Math.round(biayaPendidikanNext);
}

console.log(biayaPendidikan(biayaPendidikanAwal, inflasi));


function tBulanan(rate, nperiod, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return (pv + fv) / nperiod;

    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * (pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };

    return Math.round(pmt);
}

console.log(tBulanan(0.1 / 12, 96, 0, 107179441, 1));

button.addEventListener("click", (e) => {
    e.preventDefault()
    jangkaWaktu.value = 18 - usiaAnak.value;
    fV.value = biayaPendidikan(biayaPendidikanAwal.value, inflasi.value / 100);
    tabunganReguler.value = tBulanan(bungaInvestasi.value / 100 / 12, jangkaWaktu.value * 12, 0, fV.value, 1)
    console.log(tabunganReguler.value)
});
