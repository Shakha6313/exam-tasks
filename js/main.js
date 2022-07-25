/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va telefon nomer kiritaman. 
 Va u menga returnida shu nomer kimga tegishliligini 
 chiqarib beradi. Agar yo'q bo'lsa bo'sh string qaytaradi.
*/


// let users = [
//     {
//         name: "Avazbek",
//         telNumber: "998911645099"
//     },
//     {
//         name: "Umid",
//         telNumber: "998911758585"
//     },
//     {
//         name: "O'ktam",
//         telNumber: "998911777767"
//     },
//     {
//         name: "Valijon",
//         telNumber: "998917777777"
//     },
//     {
//         name: "Sarvar",
//         telNumber: "998911222222"
//     },
//     {
//         name: "Sardor",
//         telNumber: "998911222322"
//     },
//     {
//         name: "Toxir",
//         telNumber: "998911645022"
//     }
// ]

// // code shu yerda yozilgan `downarrow`

// let userNum = prompt("Please enter a number")

// function findUser(array, number) {
//     let user = ""

//     for (let i = 0; i < array.length; i++) {
//         if(number == array[i].telNumber)
//         return alert(`${users[i].name}`)
//     }
// }


// findUser(users, userNum);



// TASK 2

/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va (22)yosh kiritaman. 
 Va u menga returnida yangi array qaytaradi va 
 unda faqat 22 yoshga teng va undan kattalarni qaytaradi.
*/
let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]

let personAge = prompt("Type your age:")

function ageGreaterThan(array, minAge) {
    let newArray = []

    for (let i = 0; i < array.length; i++)
        if (personAge <= users[i].age){
            newArray.push(users[i])
        }
        
        return console.log(newArray);
    }




ageGreaterThan(users, 22)


