document.getElementById("button1").addEventListener("click", function () {
  const studentId = document.getElementById("id").value;
  fetch(`/get-student-dept/${studentId}/`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error); 
      } else {
        populateForm(data);
      }
    })
    .catch(error => console.error(error));
});


function populateForm(studentData) {
  document.getElementById("name").value = studentData.name;
  document.getElementById("dob").value = studentData.dob;
  document.getElementById("gpa").value = studentData.gpa;
  document.getElementById("gender").value = studentData.gender;
  document.getElementById("level").value = studentData.level;
  document.getElementById("status").value = studentData.status;
  document.getElementById("department").value = studentData.department;
  document.getElementById("email").value = studentData.email;
  document.getElementById("mobile").value = studentData.mobile;
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); 
  const formData = new FormData(document.querySelector("form"));
  fetch("/update-student/", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Student updated successfully!");
        window.location.href = "/"; 
      } else {
        alert(data.error); 
      }
    })
    .catch(error => console.error(error));
});

document.getElementById("delete").addEventListener("click", function (event) {
  event.preventDefault();
  const studentId = document.getElementById("id").value;
  if (confirm("Are you sure you want to delete this student?")) {
    fetch(`/delete-student/${studentId}/`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          alert("Student deleted successfully!");
          window.location.href = "/"; 
        } else {
          alert("An error occurred while deleting the student.");
        }
      })
      .catch(error => console.error(error));
  }
});
