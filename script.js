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
      addBtn = document.querySelector('.form__btn');

  const movieList = [];

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();



    console.log(addName.value);
  });


});
