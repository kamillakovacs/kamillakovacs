'use strict'

export {};

declare function require(path:string): any;
const fs = require('fs');
const charEncoding = 'utf-8';

function readPoem() {
  let poem1 = fs.readFileSync(`poem.txt`, charEncoding);
  let regex = /[.,\s]/g;
  let newpoem = poem1.replace(regex, ' ');
  let splitString = newpoem.split(` `).sort()

  // let counter = 0;
  // for (let i = 0; i < splitString.length; i ++) {
  //    counter = splitString[i].length + counter;
  // }
  
  // console.log(counter);

  let eightLetters = splitString.filter(elem => elem.length >= 8)
  return eightLetters;
};

console.log(readPoem());
