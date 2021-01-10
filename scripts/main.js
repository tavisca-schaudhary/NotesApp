function addNewNote(id) {
    var newNoteArea = document.createElement("div");
    var noteContent = document.createElement("textarea");
    var votePlus = document.createElement("span");
    var voteCount = document.createElement("span");
    var voteContent = document.createElement("span");
    var voteCountText = document.getElementById("vote-count-text");
    var colorValue = "noteArea background-color-red";
    switch(id) {
        case "notes_one":
            newNoteArea.setAttribute("class", "noteArea background-color-red");
            colorValue = "background-color-red";
            break;
        case "notes_two":
            newNoteArea.setAttribute("class", "noteArea background-color-green");
            colorValue = "background-color-green";
            break;
        case "notes_three":
            newNoteArea.setAttribute("class", "noteArea background-color-blue");
            colorValue = "background-color-blue";
            break;
        default:
            newNoteArea.setAttribute("class", "noteArea background-color-red");
            break;
    }

    newNoteArea.onclick = function() {
        var modal = document.getElementById("noteModal");
        var modalContent = document.getElementById("modal-content");
        var contentEdit = document.getElementById("contentEdit");
        var deleteButton = document.getElementById("delete-button");
        var voteButton = document.getElementById("vote-button");
        var closeButton = document.getElementById("close-button");
       
        noteContent.blur();
        contentEdit.value = noteContent.value;
        voteCountText.innerText = voteCount.innerText
        deleteButton.setAttribute("data-dismiss", "modal");
        closeButton.setAttribute("data-dismiss", "modal");
        deleteButton.onclick = function() {
            newNoteArea.remove();
            modal.style.display = "none";
        };

        closeButton.onclick = function() {
            noteContent.value = contentEdit.value;
            voteCount.innerText = voteCountText.innerText;
            setTimeout(function()
            {
                contentEdit.classList.remove(colorValue);
                modalContent.classList.remove(colorValue);
            }, 1000);
        };

        voteButton.onclick = function() {
            voteCountText.innerText ++;
        };

        modal.style.display = "block";
        contentEdit.classList.add(colorValue);
        modalContent.classList.add(colorValue);
    };

    noteContent.setAttribute("cols", "15");
    voteContent.setAttribute("class", "vote-count");
    votePlus.innerText = "+ ";
    voteCount.innerText = 0;
    voteContent.appendChild(votePlus);
    voteContent.appendChild(voteCount);
    newNoteArea.setAttribute("data-toggle", "modal");
    newNoteArea.setAttribute("data-target", "#noteModal");
    newNoteArea.appendChild(noteContent);
    newNoteArea.appendChild(voteContent);
    document.getElementById(id).appendChild(newNoteArea);
    noteContent.focus();
}