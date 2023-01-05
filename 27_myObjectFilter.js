let myObjectFilter = (arr) => {
    let newArr = arr.filter( x => x.age >= 18 );
    return newArr.map( x => `${x.surname} ${x.name}`)
}

module.exports = myObjectFilter;