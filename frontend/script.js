async function addNote() {
    const text = document.getElementById("note").value;

    await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text })
    });
}