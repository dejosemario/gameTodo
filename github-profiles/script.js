const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const input = document.getElementById('input');

getUser('dejosemario');
//creating an async function to help get the users profile

async function getUser(user) {
  const resp = await fetch(APIURL + user);
  const respData = await resp.json();
  createUserCard(respData);
  getRepos(user);
}

//fetching a repo from the API and creating a getrep function
async function getRepos(username) {
  const resp = await fetch(APIURL + username + '/repos');
  const respData = await resp.json();
  addReposToCard(respData);
}

//creating a function that creates the card dynmaically
function createUserCard(user) {
  const cardHtml = `
  <div class="card">
    <div class="img-contianer">
     <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>    
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul class="info">
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Repo</strong></li>
      </ul>
      <div id="repos"></div>
    </div> 
  </div>
  `;
  main.innerHTML = cardHtml;
}

//adding an event listen to the form and passing in th getuser function
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = input.value;

  if (user) {
    getUser(user);

    input.value = '';
  }
});

// console.log('emeka');
