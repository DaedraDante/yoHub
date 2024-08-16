console.log("console is working");
const sctSelectScreen = document.getElementById("sct-select-screen");
const sct1 = document.getElementById("sct1");
const sct1taskTable = document.getElementById("task-table")
const sct1Open = document.getElementById("sct1-Open");
const sct1AddTaskBtn = document.getElementById("sct1-AddTaskBtn")
const sct1SaveToLocalStorageBtn = document.getElementById("sct1-SaveToLocalStorageBtn");
const sct1LoadFromLocalStorageBtn = document.getElementById("sct1-LoadFromLocalStorageBtn")
const sct1Close = document.getElementById("sct1-Close");
const sct2Open = document.getElementById("sct2-Open");
//Open and Close sct1
sct1Open.addEventListener("click",() => {
        sctSelectScreen.style.display = "none"
        sct1.style.display = "block"
});
sct1Close.addEventListener("click",() => {
        sct1.style.display = "none"
        sctSelectScreen.style.display = "block"
});

//Add task function and event listener
const addTask = () => {
        // alert("added a task")
        const taskTemplateInput1 = document.createElement("input");
        const taskTemplateInput2 = document.createElement("input");
        const taskTemplateSelect = document.createElement("select");
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
        sct1taskTable.appendChild(taskTemplateInput1);
        sct1taskTable.appendChild(taskTemplateInput2);
        sct1taskTable.appendChild(taskTemplateSelect);
};
sct1AddTaskBtn.addEventListener("click",addTask);
//Implementing local storage
document.addEventListener("DOMContentLoaded",function() {
//Save sct1taskTable into localStorage
sct1SaveToLocalStorageBtn.addEventListener("click",() => {
        const taskTableContent = sct1taskTable.innerHTML;
        localStorage.setItem("taskTableContentKey",taskTableContent);
        alert("Content saved :D");

})
//Retrieve sct1taskTable into localStorage
sct1LoadFromLocalStorageBtn.addEventListener("click",() => {
        const loadedTaskTableContent = localStorage.getItem("taskTableContentKey");
        sct1taskTable.innerHTML = loadedTaskTableContent;
        alert("Content loaded :D")
})
});

