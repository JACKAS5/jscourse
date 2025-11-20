let count = 0; // Initialze count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}

function checkCountValue() {
    if (count < 0) {
        alert("No more follower to unfollow");
    }
    else if (count === 10) {
        alert("Your Instagram post gained 10 follwers! Congratulations!");
    } else if (count === 20) {
        alter("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function decreaseCount() {
    if (count >= 1) {
        count--;
    } 
    displayCount();
    checkCountValue();
}