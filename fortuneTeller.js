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
