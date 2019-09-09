/*
show results on react fronts port 3000
get results from node servers port 4000 (THIS CODE)
*/
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors());
var request = require('request')

var date = new Date(). getDate(); //current date
var month = new Date(). getMonth() + 1; //current month
var year = new Date(). getFullYear(); //current year

var today = year + '-' + month + '-' + date;

console.log(today)

var baseUrl = 'https://api.hel.fi/linkedevents/v1/event/?format=json'

var url = baseUrl + '&start=' + today + '&end=' + today;

console.log(url)

request({
  url: url,
  json: true
}, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    body.data.forEach(function(item){
      var name = item.name.fi;
      console.log(name)
      //LOCATION DATA:
      var urlLocation = item.location['@id'];
      //console.log(urlLocation)
      request({
        url: urlLocation,
        json: true
      }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var postalCode = body.postal_code
          console.log(postalCode)
        }
      })
    });
  }
})

app.get('/', (req, res) => {
  res.send('hello from the server')
});

app.listen(4000, () => {
  console.log(`Listening port 4000`)
});