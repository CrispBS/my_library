import toBase64 from "./toBase64.js";

const label = document.querySelector('.upload_label');
const preview = document.querySelector('.upload_preview');
const file = document.querySelector('.upload_file');
 
const previewSrc = preview.src;

file.addEventListener('change', async () => {
    if (file.files.length > 0) {
        const base64 = await toBase64(file.files[0]);
        preview.style.display = 'block';
        label.classList.add('upload_label_active');
        preview.src = base64;
    } 
});

export const clearPreview = () => {
    preview.style.display = '';
    label.classList.remove('upload_label_active');
    preview.src = previewSrc; 
}