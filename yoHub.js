console.log("test: console is working");
const sctSelectScreen = document.getElementById("sct-select-screen");
//SECTION 1 sct
const sct1 = document.getElementById("sct1");
const sct1taskTable = document.getElementById("sct1TaskList");
const sct1CloseTaskTableBtn = document.getElementById("sct1-CloseTaskTableBtn");
const sct1Open = document.getElementById("sct1-Open");
const sct1AddTaskList = document.getElementById("sct1-AddTaskList");
const sct1ListGrid = document.getElementById("sct1ListGrid");
const sct1TaskList = document.getElementById("sct1TaskList");
const sct1AddTaskBtn = document.getElementById("sct1-AddTaskBtn");
const sct1SaveToLocalStorageBtn = document.getElementById("sct1-SaveToLocalStorageBtn");
const sct1LoadFromLocalStorageBtn = document.getElementById("sct1-LoadFromLocalStorageBtn");
const sct1Close = document.getElementById("sct1-Close");
//SECTION 2 sct
const sct2 = document.getElementById("sct2")
const sct2Open = document.getElementById("sct2-Open");
const sct2Close = document.getElementById("sct2-Close");
//Variables for sct1 Lists
let currentList = null;
const lists = JSON.parse(localStorage.getItem("lists")) || {};

// Open and Close sct1
sct1Open.addEventListener("click",() => {
        sctSelectScreen.style.display = "none"
        sct1.style.display = "block"
        loadLists();
});
sct1Close.addEventListener("click",() => {
        sct1.style.display = "none"
        sctSelectScreen.style.display = "block"
});

// Close task table screen
sct1CloseTaskTableBtn.addEventListener("click",() => {
    sct1taskTable.style.display ="none";
    sct1.style.display = "block";

});

//Open and close sct2
sct2Open.addEventListener("click",() => {
        sctSelectScreen.style.display = "none";
        sct2.style.display = "block"
});
sct2Close.addEventListener("click",() => {
        sct2.style.display = "none";
        sctSelectScreen.style.display = "block";
})

//ADD TASK TABLE
const sct1ActualTaskTable = document.createElement("div");
sct1ActualTaskTable.style.display = "grid";
sct1ActualTaskTable.style.gridTemplateColumns = "5rem 5rem 5rem";
//ADD TASK TABLE ***
// Add task list function and event listener
const addTaskList = () => {
    const listName = prompt("Name of the new list:")
    if(listName) {
        lists[listName] = []; //create an empty array for the new list
        localStorage.setItem("lists",JSON.stringify(lists));// save thew new list to localStorage
        renderTaskListButton(listName) //Render the button for the new task list
    }
};

//function for rendering each new task list
const renderTaskListButton = (listName) => {
    const button = document.createElement("button");
    button.className = "task-list-button";
    button.textContent = listName;
    sct1ListGrid.appendChild(button);

    button.addEventListener("click", () => {
        currentList = listName;
        loadTasksFromList();//HERE HERE HERE HERE is where the problem be coming from
        sct1.style.display = "none"; // Hide the list selection screen
        sct1taskTable.style.display = "block"; // Show task table screen

    })
}
//Load all the lists and render all the buttons for these
const loadLists = () => {
    sct1.querySelectorAll(".task-list-button").forEach(button => button.remove());// clear the existing buttons
    Object.keys(lists).forEach(listName => renderTaskListButton(listName));// render buttons for each list
}
sct1AddTaskList.addEventListener("click", addTaskList)

// Add task function and event listener
const addTask = () => {
        // alert("added a task")
        const taskTemplateInput1 = document.createElement("input");
        taskTemplateInput1.style.marginLeft = "30rem";
        const taskTemplateInput2 = document.createElement("input");
        taskTemplateInput2.style.marginLeft = "40rem";
        const taskTemplateSelect = document.createElement("select");
        taskTemplateSelect.style.marginLeft = "50rem";
        const taskTemplateSelectOption1 = document.createElement("option");
        const taskTemplateSelectOption2 = document.createElement("option");
        const taskTemplateSelectOption3 = document.createElement("option");
        taskTemplateSelectOption1.textContent = "1";
        taskTemplateSelectOption2.textContent = "2";
        taskTemplateSelectOption3.textContent = "3";
        taskTemplateSelect.add(taskTemplateSelectOption1);
        taskTemplateSelect.add(taskTemplateSelectOption2);
        taskTemplateSelect.add(taskTemplateSelectOption3);
        taskTemplateInput1.className = "task-table-child"
        taskTemplateInput2.className = "task-table-child"
        taskTemplateSelect.className = "task-table-child"
        sct1ActualTaskTable.appendChild(taskTemplateInput1);
        sct1ActualTaskTable.appendChild(taskTemplateInput2);
        sct1ActualTaskTable.appendChild(taskTemplateSelect);
};
// Save tasks to localStorage 
sct1SaveToLocalStorageBtn.addEventListener("click", () => {
    if(currentList) {
        const tasks = [];
        const taskElements = document.querySelectorAll(".task-table-child");
        for(let i = 0;i < taskElements.length; i += 3) {
            const task = {
                title: taskElements[i].value,
                timeTaken: taskElements[i+1].value,
                importance: taskElements[i+2].value
            };
            tasks.push(task);
        }
        lists[currentList] = tasks;// save the tasks to the current list
        localStorage.setItem("lists",JSON.stringify(lists));// update local storage
    } else {
        alert("no list selected!");
    }
});


