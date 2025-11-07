const allVideos = [
  { title:"Video 1", url:"https://www.w3schools.com/html/mov_bbb.mp4", thumbnail:"https://via.placeholder.com/250x150.png?text=Video+1", duration:"0:10" },
  { title:"Video 2", url:"https://www.w3schools.com/html/movie.mp4", thumbnail:"https://via.placeholder.com/250x150.png?text=Video+2", duration:"0:15" },
  { title:"Video 3", url:"https://www.w3schools.com/html/mov_bbb.mp4", thumbnail:"https://via.placeholder.com/250x150.png?text=Video+3", duration:"0:12" },
  { title:"Video 4", url:"https://www.w3schools.com/html/movie.mp4", thumbnail:"https://via.placeholder.com/250x150.png?text=Video+4", duration:"0:08" },
  { title:"Video 5", url:"https://www.w3schools.com/html/mov_bbb.mp4", thumbnail:"https://via.placeholder.com/250x150.png?text=Video+5", duration:"0:20" },
  { title:"Video 6", url:"https://www.w3schools.com/html/movie.mp4", thumbnail:"https://via.placeholder.com/250x150.png?text=Video+6", duration:"0:14" },
];

let videos = [];
const batchSize = 3;
let currentIndex = 0;

const container = document.getElementById('video-container');
const loadMoreBtn = document.getElementById('load-more');

function renderVideos(list) {
  list.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <div class="thumb-container">
        <img src="${v.thumbnail}" alt="${v.title}">
        <span class="duration">${v.duration}</span>
      </div>
      <h3>${v.title}</h3>
    `;
    card.addEventListener('click', () => {
      document.getElementById('modal-video').src = v.url;
      document.getElementById('modal-title').innerText = v.title;
      document.getElementById('video-modal').style.display = 'block';
    });
    container.appendChild(card);
  });
}

function loadVideos() {
  const nextBatch = allVideos.slice(currentIndex, currentIndex + batchSize);
  videos = videos.concat(nextBatch);
  renderVideos(nextBatch);
  currentIndex += batchSize;
  if(currentIndex >= allVideos.length) loadMoreBtn.style.display = 'none';
}

loadMoreBtn.addEventListener('click', loadVideos);
loadVideos();

// Search
document.getElementById('search-bar').addEventListener('input', e=>{
  const query = e.target.value.toLowerCase();
  container.innerHTML='';
  const filtered = allVideos.filter(v => v.title.toLowerCase().includes(query));
  renderVideos(filtered);
});

// Modal
const modal = document.getElementById('video-modal');
document.querySelector('.close-btn').onclick = () => {
  modal.style.display = 'none';
  document.getElementById('modal-video').pause();
}
window.onclick = e => { if(e.target==modal){ modal.style.display='none'; document.getElementById('modal-video').pause(); } }
