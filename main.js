// window.addEventListener("load", e => {
const ourElement = document.querySelector(".our-element")
const beforeEle = document.createElement("div");
beforeEle.setAttribute("class","start");
beforeEle.setAttribute("title","Start Element");
beforeEle.setAttribute("data-value","Start");
beforeEle.textContent = "Start";
ourElement.before(beforeEle);
const p = document.querySelector("p")
p.remove();

const afterEle = document.createElement("div");
afterEle.setAttribute("class","end");
afterEle.setAttribute("title","End Element");
afterEle.setAttribute("data-value","End");
afterEle.textContent = "End";
ourElement.after(afterEle);
// })


