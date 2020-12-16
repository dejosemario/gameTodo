const APIURL = 'https://api.github.com/users/'

//creating an async function to help get the users profile
async function getUser(user){
  const resp = await fetch(APIURL + user);
  const respData = await resp.json();
  
  createUserCard(user)
  
}

