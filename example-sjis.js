class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-sjis.js
        console.log("みなさんはじめまして。私の名前は " + this.login + " です。");
    }
}

const me = new User("lowply");
me.greet();
