const form = document.getElementById("table-creator-form");
const tableContainer = document.getElementById("table-container");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const rows = form.elements["rows"].value;
    const cols = form.elements["cols"].value;
    if(rows && cols)
        createTable(rows, cols)
}

function createTable(rows, cols) {
    // clear previous data
    tableContainer.innerHTML = null;

    // create new table
    const table = document.createElement("table");    
    const tbody = document.createElement("tbody");
    const rowFragment = document.createDocumentFragment();
    let count = 1;
    while(rows > 0){
        const tr = document.createElement("tr");
        let newCols = cols;
        const colsFragment = document.createDocumentFragment();
        while(newCols > 0) {
            const td = document.createElement("td");
            td.textContent = count;
            colsFragment.appendChild(td);
            newCols--;
            count++;
        }
        tr.appendChild(colsFragment);
        rowFragment.appendChild(tr);
        rows--;
    }
    tbody.appendChild(rowFragment)
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}