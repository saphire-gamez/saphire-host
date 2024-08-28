function generateRandomLink() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let link = '';
  for (let i = 0; i < 8; i++) {
    link += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return link;
}

function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (file) {
    const randomLink = generateRandomLink();
    const link = `https://yourdomain.com/${randomLink}`;
    document.getElementById('fileLink').textContent = `File uploaded! Link: ${link}`;
  } else {
    alert('Please select a file to upload.');
  }
}

function uploadPaste() {
  const pasteInput = document.getElementById('pasteInput').value;
  if (pasteInput) {
    const randomLink = generateRandomLink();
    const link = `https://saphirehost.unibutton.com/${randomLink}`;
    document.getElementById('pasteLink').textContent = `Paste uploaded! Link: ${link}`;
  } else {
    alert('Please enter some text to upload.');
  }
}
