// Stretch routines database
console.log("JavaScript Loaded");
const routines = {
    "Hip Mobility": [
        "Hip Flexor Stretch",
        "Pigeon Pose",
        "Butterfly Stretch"
    ],

    "Neck Relief": [
        "Neck Side Stretch",
        "Chin Tucks",
        "Upper Trap Stretch"
    ],

    "Full Body": [
        "Forward Fold",
        "Cat Cow Stretch",
        "Child's Pose"
    ],

    "Shoulder Mobility": [
        "Cross Body Stretch",
        "Shoulder Rolls",
        "Thread The Needle"
    ]
};

// Get HTML elements

const generateBtn = document.getElementById("generateBtn");
const stretchType = document.getElementById("stretchType");
const routineList = document.getElementById("routineList");
const timer = document.getElementById("timer");

// Button click event

generateBtn.addEventListener("click", function () {

    const selectedGoal = stretchType.value;

    const selectedRoutine = routines[selectedGoal];

    routineList.innerHTML = "";

    selectedRoutine.forEach(function (stretch) {

        const li = document.createElement("li");

        li.textContent = stretch + " - 1 minute";

        routineList.appendChild(li);

    });

    startTimer();

});

// Timer function

function startTimer() {

    let timeLeft = 60;

    timer.textContent = "01:00";

    const countdown = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10
            ? "0" + seconds
            : seconds;

        timer.textContent =
            minutes + ":" + seconds;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(countdown);

            timer.textContent = "Done! 🎉";

        }

    }, 1000);

}