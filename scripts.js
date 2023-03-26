const formEl = document.getElementById('form-container')
const nameEL = document.getElementById('name')
const gradeEL = document.getElementById('grade')
const submitButton = document.getElementById('submit-btn')
const studentList = document.getElementById('students')

let student = [];

function getStudentFromLocalStorage() {
    if(localStorage.getItem('student')){
        student = JSON.parse(localStorage.getItem('student'))
        
        studentList.innerHTML = '';

        student.forEach(studentitem => {
            const {name, grade} = studentitem;
            const studentListItem = document.createElement('li')
            studentListItem.textContent = `${name} - ${grade}`
            studentList.appendChild(studentListItem)
        })

    } else {

    }
}

const addStudent = (e) => {
    e.preventDefault();
    const addNewStudent = {
        name: nameEL.value,
        grade: gradeEL.value,
    }
    student.push(addNewStudent)
    
    localStorage.setItem("student", JSON.stringify(student));
    getStudentFromLocalStorage()
    
    formEl.reset()
}

submitButton.addEventListener('click', addStudent)
getStudentFromLocalStorage()