//your code here

document.querySelector('#addTodoBtn').onclick = function(){
    if(document.querySelector('#newTodoInput').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#todoList').innerHTML += `
                    ${document.querySelector('#newTodoInput').value}
              
        `;
		}
    }
