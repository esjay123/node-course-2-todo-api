const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'testing');

var decoded = jwt.verify(token, 'testing');
console.log(decoded);
// var message = 'I am a user trying to hash this message';
//
// var data = {
//   id:4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();
// if (token.hash === resultHash) {
//   console.log('same');
// }
// else {
//   console.log('not same');
// }
