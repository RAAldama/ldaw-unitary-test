class BankAccount{
    constructor() {
        this.amount = 0;
        this.historial = [];
    };

    current() {
        return this.amount;
    }

    append(amount) {

        if(amount > 0){
            this.amount += amount;
            this.historial.push({type: "append", amount: amount});
        }else{
            this.amount;
        }
        
    }

    substract(amount) {

        if(amount > 0){
            this.amount -= amount;
            this.historial.push({type: "substract", amount: amount});
        }else{
            this.amount;
        }
        
    }

    merge(account) {

        this.historial = this.historial.concat(account.history());
        this.amount += account.current();

    }

    history() {
        return this.historial;
    }

};

module.exports = BankAccount;