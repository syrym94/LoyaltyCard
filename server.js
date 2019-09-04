// const mongoose = require('mongoose');
var http = require("follow-redirects").http;
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let firstname = "";
let phone = "";

const API_PORT = 3001;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  let user = { firstname, phone };
  res.send(user);
  var data = JSON.stringify(false);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", async function() {
    if (this.readyState === 4) {
      var product = JSON.parse(this.responseText);
    }
  });
  xhr.open(
    "GET",
    "https://online.moysklad.ru/api/remap/1.1/entity/product/3b017ffc-3d7e-11e9-9107-50480010713d"
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW5AdGVycmVua3VyMTpEb3N0eWsxMjg="
  );
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "796ab70b-8368-4e1b-98e3-91c8b2687010");
  xhr.send(data);
});
app.post("/", (req, res) => {
  console.log(req.body);
  firstname = req.body.data.username;
  phone = req.body.data.phone;
  console.log("User name = " + firstname + ", phone is " + phone);
  res.end("yes");
  var data = JSON.stringify({
    name: firstname,
    phone: phone
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open(
    "POST",
    "https://online.moysklad.ru/api//remap/1.1/entity/counterparty"
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW5AdGVycmVua3VyMTpEb3N0eWsxMjg="
  );
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.15.0");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader(
    "Postman-Token",
    "7f9f2419-d055-47f1-a1ed-d767a44193f0,af800f18-3b81-4c07-83ac-7a6d8847d4da"
  );
  xhr.setRequestHeader("Host", "online.moysklad.ru");
  xhr.setRequestHeader("accept-encoding", "gzip, deflate");
  xhr.setRequestHeader("content-length", "24");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
