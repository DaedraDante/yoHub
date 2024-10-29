console.log("test: console is working");
const sctSelectScreen = document.getElementById("sct-select-screen");

//SECTION 1 
const sct1 = document.getElementById("sct1");
const sct1Open = document.getElementById("sct1-Open");
const sct1Close = document.getElementById("sct1-Close");
const sct1ToDoListsContainer = document.getElementById("sct1-to-do-lists-container");
const sct1AddToDoListBtn = document.getElementById("sct1-add-to-do-list-btn");
const sct1ToDoList = document.getElementById("sct1-to-do-list");
const sct1ToDoListTitle = document.getElementById("sct1-to-do-list-title");
const sct1BackToDoListPageBtn = document.getElementById("sct1-back-to-to-do-list-page-btn");
const sct1AddTaskBtn = document.getElementById("sct1-add-task-btn");
const sct1TaskTable = document.getElementById("sct1-task-table");


//SECTION 2 
const sct2 = document.getElementById("sct2");
const sct2Open = document.getElementById("sct2-Open");
const sct2Close = document.getElementById("sct2-Close");
const sct2PageListContainer = document.getElementById("sct2PageListContainer");
const sct2AddJournalPageBtn = document.getElementById("sct2-AddJournalPageBtn");
const sct2JournalPage = document.getElementById("sct2-journal-page");
const sct2JournalPageTitle = document.getElementById("sct2-journal-page-title");
const sct2JournalPageTextArea = document.createElement("textarea");
const sct2DeleteJournalPage = document.getElementById("sct2-delete-journal-page");
const sct2BackToPageListBtn = document.getElementById("sct2-back-to-page-list-btn");

//SECTION 3 
const sct3 = document.getElementById("sct3");
const sct3Open = document.getElementById("sct3-Open");
const sct3Close = document.getElementById("sct3-Close");
const sct3StartTimerBtn = document.getElementById("sct3-start-timer-btn");
const sct3StopTimerBtn = document.getElementById("sct3-stop-timer-btn");
let intervalVariable
let sct3Hours = 0;
let sct3HoursText = document.getElementById("sct3HoursText");
let sct3Minutes = 0;
let sct3MinutesText = document.getElementById("sct3MinutesText");
let sct3Seconds = 0;
let sct3SecondsText = document.getElementById("sct3SecondsText");
    // Load journal pages from localStorage when the app starts
    window.addEventListener("load", () => {
        const savedPages = JSON.parse(localStorage.getItem("journalPages")) || [];
        savedPages.forEach(pageName => {
            addJournalPageToList(pageName);
        });
    });

//SECTION 4 
const sct4 = document.getElementById("sct4");
const sct4Open = document.getElementById("sct4-Open");
const sct4Close = document.getElementById("sct4-Close");
const sct4RockBtn = document.getElementById("sct4-rock-btn");
const sct4PaperBtn = document.getElementById("sct4-paper-btn");
const sct4ScissorsBtn= document.getElementById("sct4-scissors-btn");
const sct4ComputerChoseText = document.getElementById("sct4-computerChose-text")
const sct4PlayerChoseText = document.getElementById("sct4-playerChose-text");
const sct4WinOrLoseText = document.getElementById("sct4-WinOrLose-text");
let playerChoice
let computerChoice
let playerScore = 0
let cpuScore = 0
const sct4PlayerScoreText = document.getElementById("sct4-player-score-text");
const sct4CpuScoreText = document.getElementById("sct4-cpu-score-text");

//SECTION 5
const sct5 = document.getElementById("sct5");
const sct5Open = document.getElementById("sct5-Open");
const sct5Close = document.getElementById("sct5-Close");
const sct5SelectGenreFilter = document.getElementById("sct5-select-genre=filter");
const sct5GameCards = document.getElementsByClassName("sct5-game-card")
const sct5MOBACards = document.getElementsByClassName("sct5-MOBAGameCard");
const sct5ShooterCards = document.getElementsByClassName("sct5-ShooterGameCard");
const sct5SandboxCards = document.getElementsByClassName("sct5-SandboxGameCard");
const sct5BattleRoyaleCards = document.getElementsByClassName("sct5-BattleRoyaleCard")

//SECTION 6
const sct6 = document.getElementById("sct6");
const sct6Open = document.getElementById("sct6-Open");
const sct6Close = document.getElementById("sct6-Close");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Open and Close sct1
sct1Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct1.style.display = "block";
});
sct1Close.addEventListener("click",() => {
    sct1.style.display = "none";
    sctSelectScreen.style.display = "block";
});

