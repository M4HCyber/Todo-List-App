const button = document.querySelector('button');
const selectBtn = document.querySelectorAll(".fa-circle");
const selectIcon = document.querySelectorAll('.select-icon');
const inputTodo = document.querySelector('input');
const todosContainer = document.querySelector('.todos-container');
const deleteTodo = document.querySelectorAll('.delete-icon');
const inputIconToggle = document.querySelector('.todo-input i');
const date = document.getElementById('date');
const InfoSelect = document.querySelector('.about-icon');
const themes = document.querySelectorAll('.theme');
const moreInfo = document.querySelector('.more-info')
const TodoImg = document.querySelector('.todo-img');
const info = document.getElementById('about');
const infoDetails = document.querySelector('.app-info');
const mainContainer = document.querySelector('.todo-container');

about.addEventListener('click', ()=>{
    infoDetails.style.display = 'block'
    mainContainer.style.filter = 'blur(3px)'

    const okbtn = document.querySelector('.okay')
    okbtn.addEventListener('click', ()=>{
        infoDetails.style.display = 'none'
        mainContainer.style.filter = 'blur(0)'
    });

});


let colors = [
    '#6A9C89', '#C599B6', '#AC1754', '#E07A5F',
    '#854836', '#AE445A', '#57A6A1','#3E3232'
];


InfoSelect.addEventListener('click', ()=>{
    moreInfo.classList.toggle('display')
})

for(let i = 0; i < themes.length; i++){
    themes[i].style.backgroundColor = colors[i]
    themes[i].addEventListener('click', ()=>{
       document.body.style.backgroundColor = themes[i].style.backgroundColor;
    })
}

function createElement(){
    let todoBox = document.createElement('div');
    todoBox.classList.add('todo');

    let selectArea = document.createElement('div')
    selectArea.classList.add('select-icon')
    
    let selectI = document.createElement('i')
    selectI.classList.add("fa-regular", "fa-circle");
    selectArea.appendChild(selectI);
    selectArea.append(inputTodo.value)
    
    selectArea.addEventListener('click', ()=>{
        const todoItem = selectArea.closest('.todo'); 
        if (todoItem) {
            todoItem.classList.toggle('completed');
            selectI.classList.toggle("fa-circle");
            selectI.classList.toggle("fa-check-circle");
        }  
            
    });

    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteIcon.classList.add("delete-icon");

    deleteIcon.addEventListener('click', ()=>{
        todosContainer.removeChild(todoBox)
        let todosContainerLength = todosContainer.children.length;
        if(todosContainerLength === 1){
             TodoImg.style.display = "block"
        }
    })

    todoBox.appendChild(selectArea)
    todoBox.appendChild(deleteIcon)
    todosContainer.appendChild(todoBox)
}

// Input Event Listener
inputTodo.addEventListener('click', ()=>{
    inputIconToggle.classList.remove('fa-solid', 'fa-plus')
    inputIconToggle.classList.add('fa-regular', 'fa-circle')
    inputTodo.value = " "

    inputTodo.addEventListener('keypress', (event)=>{
        if(event.key === "Enter" && inputTodo.value.trim() !== ''){
            createElement()
            inputTodo.value = " "
            TodoImg.style.display = 'none'
        }
    });
});


// function getDate() {
//     const now = new Date();
//     return now.toLocaleString('en-US', {
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true
//     });
// }


// Date Formatting
function getDate(){
    let now = new Date();
    let date = now.getDate()
    let month = now.getMonth() + 1;

    switch(month){
        case 1: 
        month = "Janaury";
        break;
        case 2:
            month = "February"
            break;
        case 3: 
            month = "March"
            break;
        case 4: 
            month = "April"
            break;
        case 5:
            month = "May"
            break;
        case 6:
            month = "June"
            break;
        case 7: 
            month = "July"
            break;
        case 8: 
            month = "August"
            break;
        case 9: 
            month = "September"
            break;
        case 10: 
            month = "October"
            break;
        case 11:
            month = "November"
            break;
        case 12:
            month = "December"
            break;
    }

    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if(hours < 10 || minutes < 10){
        `0${hours}`
        `0${minutes}`
    } if(hours > 12) {
        hours -= 12;
    }
    return `${date} ${month}, ${year} ${hours}:${minutes}`
}

date.textContent = getDate()

