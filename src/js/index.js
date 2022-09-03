import {initRouter} from './modules/router.js';
import './modules/search.js';
import changeFieldset from './modules/changeFieldset.js';
import {controlField} from './modules/controlField.js';
import './modules/upload.js';
// import './modules/test.js'; /// 0
 
// import {sum} from './modules/test.js';
// console.log(sum(3,5)); /// 1

// import foo from './modules/test.js';
// console.log(foo(3,5)); /// 2

const fieldsBtnSort = document.querySelector('.fields_btn_sort');
const fieldsListSort = document.querySelector('.fields_list_sort');
const fieldsBtnFilter = document.querySelector('.fields_btn_filter');
const fieldsListFilter = document.querySelector('.fields_list_filter');

const init = () => {
    initRouter();
    
    controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
    controlField(fieldsBtnFilter, fieldsListFilter, fieldsListSort);

    changeFieldset();
};

init();