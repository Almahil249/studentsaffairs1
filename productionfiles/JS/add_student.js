document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    alert("Student added successfully!");
                    window.location.href = "/"; 
                } else {
                    alert("Error adding student: " + response.error);
                    location.reload(); 
                }
            }
        };

        xhr.open("POST", form.action);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(new URLSearchParams(new FormData(form)));
    });
});

/*document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    fetch("/add_student/", {
        method: "POST",
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Student Added successfully!");
        window.location.href = "/"; 
      } else {
        alert(data.error); 
      }
    })
    .catch(error => console.error(error));
});*/