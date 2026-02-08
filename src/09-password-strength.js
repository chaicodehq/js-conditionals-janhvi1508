/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (typeof password !== "string" || password === "") {
    return "weak";
  }
  let criteriaMet = 0;
  if (password.length >= 8) {
    criteriaMet = criteriaMet + 1;
  }
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  let specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "A" && char <= "Z") {
      hasUpper = true;
    } else if (char >= "a" && char <= "z") {
      hasLower = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }
  if (hasUpper) {
    criteriaMet = criteriaMet + 1;
  }
  if (hasLower) {
    criteriaMet = criteriaMet + 1;
  }
  if (hasNumber) {
    criteriaMet = criteriaMet + 1;
  }
  if (hasSpecial) {
    criteriaMet = criteriaMet + 1;
  }
  if (criteriaMet <= 1) {
    return "weak";
  } else if (criteriaMet <= 3) {
    return "medium";
  } else if (criteriaMet === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}
