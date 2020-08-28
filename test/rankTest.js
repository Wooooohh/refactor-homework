const test = require('ava');
const {voyageRisk,captainHistoryRisk,voyageProfitFactor} = require('../src/rank')

test('case 1 return 1', t =>{
    const voyage ={
      'length':2,
      'zone':'Japan'
    };
    const number = voyageRisk(voyage);
    t.is(1, number);
})

test('case 2 return 5', t =>{
    const voyage ={
      'length':2,
      'zone':'east-indies'
    };
    const number = voyageRisk(voyage);
    t.is(5, number);
})

test('case 3 return 3', t =>{
    const voyage ={
      'length':5,
      'zone':'Japan'
    };
    const number = voyageRisk(voyage);
    t.is(3, number);
})

test('case 4 return 7', t =>{
    const voyage ={
      'length':5,
      'zone':'east-indies'
    };
    const number = voyageRisk(voyage);
    t.is(7, number);
})

test('case 5 return 5', t =>{
    const voyage ={
      'length':10,
      'zone':'Japan'
    };
    const number = voyageRisk(voyage);
    t.is(5, number);
})

test('case 6 return 9', t =>{
    const voyage ={
      'length':10,
      'zone':'east-indies'
    };
    const number = voyageRisk(voyage);
    t.is(9, number);
})

