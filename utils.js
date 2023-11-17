const validateQueryParams = (source, target, amount) => {
  const validCurrency = ["TWD", "JPY", "USD"];
  if(validCurrency.includes(source) && validCurrency.includes(target)) {
    const re = /^\$\d{1,3}(,\d{3})*(\.\d{1,10})?$/;
    return re.test(amount);
  } else {
    return false;
  }
}

module.exports = {
  validateQueryParams
}