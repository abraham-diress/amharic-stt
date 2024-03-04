document.getElementById('copyButton').addEventListener('click', () => {
  const textBox = document.getElementById('textBox');
  textBox.select();
  textBox.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');

  // Optional: Show a message indicating that the text was copied.
  alert('Text copied to clipboard.');
});
