const jokeText = document.querySelector('.joke-text');
const newJokeBtn = document.querySelector('.new-joke-btn');
newJokeBtn.addEventListener('click', getJoke);
getJoke();


function getJoke() {
   const jokeData = fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        jokeText.innerText = joke;
    });
}
// function getJokes() {
//     const jokeDatas = fetch('https://api.chucknorris.io/jokes/random')
//     // .then(function(response) {
//     //    return response.json()})
//     // .then(function(data) {
//     //     const joke = data.joke;
//     //     jokeText.innerText = joke;
//     // });
//     console.log(jokeDatas);
// }