let studentsData;

function fetchAndRenderActiveStudents() {
  fetch('/get-students-from-db/')
    .then(response => response.json())
    .then(dataFromDjango => {
      studentsData = dataFromDjango.map(student => ({
        id: student.id,
        name: student.name,
        dob: student.dob,
        gpa: student.gpa,
        gender: student.gender,
        level: student.level,
        status: student.status,
        department: student.department,
        email: student.email,
        mobile: student.mobile
      }));

      console.log(studentsData);
      searchActiveStudents();
    })
    .catch(error => console.error('Error fetching data:', error));
}

function searchActiveStudents() {
  const name = document.getElementById("searchName").value;
  const activeStudents = studentsData.filter(student => student.status === "active");
  const filteredStudents = activeStudents.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
  renderActiveStudentsTable(filteredStudents);
}

function renderActiveStudentsTable(activeStudents) {
  console.log("Rendering table with data:", activeStudents);
  var tableHtml = "<table>";
  tableHtml += "<tr><th>ID</th><th>Name</th><th>Date of Birth</th><th>GPA</th><th>Gender</th><th>Level</th><th>Status</th><th>Department</th><th>Email</th><th>Mobile Number</th><th>Action</th></tr>";

  for (var i = 0; i < activeStudents.length; i++) {
    tableHtml += "<tr>";
    tableHtml += "<td>" + activeStudents[i].id + "</td>";
    tableHtml += "<td>" + activeStudents[i].name + "</td>";
    tableHtml += "<td>" + activeStudents[i].dob + "</td>";
    tableHtml += "<td>" + activeStudents[i].gpa + "</td>";
    tableHtml += "<td>" + activeStudents[i].gender + "</td>";
    tableHtml += "<td>" + activeStudents[i].level + "</td>";
    tableHtml += "<td>" + activeStudents[i].status + "</td>";
    tableHtml += "<td>" + activeStudents[i].department + "</td>";
    tableHtml += "<td>" + activeStudents[i].email + "</td>";
    tableHtml += "<td>" + activeStudents[i].mobile + "</td>";

    tableHtml += "<td><a onclick='assignDepartment(" + activeStudents[i].id + ")' style=\"color: rgb(26, 0, 171);\">Assign Department</a></td>";
    tableHtml += "</tr>";
  }

  tableHtml += "</table>";
  document.getElementById("activeStudentsTable").innerHTML = tableHtml;
}

function assignDepartment(studentId) {
  window.location.href = '/Department_Assignment.html?id=' + studentId;
}

/*let studentsData; 

function FetchFromDjango() {
    fetch('/get-students-from-db/')
    .then(response => response.json())
    .then(dataFromDjango => {
        studentsData = dataFromDjango.map(student => ({
            id: student.id,
            name: student.name,
            dob: student.dob,
            gpa: student.gpa,
            gender: student.gender,
            level: student.level,
            status: student.status,
            department: student.department,
            email: student.email,
            mobile: student.mobile
        }));

        console.log(studentsData);
        searchActiveStudents();
    })
    .catch(error => console.error('Error fetching data:', error));
}


function searchActiveStudents() {
const name = document.getElementById("searchName").value;
const activeStudents = studentsData.filter(student => student.status === "active");            const filteredStudents = activeStudents.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
renderActiveStudentsTable(filteredStudents);
}

function renderActiveStudentsTable(activeStudents) {
console.log("Rendering table with data:", activeStudents);            var tableHtml = "<table>";
tableHtml += "<tr><th>ID</th><th>Name</th><th>Date of Birth</th><th>GPA</th><th>Gender</th><th>Level</th><th>Status</th><th>Department</th><th>Email</th><th>Mobile Number</th></tr>";

for (var i = 0; i < activeStudents.length; i++) {
tableHtml += "<tr>";
tableHtml += "<td>" + activeStudents[i].id + "</td>";
tableHtml += "<td>" + activeStudents[i].name + "</td>";
tableHtml += "<td>" + activeStudents[i].dob + "</td>";
tableHtml += "<td>" + activeStudents[i].gpa + "</td>";
tableHtml += "<td>" + activeStudents[i].gender + "</td>";
tableHtml += "<td>" + activeStudents[i].level + "</td>";
tableHtml += "<td>" + activeStudents[i].status + "</td>";
tableHtml += "<td>" + activeStudents[i].department + "</td>";
tableHtml += "<td>" + activeStudents[i].email + "</td>";
tableHtml += "<td>" + activeStudents[i].mobile + "</td>";
tableHtml += "</tr>";
}

tableHtml += "</table>";
document.getElementById("activeStudentsTable").innerHTML = tableHtml;
}
*/