const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAcc', () => {
    describe('#current', () => {
        
        let bankAccount = new BankAccount();

        it('Debería mostrar el saldo actual', () => {
            assert.equal(0, bankAccount.current());
        })
    })

    describe('#append', () => {

        it('Debería agregar el monto y mostrar el saldo', () => {
            let bankAccount = new BankAccount();
            bankAccount.append(100);

            assert.equal(100, bankAccount.current());
        })

        it('Debería no agregar nada al ser un saldo negativo', () => {
            let bankAccount = new BankAccount();
            bankAccount.append(-100);

            assert.equal(0, bankAccount.current());
        })

    })

    describe('#substract',() => {

        it('Debería restar el monto y mostrar el saldo', () => {
            let bankAccount = new BankAccount();
            bankAccount.substract(100);

            assert.equal(-100, bankAccount.current());
        })

        it('Debería no restar nada al ser un saldo negativo', () => {
            let bankAccount = new BankAccount();
            bankAccount.substract(-100);

            assert.equal(0, bankAccount.current());
        })
    })

    describe('#merge', () => {

        let bankAccountA = new BankAccount();
        let bankAccountB = new BankAccount();

        bankAccountA.append(50);
        bankAccountB.append(10);

        bankAccountA.merge(bankAccountB)

        it('Debería mezclar ambas cuentas en una', () => {
            assert.deepEqual([{type: 'append', amount: 50},{type: 'append', amount: 10}], bankAccountA.history());
        })
    })

    describe('#history', () => {
        let bankAccount = new BankAccount();

        bankAccount.append(20);
        bankAccount.append(100);

        it('Debería mostrar el historial de la cuenta', () => {
            assert.deepEqual([{type: 'append', amount: 20},{type: 'append', amount: 100}], bankAccount.history());
        })
    })
})