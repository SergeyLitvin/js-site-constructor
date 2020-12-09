import image from '../assets/image.png';
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock  } from './../classes/blocks';

export const model = [
    new TitleBlock('Constructor sites on pure Javascript!', {
        tag: 'h1',
        styles: {
           background: "linear-gradient(to right, #ff0099, #493240)", value: 'Constructor sites on pure Javascript!',
           color: "#ffffff",
           "text-align": "center",     tag: 'h1',
           padding: "1.5rem"
       }
    }),
    new ImageBlock(image, {
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
    }),
    new ColumnsBlock( [
        'Напишешь приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и OOP в JavaScript за один курс',
        'JavaScript - это просто и интересно. Научись создавать любые UI своими руками.'
    ], {
        styles: {
            background: "linear-gradient(to left, #8e2de2, #4a00e0)",
            padding: "2rem",
            color: "#ffffff",
            "font-weight": "700"
        }
    }),
    new TextBlock('Прокачайся от Junior до Middle разработчика всего за 1 месяц!', {
        styles: {
            background: "linear-gradient(to right, #f2994a, #f2c94c)",
            padding: "1.2rem 0 0",
            margin: "0 0",
            "text-align": "center",
            "font-weight": "700",
            color: "#ffffff",
        }
    }),
];