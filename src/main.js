let html = document.querySelector('#html');
let style = document.querySelector("#style");

let string = `
/* hi，臭狗♥
 * 接下来我要送你一个小心心
 * 首先我要准备一个看不见的大盒子来装“小心心”
 **/
#heart {
    width: 200px;
    height: 170px;
    left: 18%;
}
/* 然后我准备一个心心的左上角 */
#left {
    background:red;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: rotate(45deg) translateX(21px)
}
/* 接下来 准备心心的右上角 */
#right {
    width: 100px;
    height: 100px;
    background:red;
    border-radius: 50%;
    transform: rotate(45deg) translateY(21px)
}
/* 然后在下面画一个正方形*/
#bottom {
    width: 100px;
    height: 100px;
    background:red;
    transform: rotate(45deg);
}
/* 然后我让这个“心动”起来 */
#fidex {
    animation:heart 800ms infinite alternate;
}
@keyframes heart {
    0% {
    transform: scale(1.0);
    }
    100% {
    transform: scale(1.5);
    }
}
/*
 *okk
 *现在，一个属于你的小心心就做好啦
 *♥爱你哦！♥
**/
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();