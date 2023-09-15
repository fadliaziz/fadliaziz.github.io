let i = 0;
let text = 'Hai, Saya Fadli Aziz';
let kecepatan = 100;
document.getElementById("tombol").style.cursor = "pointer";
function ketik() {
    let tombol = document.getElementById('tombol');
    tombol.style.display = "none";
    if (i < text.length) {
    document.getElementById("profile").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, kecepatan);
  }
}