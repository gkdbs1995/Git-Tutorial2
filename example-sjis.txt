class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-sjis.js
        console.log("Ç›Ç»Ç≥ÇÒÇÕÇ∂ÇﬂÇ‹ÇµÇƒÅBéÑÇÃñºëOÇÕ " + this.login + " Ç≈Ç∑ÅB");
    }
}

const me = new User("lowply");
me.greet();