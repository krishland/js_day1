// function firTree (num) {
//     let star = " *";
//     let space = " ";
//     for ( let i = 1; i < num; i++ ) {
//         console.log(space.repeat(num-i) + star);
//         star = star + " *";
//     }
//     return star;
// }

// module.exports = firTree;

// function firTree2 (num) {
    
//     let trunck = "|";
//     let star = "*";
//     let space = ".";
//     for ( let j = 1; j < num + 1; j++) {
//         space = "."
//         let i;
//         for ( i = 1; i < 4 + j; i++) {
//             // console.log(space.repeat(((j+3-i)+(3*(num - j)))) + star);
//             console.log(space.repeat(((num-i)*(num-j))) + star);
//             star = "*" + star + "*";
//         }
//         star = "*".repeat((i-1) * j +1);
//     }
    
//     for (let x = 1; x < num + 1; x++) {
//         console.log(space.repeat(num % 2 === 1 ? (((4 - 1) * num)) : (((4 - 1) * num) -1) ) + (num % 2 === 1 ? trunck.repeat(num) : trunck.repeat(num+1)));
//     }
//     return "";
// }


function firTree2 (num) {
    let trunck = "|";
    let star = "*";
    let space = ".";

    for (let j = 1; j < num + 1; j++) {
        let i;
        for (i = 1; i < 4 + j; i++) {
            // console.log(num);
            // console.log(i);
            // console.log(j);
            console.log(space.repeat(
                ((num+1-j)*5 - (i-j))
                )+star);
            star = "*" + star + "*";
        }
        star = "*".repeat((i-1) * j +1);
    }
    return " ";
}
    
module.exports = firTree2;