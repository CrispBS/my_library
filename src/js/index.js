import Navigo from 'navigo';

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');

const router = new Navigo('/', {
    hash: true, 
});

const closeAllPage = () => {
    library.classList.add('hidden');
    book.classList.add('hidden');
    add.classList.add('hidden');  
}

router.on( {
    '/': () => {
        closeAllPage();
        library.classList.remove('hidden');
    },
    'book': () => {
        closeAllPage();
        library.classList.remove('hidden');
    },
    'add': () => {
        closeAllPage();
        library.classList.remove('hidden');
    }
}).resolve();