import {col, container, css, row} from "../js/utils";

export class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error ('Method toHTML need realized');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    }

    toHTML() {
        const { tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options);
    }

    toHTML() {
        const {imageStyles, alt = '', styles} = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    }

    toHTML() {
        const { styles } = this.options;
        const arrHtml = this.value.map( item => col(item));
        return container(row(arrHtml.join(''), css(styles)));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options);
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}