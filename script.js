
function generatePreview() {
  document.getElementById('out-name').innerText = document.getElementById('name').value;
  document.getElementById('out-title').innerText = document.getElementById('title').value;
  document.getElementById('out-content').innerText = document.getElementById('content').value;
  document.getElementById('post').style.display = 'block';
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function toggleMobile() {
  document.body.classList.toggle('mobile');
}
