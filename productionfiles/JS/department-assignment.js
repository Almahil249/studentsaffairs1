function fetchStudentData() {
    const studentId = document.getElementById("id").value;
  
    fetch(`/get-student-dept/${studentId}/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Student not found');
        }
      })
      .then(studentData => {
        document.getElementById("name").value = studentData.name;
        document.getElementById("level").value = studentData.level;
  
        if (studentData.level.toLowerCase() === 'third') {
          document.getElementById("department").disabled = false;
          document.getElementById("department").value = studentData.department;
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  document.getElementById("DeptAsign").addEventListener("submit", (event) => {
    const level = document.getElementById("level").value;
  
    if (level.toLowerCase() !== "third") {
      event.preventDefault();
      alert("Department assignment is allowed only for third-level students.");
    } else {
      alert("Department updated successfully!");
    }
  });
 