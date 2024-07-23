const btnSection1 = document.getElementById("btn-open-section1");
const contentSection1 = document.getElementById("section1-content");
const btn1ContentSection1 = document.getElementById("section1-content-button1");
const sectionSelectScreen = document.getElementById("section-select");
const section1AddTaskBtn = document.getElementById("section1-addTaskBtn");
const activitiesTable = document.getElementById("activities-table");


contentSection1.style.display = "none"

btnSection1.addEventListener("click",()=> {
    
        contentSection1.style.display = "block" 
})
btn1ContentSection1.addEventListener("click",() => {

        contentSection1.style.display = "none"

})


section1AddTaskBtn.addEventListener("click",() => {

  //Create input1
  const newTableRowInput1 = document.createElement("input");
  //Create input2
  const newTableRowInput2 = document.createElement("input");
  //Create section/options
  const newTableRowSelect = document.createElement("select");
  const newTableRowOption1 = document.createElement("option");
  const newTableRowOption2 = document.createElement("option");
  const newTableRowOption3 = document.createElement("option");

  //Set properties for input1
  newTableRowInput1.className = "alligned-table-inner";
  //Set properties for input2
  newTableRowInput2.className = "alligned-table-inner";
  //Set properties for select/options
  newTableRowSelect.className = "alligned-table-inner";
  newTableRowOption1.value = "1";
  newTableRowOption1.text = "1";
  newTableRowOption2.value = "2";
  newTableRowOption2.text = "2";
  newTableRowOption3.value = "3";
  newTableRowOption3.text = "3";
  //Add options to select element using the .add method
  newTableRowSelect.add(newTableRowOption1);
  newTableRowSelect.add(newTableRowOption2);
  newTableRowSelect.add(newTableRowOption3);

  //Append input1 to activitiesTable
  activitiesTable.appendChild(newTableRowInput1);
  activitiesTable.appendChild(newTableRowInput2);
  activitiesTable.appendChild(newTableRowSelect);
})
