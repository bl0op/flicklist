
var api = {
	root: "https://api.themoviedb.org/3",
	token: "7d604dbe0c60b168fd5a811392f64e63" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
            year: 1997,
            with_genres: "35"
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
