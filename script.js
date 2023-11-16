'use strict'

window.addEventListener('DOMContentLoaded', () => {

  let addName = document.querySelector('.movie__name'),
    addBtn = document.querySelector('.form__btn'),
    parentDiv = document.querySelector('.movie__list'); //замени потом на создание дива через криэйт элемент

  let movieList = [];

  if (localStorage.getItem('films')) {
    movieList = JSON.parse(localStorage.getItem('films'));
    displayMovieList();
  }

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(addName.value) {
      let newFilm = {
        name: addName.value
      };

      movieList.push(newFilm);

      displayMovieList();

      localStorage.setItem('films', JSON.stringify(movieList));
      addName.value = '';
    }

  });



  function displayMovieList() {
    let displayFilm = '';
    movieList.forEach((film) => {
      displayFilm += `
      <div>${film.name} <button class = 'delete'>x</button></div>
      `;
    });

    parentDiv.innerHTML = displayFilm;

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.parentElement.remove();
        movieList.splice(i, 1);
        displayMovieList();
        localStorage.setItem('films', JSON.stringify(movieList));
      });
    })
  }

});
