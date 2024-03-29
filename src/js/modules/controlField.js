import {data, renderList} from "./renderListBooks.js";

export const controlField = (btn, list, offList) => {
    btn.addEventListener('click', () => {
        list.classList.toggle('fields_list_active');
        offList.classList.remove('fields_list_active');
    });
    
    list.addEventListener('click', ({target}) => {
        if (target.classList.contains('fields_button')) {
            list.classList.remove('fields_list_active');

            if (target.dataset.sort) {
               data.sortBook(target.dataset.sort);
               renderList();
            }

            if (target.dataset.filter) {
                const filteredData = data.filterBook(target.dataset.filter);
                renderList(filteredData);
            }
        }
    });
};
