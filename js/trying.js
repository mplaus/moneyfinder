var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P"
var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh"

Parse.initialize(parseAPPID,parseJSID);

var NoteOB = Parse.Object.extend("Note");

$(document).on("pageshow", "#home," fucntion(e,ui) {
	$.mobile.loading("show");

			var query = new Parse.Query(NoteOb);
			query.limit(10);
			query.descending("createdAt");
 
			query.find({
				success:function(results) {
					$.mobile.loading("hide");
					var s = "";
					for(var i=0; i<results.length; i++) {
						//Lame - should be using a template
						s += "<p>";
						s += "<h3>Note " + results[i].createdAt + "</h3>";
						s += results[i].get("text");
						var pic = results[i].get("picture");
						if(pic) {
							s += "<br/><img src='" + pic.url() + "'>";
						}
						s += "</p>";
				}
				$("#home div[data-role=content]").html(s);
		},error:function(e) {
				$.mobile.loading("hide");
 
}
});
});
 
$(document).on("pageshow", "#addNote", function(e, ui) {
 
var imagedata = "";
 
$("#saveNoteBtn").on("touchend", function(e) {
e.preventDefault();
$(this).attr("disabled","disabled").button("refresh");
 
var noteText = $("#noteText").val();
if(noteText == '') return;
 
/*
A bit complex - we have to handle an optional pic save
*/
if(imagedata != "") {
var parseFile = new Parse.File("mypic.jpg", {base64:imagedata});
console.log(parseFile);
parseFile.save().then(function() {
var note = new NoteOb();
note.set("text",noteText);
note.set("picture",parseFile);
note.save(null, {
success:function(ob) {
$.mobile.changePage("#home");
}, error:function(e) {
console.log("Oh crap", e);
}
});
cleanUp();
}, function(error) {
console.log("Error");
console.log(error);
});
 
} else {
var note = new NoteOb();
note.set("text",noteText);
note.save(null, {
success:function(ob) {
$.mobile.changePage("#home");
}, error:function(e) {
console.log("Oh crap", e);
}
});
cleanUp();
 
}
});
 
$("#takePicBtn").on("click", function(e) {
e.preventDefault();
navigator.camera.getPicture(gotPic, failHandler,
{quality:50, destinationType:navigator.camera.DestinationType.DATA_URL,
sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
});
function gotPic(data) {
console.log('got here');
imagedata = data;
$("#takePicBtn").text("Picture Taken!").button("refresh");
}
function failHandler(e) {
alert("ErrorFromC");
alert(e);
console.log(e.toString());
}
 
function cleanUp() {
imagedata = "";
$("#saveNoteBtn").removeAttr("disabled").button("refresh");
$("#noteText").val("");
$("#takePicBtn").text("Add Pic").button("refresh");
}
 
});


//global $,document,console,Parse 
$(document).ready(function() {
	
console.log("start page");
$("#addGeorge").click(function() { 

/*function addGeorge(){
	console.log("addGeorge()");*/
	
	var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
	var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
	
	Parse.initialize(parseAPPID, parseJSID);

var findGeorge = Parse.Object.extend("findGeorge");
var htmlBuilder=[];

	//getGeorge(findGeorge);

	

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.serialNumber = $("#serialNumber").val();

		var comment = new findGeorge();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
			
	function getGeorge(findGeorge){
	console.log("getGeorge" + findGeorge);
	var query = new Parse.Query(findGeorge);
	query.find({
		success: function(results) {
			console.log(results);
			$.each(results, function(index, value) {
				console.log(results[index].attributes.serialNumber);
				htmlBuilder += 
    "<tr>" +
      "<td>" + results[index].attributes.serialNumber + "</td>" +
      "<td>" + "</td>" +
    "</tr>" 

			});
			$("#serialNumber").html(htmlBuilder);
		},

		error: function(error) {

		}
	});
}
		
	});

}

	return false; });
	
});*/





/*var htmlBuilder;
document.addEventListener("deviceready", getGeorge, false);

	
	var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
	var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
	
	Parse.initialize(parseAPPID, parseJSID);

var findGeorge = Parse.Object.extend("findGeorge");

var htmlBuilder=[];

	getGeorge(findGeorge);
	$("#addGeorge").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.serialNumber = $("#serialNumber").val();

		var comment = new findGeorge();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
		});
		
	});	

function getGeorge(findGeorge){
	console.log("getGeorge" + findGeorge);
	var query = new Parse.Query(findGeorge);
	query.find({
		success: function(results) {
			console.log(results);
			$.each(results, function(index, value) {
				console.log(results[index].attributes.serialNumber);
				htmlBuilder += 
    "<tr>" +
      "<td>" + results[index].attributes.serialNumber + "</td>" +
      "<td>" + "</td>" +
    "</tr>" 

			});
			$("#serialNumber").html(htmlBuilder);
		},

		error: function(error) {

		}
	});
}
var _ = require("underscore");
Parse.Cloud.beforeSave("Post", function(request, response) {
    var post = request.object;
 
    var toLowerCase = function(w) { return w.toLowerCase(); };
 
    var words = post.get("text").split(/\b/);
    words = _.map(words, toLowerCase);
    var stopWords = ["the", "in", "and"]
    words = _.filter(words, function(w) { return w.match(/^\w+$/) && ! _.contains(stopWords, w); });
 
    var hashtags = post.get("text").match(/#.+?\b/g);
    hashtags = _.map(hashtags, toLowerCase);
 
    post.set("words", words);
    post.set("hashtags", hashtags);
    response.success();
});
*/

