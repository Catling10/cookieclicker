document.querySelector(".cookie").onclick =
    function clickCookie() {
        this.classList.add("large-cookie");
        setTimeout(() => this.classList.remove("large-cookie"), 50);
        add();
    }

let cookies = document.querySelector(".count-number")
let cookiesN = 0;
let cookiesPerClick = 1;
let shop1Bought = 1;
let shop1Price = document.querySelector(".price1");
let shop1PriceTotal = 10;
let shop1PriceInc = 10;
document.querySelector("#incPower").onclick =
    function () {
        if (cookiesN >= shop1PriceTotal) {
            cookiesPerClick = parseInt(cookiesPerClick) + parseInt(shop1Bought);
            cookiesN = parseInt(cookiesN) - parseInt(shop1PriceTotal);
            cookies.textContent = cookiesN;
            shop1Bought++;
            shop1PriceTotal = parseInt(shop1PriceTotal) + parseInt(shop1PriceInc);
            shop1Price.textContent = " " + shop1PriceTotal;
        } else {
            shopItemUn(this)
        }
    }

function shopItemUn(e) {
    e.classList.add("shop-item-unavailable");
    setTimeout(() => e.classList.remove("shop-item-unavailable"), 500);
}

function add() {
    cookiesN = parseInt(cookiesN) + parseInt(cookiesPerClick);
    setCookiesNum(cookiesN);
}

function setCookiesNum(num) {
    cookies.textContent = num;
}

document.getElementById('save').onclick = function () {
    localStorage.setItem('cookiesCount', cookiesN);
    localStorage.setItem('cookiesPerClick', cookiesPerClick);
    localStorage.setItem('shop1Bought', shop1Bought);
    localStorage.setItem('shop1Price', shop1Price);
    localStorage.setItem('shop1PriceTotal', shop1PriceTotal);
    localStorage.setItem('shop1PriceInc', shop1PriceInc);
    alert('It\'s saved');
}

document.getElementById('load').onclick = function () {
    debugger;
    setCookiesNum(localStorage.getItem('cookiesCount'))
    cookiesPerClick = localStorage.getItem('cookiesPerClick')
    shop1Bought = localStorage.getItem('shop1Bought')
    shop1PriceTotal = localStorage.getItem('shop1PriceTotal')
    shop1PriceInc = localStorage.getItem('shop1PriceInc')
    alert('It\'s loaded');
}

setInterval(function () {
    //Todo remove item falling cookie random time change span to button add all the save load values try to add babushka
    document.getElementsByTagName('article')[0]
        .insertAdjacentHTML('beforebegin', "<span class='fallingCookie'>Cookie</span>");
}, 5000);
