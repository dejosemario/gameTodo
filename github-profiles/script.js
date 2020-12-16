const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const  input = document.getElementById('input');
//creating an async function to help get the users profile
async function getUser(user){
  const resp = await fetch(APIURL + user);
  const respData = await resp.json();
  
  createUserCard(respData);
  
}

//creating a function that creates the card dynmaically
function createUserCard(user){
  const cardHtml = `
  <div class="card">
    <img src="${user.avatar_url}" alt="${user.name}">
    <div>
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers}</li>
        <li>${user.following}</li>
        <li>${user.public_repos}</li>
      </ul>
    </div> 
  </div>
  `;
  main.innerHTML = cardHtml;
}

