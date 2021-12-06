/**
 * Checks preferred color-scheme on page load
 *
 * Adds CSS class inside website <html> tag to control preferred color-scheme.
 * Class for light-scheme: 'color-scheme--light'
 * Class for dark-scheme: 'color-scheme--dark'
 *
 * Uses color-scheme cookie
 *
 */

/* Create variables */
const cookies = document.cookie.split(";");
const classes = document.getElementsByTagName("html")[0].classList;

/**
 * Check the value of color-scheme.
 * If correct cookie is found, add scheme class to <html>
 */

/* Dark Mode */
if (cookies.some((c) => c.includes("color-scheme=dark"))) {
  classes.add("color-scheme--dark");

  /* Light Mode */
} else if (cookies.some((c) => c.includes("color-scheme=light"))) {
  classes.add("color-scheme--light");
}
