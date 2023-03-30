window.onload = function() {
    // Accessing navigator properties
    var userAgent = navigator.userAgent;
    var language = navigator.language;
    var platform = navigator.platform;

    // Accessing screen properties
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var colorDepth = screen.colorDepth;

    // Displaying the values in the HTML document
    document.getElementById("userAgent").innerHTML = "User Agent: " + userAgent;
    document.getElementById("language").innerHTML = "Language: " + language;
    document.getElementById("platform").innerHTML = "Platform: " + platform;
    document.getElementById("screenWidth").innerHTML = "Screen Width: " + screenWidth;
    document.getElementById("screenHeight").innerHTML = "Screen Height: " + screenHeight;
    document.getElementById("colorDepth").innerHTML = "Color Depth: " + colorDepth;
  }

  const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const messageInput = document.getElementById('message');
      const webSecurityCheckbox = document.getElementById('web-security');

      if (nameInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity()) {
        // valid inputs
        let message = messageInput.value;
        if (message.length > 0) {
          message = message.substring(0, 150);
        }
        alert('Thanks for contacting us! We will get back to you soon.' + (webSecurityCheckbox.checked ? '\n\nWe will send you information about web security.' : ''));
        form.reset();
      } else {
        // invalid inputs
        alert('Please fill out all fields correctly.');
        event.preventDefault();
      }
    });