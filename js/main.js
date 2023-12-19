let xBtn = document.getElementById('x-btn');
let login = document.getElementById('login');
let user = document.getElementById('user');
let header = document.querySelector('header');
let navBar = document.getElementById('nav-bar');
let xNavBtn = document.getElementById('x-nav-btn');
let bar = document.getElementById('bar');

/****************************  nav head*************************/

bar.addEventListener('click', () => {
    navBar.classList.add('active')
})
xNavBtn.addEventListener('click', () => {
    navBar.classList.remove('active')
})
/****************************  nav head*************************/

/****************************  cart *************************/
let cart = document.getElementById('cart');
let cartBtn = document.getElementById('cart-btn');
let bag = document.getElementById('bag');

bag.addEventListener('click', () => {
    cart.classList.add('active')
})
cartBtn.addEventListener('click', () => {
    cart.classList.remove('active')
})
/****************************  cart *************************/
/****************************  login *************************/
user.addEventListener('click', () => {
    login.classList.add('openTab')
})
xBtn.addEventListener('click', () => {
    login.classList.remove('openTab')
})
window.addEventListener('scroll', () => {
    login.classList.remove('openTab');
    navBar.classList.remove('active');
    cart.classList.remove('active');
    theme.classList.remove("shiftplace")
    if (this.scrollY >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})
/****************************  login *************************/

/**************************** Home Swiper Js *************************/

const swiper = new Swiper(".home-container", {
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

    /**************************** arrival  Swiper Js *************************/
    const swiper2 = new Swiper(".arrival-container", {
        spaceBetween: 20,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });


/**************************** upBtn *************************/
let upBtn = document.getElementById('upBtn');

window.addEventListener('scroll', () => {
    if (this.scrollY >= 120) {
        upBtn.style.display = 'block'
    } else {
        upBtn.style.display = 'none'
    }
})
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0, 
        behavior:"smooth"
    })
})
/**************************** theme *************************/

let gear = document.getElementById('gear');
let theme = document.getElementById('theme');
let colors = document.querySelectorAll(".colors span")
let checkIcon = document.querySelectorAll(".colors span i")


gear.addEventListener('click', () => {
    theme.classList.toggle("shiftplace")
})

colors.forEach((color, i) => {
    color.addEventListener('click', (e) => {
        colors.forEach((c) => c.classList.remove("active"));
        e.currentTarget.classList.add("active");
        let Hue;
        if (color.classList.contains("color-1")) {
            Hue = 0;
        }else if (color.classList.contains("color-2")) {
            Hue = 260;
        }else if (color.classList.contains("color-3")) {
            Hue = 336;
        }else if (color.classList.contains("color-4")) {
            Hue = 284;
        }else if (color.classList.contains("color-5")) {
            Hue = 375;
        }
        document.querySelector(':root').style.setProperty("--hue", Hue);
        window.localStorage.setItem("--hue", Hue);
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
    })
})

function showData() {
    document.querySelector(':root').style.setProperty("--hue", window.localStorage.getItem("--hue"));
    checkIcon.forEach((c) => c.classList.remove("active"));
    document.querySelector(`[data-color = ${window.localStorage.getItem("color")}]`).classList.add("active");
}
showData();

/**************************** newTab *************************/

let newTab = document.getElementById('newTab');
let newTabImg = document.getElementById('newTab-img');
let xNewTabBtn = document.getElementById('x-newTab-btn');
let productImages = document.querySelectorAll('.product-image img');
let newTabCounter = document.querySelector('.newTab-counter'),
prevBtn = document.getElementById('prevBtn'),
    nextBtn = document.getElementById('nextBtn'),
    itemIndex = 0;

    productImages.forEach((img) => {
        img.addEventListener('click', () => {
            newTab.classList.add('active');
    })
})

for (let i = 0; i < productImages.length; i++) {
    productImages[i].addEventListener('click', () => {
        itemIndex = i;
        changeItems();
    })
    
}
function nextItem() {
    if (itemIndex == productImages.length - 1 ) {
        itemIndex = 0; 
        changeItems();
    } else {
        itemIndex++;
        changeItems();
    }
}
function prevItem() {
    if (itemIndex == 0 ) {
        itemIndex = productImages.length - 1; 
        changeItems();
    } else {
        itemIndex--;
        changeItems();
    }
}

function changeItems() {
    newTabImg.src = productImages[itemIndex].getAttribute("src");
    newTabCounter.innerHTML = ` ${itemIndex + 1} Of ${productImages.length}`;
}

function closeNewTab() {
    newTab.classList.remove("active");
}
/**************************** newTab *************************/
/**************************** faq-card *************************/
let faqCard = document.querySelectorAll('.faq-card');
    
faqCard.forEach(faq => {
    faq.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle("active");
    })
})

/**************************** faq-card *************************/

