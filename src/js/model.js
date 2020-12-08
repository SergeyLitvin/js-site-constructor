import image from '../assets/image.png';

export const model = [
    {   type: 'title',
        value: 'Constructor sites on pure Javascript!',
        options: {
            tag: 'h1',
            // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #ffffff; text-align: center; padding: 1.5rem;`,
            styles: {
                background: "linear-gradient(to right, #ff0099, #493240)",
                color: "#ffffff",
                "text-align": "center",
                padding: "1.5rem"
            }
        }
    },
    // {type: 'text', value: 'here we go', options: {
    //         styles: {
    //             padding: "1rem",
    //             color: "#000000",
    //             "font-weight": "400"
    //         }
    //     }
    // },
    // {
    //     type: 'columns', value: [
    //         '1111111111111',
    //         '2222222222222',
    //         '3333333333333'
    //     ],
    //     options: {
    //         styles: {
    //             background: "#c4c4c4",
    //             color: "#ffffff",
    //             "text-align": "center",
    //             padding: "1.5rem"
    //         }
    //     }
    // },
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
                background: "linear-gradient(to left, #8e2de2, #4a00e0)",
                padding: "2rem",
                color: "#ffffff",
                "font-weight": "700"
            }
        }
    },
    {
        type: 'text', value: 'Прокачайся от Junior до Middle разработчика всего за 1 месяц!',
        options: {
            styles: {
                background: "linear-gradient(to right, #f2994a, #f2c94c)",
                padding: "1.2rem 0 0",
                margin: "0 0",
                "text-align": "center",
                "font-weight": "700",
                color: "#ffffff",
            }
        }
    }
];