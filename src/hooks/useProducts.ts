import { Product } from '../@types';
import { useMemo } from 'react';

export const books: Product[] = [
    {
        
        id: 1,
        title: 'Don Quijote de la Mancha',
        price: 9.99,
        summary: 'Don Quijote de la Mancha es una novela escrita por el autor español Miguel de Cervantes. Publicada en 1605, la novela ha sido adaptada a numerosas formas de medios, como películas, series de televisión y cómics.',
        author: 'Miguel de Cervantes',
        genre: 'Aventura',
        rating: 4,
        releaseDate: new Date('1605-01-01'),
        tags: ['aventura', 'caballeros', 'novela', 'sátira', 'valentía'],
        imageUrl: 'https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2016%2F07%2F20201800%2Fmejores-libros-Don-Quijote-sf.jpg?auth=02195529c9dee122a3f0dcb27a1f867b43e6eb4728dd21aab36959c2bca49396&smart=true&width=350&height=525&quality=85'
    },
    {
        id: 2,
        title: 'La odisea',
        price: 12.99,
        summary: 'La Odisea es un poema épico atribuido al poeta griego Homero, que se cree que fue compuesto en el siglo VIII a. C. Se trata de una secuela de la Ilíada, otra obra atribuida a Homero, y narra las aventuras de Ulises, rey de Ítaca, en su regreso a casa tras la Guerra de Troya.',
        author: 'Homero',
        genre: 'Ciencia Ficción',
        rating: 3,
        releaseDate: new Date('800-01-01'),
        tags: ['aventura', 'ciencia ficción', 'mitología', 'novela', 'viaje'],
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEkmKAdcC_5HAZ919Qdg0bEfgeHaa1UbDXQ&s'
    },
    {
        id: 3,
        title: 'El gran Gatsby',
        price: 15.99,
        summary: 'El gran Gatsby es una novela del autor estadounidense F. Scott Fitzgerald. Publicada en 1925, la novela ha sido adaptada a numerosas formas de medios, como películas, series de televisión y cómics.',
        author: 'F. Scott Fitzgerald',
        genre: 'Drama',
        rating: 4.3,
        releaseDate: new Date('1925-04-10'),
        tags: ['amor', 'drama', 'novela', 'riqueza', 'sociedad'],
        imageUrl: 'https://www.adazing.com/wp-content/uploads/2012/08/greatgatsby.jpg'
    },
    {
        id: 4,
        title: 'Moby Dick',
        price: 8.99,
        summary: 'Cuenta la historia del barco ballenero Pequod, a cargo del capitán Ahab, decidido a cobrar venganza contra una legendaria ballena blanca conocida como Moby Dick',
        author: 'Herman Melville',
        genre: 'Novela',
        rating: 3.8,
        releaseDate: new Date('1851-11-14'),
        tags: ['obsesion', 'venganza', 'tragedia'],
        imageUrl: 'https://www.exlibric.com/wp-content/uploads/2024/03/Moby-Dick.jpg'
    },
    {
        id: 5,
        title: 'Romeo y Julieta',
        price: 11.99,
        summary: 'Romeo y Julieta es una tragedia del dramaturgo inglés William Shakespeare. Escrita en torno al año 1595, la obra se basa en la leyenda de Tristán e Isolda recogida por el poeta inglés Thomas de Inglaterra en el siglo XII. La obra es una de las más representadas y versionadas del autor y de la historia de la literatura universal.',
         author: 'William Shakespeare',
        genre: 'Tragedia',
        rating: 4,
        releaseDate: new Date('1595-01-01'),
        tags: ['amor', 'drama', 'familia', 'muerte', 'romance', 'tragedia'],
        imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/360x360/ba/69/ba694cd6db3336d0fd36e75377399269.jpg'
    },
    {
        id: 6,
        title: 'Frankenstein',
        price: 14.99,
        summary: 'Frankenstein es una novela de terror escrita por la autora británica Mary Shelley. Publicada en 1818, la novela ha sido adaptada a numerosas formas de medios, como películas, series de televisión y cómics.',
        author: 'Mary Shelley',
        genre: 'Terror',
        rating: 5,
        releaseDate: new Date('1818-01-01'),
        tags: ['ciencia ficción', 'terror', 'novela', 'monstruos', 'muerte', 'venganza'],
        imageUrl: 'https://www.adazing.com/wp-content/uploads/2012/08/frankenstein.jpg'
    }
    ,
    {
        id: 7,
        title: 'Hamlet',
        price: 10.99,
        summary: 'Hamlet es una tragedia del dramaturgo inglés William Shakespeare. Escrita en torno al año 1600, la obra se basa en la leyenda de Amleth recogida por el cronista danés Saxo Grammaticus en el siglo XII. La obra es una de las más representadas y versionadas del autor y de la historia de la literatura universal.​',
        author: 'William Shakespeare',
        genre: 'Tragedia',
        rating: 4.5,
        releaseDate: new Date('1600-01-01'),
        tags: ['drama', 'familia', 'muerte', 'venganza'],
        imageUrl: 'https://i.pinimg.com/236x/31/26/fa/3126fa68ce46daa7166db15c0cab700a.jpg'
    },
    {
        id: 8,
        title: 'Peter Pan',
        price: 13.99,
        summary: 'Peter Pan es una novela de fantasía escrita por el autor escocés J. M. Barrie. Publicada en 1911, la novela ha sido adaptada a numerosas formas de medios, como películas, series de televisión y cómics.',
        author: 'J. M. Barrie',
        genre: 'Fantasia',
        rating: 4,
        releaseDate: new Date('1911-10-11'),
        tags: ['aventura', 'fantasía', 'infancia', 'niñez', 'sueños', 'vuelo'],
        imageUrl: 'https://i.pinimg.com/originals/0b/8f/63/0b8f6313d0fb8baa336e0687c929c4de.png'
    },
    {
        id: 9,
        title: 'Los tres mosqueteros',
        price: 16.99,
        summary: 'Los tres mosqueteros es una novela de aventuras escrita por el autor francés Alejandro Dumas. Publicada en 1844, es una de las obras más conocidas de la literatura universal y ha sido adaptada a numerosas formas de medios, como películas, series de televisión y cómics.',
        author: 'Alejandro Dumas',
        genre: 'Aventura',
        rating: 5,
        releaseDate: new Date('1844-03-14'),
        tags: ['amistad', 'aventura', 'espadachines', 'historia', 'novela', 'romance'],
        imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/360x360/4a/51/4a517246c750cce4318354451a62e407.jpg'
    },
    {
        id: 10,
        title: 'El principito',
        price: 7.99,
        summary: 'El principito es una obra literaria del escritor y aviador francés Antoine de Saint-Exupéry. Publicado en 1943 en Nueva York, es uno de los libros más leídos y traducidos de la literatura mundial. Ha sido traducido a más de 300 idiomas y dialectos',
        author: 'Antoine de Saint-Exupéry',
        genre: 'Fábula',
        rating: 5,
        releaseDate: new Date('1943-04-06'),
        tags: ['adultez', 'amistad', 'amor', 'aventura', 'crecimiento', 'felicidad', 'infancia', 'libertad', 'niñez', 'sabiduría', 'sueños', 'valores', 'vida'],
        imageUrl: 'https://i.pinimg.com/236x/17/e6/80/17e6808dbbe379cbe4a7a87a31174fb1.jpg'
    },
    {
        id: 11,
        title: 'El hombre invisible',
        price: 12.49,
        summary: 'El hombre invisible es una novela de ciencia ficción escrita por H. G. Wells. Originalmente publicada en 1897, la novela ha sido adaptada a numerosas formas de medios, como películas, series de televisión y cómics.',
        author: 'H. G. Wells',
        genre: 'Ciencia Ficción',
        rating: 4,
        releaseDate: new Date('1897-06-01'),
        tags: ['ciencia ficción', 'invisibilidad', 'misterio', 'novela', 'terror'],
        imageUrl: 'https://www.paredro.com/wp-content/uploads/2014/08/tumblr_mndack6Al41sp27wro1_400.png'
    },
    {
        id: 12,
        title: 'Cien años de soledad',
        price: 9.49,
        summary: 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.',
        author: 'Gabriel García Márquez',
        genre: 'Drama',
        rating: 5,
        releaseDate: new Date('1967-12-01'),
        tags: ['amor', 'familia', 'historia', 'magia', 'realismo mágico', 'sociedad'],
        imageUrl: 'https://saposyprincesas.elmundo.es/assets/2021/10/Cien-anos-de-soledad.jpg'
    }

];

export const useNewestBooks = () => {
    const newestBooks = useMemo(() => {
        return books
            .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
            .slice(0, 8);
    }, []);

    return newestBooks;
};

export const useSearchBooks = (query: string) => {
    const searchResults = useMemo(() => {
        if (!query) return books;

        const lowerCaseQuery = query.toLowerCase();
        return books.filter(book =>
            book.title.toLowerCase().includes(lowerCaseQuery) ||
            book.author.toLowerCase().includes(lowerCaseQuery) ||
            book.genre.toLowerCase().includes(lowerCaseQuery) ||
            book.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );
    }, [query]);

    return searchResults;
};


export const useBook = (id: number) => {
    const book = useMemo(() => books.find(book => book.id === id), [id]);
    return book;
}

