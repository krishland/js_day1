function firTree (num) {
    let star = " *";
    let space = " ";
    for ( let i = 1; i < num; i++ ) {
        console.log(space.repeat(num-i) + star);
        star = star + " *";
    }
    return star;
}

module.exports = firTree