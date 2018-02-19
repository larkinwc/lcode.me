// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let x = 0;
setInterval(() => { x += 1; $('#main').html('You have been here for ' + x + ' seconds'); }, 1000);
