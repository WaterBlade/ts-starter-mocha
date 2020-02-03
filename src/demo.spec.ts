import {expect} from "chai";
import {add, sub} from './demo';

describe('add function', ()=>{
    it('1 + 2 = 3', ()=>{
        expect(add(1, 2)).to.equal(3);
    });
});

describe('sub function', ()=>{
    it('3-2=1', ()=>{
        expect(sub(3, 2)).to.equal(1);
    });
    it('3-1=2', ()=>{
        expect(sub(3, 1)).to.equal(2);
    });
});