// Load tasks to localStorage 
const loadTasksFromList = () => {
    if (currentList && lists[currentList]) {
        // Clear the task table to avoid duplicates
        sct1taskTable.innerHTML = "";
        // Add the essential buttons back to the UI
        //Add task button
        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add a Task";
        addTaskBtn.id = "sct1-AddTaskBtn"; // Assign an id to match the original button's functionality
        addTaskBtn.addEventListener("click", addTask); // Attach the event listener for adding tasks
        //Save to local storage button
        const saveToLocalStorageBtn = document.createElement("button");
        saveToLocalStorageBtn.textContent = "Save to Local Storage";
        saveToLocalStorageBtn.id = "sct1-SaveToLocalStorageBtn";
        saveToLocalStorageBtn.addEventListener("click", () => {
            if(currentList) {
                const tasks = [];
                const taskElements = document.querySelectorAll(".task-table-child");
                for (let i = 0; i < taskElements.length; i += 3) {
                    const task = {
                        title: taskElements[i].value,
                        timeTaken: taskElements[i + 1].value,
                        importance: taskElements[i + 2].value
                    };
                    tasks.push(task);
                }
                lists[currentList] = tasks; // Save tasks to the current list
                localStorage.setItem("lists", JSON.stringify(lists)); // Update localStorage
            } else {
                alert("No list selected!");
            }
        });
        //Close task table button
        const closeTaskTableBtn = document.createElement("button");
        closeTaskTableBtn.textContent = "Close task table";
        closeTaskTableBtn.id = "sct1-CloseTaskTableBtn";
        closeTaskTableBtn.addEventListener("click", () => {
            sct1taskTable.style.display = "none";
            sct1.style.display = "block"; // Go back to the list selection screen
        });

        // Add the table header or any static elements back in
        const header = document.createElement("h1");
        header.textContent = "To Do List";
        header.style.marginLeft ="22em";
        sct1TaskList.appendChild(header);
        const paragraphDiv = document.createElement("div");
        paragraphDiv.style.backgroundColor = "#fffff2";paragraphDiv
        paragraphDiv.style.display = "grid";
        paragraphDiv.style.gridTemplateColumns = "10rem 20rem 5rem";
        const paragraph1 = document.createElement("p");
        const paragraph2 = document.createElement("p");
        const paragraph3 = document.createElement("p");
        paragraph1.textContent = "TaskTitle"
        paragraph1.style.marginLeft = "32.5rem";
        paragraph2.textContent = "TimeTaken"
        paragraph2.style.marginLeft = "37rem";
        paragraph3.textContent = "Importance"
        paragraph3.style.marginLeft = "32rem";
        paragraphDiv.appendChild(paragraph1);
        paragraphDiv.appendChild(paragraph2);
        paragraphDiv.appendChild(paragraph3);
        
        
        // Append the buttons to the task table section
        sct1TaskList.appendChild(addTaskBtn);
        sct1TaskList.appendChild(saveToLocalStorageBtn);
        sct1TaskList.appendChild(closeTaskTableBtn);
        sct1TaskList.appendChild(paragraphDiv);
        sct1TaskList.appendChild(sct1ActualTaskTable);
        // Add tasks from the list if there are any
        if (lists[currentList].length === 0) {

        } else {
            // Loop through the tasks and add them to the DOM
            lists[currentList].forEach(task => {
                const taskTemplateInput1 = document.createElement("input");
                taskTemplateInput1.style.marginLeft = "30rem";
                const taskTemplateInput2 = document.createElement("input");
                taskTemplateInput2.style.marginLeft = "40rem";
                const taskTemplateSelect = document.createElement("select");
                taskTemplateSelect.style.marginLeft = "50rem";

                const taskTemplateSelectOption1 = document.createElement("option");
                const taskTemplateSelectOption2 = document.createElement("option");
                const taskTemplateSelectOption3 = document.createElement("option");
                taskTemplateSelectOption1.textContent = "1";
                taskTemplateSelectOption2.textContent = "2";
                taskTemplateSelectOption3.textContent = "3";

                taskTemplateSelect.add(taskTemplateSelectOption1);
                taskTemplateSelect.add(taskTemplateSelectOption2);
                taskTemplateSelect.add(taskTemplateSelectOption3);

                taskTemplateInput1.className = "task-table-child";
                taskTemplateInput2.className = "task-table-child";
                taskTemplateSelect.className = "task-table-child";

                taskTemplateInput1.value = task.title;
                taskTemplateInput2.value = task.timeTaken;
                taskTemplateSelect.value = task.importance;

                sct1ActualTaskTable.appendChild(taskTemplateInput1);
                sct1ActualTaskTable.appendChild(taskTemplateInput2);
                sct1ActualTaskTable.appendChild(taskTemplateSelect);
            });
        }
    }
};


sct1AddTaskBtn.addEventListener("click", addTask);