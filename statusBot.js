

var request = require("request")

var url="jsonURL"



function verificarStatus(){

	request({
	    url: url,
	    json: true,
	    headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
		    'Cookie': "If you need to login, use the cookie here!!",
		    'Accept': '/',
		    'Connection': 'keep-alive'
		}
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        //console.log(body) // Print the json response
	    let status = false;

		for (let i in body) {
			for (let j in body[i]) {
				if (j == 'title' ){
					if (body[i][j] != 'OFF'){
						status = true;
					}
				}

			}
		}

		if (status){
				console.log ('SB-I: IS ON!!!')
		}
		else
			console.log ('SB-I: Still OFF')


	    }

	    setTimeout(function(){
	        verificarStatus();
	    }, 15000);

	})

}

verificarStatus();