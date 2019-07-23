document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form');
  const jokeList = document.getElementById('joke-list');
  const newJokeLi = document.createElement('li');
  let username; 
  
  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => renderJoke(jokeData));
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    username = event.target["name-input"].value;
    if(username === "") return;
    fetchJoke()
  })
  
  function renderJoke(jokeData) {
    newJokeLi.innerHTML = `<span class="username">${username} says: ${jokeData.joke} </span>`;
    jokeList.appendChild(newJokeLi);
  }
})
