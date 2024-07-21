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

  activitiesTable.innerHTML += `
  <button>alert btn</button>
  <input class="alligned-table-inner">
  <input class="alligned-table-inner">
  <select class="alligned-table-inner">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option></select>
  `
})
