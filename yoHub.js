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