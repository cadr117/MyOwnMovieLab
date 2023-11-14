'use strict'

window.addEventListener('DOMContentLoaded', () => {

  // class MovieCard {
  //   constructor(name, descr, parentSelector) {
  //     this.name = name;
  //     this.descr = descr;
  //     // this.rating = rating;
  //     this.parent = document.querySelector(parentSelector);
  //   }

  //   render() {
  //     const div = document.createElement('div');

  //     div.innerHTML = `
  //     <div>${this.name}</div>
  //     <div>${this.descr}</div>
  //     `

  //     this.parent.append(div);
  //   }
  // }

  // const btn = document.querySelector('.form__btn'),
  //       name = document.querySelector('.movie__name').value,
  //       descr = document.querySelector('.movie__descr').value;
  //       // rating = document.querySelector('.moving__rating');

  // console.log(name);

  // btn.addEventListener('click', (e) => {
  //   e.preventDefault()

  //   console.log(name);
  //   new MovieCard(name, descr, '.movie__list').render();
  // });

  let addName = document.querySelector('.movie__name'),
      addBtn = document.querySelector('.form__btn'),
      parentDiv = document.querySelector('.movie__list');

  const movieList = [];

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let div = document.createElement('div');
    div.innerHTML = `
    ${addName.value}
    `
    div.style.color = '#ffffff';

    movieList.push(div);
    movieList.forEach((item) => {
      parentDiv.append(item);
    });

    console.log(addName.value);
  });


});
