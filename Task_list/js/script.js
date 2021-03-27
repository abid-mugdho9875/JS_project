//Define UI element
let form = document.querySelector('#form_task')
let task_list = document.querySelector('ul')
let clear_task = document.querySelector('#clear_task')
let filter = document.querySelector('#filter_task')
let taskInput = document.querySelector('#new_task')

//Define event_listener
form.addEventListener('submit',addTask);
task_list.addEventListener('click',removeTask)
clear_task.addEventListener('click',clearTask)
filter.addEventListener('keyup',filterTask)
document.addEventListener('DOMContentLoaded',getTask)
//Define Function
//addTask
function addTask(e){
    if(taskInput.value === ''){
        alert('Add Task!');
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));
        task_list.appendChild(li)
        let link = document.createElement('a')
        link.setAttribute('href','#');
        link.innerHTML = 'x'
        li.appendChild(link)
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value ='';
        
    }
    e.preventDefault();
}
function removeTask(e){
    if (e.target.hasAttribute('href')){
       if(confirm('Are you sure?')){
           let ele = e.target.parentElement
           ele.remove()
           removeFromLS(ele);
       }
        
    }
    
}
function clearTask(e){
    task_list.innerHTML='';
    localStorage.clear()
}
function filterTask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task =>{
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';

        }
        else
        {
            task.style.display = 'none';
        }
    })
    
}
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function getTask(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(task =>{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ' '));
        task_list.appendChild(li)
        let link = document.createElement('a')
        link.setAttribute('href','#');
        link.innerHTML = 'x'
        li.appendChild(link)
    })
}
function removeFromLS(taskItem){
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks=[];
        }
        else{
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        let li = taskItem;
        li.removeChild(li.lastChild)
        tasks.forEach((task,index) => {
            if(li.textContent.trim() === task){
                tasks.splice(index,1)
            }
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }