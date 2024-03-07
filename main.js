"use strict";
let clickCount = 0;

let clickCount2 = 0;
let counterSeizeWomen = 0;
let clickCount1 = 0;
let counterSeizeMen = 0;
let counterSeizeMen2 = 0
let counterSeizeWomen2 = 0

// shoe prices obect
const shoePricesObj = {
  shoePrice: 125,
  shoePriceAllstar:350,
} 
// to swtich pages and still make functionality work
let pageswitcher = 1

// Big images display on the pages
const mainImgDisplay = document.querySelectorAll(".product1-img");
const smallImgDisplay = document.querySelector(".product1-img2");

// counter on the cart image
const smallCounterCart = document.querySelector(".small-counter")
document.querySelector(".inner44").style.display = "none"
const checkOut = document.querySelector(".inner44");


// thumbnail clicks
const thumbNail1 = document.querySelectorAll(".shoe-1");
const thumbNail2 = document.querySelectorAll(".shoe-2");
const thumbNail3 = document.querySelectorAll(".shoe-3");
const thumbNail4 = document.querySelectorAll(".shoe-4");

// thumbnail images
const thumb1Display = document.querySelector(".thumb1");
const thumb2Display = document.querySelector(".thumb2");
const thumb3Display = document.querySelector(".thumb3");
const thumb4Display = document.querySelector(".thumb4");

thumb1Display.src=`images/allstars-product-1-thumbnail.png`
    thumb2Display.src=`images/allstars-product-2-thumbnail.png`
    thumb3Display.src=`images/allstars-product-3-thumbnail.png`
    thumb4Display.src=`images/allstars-product-4-thumbnail.png`



// overlay
const overlay = document.querySelector(".overlay");
const overlayDisplay = document.querySelector(".overlay-box");
const closeOverlay = document.querySelector(".close-overlay");

// cart 
const cartBtn = document.querySelector(".cart-show-hide");
const cartBox = document.querySelector(".cart-background");
const addToCartBtn = document.getElementById("addcart-btn");
const addToCartBtnWomen = document.getElementById("addcart-btn-women");

const emptyCart = document.querySelector(".empty-cart");
const loadedCart = document.querySelector('.cart-image-text')
const loadedCartWomen = document.querySelector('.hidden-cart-selection-women')
const deleteCart = document.querySelector('.empty-cart-button') 

cartBox.classList.add("hidden-cart");
emptyCart.classList.remove('empty-cart-hidden')
loadedCart.classList.add('hidden-cart-selection')



// cart texts
const counterOnCart = document.querySelector(".item-count")
const counterOnCartWomen = document.querySelector(".item-count-women")

const itemCostOnCart = document.querySelector(".item-cost")
const counter = document.querySelector('.counter-value')
const counterWomen = document.querySelector('.counter-value-women')

const totalItemPrice = document.querySelector('.total-price')
const totalItemPriceWomen = document.querySelector('.total-price-women')



const btnWomenPage = document.querySelector('.nav-item3')
const btnWomenPageSmall = document.querySelector('.women-button')

const btnMenPage = document.querySelector('.nav-item2')
const btnMenPageSmall = document.querySelector('.men-button')


// men and women pages
const pageMen = document.querySelector('.men-section')
const pageWomen = document.querySelector('.women-section')
pageWomen.style.display = "none";



const Cancelbtn = document.querySelector(".cancel-btn");
const nextBtn = document.querySelectorAll(".next")
const prevBtn = document.querySelectorAll(".prev")

let nextCount = 0
for (let i = 0; i < nextBtn.length; i++)
nextBtn[i].addEventListener("click", function () {
  if (nextCount <= 2 ) {
    nextCount ++
  if (nextCount === 1) {
    if (pageswitcher === 1) {
      
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[1]}.png`;
      
    } else if (pageswitcher === 2){
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[1]}.jpg`;
      
  }
    thumbNail1.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    
  }
  if (nextCount === 2) {
    if (pageswitcher === 1) {
      
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[2]}.png`;
      
    } else if (pageswitcher === 2){
    mainImgDisplay[i].src = `images/image-product-${imagesSelection[2]}.jpg`;
    
  }
    thumbNail1.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    
  }
  if (nextCount === 3) {
    if (pageswitcher === 1) {
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[3]}.png`;
      
      
    } else if (pageswitcher === 2){
      
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[3]}.jpg`;
  }
    thumbNail1.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    
  }
  console.log(nextCount);
 
    
  } 
})

for (let i = 0; i < prevBtn.length; i++)
prevBtn[i].addEventListener("click", function () {
  if (nextCount === 1) {
     nextCount = 0
     if (pageswitcher === 1) {
       
       mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[0]}.png`;
       
      } else if (pageswitcher === 2){
        
        mainImgDisplay[i].src = `images/image-product-${imagesSelection[0]}.jpg`;
  }
    thumbNail1.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    
  }
  if (nextCount === 2) {
    nextCount = 1
    if (pageswitcher === 1) {
      
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[1]}.png`;
      
    } else if (pageswitcher === 2){
      
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[1]}.jpg`;
  }
    thumbNail1.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    
  }
  if (nextCount === 3) {
    nextCount = 2
    if (pageswitcher === 1) {
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[2]}.png`;
      
      
    } else if (pageswitcher === 2){
      
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[2]}.jpg`;
  }
    thumbNail1.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    
  }
  
})

// women link on small screens

btnWomenPageSmall.addEventListener("click",function name(params) {
  event.preventDefault();
  
  console.log('women clicked');
  btnWomenPage.style.borderBottom = '2px solid white';
    btnMenPage.style.borderBottom = '2px solid transparent';
    pageWomen.style.display = "block";
    pageMen.style.display = "none";
    nextCount = 0
    pageswitcher = 2
    document.querySelector('.main-product-img2').src = 'images/image-product-1.jpg'
    thumb1Display.src=`images/image-product-1-thumbnail.jpg`
    thumb2Display.src=`images/image-product-2-thumbnail.jpg`
    thumb3Display.src=`images/image-product-3-thumbnail.jpg`
    thumb4Display.src=`images/image-product-4-thumbnail.jpg`

   
thumbNail1.forEach((element) => {
  element.classList.add("shoe-active");
  
});
thumbNail2.forEach((element) => {
  element.classList.remove("shoe-active");
  
});
thumbNail3.forEach((element) => {
  element.classList.remove("shoe-active");
  
});
thumbNail4.forEach((element) => {
  element.classList.remove("shoe-active");
  
});
document.querySelector('.hidden-small-bar').style.display = "none" 




   
    
})

// women link on big screens

btnWomenPage.addEventListener("click",function name(params) {
  event.preventDefault();

    console.log('women clicked');
    btnWomenPage.style.borderBottom = '2px solid white';
    btnMenPage.style.borderBottom = '2px solid transparent';

    pageWomen.style.display = "block";
    pageMen.style.display = "none";
    pageswitcher = 2
    thumb1Display.src=`images/image-product-1-thumbnail.jpg`
    thumb2Display.src=`images/image-product-2-thumbnail.jpg`
    thumb3Display.src=`images/image-product-3-thumbnail.jpg`
    thumb4Display.src=`images/image-product-4-thumbnail.jpg`
   
thumbNail1.forEach((element) => {
  element.classList.remove("shoe-active");
  
});
thumbNail2.forEach((element) => {
  element.classList.remove("shoe-active");
  
});
thumbNail3.forEach((element) => {
  element.classList.remove("shoe-active");
  
});
thumbNail4.forEach((element) => {
  element.classList.remove("shoe-active");
  
});




   
    
})


btnMenPage.addEventListener("click",function name(params) {
  event.preventDefault();

    console.log('men clicked');
    btnWomenPage.style.borderBottom = '2px solid transparent';
    btnMenPage.style.borderBottom = '2px solid white';
    pageWomen.style.display = "none";

    pageMen.style.display = "block";
    pageswitcher = 1
    thumb1Display.src=`images/allstars-product-1-thumbnail.png`
    thumb2Display.src=`images/allstars-product-2-thumbnail.png`
    thumb3Display.src=`images/allstars-product-3-thumbnail.png`
    thumb4Display.src=`images/allstars-product-4-thumbnail.png`
    
    thumbNail1.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    

    



   
    
})
let opened = false;

