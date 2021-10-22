<?php
/** 
 * Registers setColorScheme.js as a new WordPress scripts
 * 
 */
function enqueue_custom_scripts() {
	
	wp_register_script(
    	'set-color-scheme', // Script handle
    	'[ADD-YOUR-FILE-PATH-HERE]', // File path
        '',
        '',
        true // Load script in footer
	);

    wp_enqueue_script( 'set-color-scheme' );
}

add_action( 'wp_enqueue_scripts', 'enqueue_custom_scripts' );

?>