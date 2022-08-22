//Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer');
const cardsContainer =document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#productDetail');
const productDetailCloseIcon=document.querySelector('.product-detail-close');

//Escuchadores de eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


//Funciones
function toggleDesktopMenu(){
  const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
  if(!isAsideClosed ){
    shoppingCartContainer.classList.add('inactive');
  }
  closeProductDetailAside()
  //toggle = cambiar (activar desactivar)
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
  const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
  if(!isAsideClosed ){
    shoppingCartContainer.classList.add('inactive');
  }
  closeProductDetailAside()
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside (){

  const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
  const isProductDetailClosed=productDetailContainer.classList.contains('inactive');

  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }

  if(!isMobileMenuClosed ){
    mobileMenu.classList.add('inactive');
  }

  if(!isProductDetailClosed ){
    productDetailContainer.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')

}
function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push({
  nombre: 'Bike',
  precio: 300.00,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  nombre: 'Skate Board',
  precio: 150.00,
  image: 'https://media.istockphoto.com/photos/blank-skateboard-deck-template-mockup-isolated-on-white-picture-id1202959751?b=1&k=20&m=1202959751&s=612x612&w=0&h=mXq32MLphQpneVe0MHZnWhzwk73EWtxHO4TN0PnMErc='
});
productList.push({
  nombre: 'Penny Board',
  precio: 200.00,
  image: 'https://images.pexels.com/photos/6774921/pexels-photo-6774921.jpeg'
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="product image">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
function renderProducts(productsArray){
  for(product of productsArray){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ '+product.precio  ;
    const productName = document.createElement
    ('p');
    productName.innerText = product.nombre;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName );
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

