function checkAccess() {
    const role = document.getElementById("role").value;
    let message = "";

    if (role === "employee") {
        message = "You are authorized to access the full 'Dietary Services' program.";
    }
    else if (role === "enrolled member") {
        message = "You are authorized to access 'Dietary Services' and one-on-one interaction with a dietician.";
    }
    else if (role === "subscriber") {
        message = "You are authorized to have partial access to 'Dietary Services'.";
    }
    else if (role === "non-subscriber") {
        message = "You are not eligible yet. Please subscribe or enroll to access the services.";
    }
    else {
        message = "Please select a valid role.";
    }

    document.getElementById("result").textContent = message;
}
