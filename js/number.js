var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");
var p4 = document.querySelector(".p4");
var p5 = document.querySelector(".p5");

let count1 = 0;
var loop1 = p1.innerText;
setInterval(() => {

    if (count1 < loop1) {
        count1++;
        p1.innerText = count1
    }
}, 50)
let count2 = 0;
var loop2 = p2.innerText;
setInterval(() => {

    if (count2 < loop2) {
        count2++;
        p2.innerText = count2
    }
}, 50)
let count3 = 0;
var loop3 = p3.innerText;
setInterval(() => {

    if (count3 < loop3) {
        count3++;
        p3.innerText = count3
    }
}, 50)
let count4 = 0;
var loop4 = p4.innerText;
setInterval(() => {

    if (count4 < loop4) {
        count4++;
        p4.innerText = count4
    }
}, 50)
let count5 = 0;
var loop5 = p5.innerText;
setInterval(() => {

    if (count5 < loop5) {
        count5++;
        p5.innerText = count5
    }
}, 50)

// const leftbtn=document.querySelector("#prev");
// const rightbtn=document.querySelector("#next");
// rightbtn.addEventListener("click",function (event) {
//     // console.log("here");
//     const conent=document.querySelector(".carousel-inner");
//     conent.scrollLeft+=1100;
//     event.preventDefault();
// })
// leftbtn.addEventListener("click",function (event) {
//     // console.log("here");
//     const conent=document.querySelector(".carousel-inner");
//     conent.scrollLeft-=1100;
//     event.preventDefault();
// })
let hasClass = (arr) => {
    for (let i = 0; i < arr.length; i++)if (arr[i] == 'active') return true;
    return false;
}
const func = () => {
    let x = document.getElementById('Carousel-main');
    // console.log(x)
    let first = document.getElementById('itt-1')
    let second = document.getElementById('itt-2');
    let third = document.getElementById('itt-3');
    let fClass = first.classList;
    let sClass = second.classList;
    let tClass = third.classList;
    if (hasClass(fClass)) {
        fClass.remove('active')
        sClass.add('active')
    }
    else if (hasClass(sClass)) {
        sClass.remove('active')
        tClass.add('active')
    }
    else if (hasClass(tClass)) {
        tClass.remove('active')
        fClass.add('active')
    }
}

setInterval(() => {
    func()
}, 10000);

const handleClick = (e) => {
    let x = document.getElementById('Carousel-main');
    // console.log(x)
    let first = document.getElementById('itt-1')
    let second = document.getElementById('itt-2');
    let third = document.getElementById('itt-3');
    let fClass = first.classList;
    let sClass = second.classList;
    let tClass = third.classList;
    if (hasClass(fClass)) {
        fClass.remove('active')
        sClass.add('active')
    }
    else if (hasClass(sClass)) {
        sClass.remove('active')
        tClass.add('active')
    }
    else if (hasClass(tClass)) {
        tClass.remove('active')
        fClass.add('active')
    }
}
const handleClick1 = (e) => {
    let x = document.getElementById('Carousel-main');
    // console.log(x)
    let first = document.getElementById('itt-1')
    let second = document.getElementById('itt-2');
    let third = document.getElementById('itt-3');
    let fClass = first.classList;
    let sClass = second.classList;
    let tClass = third.classList;
    if (hasClass(fClass)) {
        fClass.remove('active')
        tClass.add('active')
    }
    else if (hasClass(sClass)) {
        sClass.remove('active')
        fClass.add('active')
    }
    else if (hasClass(tClass)) {
        tClass.remove('active')
        sClass.add('active')
    }
}