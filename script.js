document.querySelector(".cookie").onclick =
    function clickCookie() {
        this.classList.add("large-cookie");
        setTimeout(() => this.classList.remove("large-cookie"), 50);
        add();
    }
//Todo remove item falling cookie random time change span to button
let cookies = document.querySelector(".count-number")
let cookiesN = 0;
let fallingCookieAmm = 50;
let fallingCounter = 1;
let fallingContCounter = 1;
let fallingTimeout = 5000;
let cookieInterval;

let modal = document.getElementById('id01');
let modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




//up = Upgrades, все переменные для увеличения
let up = {
    //gr = Grannies, всё, что относится к бабушкам
    gr: {
        interval: null,
        bought: 0,
        priceField: document.querySelector(".upgrPrice1"),
        price: 100,
        priceInc: 200,
        total: 0,
        amountInc: 5
    },
    //click = Всё, что относится к печенькам за клик
    click: {
        perClick: 1,
        bought: 1,
        price: document.querySelector(".price1"),
        priceTotal: 10,
        priceInc: 10
    },
    //disc = Всё, что относится к скидкам на апгрейды
    disc: {
        priceField: document.querySelector(".upgrPrice2"),
        price: 100,
        priceInc: 100,
        bought: 0,
        amount: 10
    },
    //upcl = Всё, что относится к увеличенным на время печенькам за клик
    upcl: {
        priceField: document.querySelector(".upgrPrice3"),
        price: 10,
        bought: 0,
        amount: 2,
        interval: null
    },
    //rain = Всё, что относится к покупке дождя печенек
    rain: {
        priceField: document.querySelector(".upgrPrice4"),
        price: 10,
        bought: 0,
        interval: 100
    }
}
//Покупка скидки на апгрейды
document.querySelector("#disc").onclick =
    function () {
    if (cookiesN >= up.disc.price) {
        cookiesN = parseInt(cookiesN) - parseInt(up.disc.price);
        cookies.textContent = cookiesN;
        up.disc.price = parseInt(up.disc.price) + parseInt(up.disc.priceInc);
        up.disc.priceField.textContent = " " + up.disc.price;
        up.disc.bought++;
        up.click.priceTotal = up.click.priceTotal - (up.click.priceTotal/100)*up.disc.amount;
        up.click.price.textContent = " "+up.click.priceTotal;
        up.gr.price = up.gr.price - (up.gr.price/100)*up.disc.amount;
        up.gr.priceField.textContent = " "+up.gr.price
        up.disc.amount = up.disc.amount/2;

    } else {
        shopItemUn(this)
    }
    }
//Покупка временного увеличения печенек за клик
document.querySelector("#upclick").onclick =
    function () {

        if (cookiesN >= up.upcl.price) {
            up.click.perClick = parseInt(up.click.perClick) * parseInt(up.upcl.amount)
            cookiesN = parseInt(cookiesN) - parseInt(up.click.priceTotal);
            cookies.textContent = cookiesN;
            up.upcl.bought++;
            setTimeout(upclick, 10000)
            shopItemUnPerm(this)
            setTimeout(shopItemUnBack, 10000)
            debugger;

        } else {
            shopItemUn(this)

        }
    }
function upclick(){
    up.click.perClick = parseInt(up.click.perClick) / parseInt(up.upcl.amount)


}
//Увеличение печенек за клик
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
            up.gr.bought++
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
function shopItemUnPerm(e) {
    e.classList.add("shop-item-unavailable");
}
function shopItemUnBack() {
    document.querySelector("#upclick").classList.remove("shop-item-unavailable");
    document.querySelector("#letItRain").classList.remove("shop-item-unavailable");

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
    localStorage.setItem('up.disc.price', up.disc.price);
    localStorage.setItem('up.disc.priceInc', up.gr.priceInc);
    localStorage.setItem('up.disc.bought', up.disc.bought);
    localStorage.setItem('up.disc.amount', up.disc.amount);


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
    for (let i = 0; i <= up.gr.bought; i++) {
        grannyUpg()
    }
    alert('It\'s loaded');
    up.disc.price = localStorage.getItem('up.disc.price')
    up.disc.priceInc = localStorage.getItem('up.disc.priceInc')
    up.disc.bought = localStorage.getItem('up.disc.bought')
    up.disc.amount = localStorage.getItem('up.disc.amount')
}

// Падающая печенька
function fallingCookie () {
    cookieInterval = setInterval(function () {
//    let randomNumber = (Math.floor(Math.random()*1000)+1).toString();
        document.getElementsByTagName('article')[0]
            .insertAdjacentHTML('beforebegin', "<div id='cookieCont-" + fallingContCounter + "' class=\"container2\">\n" +
                "        <img id=\'cookie-" + fallingCounter + "\' class= \"fallingCookie\" src=\"img/cookie.svg\" alt=\"\">\n" +
                "    </div>");
        document.getElementById('cookie-' + fallingCounter).style.left = (Math.floor(Math.random() * 1000) + 1).toString() + "px";
        let remove = document.getElementById('cookieCont-' + fallingContCounter)
        fallingCounter++;
        fallingContCounter++;

        function remover() {
            remove.remove()
        }

        setTimeout(remover, 14900)
        let cookies = document.querySelectorAll(".container2")
        cookies.forEach(cookie => cookie.onclick = () => {
            fallingCookieAdd()
            cookie.classList.add("displayNone")
        })
    }, fallingTimeout);
}
document.querySelector("#letItRain").onclick =
    function () {
        if (cookiesN >= up.rain.price) {
            clearInterval(cookieInterval);
            fallingTimeout = fallingTimeout / up.rain.interval
            fallingCookie();
            console.log(fallingTimeout)
            cookiesN = parseInt(cookiesN) - parseInt(up.rain.price);
            cookies.textContent = cookiesN;
            up.rain.bought++;
            setTimeout(rainEnd, 10000)
            shopItemUnPerm(this)
            setTimeout(shopItemUnBack, 10000)

        } else {
            shopItemUn(this)

        }
    }
function rainEnd() {
    clearInterval(cookieInterval);
    fallingTimeout = fallingTimeout * up.rain.interval
    fallingCookie();
}

fallingCookie();