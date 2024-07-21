// Define your Book class here:
class Book {
    constructor(title,author,copyrightDate,isbn,noOfPages,timesCheckedOut,bookDiscard){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.noOfPages = noOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.bookDiscard = bookDiscard;
    }
    checkout(uses=1) {
        this.timesCheckedOut += uses;
     }

}

// Define your Manual and Novel classes here:

class Manual extends Book{
    constructor(title,author,copyrightDate,isbn,noOfPages,timesCheckedOut,bookDiscard){
        super(title,author,copyrightDate,isbn,noOfPages,timesCheckedOut,bookDiscard);
    }
    discard(){
        let currentYear = String(new Date()).slice(11,16);
        if(currentYear - this.copyrightDate > 5){
            this.bookDiscard = "Yes";
        }else {
            this.bookDiscard = "No";
        }
        return this.bookDiscard;
    }
}
class Novel extends Book{
    constructor(title,author,copyrightDate,isbn,noOfPages,timesCheckedOut,bookDiscard){
        super(title,author,copyrightDate,isbn,noOfPages,timesCheckedOut,bookDiscard);     
    }
    discard(){
      
        if(this.timesCheckedOut > 100){
            this.bookDiscard = "Yes";
        }else {
            this.bookDiscard = "No";
        }
        return this.bookDiscard;
    }
}


// Declare the objects for exercises 2 and 3 here:

let romanceNovel = new Novel("Pride and Prejudice","Jane Austen",1813,"1111111111111",432,32,"No");
let shuttleManual = new Manual("Top Secret Shuttle Building Manual","Redacted",2013,"0000000000000",1147,1,"No");

// Code exercises 4 & 5 here:
romanceNovel.checkout(5);
if(romanceNovel.discard() === "Yes"){
    console.log(`"${romanceNovel.title}" has been checked out ${romanceNovel.timesCheckedOut} no. of times. It needs to be discarded.`);
}else{
    console.log(`"${romanceNovel.title}" has been checked out ${romanceNovel.timesCheckedOut} no. of times.It need not be discarded.`);
}

if(shuttleManual.discard() === "Yes"){
    console.log(`"${shuttleManual.title}" is 5 or more years old. It needs to be discarded.`);
}else{
    console.log(`"${shuttleManual.title}" is not old enough.It need not be discarded.`);
}

console.log(romanceNovel);
console.log(shuttleManual);


