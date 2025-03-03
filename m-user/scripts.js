document.addEventListener('DOMContentLoaded', () => {
    const userList = document.querySelector('#user-list tbody');
    const addUserForm = document.querySelector('#add-user-form');

    let users = [];

    function renderUsers() {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="delete-user" data-index="${index}">Delete</button>
                </td>
            `;
            userList.appendChild(row);
        });
    }

    addUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = addUserForm.name.value.trim();
        const email = addUserForm.email.value.trim();

        if (name && email) {
            users.push({ name, email });
            renderUsers();
            addUserForm.reset();
        }
    });

    userList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-user')) {
            const index = e.target.dataset.index;
            users.splice(index, 1);
            renderUsers();
        }
    });

    renderUsers();
});