const API = "http://127.0.0.1:57562";

// Load notes
async function loadNotes() {
    const res = await fetch(API + "/notes");
    const data = await res.json();

    const list = document.getElementById("notesList");
    list.innerHTML = "";

    data.forEach(n => {
        const li = document.createElement("li");
        li.innerText = n.text;
        list.appendChild(li);
    });
}

// Add note
async function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value;

    if (!text) return;

    await fetch(API + "/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    input.value = "";
    loadNotes();
}

// Attach button event
document.getElementById("addBtn").addEventListener("click", addNote);

// Load notes on start
loadNotes();   