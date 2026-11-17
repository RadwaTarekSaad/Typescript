class User {
  public Id: number;
  public name: String;
  public email: String;
  private _Password: String;
  protected _Phone: String;
  private _age: number;
   public notebooks: NoteBook[] = [];


  constructor(
    Id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    this.Id = Id;
    this.name = name;
    this.email = email;
    this._Password= password;
    this._Phone = phone;
    this._age = age;
  }

  set age(age: number) {
    if (age >= 18 && age <= 60) {
      this._age = age;
    } else {
      throw new Error("Age must be between 18 and 60");
    }
  }

  displayInfo(): void {
    console.log(`ID: ${this.Id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this._Phone}`);
    console.log(`Age: ${this._age}`);
  }

    addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}

const user1 = new User(
  1,
  "Radwa",
  "radwa@gmail.com",
  "123456",
  "01012345678",
  24,
);
user1.displayInfo();
user1.age=20;
user1.displayInfo()


//////////////q2

class Admin extends User {
    constructor(
        public Id: number,
        public name: string,
        public email: string,
       public password: string,
       public  Phone: string,
        public Age: number
    ) {
        super(Id, name, email, password, Phone, Age);
    }

    manageNotes(): void {
        console.log("Admin is managing notes");
    }
}

const admin=new Admin( 1,
  "Radwa",
  "radwa@gmail.com",
  "123456",
  "01012345678",
  25)

admin.displayInfo();
admin.manageNotes();

//////q3

class Note {
    public Id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(
        Id: number,
        title: string,
        content: string,
        userId: User
    ) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    preview(): string {
        return this.content.substring(0, 30) + "...";
    }
}
const note1 = new Note(
    1,
    "TypeScript",
    "Learning TypeScript and understanding OOP concepts.",
    user1
);

console.log(note1.preview());
console.log(note1.userId.name);



class NoteBook { 
    public notes: Note[] = [];

    addNote(
    Id: number,
    title: string,
    content: string,
    user: User
  ): void {
    const note = new Note(Id, title, content, user);
    this.notes.push(note);
  }

    removeNote(noteId: number): void {
        this.notes = this.notes.filter(
            (note) => note.Id !== noteId
        );
    }
}
const notebook1 = new NoteBook();
user1.addNotebook(notebook1);
console.log(user1.notebooks.length); 
notebook1.addNote(
  1,
  "TypeScript",
  "Learning OOPPPP",
  user1
);
notebook1.addNote(
  2,
  "javaScript",
  "Learning OOPPPP",
  user1
);
console.log(notebook1.notes.length)


/////association
const user2 = new User(1,
  "Radwa",
  "radwa@gmail.com",
  "123456",
  "01012345678",
  24,);

const note2 = new Note(
  1,
    "TypeScript",
    "Learning TypeScript and understanding OOP concepts.",
  user2
);

console.log(note2.userId.name); 


class Storagee<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter(
      (Item) => Item !== item
    );
  }

  getAllItems(): T[] {
    return this.items;
  }
}
const numberStorage = new Storagee<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);

console.log(numberStorage.getAllItems());