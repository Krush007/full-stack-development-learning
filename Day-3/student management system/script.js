let students = [];
let editIndex = -1;

function getGrade(marks){

    if(marks >= 90) return "A";
    if(marks >= 75) return "B";
    if(marks >= 60) return "C";
    if(marks >= 40) return "D";

    return "F";
}

function addOrUpdateStudent(){

    const name =
        document.getElementById("name").value.trim();

    const roll =
        document.getElementById("roll").value.trim();

    const course =
        document.getElementById("course").value.trim();

    const marks =
        Number(document.getElementById("marks").value);

    if(!name || !roll || !course || isNaN(marks)){
        alert("Please fill all fields");
        return;
    }

    const student = {
        name,
        roll,
        course,
        marks,
        grade: getGrade(marks)
    };

    if(editIndex === -1){
        students.push(student);
    }else{
        students[editIndex] = student;
        editIndex = -1;
    }

    clearForm();
    displayStudents(students);
    updateStats();
}

function displayStudents(data){

    const tbody =
        document.getElementById("studentList");

    tbody.innerHTML = "";

    data.forEach((student,index)=>{

        tbody.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.course}</td>
                <td>${student.marks}</td>
                <td>${student.grade}</td>
                <td>
                    <button
                        class="edit-btn"
                        onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function editStudent(index){

    const student = students[index];

    document.getElementById("name").value =
        student.name;

    document.getElementById("roll").value =
        student.roll;

    document.getElementById("course").value =
        student.course;

    document.getElementById("marks").value =
        student.marks;

    editIndex = index;
}

function deleteStudent(index){

    const confirmDelete =
        confirm("Are you sure you want to delete?");

    if(confirmDelete){

        students.splice(index,1);

        displayStudents(students);
        updateStats();
    }
}

function searchStudent(){

    const keyword =
        document.getElementById("search")
        .value
        .trim()
        .toLowerCase();

    if(keyword === ""){
        alert("Enter a student name");
        return;
    }

    const filteredStudents =
        students.filter(student =>
            student.name
            .toLowerCase()
            .includes(keyword)
        );

    displayStudents(filteredStudents);
}

function updateStats(){

    document.getElementById("total").textContent =
        students.length;

    const totalMarks =
        students.reduce(
            (sum,student) =>
                sum + student.marks,
            0
        );

    const average =
        students.length > 0
        ? (totalMarks / students.length).toFixed(2)
        : 0;

    const highest =
        students.length > 0
        ? Math.max(...students.map(
            student => student.marks
        ))
        : 0;

    document.getElementById("average").textContent =
        average;

    document.getElementById("highest").textContent =
        highest;
}

function clearForm(){

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
}