sct1AddToDoListBtn.addEventListener("click",() => {
    const toDoListName = prompt("The to do list's name should be:")
    if(toDoListName) {
        //Add to do list to localStorage
        let toDoLists = JSON.parse(localStorage.getItem("toDoLists")) || [];
        toDoLists.push(toDoListName);
        localStorage.setItem("toDoLists",JSON.stringify(toDoLists));

        //Add the to do list to the list in the UI
        sct1AddToDoListToPage(toDoListName);
    };
});
// Function to add a to do list to the list and handle the page click
function sct1AddToDoListToPage(toDoListName) {
    const sct1OpenToDoListButton = document.createElement("button");
    sct1OpenToDoListButton.textContent = toDoListName;
    sct1OpenToDoListButton.style.width = "10em"
    sct1OpenToDoListButton.style.height = "em"
    sct1OpenToDoListButton.style.margin = "1em"
    sct1OpenToDoListButton.classList = "custom-btn btn-1"
    sct1ToDoListsContainer.appendChild(sct1OpenToDoListButton);

    sct1OpenToDoListButton.addEventListener("click",() => {
        sct1.style.display = "none";
        sct1ToDoList.style.display = "block";
        sct1ToDoListTitle.textContent = toDoListName;
        // CONTINUE FROM HERE RIGHT HERE , YOU HAVE TO CREATE THE REMINDER OF THE TO DO LIST PAGE ITSELF
        // AND FIGURE OUT HOW TO SAVE EACH ELEMENT IN THE TO DO LIST LAYOUT IN THE LOCAL STORAGE
        // AND RETRIEVE IT WHEN LOADING THE APP 
    })
};
sct1BackToDoListPageBtn.addEventListener("click",() => {
    sct1ToDoList.style.display = "none";
    sct1.style.display = "block"
})
sct1AddTaskBtn.addEventListener("click",() => {
    // create the table row for the table
    const tr = document.createElement("tr");
    // section to create table cell 1 and add input to table cell 1
    const td1 = document.createElement("td");
    td1.style.textAlign = "center"
    const titleFortd1 = document.createElement("p");
    td1.appendChild(titleFortd1);
    // section to create table cell 2 and add select to table cell 2
    const td2 = document.createElement("td");
    const select1Fortd2 = document.createElement("select")
    const option1Forselect1 = document.createElement("option");
    option1Forselect1.textContent = "30 minutes";
    const option2Forselect1 = document.createElement("option");
    option2Forselect1.textContent = "60 minutes";
    const option3Forselect1 = document.createElement("option");
    option3Forselect1.textContent = "90 minutes";
    const option4Forselect1 = document.createElement("option");
    option4Forselect1.textContent = "2 Hours+"
    select1Fortd2.add(option1Forselect1);
    select1Fortd2.add(option2Forselect1);
    select1Fortd2.add(option3Forselect1);
    select1Fortd2.add(option4Forselect1);
    td2.appendChild(select1Fortd2);
    //section to create table cell 3 and add select to table cell 3
    const td3 = document.createElement("td");
    const select2Fortd3 = document.createElement("select");
    const option1Forselect2 = document.createElement("option");
    option1Forselect2.textContent = "To do"
    const option2Forselect2 = document.createElement("option");
    option2Forselect2.textContent = "In progress"
    const option3Forselect2 = document.createElement("option");
    option3Forselect2.textContent = "Complete"
    select2Fortd3.add(option1Forselect2);
    select2Fortd3.add(option2Forselect2);
    select2Fortd3.add(option3Forselect2);
    td3.appendChild(select2Fortd3);
    //section to create table cell 4 and add button to table cell 4
    const td4 = document.createElement("td");
    const buttonFortd4 = document.createElement("button");
    buttonFortd4.textContent = "remove"
    td4.appendChild(buttonFortd4);
    //Add table cells to table row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    //Add table row to table
    sct1TaskTable.appendChild(tr);
    //Prompt for adding the task's name
    const taskName = prompt("Task title is:")
    if(taskName) {
        titleFortd1.textContent = taskName;
    }else if(!taskName) {
        alert("Insert a task title!")
    }
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Open and close sct2
sct2Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct2.style.display = "block";
});
sct2Close.addEventListener("click",() => {
    sct2.style.display = "none";
    sctSelectScreen.style.display = "block";
});

