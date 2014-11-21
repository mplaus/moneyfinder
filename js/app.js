/* global $,document,console,Parse */

var htmlBuilder;

    
    var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
    var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
    
    Parse.initialize(parseAPPID, parseJSID);
    var findGeorge = Parse.Object.extend("findGeorge");

    var htmlBuilder=[];

    document.addEventListener("deviceready", onDeviceReady, false);

$(document).ready(function() {

    getGeorge(findGeorge);
    
    $("#addGeorge").on("submit", function(e) {
        e.preventDefault();

        console.log("Submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.serialNumber = $("#serialNumber").val();
        

        var george = new findGeorge();
        console.log(data)
        george.save(data, {
            success:function(data) {
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

function getGeorge(findGeorge){
    console.log("getGeorge" + findGeorge);
    var query = new Parse.Query(findGeorge)
    query.find({
        success: function(results) {
            console.log(results);
            $.each(results, function(index,value) {
                console.log(results[index].attributes.serialNumber);
                htmlBuilder += 
    "<tr>" +
      "<td>" + results[index].attributes.serialNumber + "</td>" +
      "<td>" + "</td>" +
    "</tr>" 

            });
            $("#serialNumber").html(htmlBuilder);
        },
        error: function(error){
}
});
}

