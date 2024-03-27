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
        // console.log(i)
    }
}


// 5-misol
// 1 dan N gacha bo'lgan juft sonlarning kivadratlari yig'indisini chiqarish
let s2 = 0;
for(let i=2; i <= a; i += 2){
    s2 += i**2;
    // console.log(i)
}
// console.log(`S= ${s2}`)


// 6-misol 
// 1 dan N gacha bo'lgan sonlarning o'zaro ikkitasining ko'paytmasini chiqarish
for(let i = a; i > 1; i--){
    // console.log((i - 1) * i );
}


// 7-misol
// 1 dan N gacha bo'lgan sonlarning faktaryalini hisoblash
let s3 = 0;
let p = 1;
for(let i=1; i <= a; i++){
    p *= i
    // console.log(p)
    s3 += p
}
// console.log(`S= ${s3}`)



// Arraylar 

let array = [1,2,3,4,5,6,7,8,9,10]

// 1-misol
// Massivdagi sonlarning yig'indisini hisoblash

// 1-usul
let s4 = 0;
for(let i = 1; i <= array.length; i++){
    s4 += i 
}
// console.log(`s= ${s4}`)

// 2-usul
let text = array.reduce((a,b) => a + b)
// console.log(text)


// 2-misol
// Massivdagi 5 dan katta sonlarni chiqarish
let b = array.filter(item => item > 5);
b.map((item) => {
    // console.log(item)
})

