var moment = require('moment');
var request = require('ajax-request');
var $ = require('jQuery');
const axios = require('axios').default;


queryURL="http:www.omdbapi.com/?T=Burden&apikey=7e6191f4";


request({
  url: queryURL,
  method: 'GET',
 
}, function(err, res, result) {
    if(err) throw err;
    // console.log("WAYADONW");
    var newBody = JSON.stringify(res);
    var newBody2 = JSON.parse(res);

   
    console.log("hhashasa"+newBody);
console.log(newBody2)}

    );