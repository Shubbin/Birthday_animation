function downloadPDF(pdfName) {
  const link = document.createElement('a');
  link.href = pdfName;
  link.download = pdfName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
  const booksContainer = document.getElementById('booksContainer');
  const upButton = document.getElementById('upButton');
  const downButton = document.getElementById('downButton');

  upButton.addEventListener('click', function() {
      booksContainer.scrollBy({ top: -300, behavior: 'smooth' });
  });

  downButton.addEventListener('click', function() {
      booksContainer.scrollBy({ top: 300, behavior: 'smooth' });
  });
});
