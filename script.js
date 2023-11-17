'use strict'

window.addEventListener('DOMContentLoaded', () => {
  // Список фильмов

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

    if (addName.value) {
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
      <div class = 'logo filmCard'>${film.name} <button class = 'delete'>x</button></div>
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

  // Поиск

  const filmCard = document.querySelectorAll('.filmCard'),
    searchText = document.querySelector('.header__search'),
    searchBtn = document.querySelector('.header__btn');

  console.log(filmCard);
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (searchText.value) {
      filmCard.forEach((film) => {
        // we can also use her RegExp: film.textContent.replace(/ x/g, '') !== searchText.value.trim()
        if (film.textContent.search(searchText.value)) {
          film.classList.add('hide');
        }
      });

      searchText.value = '';
    } else {
      filmCard.forEach((film) => {
        film.classList.remove('hide');
      });
      displayMovieList();
      console.log(filmCard);
    }

  });

});

//
