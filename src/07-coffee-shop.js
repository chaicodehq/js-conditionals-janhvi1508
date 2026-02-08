/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  var price = 0;
  if (
    (size != "small" && size != "medium" && size != "large") ||
    (type != "regular" &&
      type != "latte" &&
      type != "cappuccino" &&
      type != "mocha")
  ) {
    price = -1;
    return -1;
  } else {
    if (type == "regular") {
      if (size == "small") {
        price = 3;
      } else if (size == "medium") {
        price = 4;
      } else {
        price = 5;
      }
    } else if (type == "latte") {
      if (size == "small") {
        price = 3 + 1;
      } else if (size == "medium") {
        price = 4 + 1;
      } else {
        price = 5 + 1;
      }
    } else if (type == "cappuccino") {
      if (size == "small") {
        price = 3 + 1.5;
      } else if (size == "medium") {
        price = 4 + 1.5;
      } else {
        price = 5 + 1.5;
      }
    } else {
      if (size == "small") {
        price = 3 + 2;
      } else if (size == "medium") {
        price = 4 + 2;
      } else {
        price = 5 + 2;
      }
    }
    if (extras.whippedCream) {
      price = price + 0.5;
    }
    if (extras.extraShot) {
      price = price + 0.75;
    }
    price = Number(price.toFixed(2));
    return price;
  }
}
