

// Function to load images dynamically
function loadSliderImages(imageCount) {
  const slidesContainer = document.getElementById('slides-container');
  const manualContainer = document.getElementById('manual-container');

  for (let i = 1; i <= imageCount; i++) {
    // Create radio button
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'radio-btn';
    radioBtn.id = `btn${i}`;
    slidesContainer.appendChild(radioBtn);
  }

  for (let i = 1; i <= imageCount; i++) {
    // Create slide
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 1 ? ' first' : '');
    const img = document.createElement('img');
    img.src = `./assets/img/product_Dai_Truong/slideshow/silde_product/slideshow${i}.jpeg`;
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  }

  const creAutoContainer = document.createElement('div');
  creAutoContainer.className = 'slide-auto';
  creAutoContainer.id = 'auto-container';
  slidesContainer.appendChild(creAutoContainer);
  const autoContainer = document.getElementById('auto-container');
  
  for(let i = 1; i <= imageCount; i++) {
    // Create manual control
    const manualLabel = document.createElement('label');
    manualLabel.htmlFor = `btn${i}`;
    manualLabel.className = 'manual-btn';
    manualContainer.appendChild(manualLabel);

    // Create auto button
    const autoBtn = document.createElement('div');
    autoBtn.className = `auto-btn${i}`;
    autoContainer.appendChild(autoBtn);
  }

}
loadSliderImages(12);

var counter = 1;
setInterval(function () {
  document.getElementById('btn' + counter).checked = true;
  counter++;
  if (counter > 12) {
    counter = 1;
  }
}, 5000);

const newsContent = [
  { title: 'G-SHOCK SPECIAL SITE', slogan: "The World's Toughest Watches" },
  { title: 'Preppy Pop Index', slogan: "Step into a world of colorul charm with Preppy Pop" },
  { title: 'Join the fun with Tweety Bird !', slogan: "LOONEY TUNES x BGD-565TW-5" },
  { title: 'Playful style BG-168PB', slogan: "" },
  { title: 'TWEETY COLLABORATION MODEL', slogan: "" },
  // Thêm các phần tử khác vào đây tương ứng với số lượng ảnh
];

const newsItems = document.querySelector('.news-items');
function renderNews(newsContent) {
  newsContent.forEach((content, i) => {
      const li = document.createElement('li');

      const wrapNewsDiv = document.createElement('div');
      wrapNewsDiv.classList.add('wrap-news');

      const anchor = document.createElement('a');
      anchor.href = '#';

      const newsImageDiv = document.createElement('div');
      newsImageDiv.classList.add('news-image');

      const img = document.createElement('img');
      img.src = `assets/img/product_Dai_Truong/slideshow/news/slide_${i + 1}.jpeg`;

      newsImageDiv.appendChild(img);

      const newsContentDiv = document.createElement('div');
      newsContentDiv.classList.add('news-content');

      if (content) {
          const newsTitleDiv = document.createElement('div');
          newsTitleDiv.classList.add('news-title');
          newsTitleDiv.textContent = content.title;

          const sloganDiv = document.createElement('div');
          sloganDiv.classList.add('slogan');
          sloganDiv.textContent = content.slogan;

          newsContentDiv.appendChild(newsTitleDiv);
          newsContentDiv.appendChild(sloganDiv);
      }

      anchor.appendChild(newsImageDiv);
      anchor.appendChild(newsContentDiv);

      wrapNewsDiv.appendChild(anchor);

      li.appendChild(wrapNewsDiv);

      newsItems.appendChild(li);
  });
}

// Sử dụng hàm để render danh sách tin tức
renderNews(newsContent);





