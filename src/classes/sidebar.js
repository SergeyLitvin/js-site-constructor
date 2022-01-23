import { block } from '../js/utils'
import { TextBlock, TitleBlock } from "./blocks";
export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.add)
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('');
    }

    add(e) {
        e.preventDefault();
        const type = e.target.name;
        const value= e.target.value.value;
        const styles = e.target.styles.value;

        let newBlock;

        if(type === 'text') {
            newBlock = new TextBlock(value, {styles});
        } else {
            newBlock = new TitleBlock(value, {styles});
        }
    }
}