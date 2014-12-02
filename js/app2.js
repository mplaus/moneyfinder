	$(document).ready(function(){
		initialize();
		

	});

	var htmlBuilder;

	function initialize(){

    var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
    var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
    
    Parse.initialize(parseAPPID, parseJSID);
    var findGeorge = Parse.Object.extend("findGeorge");

    var htmlBuilder=[];

    getGeorge(findGeorge);
}
    

	function search() {
		console.log("search")
	var index={};
	index.serialNumberId=$("serialNumberId").val();
	}

	var findGeorge = Parse.Object.extend("findGeorge");
	console.log(findGeorge);
	var query = new Parse.Query(findGeorge);
		query.get(index, {
			sucess: function(findGeorge) {

			},
				error: function(Object, error) {

				}
			});
	}


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
                    "<td>" +  
                    "</td>" +
                    "</tr>" 

            });
            $("#serialNumber").html(htmlBuilder);
            },
                                error:function(e) {
                                console.dir(e);
                            }
                        });
}
	