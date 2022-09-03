import {getLabels, getBooks, API_URI} from "./serviceBook.js";
import {declOfNum} from "./declOfNum.js";

export const data = {
    books: [],
    labels: [],
    sortBook(sort) {
        return this.books.sort((a,b) => {
            if (sort === 'up') return a.rating > b.rating ? 1 : -1;   
            if (sort === 'down') return a.rating < b.rating ? 1 : -1;     
        });  
    },
    filterBook(value) {
        return this.books.filter(book => book.label === value)
    }
};

const libraryList = document.querySelector('.library_list');
const fieldList = document.querySelector('.fields_list_filter');
const libraryCount = document.querySelector('.library_count');

const getStars = rating => {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            stars.push(`<img class="card_rating-star" src="img/star.svg" alt="Рейтинг ${rating} из 5"></img>`);
        } else if (i < rating) {
            stars.push(`<img class="card_rating-star" src="img/star.svg" alt="">`);
        } else {
            stars.push(`<img class="card_rating-star" src="img/star-o.svg" alt="">`);
        }
    }

    return stars;
};
 
export const renderList = (books = data.books) => {
    libraryList.textContent = '';

    libraryCount.textContent = declOfNum(books.length, ['книга','книги','книг']);

    const items = books.map(({author, description, id, image, label, rating, title}) => { 
        const item = document.createElement('li');
        item.classList.add('library_item'); 
        item.innerHTML = `  
            <a href="/#/book?id=${id}">
                <article class="card">
                    <div class="card_wrapper">
                        <img src="${API_URI}${image}" alt="Обложка книги ${title}" class="card_image"> 
                        <p class="card_label">${data.labels[label]}</p>
                    </div>
                    <div class="card_content">
                        <h3 class="card_title">${title}</h3>
                        <p class="card_author">${author}</p>
                        <p class="card_description">${description.substring(0, 80)}...</p>
                        <div class="card_rating">
                            ${getStars(rating).join('')}
                        </div>
                    </div>
                </article>
            </a>
        `;

        return item;
    });    
    libraryList.append(...items); 
};

const renderFields = (labels) => {
    fieldList.textContent = '';
    
    for(const key in labels) {
        const item = document.createElement('li');
        item.className = 'fields_item';
        const button = document.createElement('button');
        button.className = 'fields_button';
        
        button.dataset.filter = key;
        button.textContent = labels[key];

        item.append(button);
        fieldList.append(item);
    }
};

export const renderListBooks = async () => {
    // const books = await getBooks();
    // const labels = await getLabels();
    const [books, labels] = await Promise.all([getBooks(), getLabels()]);
    data.books = books;
    data.labels = labels;

    renderList(books);
    renderFields(labels);
};