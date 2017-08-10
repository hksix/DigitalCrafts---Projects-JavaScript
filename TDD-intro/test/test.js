const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do arithmetic', ()=> {
    describe('Can add numbers',()=> {
    it('Can add 2 postive interes', () => {
        //  expect(1).to.equal(1);
        //  expect(2).to.equal(1);
        expect(calc.add(1,1)).to.equal(2);
    });
    it('Can add an interget to zero', () => {
        //  expect(1).to.equal(1);
        //  expect(2).to.equal(1);
        expect(calc.add(1,0)).to.equal(1);
    });
    it('Can not add a number and a function', () => {
        expect(calc.add(1,() => {})).to.equal('1() => {}');
    });
    it('Can do substraction', () => {
        expect(calc.subtract(1,3)).to.equal(-2);
    })
    it('Can do Division', ()=>{
        expect(calc.divide(10,5)).to.equal(2);
    })
    it('Can do multiplication', ()=>{
        expect(calc.multiply(10,2)).to.equal(20);
    });

    });
    describe('Can add numbers Asynchoursnly', () =>{
        it('can add two intergrs asynschorusly', (done) =>{
            expect(calc.addAsync(3,2,(val)=>{
                if (val === 5){
                    done();
                }else{
                    done(new Error('nope'));
                }

            }));
        });
    });
});