const navbtn = document.querySelector(".nav-collapse");
navbtn.addEventListener("click",function () {
    document.querySelector('.hidden-small-bar').style.display = "block" 
    clickCount = 0;
    cartBox.classList.add("hidden-cart");
    opened = true
    console.log(opened)




  
})

// cancel button for small screens
Cancelbtn.addEventListener("click",function () {
  document.querySelector('.overlay-small-screen').style.display = "none" 
  
})


//  men page on small screen
btnMenPageSmall.addEventListener("click",function name(params) {
  event.preventDefault();

    console.log('men clicked');
    btnWomenPage.style.borderBottom = '2px solid transparent';
    btnMenPage.style.borderBottom = '2px solid white';
    pageWomen.style.display = "none";

    pageMen.style.display = "block";
    pageswitcher = 1
    nextCount = 0
    document.querySelector('.main-product-img').src = 'images/image-product-1.jpg'
 
    thumb1Display.src=`images/allstars-product-1-thumbnail.png`
    thumb2Display.src=`images/allstars-product-2-thumbnail.png`
    thumb3Display.src=`images/allstars-product-3-thumbnail.png`
    thumb4Display.src=`images/allstars-product-4-thumbnail.png`
    thumbNail1.forEach((element) => {
      element.classList.add("shoe-active");
      
    });
    thumbNail2.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail3.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
    thumbNail4.forEach((element) => {
      element.classList.remove("shoe-active");
      
    });
document.querySelector('.hidden-small-bar').style.display = "none" 

    



   
    
})


        


itemCostOnCart.textContent = `$${shoePricesObj.shoePrice}`


// cart button on nav
cartBtn.addEventListener("click", function () {
    clickCount++;

  cartBox.classList.remove("hidden-cart");
  if (clickCount === 2) {
    clickCount = 0;
    cartBox.classList.add("hidden-cart");
}
});


// overlay open and close function
const overlayOpen = function () {
    document.querySelector(".overlay").classList.remove("hide-overlay");
    document.querySelector(".overlay-box").classList.remove("hide-overlay");
};

// images array
const imagesSelection = [1, 2, 3, 4];
console.log(imagesSelection[3]);



for (let i = 0; i < mainImgDisplay.length; i++)

