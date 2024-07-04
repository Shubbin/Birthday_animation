document.addEventListener('DOMContentLoaded', function() {
    // Show the "Celebrate" button after the cake animation finishes
    setTimeout(function() {
      document.getElementById('celebrateButton').style.display = 'block';
    }, 6500); // Adjust this time to match your animation duration
  });

  document.getElementById('celebrateButton').addEventListener('click', function() {
    // Show confetti
    document.getElementById('confetti').style.display = 'block';

    // Redirect to the slider page after confetti animation
    setTimeout(function() {
      window.location.href = 'slider.html';
    }, 2000); // Adjust time to match confetti animation duration
  });
