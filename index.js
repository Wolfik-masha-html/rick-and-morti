const list = document.querySelector(".ul");
const fethUsersBtn =document.querySelector(".btn")

console.log(list)
console.log(fethUsersBtn)

fethUsersBtn.addEventListener("click", () => {
   fetchUsers()
     .then((users) =>renderUsers(users.results))
     .catch((error) => console.log(error));

    
    
 });



 function fetchUsers() {
   return fetch("https://rickandmortyapi.com/api/character").then(
    (response) => {
       if (!response.ok) {
        throw new Error(response.status);
       }
       return response.json();
     }
   );
 }

 function renderUsers(users) {
   const marcup = users
     .map((user) => {
       return `
       <li>
       <img src="${user.image}" alt="">
     <p>Name: ${user.name}</p>
     <p>location: ${user.location.name}</p>
     </li>`;
    })
     .join("");
   list.innerHTML = marcup;
 }
