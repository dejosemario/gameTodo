const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const input = document.getElementById('input');

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
    <div>
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
      <h4>Repos:</h4>
      <div id="repos"></div>
    </div> 
  </div>
  `;
  main.innerHTML = cardHtml;
}

// addReposToCard() function and getting the individual array usind forEach method.
function addReposToCard(repos) {
  const reposE1 = document.getElementById('repos');
  //trying to sort the repos with how many stars gotten from lowest to highest
  repos.sort((a,b)=>
    b.stargazers_count-a.stargazers_count
  ).slice(0,9).forEach((repo) => {
    const repoE1 = document.createElement('a');
    repoE1.classList.add('repo');   
    repoE1.href = repo.html_url;
    repoE1.target = '_blank';
    repoE1.innerText = repo.name;
    reposE1.appendChild(repoE1);    
  });
  
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


