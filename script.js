'use strict'

const url = 'http://api.icndb.com/jokes/random';
const paragraph = document.getElementById('joke');
const button = document.getElementById('get-joke');


function getJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    const response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

getJoke();

button.addEventListener('click', function(){
  getJoke();
});