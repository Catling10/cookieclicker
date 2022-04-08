function clickCookie(e) {
    e.classList.add("large-cookie");
    setTimeout(() => e.classList.remove("large-cookie"), 50);
}
let cookies = document.querySelector(".count-number")
let cookiesN = 0;
let cookiesPerClick = 1;
let shop1Bought = 1;
let shop1Price = document.querySelector(".price1");
let shop1PriceTotal = 10;
let shop1PriceInc = 10;
let shopButton = document.querySelector(".shop-item");

function IncClickPower(){
    if (cookiesN >= shop1PriceTotal) {
        cookiesPerClick = cookiesPerClick + shop1Bought;
        cookiesN = cookiesN - shop1PriceTotal;
        cookies.textContent = cookiesN;
        shop1Bought++;
        shop1PriceTotal = shop1PriceTotal+shop1PriceInc;
        shop1Price.textContent = " "+shop1PriceTotal;
    } else {
        shopButton.classList.add("shop-item-unavailable");
        setTimeout(() => shopButton.classList.remove("shop-item-unavailable"), 500);
    }
    }
function add(){
    cookiesN = cookiesN+cookiesPerClick;
    cookies.textContent = cookiesN;
}
