const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('VectorCalc', () => {
    describe('#sum', () => {

        let v1 = {x:3, y:5};
        let v2 = {x:7, y:1};

        it('Debería sumar dos vectores', () => {
            assert.deepEqual({x:10, y:6}, VectorCalculator.sum(v1, v2));
        })
    })

    describe('#sub', () => {

        let v1 = {x:3, y:5};
        let v2 = {x:7, y:1};

        it('Debería restar dos vectores', () => {
            assert.deepEqual({x:-4, y:4}, VectorCalculator.sub(v1, v2));
        })
    })

    describe('#escalar', () => {

        let v1 = {x:3, y:5};
        let magnitud = 5;

        it('Debería escalar un vector a la medida deseada', () => {
            assert.deepEqual({x:15, y:25}, VectorCalculator.escalar(v1, magnitud));
        })

    })

    describe('#dot', () => {

        let v1 = {x:3, y:5};
        let v2 = {x:7, y:1};

        it('Debería hacecr el producto punto de dos vectores', () => {
            assert.deepEqual(26, VectorCalculator.dot(v1,v2));
        })

    })
})