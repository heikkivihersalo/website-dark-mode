/**
 * Listens user actions for color-scheme changes. 
 * 
 * Adds CSS class inside website <html> tag to control preferred color-scheme.
 * Class for light-scheme: 'color-scheme--light'
 * Class for dark-scheme: 'color-scheme--dark'
 * 
 * Buttons must have '.scheme-toggle' class
 * 
 */

// Get elements including '.scheme-toggle' class
const schemeToggle = document.querySelectorAll('.scheme-toggle');

// Get preferred settings for user
const prefersDarkMode = window.matchMedia( '(prefers-color-scheme: dark)' ); 

// Loop through all elements including '.scheme-toggle' class
for (let i = 0; i < schemeToggle.length; i++) {
  const classes = document.getElementsByTagName('html')[0].classList;

  // Add event listener for color-scheme buttons
  schemeToggle[i].addEventListener('click', () => {

    /* First check preferred color-scheme. 
     * If set to dark, add class for light-scheme. 
     * If not set or set to light, add class for dark-scheme
     * Last create a variable for cookie according to used scheme
     */
    if (prefersDarkMode.matches) {
      classes.toggle('color-scheme--light');
      var scheme = classes.contains('color-scheme--light')
        ? 'light'
        : 'dark';
    } else {
      classes.toggle('color-scheme--dark');
      var scheme = classes.contains('color-scheme--dark')
        ? 'dark'
        : 'light';
    }

    /* Add cookie to user browser according to used scheme
     * Cookie age is set to 30 days
     */
    document.cookie =
      'color-scheme = ' + scheme + '; ' +
      'max-age=2592000; path=/; samesite=strict; secure';
  });
}