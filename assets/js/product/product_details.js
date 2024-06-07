// Số lượng ảnh bạn có trong thư mục
const totalImages = 11;

// Đường dẫn đến thư mục chứa ảnh
const imageFolderPath = './assets/img/product_Dai_Truong/product/ListProduct/Prod_1/MainProd/';

// Lấy container chứa ảnh
const imageContainer = document.getElementById('imageContainer');

// Lặp qua số lượng ảnh và tạo các thẻ div với img
for (let i = 1; i <= totalImages; i++) {
    const mainProdDiv = document.createElement('div');
    mainProdDiv.classList.add('mainProd');

    const img = document.createElement('img');
    img.src = `${imageFolderPath}image_${i}.jpg`;
    img.alt = `Image ${i}`;

    mainProdDiv.appendChild(img);
    imageContainer.appendChild(mainProdDiv);
}


//==========================================================================================================

// Đường dẫn đến thư mục chứa ảnh
const warningImageFolderPath = '/assets/img/product_Dai_Truong/product/ListProduct/Prod_1/ImageTemplate/';

// Lấy container chứa ảnh
const imageWarningsContainer = document.getElementById('imageWarningsContainer');

// Lặp qua số lượng ảnh và tạo các thẻ div với img
for (let i = 1; i <= 6; i++) {
    const imgWarningDiv = document.createElement('div');
    imgWarningDiv.classList.add('img-warning');

    const img = document.createElement('img');
    img.src = `${warningImageFolderPath}image${i}.png`;
    img.alt = `Image ${i}`;

    imgWarningDiv.appendChild(img);
    imageWarningsContainer.appendChild(imgWarningDiv);
}
//===============================================================================================================

// Đường dẫn đến thư mục chứa ảnh
const rcdImageFolderPath = '/assets/img/product_Dai_Truong/product/ListProduct/Prod_1/Recommand/';

// Lấy container chứa ảnh
const rdcImageContainer = document.getElementById('rcdImageContainer');

// Lặp qua số lượng ảnh và tạo các thẻ label với img và input checkbox
for (let i = 0; i < 12; i++) {
    const label = document.createElement('label');
    label.classList.add('check-img');
    label.setAttribute('for', `pd${i}`);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `pd${i}`;
    checkbox.name = 'image';

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('prod-img');

    const img = document.createElement('img');
    img.src = `${rcdImageFolderPath}image${i + 1}.${i === 2 ? 'jpg' : 'png'}`; // Giả sử ảnh thứ 3 có định dạng jpg
    img.alt = `Image ${i + 1}`;

    imgDiv.appendChild(img);
    label.appendChild(checkbox);
    label.appendChild(imgDiv);
    rdcImageContainer.appendChild(label);
}
