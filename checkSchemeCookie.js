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

const cookies = document.cookie.split(';'); // Save current cookies to a variable

// Check the value of color-scheme. If correct cookie is found, add scheme class to <html>
if (cookies.some((c) => c.includes('color-scheme=dark'))) {
    document.getElementsByTagName('html')[0].classList.add('color-scheme--dark'); // Dark mode
} else if (cookies.some((c) => c.includes('color-scheme=light'))) {
    document.getElementsByTagName('html')[0].classList.add('color-scheme--light'); // Light mode
}