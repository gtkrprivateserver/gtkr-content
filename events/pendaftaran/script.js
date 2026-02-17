document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const walla = document.getElementById("walla").value;
const askot = document.getElementById("askot").value;
const role = document.getElementById("role").value;
const status = document.getElementById("status").value;

  const nomorWA = "6288269017561"; // GANTI dengan nomor WhatsApp kamu

  const pesan = `Halo Admin Chaste Dragon 🐲
Saya ingin mendaftar:

Nama: ${nama}
ID/Username walla: ${walla}
Asal Kota: ${Askot}
Role: ${role}
Status: ${status}

Terima kasih!`;

Join Our Channel WhatsApp
https://whatsapp.com/channel/0029VbBzqwoISTkNPsElaJ0m

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});