const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var request = require("request")

//include file with the object
var office = require('./data/office.js');

var url = "https://api.palvelutietovaranto.suomi.fi/api/v8/ServiceChannel/organization/c5f6914f-302e-41cc-bed7-4d4215aac640"
var url2 = "https://api.palvelutietovaranto.suomi.fi/api/v8/ServiceChannel/"
var offices = new Map();

request({
        url: url,
        json: true
}, function (error, response, body) {
        if (!error && response.statusCode === 200) {
                body.itemList.forEach(function(item){
                        var urlWithId = url2 + item.id
                        request({
                                url: urlWithId,
                                json: true
                        }, function (error, response, body) {
                                if (!error && response.statusCode === 200) {
                                        //set id
                                        office.id = body.id
                                        //console.log(office.id)
                                        //check language and set names
                                        for (var i = 0; i < body.serviceChannelNames.length; i++){
                                                if (body.serviceChannelNames[i].language == 'fi'){
                                                        office.name_fi = body.serviceChannelNames[i].value
                                                }else if (body.serviceChannelNames[i].language == 'sv') {
                                                        office.name_sv = body.serviceChannelNames[i].value
                                                }
                                        }
                                        //console.log(office.name_fi)
                                        //check language and set descriptions
                                        for (var i = 0; i < body.serviceChannelDescriptions.length; i++){
                                                if (body.serviceChannelDescriptions[i].language == 'fi' && body.serviceChannelDescriptions[i].type == 'Description'){
                                                        office.description_fi = body.serviceChannelDescriptions[i].value
                                                }else if (body.serviceChannelDescriptions[i].language == 'sv' && body.serviceChannelDescriptions[i].type == 'Description') {
                                                        office.description_sv = body.serviceChannelDescriptions[i].value
                                                }
                                        }
                                        //console.log(office.description_fi)
                                        //set office objects to map offices with office.id as the key
                                        offices.set(office.id, office);
                                        console.log(offices);
                                }
                        })
                });
        }
})

const dao = require('./dao/dao.js');
//console.log(`${dao.insertInto(office)}`);

