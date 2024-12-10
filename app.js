const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['Patrick', 'Steve', 'John', 'Soyer', 'Johnny', 'Pihilip', 'Cody', 'Jack'];
const femaleNames = ['Ava', 'Eve', 'Jasmine', 'Ella', 'Emilly', 'Ana', 'Evelyn', 'Rose'];
const lastNames = ['Brody', 'Lock', 'Hermesa', 'Huggins', 'Philips', 'Smith', 'Cooper', 'Williams'];
const people = [];

function randChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

for(let i=0; i<11; i++){
    const gender = randChoice(genders);
    // if(gender === 'M'){
    //     const firstName = randChoice(maleNames);
    // }else{
    //     const firstName = randChoice(femaleNames);
    // }
    const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    const firstPart = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const secondPart = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const thirdPart = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const phone = `${firstPart} ${secondPart} ${thirdPart}`;
    const emailName = firstName.toLowerCase();
    const emailLastName = lastName.toLowerCase();
    const person = {
        gender: gender,
        name: `${firstName} ${lastName}`,
        age: age.toString(),
        phone: phone.toString(),
        email: `${emailName}.${emailLastName}@gmail.com`
    };
    people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });