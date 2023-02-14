//your code here

document.querySelector('#addTodoBtn').onclick = function(){
    if(document.querySelector('#newTodoInput').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#todoList').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newTodoInput').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
}