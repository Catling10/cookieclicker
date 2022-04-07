function clickCookie(e) {
    e.classList.add("large-cookie");
    setTimeout(() => e.classList.remove("large-cookie"), 50);
}
let cookies = document.querySelector(".count-number")
let cookiesN = 0;
let cookiesPerClick = 1;
function IncClickPower(){
    if (cookiesN >= 10) {
        cookiesPerClick = cookiesPerClick + 1;
        cookiesN = cookiesN - 10;
        cookies.textContent = cookiesN;
    }
    }
function add(){
    cookiesN = cookiesN+cookiesPerClick;
    cookies.textContent = cookiesN;
}
