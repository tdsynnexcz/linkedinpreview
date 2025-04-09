
function generatePreview() {
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value.replace(/\n/g, '<br>');

  document.getElementById('preview-name').innerText = name;
  document.getElementById('preview-title').innerText = title;
  document.getElementById('preview-content').innerHTML = content;
  document.getElementById('preview').style.display = 'block';
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function toggleView() {
  document.body.classList.toggle('mobile');
}
