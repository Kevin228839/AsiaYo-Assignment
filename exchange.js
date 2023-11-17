const {rateData} = require('./data');
const {validateQueryParams} = require('./utils')

const exchange = (req ,res, next) => {
  try {
    const source = req.query.source;
    const target = req.query.target;
    let amount = req.query.amount;
    if(validateQueryParams(source, target, amount)) {
      const rate = rateData["currencies"][source][target];
      amount = amount.replace(/[$,]/g, '');
      let finalValue = Math.round((parseFloat(amount) * parseFloat(rate)) * 100) / 100;
      finalValue = "$" + finalValue.toLocaleString();
      res.status(200).json({
        message: 'success',
        amount: finalValue
      });
    } else {
      res.status(400).json({message: "invalid query parameters"})
    }
  } catch(err) {
    next(err);
  }
}

module.exports = {exchange};