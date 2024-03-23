document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process_form.php", true); // Replace "process_form.php" with your backend script
    xhr.onload = function(){
      if (xhr.status == 200) {
        document.getElementById("response").innerHTML = xhr.responseText;
        document.getElementById("contactForm").reset(); // Reset form after successful submission
      }
    };
    xhr.send(formData);
  });