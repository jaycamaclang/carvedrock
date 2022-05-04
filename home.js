// let a = 'Hello';

// logMessage = (message, firstName) => {
//     console.log(message);
//     console.log(firstName);
// }

// logMessage(a, 'John');

// logMessage("Second Message");

/* let key = 42;

getSecretCode = (value) => {
    keyGenerator = () => {
        let key = 12;
        console.log('in keyGenerator: ', key );
        return key;
    }

    let code = value * keyGenerator();
    return code;

}

let secretCode = getSecretCode(2);

showMessage (secretCode);

changePercentOff (32); */

/* let mySymbol = Symbol();

let person = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge )
    }
};

// person ['age'] = 44;

person.showInfo(34); */

/* let person = {

    name: 'John',
    age: 32,
    partTime: false
};

incrementAge = (person) => {
    person.age++;
}

incrementAge(person);

showMessage(person.age); */

/* let s = 'Hello';
showMessage (s.charAt(0)); */

/* const button = document.getElementById('see-review');

button.addEventListener('click', () => {
    const review = document.getElementById('review')

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW'
    } else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW'
    }
}); */


//Array Module
/* const values = ['a', 'b', 'c', 'd','e'];

console.log(values);
console.log(Array.isArray(values));
const first = values.pop();
const first = values.shift();
console.log(first);
console.log(values);

const newArray = values.slice(1, 3);
console.log(newArray);

const newArray = values.splice(1,1, 'hello'); // splice(element number, elements to delete), can be used to remove and insert, original array is changed
console.log(values);
console.log(newArray);
 */


//Array Searching and Looping
//filter() searches array and return true expresions, value is stored in the 'set' variable
/* const values = ['a', 'b', 'c', 'd','e'];
const set = values.filter((item) => {
    return item > 'b';
});

//find() - method ends once argument is true
const set2 = values.find((item) => {
    return item > 'b';
});

console.log(set);
console.log(set2);
console.log(values); */

/* const values = ['a', 'b', 'c', 'd','e'];
values.forEach((item) => {
    console.log(item);
}) */

/* const containers =
    document.getElementsByClassName('container');
containers[0].classList.add('d-none')
console.log(containers); */
const productId = 12345;

showProductId = () => {

    fix= () => {
        productId = 0;
        console.log('in fix: ', productId);
    }

    fix();
    console.log('in showProductId: ', productId);
}

showProductId();