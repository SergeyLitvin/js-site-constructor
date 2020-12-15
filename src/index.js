import { model } from './js/model';
import { Site } from './classes/site';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach((block) => {
    $site.insertAdjacentHTML('beforeend', block.toHTML());
});



