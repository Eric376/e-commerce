
function reviewLoad(foodName)
{
    var URL_base = "http://localhost:8080/";
    var XHR = new XMLHttpRequest();
    XHR.open("GET", URL_base + "review/getList?food=" + foodName, true);
    XHR.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var reviewList = this.responseText;
            var vector = JSON.parse(reviewList);
            var i=0;
            for (i=0; i < vector.length; i++)
            {
                if (foodName == vector[i].foodname)
                {
                    uploadPostedReview(vector[i].username, vector[i].rating, vector[i].reviewText, vector[i].timestamp, foodName);
                }
            }
        }
    };
    XHR.send();
}

function uploadPostedReview(username, rating, reviewText, timestamp, foodName)
{
    var outerDiv = document.createElement("div");
    var space = document.createElement("br");

    var username = username;
    var usernamePara = document.createElement("P");
    var t0 = document.createTextNode("Username: " + username.toString() + " ");
    usernamePara.appendChild(t0);

    var ratingText = rating;
    var ratingPara = document.createElement("div");
    var i = 0;
    for(i = 0; i < Number(rating); i++)
    {
        var span = document.createElement("span");
        span.setAttribute('class', 'fa fa-star checked');
        span.setAttribute("style", "color: #ffc700;");
        ratingPara.appendChild(span);
    }


    var reviewText = reviewText;
    var reviewTextPara = document.createElement("P");
    var t2 = document.createTextNode("\nReview: " + reviewText.toString() + " ");
    reviewTextPara.appendChild(t2);

    var timestamp = timestamp;
    var timestampPara = document.createElement("P");
    var t3 = document.createTextNode("\nTimestamp: " + timestamp.toString());
    timestampPara.appendChild(t3);

    outerDiv.appendChild(usernamePara);
    outerDiv.appendChild(space);
    outerDiv.appendChild(ratingPara);
    outerDiv.appendChild(space);
    outerDiv.appendChild(reviewTextPara);
    outerDiv.appendChild(timestampPara);

    document.getElementById(foodName).appendChild(outerDiv);
    document.getElementById(foodName).appendChild(space);
}

function submitReview(username, reviewText, foodName)
{
    var today = new Date();
    var rating = Number($('input[class=radioButton]:checked').val());
    var review = {
        foodname: foodName,
        username: username,
        rating: rating,
        reviewText: reviewText,
        timestamp: today,
    };

    var XHR = new XMLHttpRequest();
    var URL_base = "http://localhost:8080/";
    XHR.open("POST", URL_base + "review/create?food=" + foodName);
    XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    XHR.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var id = this.responseText;
            if(id == 1)
            {
                XHR.send(JSON.stringify(review));
            }
        }
    };
    XHR.send(JSON.stringify(review));
    location.reload();
}
