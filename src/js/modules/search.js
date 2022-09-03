import {renderList} from "./renderListBooks.js";
import {searchBooks} from "./serviceBook.js";

const btnSearch = document.querySelectorAll('.header_btn_search');
const search = document.querySelector('.search'); 
const searchForm = document.querySelector('.search_form');

const closeSearch = ({target}, flag) => {
    // console.log(event);
    // const targer = event.target;
    // const {target} = event;
    if (target.closest('.search, .header_btn_search') && !flag) {
        return;
    }
    search.classList.remove('search_active');
    document.remove('click', closeSearch);
};

btnSearch.forEach ( btn => {
    btn.addEventListener('click', () => {
        search.classList.add('search_active');
        document.addEventListener('click', closeSearch, true);
    })
});

searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    const books = await searchBooks(searchForm.input.value);
    renderList(books);
    e.target.reset();  
    closeSearch(e, true);
});