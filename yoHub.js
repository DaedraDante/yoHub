console.log("test: console is working");
const sctSelectScreen = document.getElementById("sct-select-screen");
//SECTION 1 sct
const sct1 = document.getElementById("sct1");
const sct1Open = document.getElementById("sct1-Open");
const sct1Close = document.getElementById("sct1-Close");

// Open and Close sct1
sct1Open.addEventListener("click",() => {
    sctSelectScreen.style.display = "none";
    sct1.style.display = "block";
});
sct1Close.addEventListener("click",() => {
    sct1.style.display = "none";
    sctSelectScreen.style.display = "block";
});

//SECTION 2 sct
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

//SECTION 3 sct
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
    const pageName = prompt("the journal's page name should be:");
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