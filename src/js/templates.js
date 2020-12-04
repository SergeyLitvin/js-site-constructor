import { row, col, container, css } from './utils';

function title(block) {
    const { tag = 'h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

function columns(block) {
    const { styles } = block.options;
    console.log('styles(): ', styles);
    const arrHtml = block.value.map( item => col(item));
    return container(row(arrHtml.join(''), css(styles)));
}

function image(block) {
    const {imageStyles, alt = '', styles} = block.options;
    return row(`<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles));
}

export const templates = {
    title,
    text,
    image,
    columns,

};