// Handle ticket submission
document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload
    
    // Collect form data
    const ticketId = document.getElementById('ticketId').value;
    const issue = document.getElementById('issue').value;
    const priority = document.getElementById('priority').value;

    // Insert new ticket into the table
    const table = document.getElementById('ticketTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const ticketIdCell = newRow.insertCell(0);
    const issueCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);
    const priorityCell = newRow.insertCell(3);

    ticketIdCell.textContent = ticketId;
    issueCell.textContent = issue;
    statusCell.innerHTML = '<span class="status status-open">Open</span>';  // Default status
    priorityCell.textContent = priority;

    // Clear form inputs
    document.getElementById('ticketForm').reset();
});

// Search functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#ticketTable tbody tr');

    rows.forEach(row => {
        const issue = row.cells[1].textContent.toLowerCase();
        if (issue.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
