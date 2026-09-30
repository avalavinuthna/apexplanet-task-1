function welcomeMessage()
{
    alert("Welcome to My Portfolio");
}

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    let name =
    document.getElementById("name").value;

    if(name.length < 3)
    {
        alert("Name must contain at least 3 characters");
        event.preventDefault();
    }

});