// Mảng chứa thông tin sản phẩm
const products = [
  { name: 'G-SHOCK', code: 'MTG-B3000DN-1A', priceLabel: 'VND', price: '1.000.000.000' },
  { name: 'BABY-G', code: 'BA-110-7A1ER', priceLabel: 'VND', price: '2.000.000.000' },
  { name: 'PRO TREK', code: 'PRW-6000Y', priceLabel: 'VND', price: '3.000.000.000' },
  { name: 'EDIFICE', code: 'EFR-539D-1A2V', priceLabel: 'VND', price: '4.000.000.000' },
  { name: 'SHEEN', code: 'SHE-3516SG-7A', priceLabel: 'VND', price: '5.000.000.000' },
  { name: 'Islamic Prayer Watch Series', code: 'PRG-240-1', priceLabel: 'VND', price: '6.000.000.000' },
  { name: 'Paired Watches', code: 'GA-110GB-1A', priceLabel: 'VND', price: '7.000.000.000' },
  { name: 'Wall Clocks', code: 'IQ-62-5A', priceLabel: 'VND', price: '8.000.000.000' }
];

for (let i = 1; i <= 500; i++) {
  products.push({
    name: `Product ${i}`,
    code: `CODE-${i}`,
    priceLabel: 'VND',
    price: `${i * 1000000000}`
  });
}

// Chọn container
const productList = document.querySelector('.product-items');

// Hàm render sản phẩm
function renderProducts(data) {
  data.forEach((product, i) => {
      // Tạo thẻ li
      const li = document.createElement('li');
      li.classList.add('current-item');

      // Tạo div .item
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      // Tạo thẻ a
      const a = document.createElement('a');
      a.href = '/product-detail-1.html';

      // Tạo thẻ div cho hình ảnh sản phẩm
      const prodImageDiv = document.createElement('div');
      prodImageDiv.classList.add('prod-image');

      let check1 = true;
      let check2 = true;

      // Tạo thẻ div cho hình ảnh chính
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      const image = document.createElement('img');
      image.src = `./assets/img/product_Dai_Truong/product/png/image_${i+1}.png`;
      image.onerror = function() {
        image.src = `./assets/img/product_Dai_Truong/product/jpg/image_${i+1}.jpg`;
        image.onerror = function() {
          this.style.display = 'none';
          if (!imageLoaded) {
            li.remove(); // Xóa li nếu không có ảnh nào được load
          }
        };
      };
      image.onload = function() {
        imageLoaded = true;
      };
      imageDiv.appendChild(image);

      // Tạo thẻ div cho hình ảnh hover
      const imageHoverDiv = document.createElement('div');
      imageHoverDiv.classList.add('image-hover');
      const imageHover = document.createElement('img');
      imageHover.src = `./assets/img/product_Dai_Truong/product/jpg/image_${i+1}.jpg`;
      imageHover.onerror = function() {
        this.style.display = 'none';
      };
      imageHoverDiv.appendChild(imageHover);

      // Gắn các thẻ hình ảnh vào div sản phẩm
      prodImageDiv.appendChild(imageDiv);
      prodImageDiv.appendChild(imageHoverDiv);

      // Tạo thẻ div cho thông tin sản phẩm
      const prodInfoDiv = document.createElement('div');
      prodInfoDiv.classList.add('prod-info');

      // Tạo các thẻ div cho tên, mã và giá sản phẩm
      const prodNameDiv = document.createElement('div');
      prodNameDiv.classList.add('prod-name');
      prodNameDiv.textContent = product.name;

      const prodCodeDiv = document.createElement('div');
      prodCodeDiv.classList.add('prod-code');
      prodCodeDiv.textContent = product.code;

      const prodPriceLabelDiv = document.createElement('div');
      prodPriceLabelDiv.classList.add('prod-price-label');
      prodPriceLabelDiv.textContent = product.priceLabel;

      const prodPriceDiv = document.createElement('div');
      prodPriceDiv.classList.add('prod-price');
      prodPriceDiv.textContent = product.price;

      // Gắn các thẻ thông tin sản phẩm vào div thông tin sản phẩm
      prodInfoDiv.appendChild(prodNameDiv);
      prodInfoDiv.appendChild(prodCodeDiv);
      prodInfoDiv.appendChild(prodPriceLabelDiv);
      prodInfoDiv.appendChild(prodPriceDiv);

      // Gắn các thẻ div hình ảnh và thông tin sản phẩm vào thẻ a
      a.appendChild(prodImageDiv);
      a.appendChild(prodInfoDiv);

      // Gắn thẻ a vào div .item
      itemDiv.appendChild(a);

      // Tạo div .add-to-cart
      const addToCartDiv = document.createElement('div');
      addToCartDiv.classList.add('add-to-cart');

      // Tạo thẻ a cho add-to-cart
      const cartLink = document.createElement('a');
      cartLink.href = './product-detail-1.html';
      cartLink.innerHTML = 'Add to cart <img src="./assets/icons/addcart.svg" alt="Add to cart">';

      // Gắn thẻ a vào div .add-to-cart
      addToCartDiv.appendChild(cartLink);

      // Gắn div .item và div .add-to-cart vào thẻ li
      li.appendChild(itemDiv);
      li.appendChild(addToCartDiv);

      // Gắn thẻ li vào container
      image.onload = function() {
        productList.appendChild(li);
      };

  });
}

