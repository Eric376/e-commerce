function noOrder()
{
    document.getElementById("prep").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("oven").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("boxing").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("delivery").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("process").innerHTML = "No order has been placed.";
}

function changeImage(n)
{
    document.getElementById("prep").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("oven").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("boxing").style.setProperty("filter","grayscale(100%)","");
    document.getElementById("delivery").style.setProperty("filter","grayscale(100%)","");
    if(n == 0){
        document.getElementById("prep").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("process").innerHTML = "Your food is being prepped!";
    }
    else if(n == 1){
        document.getElementById("oven").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("process").innerHTML = "Your food is in the Oven!";
    }
    else if(n == 2){
        document.getElementById("boxing").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("process").innerHTML = "Your food is being boxed up!";
    }
    else if(n == 3){
        document.getElementById("delivery").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("process").innerHTML = "Your food is on the way!";
    }
    else if(Number(n) >= 4){
        document.getElementById("delivery").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("boxing").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("oven").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("prep").style.setProperty("filter","grayscale(0%)","");
        document.getElementById("process").innerHTML = "Your order is delivered!";
    }
}