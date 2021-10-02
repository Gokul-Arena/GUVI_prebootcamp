async function getUsers() {
    const data = await fetch("https://614eab31b4f6d30017b48296.mockapi.io/users", { method: "GET" });
    const users = await data.json();
    console.log(users);
    return users;
}

async function displayUsers() {
    const users = await getUsers();
    const userList = document.querySelector('.root');
    users.forEach( user => {
        console.log(user.name);
        userList.innerHTML += `<div class="user-container">
        <img class="user-avatar" src=${user.avatar} />
        <h2 class="user-name">${user.name}</h2>`;
    });
}

displayUsers();