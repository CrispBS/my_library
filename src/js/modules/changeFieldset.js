import {router} from "./router.js";
import {addBooks} from "./serviceBook.js";
import {clearPreview} from "./upload.js";
import toBase64 from "./toBase64.js";

const fieldsets = document.querySelectorAll('.add_fieldset');
const addBtn = document.querySelector('.add_btn');
const form = document.querySelector('.add_form');
const btnBack = document.querySelector('.add_btn_back');


let count = 0;

const sendBook = async () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.image = await toBase64(data.image);
    const book = await addBooks(data); 
    if (book) {
        form.reset();
        clearPreview();
        router.navigate('/');
        addBtn.textContent = 'Далее';
    } 
};

const changeFieldset = () => {
    if(count === fieldsets.length - 1) {
        addBtn.textContent = 'Добавить книгу';
    } else {
        addBtn.textContent = 'Далее';
    }

    fieldsets[count].classList.remove('hidden');
};

const initFieldset = () => {
    addBtn.addEventListener('click', () => {
        const fieldset = fieldsets[count];
        let valid = true;
    
        // [...fieldset.elements].forEach(elem => console.log(elem));
        for(const elem of fieldset.elements) {
            if(!elem.checkValidity()) {
                elem.classList.add('no-valid');
                valid = false;
            }
            else {
                elem.classList.remove('no-valid');
            }
        }
    
        if(!valid) return;
    
        fieldset.classList.add('hidden');
        count += 1;
    
        if(count === fieldsets.length) {
            count = 0;
            sendBook();
        }
    
        changeFieldset();   
    });
    // console.log(fieldsets);
    // console.log(addBtn.dataset.count);
    
    btnBack.addEventListener('click', () => {
        if (count === 0) {
            form.reset();
            clearPreview();
            router.navigate('/');
            return;
        }
    
        fieldsets[count].classList.add('hidden');
        count--;
        changeFieldset();
    
    });
};

export default initFieldset;