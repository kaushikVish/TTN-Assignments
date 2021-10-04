class User {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    //Normal Function
    displayUserInfo() {
        console.log(`Hey! My name is ${this.name}, I'm ${this.age} years old and I'm a ${this.gender}. You can contact me on ${this.email} :)`);
    };

    //Static Function
    static aboutUser() {
        console.log('All the users at TO THE NEW are treated with respect');
    }
};

let user1 = new User('Vishal Kaushik', 23, 'Male', 'vishal.kaushik@tothenew.com');
//Accessing normal method
console.log('NORMAL METHOD');
user1.displayUserInfo();

//Accessing static method
console.log('STATIC METHOD');
User.aboutUser();