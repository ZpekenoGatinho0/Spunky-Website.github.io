// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/NcewaPfFR6Y

var reloadButton;
var database;


function setup() {
  
  createP('Top Money').parent('top_title');
  
  var config = {
    apiKey: "AIzaSyBhBGKAlT4FShQCkKerMygU6GYZucenm-E",
    authDomain: "bot-spunky.firebaseapp.com",
    databaseURL: "https://bot-spunky.firebaseio.com",
    storageBucket: "bot-spunky.appspot.com",
    messagingSenderId: "264522406029",
  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('TopMoney');
  ref.on('value', top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, errData);
  
  reloadButton.parent('reload');
  reloadButton.mousePressed(ref.on('value', top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, errData));
  
}

function top1(data) {
  var scorelistings = selectAll('.listando');
  for (var i = 0; i < scorelistings.length; i++) {
    scorelistings[i].remove();
  }
 
  //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[0];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_1');
  }
  function top2(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[1];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_2');
 }
  function top3(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[2];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_3');
 }
 function top4(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[3];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_4');
 }
 function top5(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[4];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_5');
 }
 function top6(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[5];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_6');
 }
 function top7(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[6];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_7');
 }
 function top8(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[7];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_8');
 }
 function top9(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[8];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_9');
 }
 function top10(data) {
   //console.log(data.val());
  var top = data.val();
  var keys = Object.keys(top);
  //console.log(keys);
  var k = keys[9];
  var id = top[k].id;
  var money = top[k].money;
    var li = createElement(k + `- ` + id +`: ` + money);
    li.class('listando');
    li.parent('top_10');
 }

function errData(err) {
  console.log('Error!');
  console.log(err);
}
