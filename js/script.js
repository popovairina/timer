document.addEventListener('DOMContentLoaded', function() {
   'use strict';

   let box = document.querySelector('.timer'),
       date = new Date();


   setInterval(function() {
       date = new Date();
       let hours = date.getHours(),
           minutes = date.getMinutes(),
           seconds = date.getSeconds();
       if (hours.toString().length == 1) {
           hours = '0' + hours;
       }
       if (minutes.toString().length == 1) {
           minutes = '0' + minutes;
       }
       if (seconds.toString().length == 1) {
           seconds = '0' + seconds;
       }
       box.textContent = `${hours}:${minutes}:${seconds}`;
   }, 1000);


});