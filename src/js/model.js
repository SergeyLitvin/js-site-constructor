import image from '../assets/image.png';

export const model = [
    {   type: 'title',
        value: 'Constructor sites on pure Javascript!',
        options: {
            tag: 'h1',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240); color: #ffffff; text-align: center; padding: 1.5rem;'
            }
        }
    },
    {type: 'text', value: 'here we go'},
    {
        type: 'columns', value: [
            '1111111111111',
            '2222222222222',
            '3333333333333'
        ],
        options: {
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240); color: #ffffff; text-align: center; padding: 1.5rem;'
            }
        }
    },
    {
        type: 'image', value: image, options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Image for course'
        }
    },
    {
        type: 'columns', value: [
            'Напишешь приложение не чистом JavaScript, без использования библиотек',
            'Узнаешь как работают принципы SOLID и OOP в JavaScript за один курс',
            'JavaScript - это просто и интересно. Научись создавать любые UI своими руками.'
        ], options:  {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0',
                padding: '2rem',
                color: '#ffffff',
                'font-weight': '700'
            }
        }
    },
    {
        type: 'text', value: 'text', options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c',
                padding: '1rem',
                'font-weight': '700'
            }
        }
    }
];