const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var request = require("request")

var url = "https://api.palvelutietovaranto.suomi.fi/api/v8/ServiceChannel/organization/c5f6914f-302e-41cc-bed7-4d4215aac640"
var ids = [];

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
	
	body.itemList.forEach(function(item){
		ids.push(item.id)
    	});
    }
    console.log(ids)
})




