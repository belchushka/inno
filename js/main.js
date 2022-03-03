const addBtn = document.querySelector(".addBtn")
const headerInput = document.querySelector("#header")
const todoInput = document.querySelector("#todo")
const todos = document.querySelector(".todos")
let todosArray = JSON.parse(localStorage.getItem("todos")) || []

const bindButtons = ()=>{
    const deleteButtons = document.querySelectorAll(".deleteBtn")
    Array.from(deleteButtons).forEach(el=>{
        el.onclick = ()=>{
            const deleteId = el.getAttribute("toDeleteId")
            todosArray = todosArray.filter(el=>el.id!=deleteId)
            localStorage.setItem("todos",JSON.stringify(todosArray))
            render()
        }
    })
}


addBtn.onclick = ()=>{
    headerValue = headerInput.value.trim()
    todoValue = todoInput.value.trim()
    if (headerValue.length === 0 || todoValue.length === 0 ){
        alert("Заполните все данные")
    }else{
        todosArray.push({
            id:todosArray.length,
            header:headerValue,
            todo:todoValue,
        })
        localStorage.setItem("todos",JSON.stringify(todosArray))

        headerInput.value = ""
        todoInput.value = ""
        render()
    }
}

const render = ()=>{
    todos.innerHTML = ""
    todosArray.forEach(el=>{
        const element = new DOMParser().parseFromString(`<div class="todo">
            <div class="title">
                <h4>${el.header}</h4>
            </div>
            <div class="content">
                <div class="text">
                    ${el.todo}
                </div>
                <div class="actions">
                    <button>Complete</button>
                    <button class="deleteBtn" toDeleteId="${el.id}">Delete</button>
                </div>
            </div>

        </div>`,"text/html").body.querySelector(".todo")
        todos.append(element)
    })
    bindButtons()
}

render()
bindButtons()

