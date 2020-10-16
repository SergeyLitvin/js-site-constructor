const model = [
    {type: 'title', value: 'Constructor sites on Javascript'},
    {type: 'text', value: 'here we go'},
    {
        type: 'columns', value: [
            '1111111111111',
            '2222222222222',
            '3333333333333'
        ]
    },
    {type: 'image', value: './assets/image.png'}
];

function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `;
}

function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `;
}

function columns(block) {
    const arrHtml = block.value.map( item => `<div class="col-sm">${item}</div>`);
    return `
        <div class="row">
            ${arrHtml.join('')}
        </div>
    `;
}

function image(block) {
    return `
        <div class="row">
            <img src="${block.value}" />
        </div>
    `
}

const $site = document.querySelector('#site');

let html = ``;
model.forEach((block) => {
    if (block.type === 'title') {
        html = title(block);
    } else if (block.type === 'text') {
        html = text(block);
    } else if (block.type === 'columns') {
        html = columns(block);
    } else if (block.type === 'image') {
        html = image(block);
    }
    $site.insertAdjacentHTML('beforeend', html);
});



