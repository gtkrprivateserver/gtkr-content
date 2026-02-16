document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const idgame = document.getElementById("idgame").value;

  const nomorWA = "6288269017561"; // GANTI dengan nomor WhatsApp kamu

  const pesan = `Halo Admin Chaste Kingdom 👑
Saya ingin mendaftar:

Nama: ${nama}
ID/Username: ${idgame}

Terima kasih!`;

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});