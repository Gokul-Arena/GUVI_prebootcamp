async function getUsers() {
    const data = await fetch("https://611fb8b6988f860017ac43ca.mockapi.io/users");
    const users = await data.json();
    console.log(users);
    document.querySelector(".user-list").innerHTML=``;
    users.forEach(user => createUser(user));
  }
  
  function createUser({avatar, name, createdAt, id}) {
    const info = document.createElement("div");
    info.setAttribute("class", "container");
    
    info.innerHTML = `
    <div class="avatar-container">
      <img class="avatar" src=${avatar} width="100px" height="100px" />
        </div>
    
    <div class="details">
      <h3>${name}</h3>
    <p>${createdAt}</p>
    
    <button onclick="deleteUser(${id})">Delete</button>
    </div>
    </div>
   `;
    document.querySelector(".user-list").append(info);
  }
  
  getUsers();
  
  async function deleteUser(id) {
    const data = await fetch("https://611fb8b6988f860017ac43ca.mockapi.io/users/" + id, {method: "DELETE"});
    const user = await data.json();
    console.log(user);
    getUsers();
  }
  
  
  async function addUser() {
    var a = document.getElementById("name").value;
      var b = document.getElementById("image").value;
    
    const data = await fetch("https://611fb8b6988f860017ac43ca.mockapi.io/users", {method:"POST",
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify({
                           name: `${a}`,
                           avatar: `${b}`,
                           createdAt: new Date().toISOString()})
                                                             });
  const user = await data.json();
    console.log(user);
    getUsers();
  }