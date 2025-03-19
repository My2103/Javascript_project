function addList(){
    var subject = document.getElementById("subject_list").value;
    var registration = document.getElementById("registration_list");

    //Create new option
    var newOption = document.createElement("Option");
    newOption.text = subject;
    newOption.value = subject;

    //Add option to the registration list
    registration.add(newOption);
}

function removeList(){
    var registration = document.getElementById("registration_list");
    var selectedOption = registration.options[registration.selectedIndex];
    registration.remove(selectedOption.index);
}

function addTwoList(){
    var subject = document.getElementById("subject_list");
    var registration = document.getElementById("registration_list");

    //Take two option from the subject list
    var selectedOptions = subject.selectedOptions;
    for(var i = 0; i < selectedOptions.length; i++){
        var selectedOption = selectedOptions[i];

    //Create new option
    var newOption = document.createElement("option");
    newOption.text = selectedOption.text;
    newOption.value = selectedOption.value;

    //Add option to the registration list
    registration.add(newOption);
    }
}

function removeTwoList(){
    var registration = document.getElementById("registration_list");
    var selectedOptions = registration.selectedOptions;

    //Create a for loop to remove to option
    for (var i = selectedOptions.length - 1; i >= 0; i--) {
        var selectedOption = selectedOptions[i];
        registration.remove(selectedOption.index);
    }

}

function submitData(){
    event.preventDefault();

    var studentID = document.getElementById('studentID').value;
    var studentName = document.getElementById('name').value;
    var DoB = document.getElementById('birthday').value;
    var gender = "";

    if(document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    } else {
        gender = document.getElementById('female').value;
    }

    var table = document.getElementById('dataTable');
    table.style.display = "table";

    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = studentID;
    cell2.innerHTML = studentName;
    cell3.innerHTML = DoB;
    cell4.innerHTML = gender;
}

function registeredData() {
    var studentID = document.getElementById('studentID').value;
    var studentName = document.getElementById('name').value;
    var DoB = document.getElementById('birthday').value;
    var gender = "";

    if(document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    } else {
        gender = document.getElementById('female').value;
    }

    document.getElementById('studentIDInfo').textContent = `Student ID: ${studentID}`;
    document.getElementById('nameInfo').textContent = `Name: ${studentName}`;
    document.getElementById('birthdayInfo').textContent = `Date of Birth: ${DoB}`;
    document.getElementById('genderInfo').textContent = `Gender: ${gender}`;

    var subjectList = document.getElementById('subjectList');
    var select = document.getElementById('registration_list');

    // Clear existing list items
    while (subjectList.firstChild) {
    subjectList.removeChild(subjectList.firstChild);
    }

    // Add all subjects to the list
    for (var i = 0; i < select.options.length; i++) {
    var option = select.options[i];
    var li = document.createElement('li');
    li.textContent = option.value;
    subjectList.appendChild(li);
    }

    // Add selected subjects to the list
    Array.from(select.selectedOptions).forEach(option => {
    var li = document.createElement('li');
    li.textContent = option.value;
    subjectList.appendChild(li);
    });

    // Display the modal
    var modal = document.getElementById('infoBoard');
    modal.style.display = "block";
}

// Function to close the modal
function closeBoard() {
    var modal = document.getElementById('infoBoard');
    modal.style.display = "none";
 }
