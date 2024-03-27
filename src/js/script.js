"use strict"


let a = +prompt("Raqam kiriting");

// 1-misol  
// 1 dan N gacha bo'lgan toq sonlarni ekranga chiqarish
for(let i = 0; i <= a; i++){
    if(i % 2 === 1){
        // console.log(i)
    }
}


// 2-misol  
// 1 dan N gacha bo'lgan juft sonlarni ekranga chiqarish
for(let i = 0; i <= a; i++){
    if(i % 2 === 0){
        // console.log(i)
    }
}

// 3-misol
// 1 dan N gacha raqamlar yig'indisini hisoblash

// 1-usul 
let S = (a * (a + 1) ) / 2
// console.log(S)

// 2-usul
let s = 0;
for(let i = 0; i <= a; i++){
    s += i
    // console.log(s)
}


// 4-misol
// Tub sonlarni chiqaruvchi dastur

for(let i=1; i <= a; i++){
    let n=0;
    for(let j=1; j <= i; j++){
        if(i % j == 0){
            n = n + 1
        }
    }
    if(n==2){
        console.log(i)
    }
}


