import { row, col, container } from './utils';

function title(block) {
    const { tag = 'h1', styles} = block.options;
    return row(col(`<${tag} style="${styles}">${block.value}</>`));
}

function text(block) {
    return row(col(`<p>${block.value}</p>`));
}

function columns(block) {
    const arrHtml = block.value.map( item => col(item));
    return container(row(arrHtml.join('')));
}

function image(block) {
    return row(`<img src="${block.value}" />`)
}

export const templates = {
    title,
    text,
    columns,
    image,
};