// Function to add a journal page to the list and local storage
sct2AddJournalPageBtn.addEventListener("click", () => {
    const pageName = prompt("The journal's page name should be:");
    if (pageName) {
        // Add page to localStorage
        let journalPages = JSON.parse(localStorage.getItem("journalPages")) || [];
        journalPages.push(pageName);
        localStorage.setItem("journalPages", JSON.stringify(journalPages));

        // Add the page to the list in the UI
        addJournalPageToList(pageName);
    }
});

// Function to add a journal page to the list and handle the page click
function addJournalPageToList(pageName) {
    const sct2OpenPageButton = document.createElement("button");
    sct2OpenPageButton.textContent = pageName;
    sct2OpenPageButton.style.width = "10em"
    sct2OpenPageButton.style.height = "3em"
    sct2OpenPageButton.style.margin = "1em"
    sct2OpenPageButton.classList = "custom-btn btn-1"
    sct2PageListContainer.appendChild(sct2OpenPageButton);

    sct2OpenPageButton.addEventListener("click", () => {
        sct2.style.display = "none";
        sct2JournalPage.style.display = "block";
        sct2JournalPageTitle.textContent = pageName;

        // Load the journal page content from localStorage
        const savedContent = localStorage.getItem(`journalPageContent-${pageName}`) || "";
        sct2JournalPageTextArea.value = savedContent;
    });

    sct2JournalPageTextArea.className = "sct2JournalPageTextArea";
    sct2JournalPage.appendChild(sct2JournalPageTextArea);
}
// Delete individual journal page
sct2DeleteJournalPage.addEventListener("click", () => {
    const currentTitle = sct2JournalPageTitle.textContent;

    if (currentTitle) {
        // Remove the journal page content from localStorage
        localStorage.removeItem(`journalPageContent-${currentTitle}`);

        // Get the journalPages array from localStorage
        let journalPages = JSON.parse(localStorage.getItem("journalPages")) || [];

        // Remove the currentTitle from the journalPages array
        journalPages = journalPages.filter(pageName => pageName !== currentTitle);

        // Update the journalPages array in localStorage
        localStorage.setItem("journalPages", JSON.stringify(journalPages));

        // Update page list in UI
        const buttons = Array.from(sct2PageListContainer.children);
        buttons.forEach(button => {
            if (button.textContent === currentTitle) {
                sct2PageListContainer.removeChild(button); // Remove the button from the UI
            }
        });

        // Hide journal page and go back to list
        sct2JournalPage.style.display = "none";
        sct2.style.display = "block";
    }
});
// Save journal page content when leaving the page
sct2BackToPageListBtn.addEventListener("click", () => {
    const currentPageName = sct2JournalPageTitle.textContent;
    const content = sct2JournalPageTextArea.value;

    // Save the content to localStorage
    localStorage.setItem(`journalPageContent-${currentPageName}`, content);

    // Return to the list of pages
    sct2JournalPage.style.display = "none";
    sct2.style.display = "block";
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Open and close sct3
sct3Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct3.style.display = "block";
});
sct3Close.addEventListener("click",() => {
    sct3.style.display = "none";
    sctSelectScreen.style.display = "block"
})
//Start timer 
sct3StartTimerBtn.addEventListener("click",() => {
        const IncreaseSecondsMinutesHours = () => {
        sct3Seconds++
        if(sct3Seconds > 59) {
            sct3Seconds = 0; 
            sct3Minutes++    
        }else if(sct3Minutes > 59) {
            sct3Minutes = 0;
            sct3Hours++
        }
        sct3SecondsText.textContent = sct3Seconds;
        sct3MinutesText.textContent = sct3Minutes;
        sct3HoursText.textContent = sct3Hours;
    }; 
      intervalVariable = setInterval(IncreaseSecondsMinutesHours,1000);
});
//Stop timer
sct3StopTimerBtn.addEventListener("click",() => {
    timerShouldRun = false;
    clearInterval(intervalVariable);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Open and Close sct4
sct4Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct4.style.display = "block"
});
sct4Close.addEventListener("click", () => {
    sct4.style.display = "none";
    sctSelectScreen.style.display = "block";
});
//Choosing rock
sct4RockBtn.addEventListener("click",() => {
    playerChoice = "rock";
    sct4PlayerChoseText.textContent = `You chose: ${playerChoice}`
    computerChoosing();
    wonOrLost();
});

//Choosing paper
sct4PaperBtn.addEventListener("click",() => {
    playerChoice = "paper";
    sct4PlayerChoseText.textContent = `You chose: ${playerChoice}`
    computerChoosing();
    wonOrLost();
});

