import image from '../assets/image.png';

export const model = [
    {type: 'title', value: 'Constructor sites on pure Javascript!', options: {
            tag: 'h1',
            styles: `background: linear-gradient(to right, #ff0099, #493240); color: #ffffff; text-align: center; padding: 1.5rem;`
        }},
    {type: 'text', value: 'here we go'},
    {
        type: 'columns', value: [
            '1111111111111',
            '2222222222222',
            '3333333333333'
        ]
    },
    {type: 'image', value: image}
];