mainImgDisplay[i].addEventListener("click", function () {
  if (window.innerWidth > 650) {
    if (pageswitcher === 1) {
      overlayOpen();
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[0]}.png`;
      smallImgDisplay.src = `images/allstars-product-${imagesSelection[0]}.png`;
      
      
    } else if (pageswitcher === 2){
    mainImgDisplay[i].src = `images/image-product-${imagesSelection[0]}.jpg`;
  smallImgDisplay.src = `images/image-product-${imagesSelection[0]}.jpg`;
    overlayOpen();
    
  }
}
});

// close overlay
closeOverlay.addEventListener("click", function () {
  overlay.classList.add("hide-overlay");
  overlayDisplay.classList.add("hide-overlay");

});

// thumbnail buttons
// thumbnail button 1
for (let i = 0; i < thumbNail1.length; i++)
  thumbNail1[i].addEventListener("click", function name(params) {
    nextCount = 0
    
    console.log("hmmm");
    
      
      if (pageswitcher === 1) {
        mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[0]}.png`;
        smallImgDisplay.src = `images/allstars-product-${imagesSelection[0]}.png`;
        
        
      } else if (pageswitcher === 2){
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[0]}.jpg`;
      smallImgDisplay.src = `images/image-product-${imagesSelection[0]}.jpg`;
      
    }

    thumbNail1.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    if (window.innerWidth > 650) {
      overlayOpen();
      
    }
  });

// thumbnail button 2
for (let i = 0; i < thumbNail2.length; i++)
  thumbNail2[i].addEventListener("click", function name(params) {
    nextCount = 1

    console.log("hmmm2");
    if (pageswitcher === 1) {
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[1]}.png`;
      smallImgDisplay.src = `images/allstars-product-${imagesSelection[1]}.png`;
      
    }else{
      
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[1]}.jpg`;
      smallImgDisplay.src = `images/image-product-${imagesSelection[1]}.jpg`;
    }
   
    thumbNail1.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    if (window.innerWidth > 650) {
      overlayOpen();
      
    }
  });

// thumbnail button 3
for (let i = 0; i < thumbNail3.length; i++)
  thumbNail3[i].addEventListener("click", function name(params) {
    nextCount = 2

    if (pageswitcher === 1) {
      
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[2]}.png`;
      smallImgDisplay.src = `images/allstars-product-${imagesSelection[2]}.png`;
    }else{
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[2]}.jpg`;
      smallImgDisplay.src = `images/image-product-${imagesSelection[2]}.jpg`;

    }
    thumbNail1.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    if (window.innerWidth > 650) {
      overlayOpen();
      
    }
  });

// thumbnail button 4
for (let i = 0; i < thumbNail4.length; i++)
  thumbNail4[i].addEventListener("click", function name(params) {
    nextCount = 3

    if (pageswitcher === 1) {
      mainImgDisplay[i].src = `images/allstars-product-${imagesSelection[3]}.png`;
      smallImgDisplay.src = `images/allstars-product-${imagesSelection[3]}.png`;
      
    }else{
      mainImgDisplay[i].src = `images/image-product-${imagesSelection[3]}.jpg`;
      smallImgDisplay.src = `images/image-product-${imagesSelection[3]}.jpg`;

    }
    thumbNail1.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail2.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail3.forEach((element) => {
        element.classList.remove("shoe-active");
        
    });
    thumbNail4.forEach((element) => {
        element.classList.add("shoe-active");
        
    });
    if (window.innerWidth > 650) {
      overlayOpen();
      
    }
  });

//   counter.textContent = 2

// button for men pages, plus and minus

  const minusBtn = document.getElementById('minus-btn')
  minusBtn.addEventListener('click',function () {
    console.log('minus');
   if (clickCount1 > 1) {
    clickCount1--
    counter.textContent = clickCount1

    counterOnCart.textContent = clickCount1
totalItemPrice.textContent = `$${shoePricesObj.shoePrice* clickCount1}`


  
if (counterSeizeWomen2 === 1 & counterSeizeMen2 === 1) {
  smallCounterCart.textContent = clickCount1 + clickCount2

  
}else if (counterSeizeWomen2 === 0 & counterSeizeMen2 === 1) {
  smallCounterCart.textContent = clickCount1

  
}

    
   }else {
    console.log('switch up');
    clickCount1 = 0
    counter.textContent = clickCount1
    counterOnCart.textContent = clickCount1

   if (clickCount1 === 0 && clickCount2 === 0) {
    emptyCart.classList.remove('empty-cart-hidden')
    
    checkOut.style.display = "none"
    
   }
   if (counterSeizeMen2 === 1) {
    counterSeizeMen = 0

     smallCounterCart.textContent = clickCount1 + clickCount2
   
     
   }
   
     
   
    loadedCart.classList.add('hidden-cart-selection')

   
    counterSeizeMen2 = 0
   }

    
  })
  const PlusBtn = document.getElementById('plus-btn')
  PlusBtn.addEventListener('click',function () {
      console.log('plus ');
      if (clickCount1 < 10) {
        clickCount1++
       console.log(clickCount1);
    counter.textContent = clickCount1
    
    counterOnCart.textContent = clickCount1
    totalItemPrice.textContent = `$${shoePricesObj.shoePrice * clickCount1}`
    
   
    if (counterSeizeWomen2 === 1 & counterSeizeMen2 === 1) {
      smallCounterCart.textContent = clickCount1 + clickCount2
    
      
    }else if (counterSeizeWomen2 === 0 & counterSeizeMen2 === 1) {
      smallCounterCart.textContent = clickCount1
    
      
    }

    
   }


    
  })

// button for women pages, plus and minus
  const minusBtnWomen = document.getElementById('minus-btn-women')
  minusBtnWomen.addEventListener('click',function () {
    console.log('minus');
   if (clickCount2 > 1) {
    clickCount2--
    counterWomen.textContent = clickCount2

    counterOnCartWomen.textContent = clickCount2
totalItemPriceWomen.textContent = `$${shoePricesObj.shoePriceAllstar * clickCount2}`

if (counterSeizeWomen2 === 1 & counterSeizeMen2 === 1) {
  smallCounterCart.textContent = clickCount1 + clickCount2

  
}else if (counterSeizeWomen2 === 1 & counterSeizeMen2 === 0) {
  smallCounterCart.textContent = clickCount2

  
}

    
   }else {
    console.log('switch up');
    clickCount2 = 0
    counterWomen.textContent = clickCount2
    counterOnCartWomen.textContent = clickCount2
    if (clickCount1 === 0 && clickCount2 === 0) {
      emptyCart.classList.remove('empty-cart-hidden')
      
      checkOut.style.display = "none"
     }

    if (counterSeizeWomen === 1) {
    counterSeizeWomen = 0

      smallCounterCart.textContent = clickCount1 + clickCount2
      
    }

    loadedCartWomen.style.display = "none"

   counterSeizeWomen2 = 0

   

   }
    
  })
  const PlusBtnWomen = document.getElementById('plus-btn-women')
  PlusBtnWomen.addEventListener('click',function () {
      console.log('plus women');
      if (clickCount2 < 10) {
        clickCount2++
       console.log(clickCount2);
    counterWomen.textContent = clickCount2

    counterOnCartWomen.textContent = clickCount2
totalItemPriceWomen.textContent = `$${shoePricesObj.shoePriceAllstar * clickCount2}`
console.log(counterSeizeWomen);
if (counterSeizeWomen2 === 1 & counterSeizeMen2 === 1) {
  smallCounterCart.textContent = clickCount1 + clickCount2

  
}else if (counterSeizeWomen2 === 1 & counterSeizeMen2 === 0) {
  smallCounterCart.textContent = clickCount2

  
}


}


    
  })
  
  // add to cart btns for women and men pages
  addToCartBtn.addEventListener('click',function () {
    counterSeizeMen = 1
    counterSeizeMen2 = 1


    if (clickCount1 < 1) {
        console.log('emptymen');
        cartBox.classList.remove("hidden-cart");
        loadedCart.classList.add('hidden-cart-selection')
        
    } else {
        console.log('loadedmen');
    clickCount = 1;


        if (counterSeizeWomen2 === 1) {
          smallCounterCart.textContent = clickCount1 + clickCount2
          
          
        } else {
          smallCounterCart.textContent = clickCount1
          
        }
        smallCounterCart.classList.remove('hidden-small-counter')

        cartBox.classList.remove("hidden-cart");
        emptyCart.classList.add('empty-cart-hidden')
        loadedCart.classList.remove('hidden-cart-selection')
        checkOut.style.display = "flex"


        
    }

  })
  addToCartBtnWomen.addEventListener('click',function () {

    counterSeizeWomen = 1
    counterSeizeWomen2 = 1

    console.log(counterSeizeWomen);

    if (clickCount2 < 1) {
        console.log('emptyWomen');
        cartBox.classList.remove("hidden-cart");
        
    } else {
        console.log('loadedwomen');
    clickCount = 1;


        cartBox.classList.remove("hidden-cart");
        emptyCart.classList.add('empty-cart-hidden')
        loadedCartWomen.style.display = "flex"
        checkOut.style.display = "flex"

        if (counterSeizeMen2 === 1) {
          
          smallCounterCart.textContent = clickCount1 + clickCount2
          
        } else {
          smallCounterCart.textContent = clickCount2
          
        }
        smallCounterCart.classList.remove('hidden-small-counter')



        
    }

  })
  deleteCart.addEventListener("click",function () {
    clickCount1 = 0
    clickCount2 = 0
  smallCounterCart.textContent = 0
  loadedCart.classList.add('hidden-cart-selection')
  emptyCart.classList.remove('empty-cart-hidden')

  loadedCartWomen.style.display = "none"
  checkOut.style.display = "none"
  counter.textContent = 0
  counterWomen.textContent = 0
  counterSeizeMen2 = 0
  counterSeizeWomen2 = 0








    
  })
  if (opened = true) {
  document.querySelector(".body2").addEventListener("click",function name(params) {
    document.querySelector('.overlay-small-screen').style.display = "none" 
      
    })
    document.addEventListener("scroll",function name(params) {
    document.querySelector('.overlay-small-screen').style.display = "none" 
      
    })}

   