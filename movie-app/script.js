const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
console.log(APIURL);
const ImgPath = 'https://image.tmdb.org/t/p/w1280';

const main = document.querySelector('main');

async function getMovies(){
   const resp = await fetch(APIURL);
   const respData = await resp.json();
   console.log(respData);
  

   respData.results.forEach((movie) =>{
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

   return respData;

}

getMovies();

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