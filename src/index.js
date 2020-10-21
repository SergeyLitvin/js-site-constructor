import { model } from './js/model';
import { templates } from "./js/templates";
import './styles/main.css';

const $site = document.querySelector('#site');


model.forEach((block) => {
    const toHTML = templates[block.type];
    if(toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block));
    }
});