//Choosing scissors
sct4ScissorsBtn.addEventListener("click",() => {
    playerChoice = "scissors";
    sct4PlayerChoseText.textContent = `You chose: ${playerChoice}`
    computerChoosing();
    wonOrLost();
});

//function to make CPU choose
const computerChoosing = () => {
     computerChoice = Math.floor(Math.random() * 3)
     if(computerChoice === 0) {
        computerChoice = "rock"
        sct4ComputerChoseText.textContent = `CPU chose: ${computerChoice}`;
     }else if(computerChoice === 1) {
        computerChoice = "paper"
        sct4ComputerChoseText.textContent = `CPU chose: ${computerChoice}`;
     }else if(computerChoice === 2) {
        computerChoice = "scissors"
        sct4ComputerChoseText.textContent = `CPU chose: ${computerChoice}`;
     }

};
//function to determine if you won or lost
const wonOrLost = () => {
        if(playerChoice === "rock" && computerChoice === "rock") {
        sct4WinOrLoseText.textContent = "its a draw!";
    }else if(playerChoice === "rock" && computerChoice === "paper") {
        sct4WinOrLoseText.textContent = "you lost!";
        cpuScore++;
    }else if(playerChoice === "rock" && computerChoice === "scissors") {
        sct4WinOrLoseText.textContent = "you won!";
        playerScore++;
    }else if(playerChoice === "paper" && computerChoice === "rock") {
        sct4WinOrLoseText.textContent = "you won!";
        playerScore++;
    }else if(playerChoice === "paper" && computerChoice === "paper") {
        sct4WinOrLoseText.textContent = "its a draw!";
    }else if(playerChoice === "paper" && computerChoice === "scissors") {
        sct4WinOrLoseText.textContent = "you lost!";
        cpuScore++;
    }else if(playerChoice === "scissors" && computerChoice === "rock") {
        sct4WinOrLoseText.textContent = "you lost!";
        cpuScore++;
    }else if(playerChoice === "scissors" && computerChoice === "paper") {
        sct4WinOrLoseText.textContent = "you won!";
        playerScore++;
    }else if(playerChoice === "scissors" && computerChoice === "scissors") {
        sct4WinOrLoseText.textContent = "its a draw!";
    }
    sct4CpuScoreText.textContent = `CPU Score: ${cpuScore}`;
    sct4PlayerScoreText.textContent = `Your Score: ${playerScore}`;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Open and Close sct5
sct5Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct5.style.display = "block";
});
sct5Close.addEventListener("click",() => {
    sct5.style.display = "none";
    sctSelectScreen.style.display = "block";
});

//Code to determine which option was chosen and execute a the function with
//a corresponding parameter for the option chosen
sct5SelectGenreFilter.addEventListener("change",() => {
    const selectedValue = sct5SelectGenreFilter.value;
    if(selectedValue === "Any-genre-option") {
        for (let i = 0; i <sct5GameCards.length; i++) {
            sct5GameCards[i].style.display = "block"
        }
    }else if(selectedValue === "Sandbox-option") {
        for (let i = 0; i <sct5GameCards.length; i++) {
            sct5GameCards[i].style.display = "none"
        }
        for (let i = 0; i < sct5SandboxCards.length; i++) {
            sct5SandboxCards[i].style.display = "block"
        }
    }else if(selectedValue === "MOBA-option") {
        for (let i = 0; i <sct5GameCards.length; i++) {
            sct5GameCards[i].style.display = "none"
        }
        for (let i = 0; i < sct5MOBACards.length; i++) {
            sct5MOBACards[i].style.display = "block"
        }
    }else if(selectedValue === "Shooter-option") {
        for (let i = 0; i <sct5GameCards.length; i++) {
            sct5GameCards[i].style.display = "none"
        }
        for (let i = 0; i < sct5ShooterCards.length; i++) {
            sct5ShooterCards[i].style.display = "block"
        }
    }else if(selectedValue === "Battle-Royale-option") {
        for (let i = 0; i <sct5GameCards.length; i++) {
            sct5GameCards[i].style.display = "none"
        }
        for (let i = 0; i < sct5BattleRoyaleCards.length; i++) {
            sct5BattleRoyaleCards[i].style.display = "block"
        }
    }
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Open and Close sct6
sct6Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct6.style.display = "block";
})
sct6Close.addEventListener("click",() => {
    sct6.style.display = "none";
    sctSelectScreen.style.display = "block";
})