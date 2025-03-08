    const textArray = ["I led technology & design as VP in my intern committee!","I built an AI model from scratch to analyze clouds for weather prediction!", "I competed in some of Canada’s biggest hackathons!", "I'm passionate about AI and cybersecurity!", "I love staying active with volleyball, dragon boat, and track & field!","As a head coach, I train and mentor track & field athletes!"];
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

    setInterval(changeText, 4000); // Change text every 3 seconds
