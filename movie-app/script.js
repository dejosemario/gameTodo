const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
console.log(APIURL);
const ImgPath = 'https://image.tmdb.org/t/p/w1280';

async function getMovies(){
   const resp = await fetch(APIURL);
   const respData = await resp.json();
   console.log(respData);

   respData.results.forEach((movie) =>{
     const img = document.createElement('img');
     img.src = ImgPath + movie.poster_path;
     document.body.appendChild(img);
   })

   return respData;

}

getMovies();