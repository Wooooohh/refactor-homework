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


test('case 7 return 2', t =>{
    const voyage ={
      'length':6,
      'zone':'west-indies'
    };
    const history = [
      {
        zone: 'east-indies',
        profit: 5,
      },{
        zone: 'west-indies',
        profit: 15,
      },{
        zone: 'china',
        profit: -2,
      },
      {
        zone: 'west-africa',
        profit: 7,
      },
    ];
    const number = voyageProfitFactor(voyage, history);
    t.is(2, number);
})

test('case 8 return 1', t =>{
    const voyage ={
      'length':15,
      'zone':'west-indies'
    };
    const history = [
      {
        zone: 'east-indies',
        profit: 5,
      },{
        zone: 'west-indies',
        profit: 15,
      },{
        zone: 'china',
        profit: -2,
      },
      {
        zone: 'west-africa',
        profit: 7,
      },
    ];
    const number = voyageProfitFactor(voyage, history);
    t.is(1, number);
})

test('case 9 return 3', t =>{
    const voyage ={
      'length':8,
      'zone':'west-indies'
    };
    const history = [1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(3, number);
})

test('case 10 return 2', t =>{
    const voyage ={
      'length':15,
      'zone':'west-indies'
    };
    const history = [1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(2, number);
})

test('case 11 return 2', t =>{
    const voyage ={
      'length':15,
      'zone':'east-indies'
    };
    const history = [1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(3, number);
})

test('case 12 return 3', t =>{
    const voyage ={
      'length':15,
      'zone':'china'
    };
    const history = [1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(3, number);
})

test('case 13 return 6', t =>{
    const voyage ={
      'length':10,
      'zone':'china'
    };
    const history = [{
        zone: 'china',
        profit: -2}];
    const number = voyageProfitFactor(voyage, history);
    t.is(6, number);
})

test('case 14 return 7', t =>{
    const voyage ={
      'length':10,
      'zone':'china'
    };
    const history = [{
        zone: 'china',
        profit: -2},1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(7, number);
})

test('case 14 return 7', t =>{
    const voyage ={
      'length':14,
      'zone':'china'
    };
    const history = [{
        zone: 'china',
        profit: -2}];
    const number = voyageProfitFactor(voyage, history);
    t.is(7, number);
})

test('case 15 return 7', t =>{
    const voyage ={
      'length':14,
      'zone':'china'
    };
    const history = [{
        zone: 'china',
        profit: -2},1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(8, number);
})

test('case 16 return 6', t =>{
    const voyage ={
      'length':20,
      'zone':'china'
    };
    const history = [{
        zone: 'china',
        profit: -2}];
    const number = voyageProfitFactor(voyage, history);
    t.is(6, number);
})

test('case 17 return 7', t =>{
    const voyage ={
      'length':20,
      'zone':'china'
    };
    const history = [{
        zone: 'china',
        profit: -2},1,2,3,4,5,6,7,8,9,10];
    const number = voyageProfitFactor(voyage, history);
    t.is(7, number);
})