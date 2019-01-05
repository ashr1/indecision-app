/*function square(x) {
    return x * x;
}

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(9));
*/
const getFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
};

console.log(getFirstName('Mike Smith'));

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShort('Mike Smith'));