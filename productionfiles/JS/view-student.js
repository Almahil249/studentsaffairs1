let studentsData;

function fetchStudents() {
    fetch('/get-students-from-db/')  
        .then(response => response.json())
        .then(dataFromDjango => {
            studentsData = dataFromDjango;
            console.log(studentsData);
            renderTable();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function renderTable() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    studentsData.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = student.id;
        row.insertCell(1).textContent = student.name;

        const statusCell = row.insertCell(2);
        statusCell.textContent = student.status;

        const changeStatusCell = row.insertCell(3);
        const statusDropdown = document.createElement('select');
        statusDropdown.className = 'status-dropdown';
        ['active', 'inactive'].forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            statusDropdown.appendChild(optionElement);
        });

        statusDropdown.value = student.status;
        statusDropdown.addEventListener('change', () => {
            const studentId = student.id;
            const newStatus = statusDropdown.value;

            fetch(`/update-status/${studentId}/${newStatus}/`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log('Status updated successfully!');
                        statusCell.textContent = newStatus;
                    } else {
                        console.error('Error updating status:', data.error);
                    }
                })
                .catch(error => console.error('Error during AJAX request:', error));
        });

        changeStatusCell.appendChild(statusDropdown);
    });
}
