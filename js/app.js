/* global $,document,console,Parse */

document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap is ready
function onDeviceReady() {

    //console.log("onDeviceReady()");
    setUp();
    
};

$(document).ready(function(){
    setUp();
});




    


//var htmlBuilder = "";
//var lat;
//var long;
//var myLocation


function setUp(){

    var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
    var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
    
    Parse.initialize(parseAPPID, parseJSID);
    var findGeorge = Parse.Object.extend("findGeorge");

    var htmlBuilder=[];

    //getGeorge(findGeorge);
    
    $("#addGeorge").on("submit", function(e) {
        e.preventDefault();

        console.log("Submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.serialNumber = parseInt($("#serialNumber").val());
        
            
                    var george = new findGeorge();
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
        }



