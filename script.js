function clickCookie(e) {
    e.classList.add("large-cookie");
    setTimeout(() => e.classList.remove("large-cookie"), 50);
}
let cookies = document.querySelector(".count-number")
let cookiesN = 0;
function add(){
    cookiesN++;
    cookies.textContent = cookiesN;
}