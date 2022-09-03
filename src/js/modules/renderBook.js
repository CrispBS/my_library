import {getLabels, getBooks, API_URI, deleteBooks, editBooks} from "./serviceBook.js";
import {router} from "./router.js";

const container = document.querySelector('.book_container');
const btnDelete = document.querySelector('.header_btn_delete');
const bookLabel = document.querySelector('.footer_btn.book_label');
//const btnLogo = document.querySelector('.logo_container');

btnDelete.addEventListener('click', async() => {
    await deleteBooks(btnDelete.dataset.id);
    router.navigate('/');
});

// btnLogo.addEventListener('click', () =>{
//     alert("click");
//     router.navigate('/');
// });

let timerID;
const changeLabel = async ({target}) => {
    const labels = await getLabels();
    const labelKeys = Object.keys(labels);
    const labelNow = target.dataset.label;
    const index = labelKeys.indexOf(labelNow);
    
    const indexNext = (index + 1) % labelKeys.length;
    
    let labelNext = labelKeys[indexNext];

    document.querySelectorAll('.book_label').forEach(btn => {
        btn.dataset.label = labelNext;
        btn.textContent = labels[labelNext];    
    });

    clearInterval(timerID);

    timerID = setTimeout(() => {
        editBooks(target.dataset.id, {label: labelNext});
    }, 1000);
};

bookLabel.addEventListener('click', changeLabel);

const getStars = rating => {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            stars.push(`<img class="book_rating-star" src="img/star.svg" alt="Рейтинг ${rating} из 5"></img>`);
        } else if (i < rating) {
            stars.push(`<img class="book_rating-star" src="img/star.svg" alt="">`);
        } else {
            stars.push(`<img class="book_rating-star" src="img/star-o.svg" alt="">`);
        }
    }

    return stars;
};

export const renderBook = async (id) => {
    // const books = await getBooks();
    // const labels = await getLabels();
    const [books, labels] = await Promise.all([getBooks(id), getLabels()]);
    container.textContent = '';

    const {author,title,description,label,image,rating} = books;

    // const btnLabel = document.createElement('button');
    // btnLabel.className = 'book_label book_label_img';    
    // btnLabel.textContent = labels[label];
    // btnLabel.dataset.label = label;
    // btnLabel.dataset.id = id;
    // btnLabel.addEventListener('click', changeLabel);

    container.innerHTML = `
    <div class="book_wrapper">
        <img class="book_image" src="${API_URI}${image}" alt="обложка ${title}">

        <button class="book_label book_label_img" data-label="${label}" data-id="${id}">${labels[label]}</button>
    </div>

    <div class="book_content">
        <h2 class="book_title">${title}</h2>
        
        <p class="book_author">${author}</p>

        <div class="book_rating">
            ${getStars(rating).join('')}
        </div>

        <h3 class="book_subtitle">Описание</h3>

        <p class="book_description">${description}</p>
    </div>
    `;

    const btnLabel = document.querySelector('.book_label_img')
    btnLabel.addEventListener('click', changeLabel)
    btnDelete.dataset.id = id;
    bookLabel.dataset.id = id;
    bookLabel.dataset.label = label;
    bookLabel.textContent = labels[label];    
}; 

