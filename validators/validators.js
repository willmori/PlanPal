
export function isValidEmail(email, emailsTaken) {
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexPattern.test(email)) {
        return {valid: false, reason: 'Email is not a valid format'};
    } else if (emailsTaken.includes(email)) {
        return {valid: false, reason: 'Email is already taken'};
    }
    return {valid: true};
}

export function isValidName(name, usernamesTaken) {
    if (name.length < 1) {
        return {valid: false, reason: 'Username is required'};
    } else if (usernamesTaken.includes(name)) {
        return {valid: false, reason: 'Username is already taken'};
    }
    return {valid: true};
}

export function isValidPassword(password, confirmPassword) {
    if (password.length < 6) {
        return {valid: false, reason: 'Password must be at least 6 characters'};
    } else if (password !== confirmPassword) {
        return {valid: false, reason: 'Passwords must match'};
    }
    return {valid: true};
}