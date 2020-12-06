const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
console.log(APIURL);
const ImgPath = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector('main');
const form = document.getElementById('form'); 
const search = document.getElementById('search'); 


async function getMovies(url){
   const resp = await fetch(url);
   const respData = await resp.json();
  //  console.log(respData);  

  showMovies(respData.results);
}

getMovies(APIURL);

function showMovies(movies){
  //clear the movies
   main.innerHTML = '';
  movies.forEach((movie) =>{
    const {poster_path, title, vote_average}= movie
    const movieE1 = document.createElement('div'); 
    movieE1.classList.add('movie');
    movieE1.innerHTML = `
        <img src="${ImgPath + poster_path}" alt="">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColors(vote_average)}">${vote_average}</span>
        </div>      
    `
    main.appendChild(movieE1);
   })
}

//changing the color of the rating
function getColors(vote){
  if(vote >= 7){
    return 'green';
  }else if(vote >= 5){
    return 'orange';
  }else{
     return 'red';
  }  
}
//trying to get the value in the form attribute when submitted
form.addEventListener('submit', (e)=>{
e.preventDefault();

searchResult = search.value;
 if(searchResult){
   getMovies(SEARCHAPI + searchResult);
   search.value = '';
 }
})