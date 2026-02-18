function joinPage() {
    return `
        <h1>Join Chaste Dragon Squad</h1>
        <p>Isi formulir berikut untuk bergabung dengan Chaste Squad:</p>
        <form onsubmit="sendWhatsApp(event)">
            <input type="text" id="name" placeholder="Nama Lengkap" required><br><br>
            <input type="text" id="umur" placeholder="umur" required><br><br>
            <input type="text" id="askot" placeholder="asal kota" required><br><br>
            <input type="text" id="role" placeholder="Role" required><br><br>
            <input type="text" id="status" placeholder="status" required><br><br>
            <input type="text" id="walla" placeholder="ID walla" required><br><br>
            <button type="submit">Kirim ke WhatsApp</button>
        </form>
    `;
}

function sendWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const umur = document.getElementById('umur').value;
    const askot = document.getElementById('askot').value;
    const umur = document.getElementById('umur').value;
    const role = document.getElementById('role').value;
    const status = document.getElementById('status').value;
    const walla = document.getElementById('walla').value;
    const waNumber = '6288269017561'; // Ganti dengan nomor WhatsApp resmi
    const message = `Halo, saya ingin join Chaste Dragon Squad\nNama: ${name}\nUmur: ${umur}\nAsal Kota: ${askot}\nrole: ${role}\nstatus: ${status}\nWalla: ${walla}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}