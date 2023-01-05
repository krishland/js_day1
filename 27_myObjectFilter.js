let myObjectFilter = (arr) => {
    let newArr = arr.filter( x => x.age >= 18 )
    newArr.forEach(x => {
        return [`${x.surname} ${x.name}`]
    });
}

module.exports = myObjectFilter;