/*var lat;
var long;
var myLocation;

function displayContent(){
    var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
    var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";

//Initialize Parse
Parse.initialize(parseAPPID,parseJSID);
    var findGeorge = Parse.Object.extend("findGeorge");
    var query = new Parse.Query(findGeorge);

query.withinMiles("geopoint", myLocation, 10);
    var yesterday = new Date();

yesterday.setDate(yesterday.getDate()-1);
query.greaterThan("createdAt", yesterday);
query.descending("createdAt");
query.find({
success:function(results) {
var s = "";
for(var i=0; i<results.length; i++) {
//Lame - should be using a template
s += "<div class='row'> <div class='large-12 columns'> <div class='callout panel'>";
var pic = results[i].get("picture");
if(pic) {
s += "<br/><img src='" + pic.url() + "'>";
}
s += results[i].get("text");
s += "</div> </div> </div>"
}
$("#content").html(s);
},error:function(e) {
}
});
}
function onDeviceReady() {
console.log("onDeviceReady()");
var imagedata = "";
navigator.geolocation.getCurrentPosition(gotGeo, errorGeo,{enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 });
}
function gotGeo(position){
lat=position.coords.latitude;
long=position.coords.longitude;
console.log(lat);
console.log(long);
myLocation = new Parse.GeoPoint({latitude: lat, longitude: long});
displayContent();
}
function errorGeo(error){
alert('code: ' + error.code + '\n' +
'message: ' + error.message + '\n');
}
function submitBtn(){
$('#spinner').show();
var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
//Initialize Parse
Parse.initialize(parseAPPID,parseJSID);
var NoteOb = Parse.Object.extend("photos");
var caption = $("#caption").val();

//Take care of saving the image

if(imagedata != "") {
var parseFile = new Parse.File("mypic.jpg", {base64:imagedata});
var point = new Parse.GeoPoint(lat, long);
console.log(parseFile);
parseFile.save().then(function() {
var note = new NoteOb();
note.set("text",caption);
note.set("picture",parseFile);
note.set("geopoint", point);
note.save(null, {
success:function(ob) {
$('#spinner').hide();
window.location.href = "index.html";
}, error:function(e) {
console.log("Oh crap", e);
}
});
cleanUp();
}, function(error) {
console.log("Error");
console.log(error);
});
} else {
var note = new NoteOb();
note.set("text",caption);
note.save(null, {
success:function(ob) {
$.mobile.changePage("index.html");
}, error:function(e) {
console.log("Oh crap", e);
}
});
cleanUp();
}
}
function capturePhoto(){
//alert("capture button working");
navigator.camera.getPicture(gotPic,failHandler,{quality:30, destinationType:0 });
}
function choosePhoto(){
//alert("capture button working");
navigator.camera.getPicture(gotPic,failHandler,{sourceType:0, destinationType:0, quality:30});
}
function gotPic(data) {
console.log('got here');
imagedata = data;
//$("#takePicBtn").text("Picture Taken!").button("refresh");
}
function failHandler(e) {
alert("ErrorFromC");
alert(e);
console.log(e.toString());
}
function cleanUp() {
imagedata = "";
//$("#submitBtn").removeAttr("disabled").button("refresh");
$("#caption").val("");
//$("#takePicBtn").text("Add Pic").button("refresh");
}
//});
function okay(message) {
}
*/




/* global $,document,console,Parse */
var htmlBuilder;
$(document).ready(function() {
var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
Parse.initialize(parseAPPID, parseJSID);
 var CommentObject = Parse.Object.extend("CommentObject");

 $("#findGeorge").on("submit", function(e) {

var findGeorge = Parse.Object.extend("findGeorge");
var htmlBuilder=[];

 getGeorge(findGeorge);

 $("#addGeorge").on("submit", function(e) {
e.preventDefault();
console.log("Handling the submit");


var data = {};
data.serialNumber = $("#serialNumber").val();
 var comment = new CommentObject();
 var comment = new findGeorge();
comment.save(data, {
success:function() {
console.log("Success");

}
});
});

function getGeorge(findGeorge){
 console.log("getGeorge" + findGeorge);
 var query = new Parse.Query(findGeorge);
 query.find({
 success: function(results) {
 console.log(results);
 $.each(results, function(index, value) {
 console.log(results[index].attributes.serialNumber);
 htmlBuilder +=
 "<tr>" +
 "<td>" + results[index].attributes.serialNumber + "</td>" +
 "<td>" + "</td>" +
 "</tr>"

 });
 $("#serialNumber").html(htmlBuilder);
 },

 error: function(error) {

 }
 });
}

 