const user = {
    firstName: 'Sahil',
    lastName: 'Dua',
    Address: {
        Line1: 'address line 1',
        Line2: 'address line 2',
        State: 'Delhi',
        Pin: 110085,
        Country: 'India',
        City: 'New Delhi',
    },
    phoneNo: 9999999999
}

let { Line1, Line2, State, Pin, Country, City } = user.Address;
console.log('Address Line 1 --> ', Line1);
console.log('Address Line 2 --> ', Line2);
console.log('State --> ', State);
console.log('Pin --> ', Pin);
console.log('Country --> ', Country);
console.log('City --> ', City);