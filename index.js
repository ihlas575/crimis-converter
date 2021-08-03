// Converting Script //

document.getElementById("submitBtn").onclick = function() {
    calculteMile()
}

const input = document.getElementById("myput")
    // Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submitBtn").click();
    }
});

function calculteMile() {
    let miles;
    let killoMeter = parseInt(document.getElementById("myput").value);
    if (isNaN(killoMeter)) {
        document.getElementsByClassName("error__msg")[0].style.display = "block";
        document.getElementsByClassName("error__msg")[0].innerHTML = 'Please Enter Valid Value';
    } else {
        if (killoMeter > 0) {
            miles = killoMeter * 0.625;
            document.getElementsByClassName("error__msg")[0].style.display = "none";
            document.getElementById("demo").innerHTML = miles + "Miles";
            document.getElementsByClassName("resultSection")[0].style.display = "block";
        } else {
            document.getElementsByClassName("resultSection")[0].style.display = "none";
            document.getElementsByClassName("error__msg")[0].style.display = "block";
            document.getElementsByClassName("error__msg")[0].innerHTML = 'Please Enter Valid Value';
        }
    }
}