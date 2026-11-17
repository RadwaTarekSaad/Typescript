"use strict";
class User {
    Id;
    name;
    email;
    _Password;
    _Phone;
    _age;
    notebooks = [];
    constructor(Id, name, email, password, phone, age) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this._Password = password;
        this._Phone = phone;
        this._age = age;
    }
    set age(age) {
        if (age >= 18 && age <= 60) {
            this._age = age;
        }
        else {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(`ID: ${this.Id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this._Phone}`);
        console.log(`Age: ${this._age}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
const user1 = new User(1, "Radwa", "radwa@gmail.com", "123456", "01012345678", 24);
user1.displayInfo();
user1.age = 20;
user1.displayInfo();
//////////////q2
class Admin extends User {
    Id;
    name;
    email;
    password;
    Phone;
    Age;
    constructor(Id, name, email, password, Phone, Age) {
        super(Id, name, email, password, Phone, Age);
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.Phone = Phone;
        this.Age = Age;
    }
    manageNotes() {
        console.log("Admin is managing notes");
    }
}
const admin = new Admin(1, "Radwa", "radwa@gmail.com", "123456", "01012345678", 25);
admin.displayInfo();
admin.manageNotes();
//////q3
class Note {
    Id;
    title;
    content;
    userId;
    constructor(Id, title, content, userId) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 30) + "...";
    }
}
const note1 = new Note(1, "TypeScript", "Learning TypeScript and understanding OOP concepts.", user1);
console.log(note1.preview());
console.log(note1.userId.name);
class NoteBook {
    notes = [];
    addNote(Id, title, content, user) {
        const note = new Note(Id, title, content, user);
        this.notes.push(note);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((note) => note.Id !== noteId);
    }
}
const notebook1 = new NoteBook();
user1.addNotebook(notebook1);
console.log(user1.notebooks.length);
notebook1.addNote(1, "TypeScript", "Learning OOPPPP", user1);
notebook1.addNote(2, "javaScript", "Learning OOPPPP", user1);
console.log(notebook1.notes.length);
/////association
const user2 = new User(1, "Radwa", "radwa@gmail.com", "123456", "01012345678", 24);
const note2 = new Note(1, "TypeScript", "Learning TypeScript and understanding OOP concepts.", user2);
console.log(note2.userId.name);
class Storagee {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((Item) => Item !== item);
    }
    getAllItems() {
        return this.items;
    }
}
const numberStorage = new Storagee();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getAllItems());
