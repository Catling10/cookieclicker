document.querySelector(".cookie").onclick =
    function clickCookie() {
        this.classList.add("large-cookie");
        setTimeout(() => this.classList.remove("large-cookie"), 50);
        add();
    }
//Todo remove item falling cookie random time change span to button
let cookies = document.querySelector(".count-number")
let cookiesN = 0;
let cookiesPerClick = 1;
let shop1Bought = 1;
let shop1Price = document.querySelector(".price1");
let shop1PriceTotal = 10;
let shop1PriceInc = 10;
let upgr1Price = document.querySelector(".upgrPrice1")
/*let upgrades.grannies.price = 100;
let grannyAmm = 5;
let grannyAmmInc = 0;
let upgrades.grannies.priceInc = 200;
let upgrades.grannies.interval;*/
let fallingCookieAmm = 50;
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

function grannyUpg() {
    cookiesN = parseInt(cookiesN) + parseInt(up.gr.total);
    cookies.textContent = cookiesN;
}

let up = {
    gr: {
        interval: null,
        priceField: document.querySelector(".upgrPrice1"),
        price: 100,
        priceInc: 200,
        total: 0,
        amountInc: 5
    }
}

//Покупка пассивных печенек "Бабушка"
document.querySelector("#granny").onclick =
    function () {
        if (cookiesN >= up.gr.price) {
            cookiesN = parseInt(cookiesN) - parseInt(up.gr.price);
            cookies.textContent = cookiesN;
            up.gr.price = parseInt(up.gr.price) + parseInt(up.gr.priceInc);
            up.gr.priceField.textContent = " " + up.gr.price;
            clearInterval(up.gr.interval)
            up.gr.total = parseInt(up.gr.total) + parseInt(up.gr.amountInc)
            up.gr.interval = setInterval(grannyUpg, 5000, up.gr.total)


        } else {
            shopItemUn(this)
        }
    }

//Смена бэкграунда на красный в случае неудачи покупки
function shopItemUn(e) {
    e.classList.add("shop-item-unavailable");
    setTimeout(() => e.classList.remove("shop-item-unavailable"), 500);
}

function add() {
        cookiesN = parseInt(cookiesN) + parseInt(cookiesPerClick);
        setCookiesNum(cookiesN);
}

function fallingCookieAdd() {
    cookiesN = parseInt(cookiesN) + parseInt(fallingCookieAmm);
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
    setCookiesNum(localStorage.getItem('cookiesCount'))
    cookiesN = localStorage.getItem('cookiesCount')
    cookiesPerClick = localStorage.getItem('cookiesPerClick')
    shop1Bought = localStorage.getItem('shop1Bought')
    shop1PriceTotal = localStorage.getItem('shop1PriceTotal')
    shop1PriceInc = localStorage.getItem('shop1PriceInc')
    shop1Price.textContent = (" "+shop1PriceTotal)
    alert('It\'s loaded');
}

setInterval(function () {
    document.getElementsByTagName('article')[0]
        .insertAdjacentHTML('beforebegin', "<div class=\"container2\">\n" +
            "        <img class= \"fallingCookie\" src=\"img/cookie.svg\" alt=\"\">\n" +
            "    </div>");
    let cookies = document.querySelectorAll(".container2")
    cookies.forEach(cookie => cookie.onclick = () => {
        debugger;
        fallingCookieAdd()
        cookie.classList.add("displayNone")
    })


    }, 5000);

