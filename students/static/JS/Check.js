function checkForBlank(){
    if(
    document.getElementById('id').value == "" || document.getElementById('name').value == "" || 
    document.getElementById('dob').value == "" || document.getElementById('gpa').value=="" || 
    document.getElementById('gender').value == "" || document.getElementById('level').value == "" ||
    document.getElementById('status').value == "" || document.getElementById('department').value == "" ||
    document.getElementById('email').value == "" || document.getElementById('mobile').value == "")
    {
        event.preventDefault();
        alert('Please fill required cells');

        document.getElementById("id").style.borderColor = "red";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("dob").style.borderColor = "red";   
        document.getElementById("gpa").style.borderColor = "red";
        document.getElementById("gender").style.borderColor = "red";
        document.getElementById("level").style.borderColor = "red";
        document.getElementById("status").style.borderColor = "red";
        document.getElementById("department").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("mobile").style.borderColor = "red";

    }
}