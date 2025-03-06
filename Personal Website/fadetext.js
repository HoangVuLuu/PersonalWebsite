    const textArray = ["engineer", "software", "hello"];
    let index = 0;
    const textElement = document.getElementById("changingText");

    function changeText() {
        textElement.style.opacity = "0"; // Fade out
        setTimeout(() => {
            textElement.textContent = textArray[index]; // Change text
            textElement.style.opacity = "1"; // Fade in
            index = (index + 1) % textArray.length; // Loop back to first word
        }, 1000); // Wait 1s before changing text
    }

    setInterval(changeText, 5000); // Change text every 3 seconds
