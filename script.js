document.querySelector(".cookie").onclick =
    function clickCookie() {
        this.classList.add("large-cookie");
        setTimeout(() => this.classList.remove("large-cookie"), 50);
        add();
    }
//Todo remove item falling cookie random time change span to button
let cookies = document.querySelector(".count-number")
let cookiesN = 0;
/*let cookiesPerClick = 1;
let shop1Bought = 1;
let shop1Price = document.querySelector(".price1");
let shop1PriceTotal = 10;
let shop1PriceInc = 10;
let upgr1Price = document.querySelector(".upgrPrice1")
let upgrades.grannies.price = 100;
let grannyAmm = 5;
let grannyAmmInc = 0;
let upgrades.grannies.priceInc = 200;
let upgrades.grannies.interval;*/
let fallingCookieAmm = 50;
document.querySelector("#incPower").onclick =
    function () {
        if (cookiesN >= up.click.priceTotal) {
            up.click.perClick = parseInt(up.click.perClick) + parseInt(up.click.bought);
            cookiesN = parseInt(cookiesN) - parseInt(up.click.priceTotal);
            cookies.textContent = cookiesN;
            up.click.bought++;
            up.click.priceTotal = parseInt(up.click.priceTotal) + parseInt(up.click.priceInc);
            up.click.price.textContent = " " + up.click.priceTotal;
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
    },
    click: {
        perClick: 1,
        bought: 1,
        price: document.querySelector(".price1"),
        priceTotal: 10,
        priceInc: 10
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
        cookiesN = parseInt(cookiesN) + parseInt(up.click.perClick);
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
    localStorage.setItem('up.click.perClick', up.click.perClick);
    localStorage.setItem('up.click.bought', up.click.bought);
    localStorage.setItem('up.click.priceTotal', up.click.priceTotal);
    localStorage.setItem('up.click.priceInc', up.click.priceInc);
    localStorage.setItem('up.gr.price', up.gr.price);
    localStorage.setItem('up.gr.priceInc', up.gr.priceInc);
    localStorage.setItem('up.gr.total', up.gr.total);
    localStorage.setItem('up.gr.amountInc', up.gr.amountInc);


    alert('It\'s saved');
}

document.getElementById('load').onclick = function () {
    setCookiesNum(localStorage.getItem('cookiesCount'))
    cookiesN = localStorage.getItem('cookiesCount')
    up.click.perClick = localStorage.getItem('up.click.perClick')
    up.click.bought = localStorage.getItem('up.click.bought')
    up.click.priceTotal = localStorage.getItem('up.click.priceTotal')
    up.click.priceInc = localStorage.getItem('up.click.priceInc')
    up.click.price.textContent = (" "+up.click.priceTotal)
    up.gr.price = localStorage.getItem('up.gr.price')
    up.gr.priceInc = localStorage.getItem('up.gr.priceInc')
    up.gr.total = localStorage.getItem('up.gr.total')
    up.gr.amountInc = localStorage.getItem('up.gr.amountInc')
    up.gr.priceField.textContent = (" "+up.gr.price)
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