// Render sản phẩm
renderProducts(products);


document.getElementById('btn-clear').addEventListener('click', function() {
  const checkboxes = document.querySelectorAll('.prod-panel input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = false;
  });
});

// scripts.js

// Dữ liệu mẫu
const bezelColors = [
  { id: 'cl1', color: 'black', label: 'Black' },
  { id: 'cl2', color: 'white', label: 'White' },
  { id: 'cl3', color: 'red', label: 'Red' },
  { id: 'cl4', color: 'blue', label: 'Blue' },
  { id: 'cl5', color: 'green', label: 'Green' },
  { id: 'cl6', color: 'yellow', label: 'Yellow' },
  { id: 'cl7', color: 'orange', label: 'Orange' },
  { id: 'cl8', color: 'purple', label: 'Purple' },
  { id: 'cl9', color: 'pink', label: 'Pink' },
  { id: 'cl10', color: 'brown', label: 'Brown' },
  { id: 'cl11', color: 'grey', label: 'Grey' },
  { id: 'cl12', color: 'cyan', label: 'Cyan' },
  { id: 'cl13', color: 'magenta', label: 'Magenta' },
  { id: 'cl14', color: 'lime', label: 'Lime' },
  { id: 'cl15', color: 'maroon', label: 'Maroon' },
  { id: 'cl16', color: 'navy', label: 'Navy' }
];

// Chọn container
const bezelColorWrap = document.querySelector('.bezel-color-wrap');

// Hàm render checkbox
function renderCheckboxes(data) {
  data.forEach(item => {
      // Tạo label
      const label = document.createElement('label');
      label.setAttribute('for', item.id);
      label.classList.add('colortips');
      
      // Tạo input
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('name', 'bezelColor');
      input.setAttribute('id', item.id);
      
      // Tạo colortips_wrap span
      const colortipsWrap = document.createElement('span');
      colortipsWrap.classList.add('colortips_wrap');
      
      // Tạo colortips_tip span
      const colortipsTip = document.createElement('span');
      colortipsTip.setAttribute('style', `background: ${item.color};`);
      colortipsTip.classList.add('colortips_tip');
      colortipsTip.classList.add(`color${item.id}`);
      colortipsTip.textContent = item.label;
      
      // Tạo colortips_txt span
      const colortipsTxt = document.createElement('span');
      colortipsTxt.classList.add('colortips_txt');
      colortipsTxt.textContent = item.label;
      
      // Gắn các phần tử con vào cha
      colortipsWrap.appendChild(colortipsTip);
      label.appendChild(input);
      label.appendChild(colortipsWrap);
      label.appendChild(colortipsTxt);
      
      // Thêm label vào container
      bezelColorWrap.appendChild(label);
  });
}

// Render checkboxes
renderCheckboxes(bezelColors);


