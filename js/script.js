let key = "YOUR_KEY_HERE";

$.ajax({
        // how we'll get the data
        type: "GET",
        url:"https://api.unsplash.com/search/photos?query=dogs&client_id=" + key,
        // only run this function, if the ajax handler can successfully retrieve the data

        // When ajax successfully manages to retrieve the data, it then puts it in a variable called "response"
        success: function(response){
        console.log(response);
        
        let i = Math.floor((Math.random() * 9) + 1);
        console.log(i);
        document.getElementById('mainContainer').innerHTML = "<img src ='"  + response.results[i].urls.regular + " 'alt = 'Description of image'>"
    }
});




