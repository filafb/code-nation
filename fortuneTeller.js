const inputOne = document.createElement("input");
const inputTwo = document.createElement("input");
const inputThree = document.createElement("input");

$(inputOne).addClass("input-one").attr("placeholder", "Your name");
$(inputTwo).addClass("input-two").attr("placeholder", "How many steps per day");
$(inputThree).addClass("input-three").attr("placeholder", "Tacos per week");

$(".input-container").append(inputOne, inputTwo, inputThree);

$("button").click(function() {
    const nameInput = $(".input-one").val();
    const stepsInput = $(".input-two").val();
    const tacosInput = $(".input-three").val();
    $("h2").append(`<p>${nameInput}</p>`);
    const calculateSteps = Number(stepsInput) * 365;
    const calculateTacos = Number(tacosInput) * 52;
    $("h2").append(`<p>You will have taken ${calculateSteps} steps...</p>`);
    $("h2").append(`<p>...and will have eaten ${calculateTacos} tacos!</p>`);
    });
