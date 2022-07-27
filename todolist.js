var taskInput = document.getElementById('Push');
var addTaskButton = document.getElementById('addTaskButton');
var deleteButton = document.getElementById('deleteButton')
var incompleteTasks = document.getElementById('Stacklist');

var addTask = function () {
    var text = taskInput.value;
    var li = document.createElement('li');
    li.innerHTML = "<label>" + text + "</label>";
    incompleteTasks.appendChild(li);
}

var popElement = function() {
    incompleteTasks.removeChild(incompleteTasks.lastElementChild);  
}

addTaskButton.onclick = addTask;
deleteButton.onclick = popElement;