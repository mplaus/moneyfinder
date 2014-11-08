/* global $,document,console,Parse */
var htmlBuilder;
$(document).ready(function() {
	
	var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
	var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
	
	Parse.initialize(parseAPPID, parseJSID);

var findGeorge = Parse.Object.extend("findGeorge");
var htmlBuilder=[];

	getGeorge(findGeorge);

	$("#addGeorge").on("#submit", function(e) {
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
	
});
var htmlBuilder;
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


