const form = document.getElementById('uploadForm');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);
  const msg = document.getElementById('msg');

  try {
    const res = await fetch('/api/upload.js', { method:'POST', body:formData });
    const data = await res.json();
    if(data.success) msg.textContent='Upload berhasil!';
    else msg.textContent='Upload gagal!';
  } catch(err){
    msg.textContent='Upload gagal!';
  }
});
