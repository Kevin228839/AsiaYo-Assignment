# Steps to start the server
1. run "npm install" 
2. run "node index.js"
3. open your browser or postman, test the following url
  - url: http://localhost:8000?source=USD&target=JPY&amount=$123,111.2312
  - note 1 (souce && target): only "USD, JPY, TWD" are considered valid currency.
  - note 2 (amount): 
    - Please format the query parameter "amount" with commas for thousands separators. 
    - A maximum of ten digits after the decimal point is allowed.
    - Negative amount is not allowed.
    - Dollar sign is required here.
4. unit test
  - run "npm test"

