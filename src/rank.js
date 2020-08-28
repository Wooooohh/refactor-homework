function voyageRisk (voyage) {
  let result = 1;
  result = addResultByVoyage(voyage, 4, 2, result);
  result = addResultByVoyage(voyage, 8, voyage.length - 8, result);
  if ((isIncludeChinaOrEastIndies(voyage))) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 5;
  result = addResultByHistory(history, 4, -4, result);
  result += history.filter(v => v.profit < 0).length;
  if (isInChinaAndHasHistory(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (isIncludeChinaOrEastIndies(voyage)) {
      result += 1;
    }
  if (isInChinaAndHasHistory(voyage, history)) {
    result += 3;
    result = addResultByHistory(history, 10, 1, result);
    result = addResultByVoyage(voyage, 12, 1, result);
    result = addResultByVoyage(voyage, 18, -1, result);
  } else {
    result = addResultByHistory(history, 8, 1, result);
    result = addResultByVoyage(voyage, 14, -1, result);
  }
  return result;
}

function addResultByHistory(history, boundaryValue, increment, result){
    if(history.length > boundaryValue)
        result += increment;
    return result;
}

function addResultByVoyage(voyage, boundaryValue, increment, result){
    if(voyage.length > boundaryValue)
        result += increment;
    return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return getSegment(vpf, vr, chr);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}
function getSegment(vpf, vr, chr){
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
      }
      else {
        return 'B';
    }
}
function isIncludeChinaOrEastIndies(voyage){
    return [
          'china',
          'east-indies',
     ].includes(voyage.zone)
}

function isInChinaAndHasHistory(voyage, history){
    return voyage.zone === 'china' && hasChina(history);
}

module.exports = {
};

const voyage = {
  zone: 'west-indies',
  length: 10,
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
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);

module.exports = {
  voyageRisk,captainHistoryRisk,voyageProfitFactor
}
