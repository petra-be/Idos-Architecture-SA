<?php 

function wpdocs_theme_name_scripts() {
    wp_register_style( 'fullpage_css', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.css' );
    wp_enqueue_style('fullpage_css');

    wp_register_script( 'jQuery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js', null, null, true );
    wp_enqueue_script('jQuery');

    wp_register_script( 'Typed', 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js', null, null, true );
    wp_enqueue_script('Typed');

    wp_register_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js', null, null, true );
    wp_enqueue_script('gsap');

    wp_register_script( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', null, null, true );
    wp_enqueue_script('swiper');

    wp_register_script( 'fullpage', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js', null, null, true );
    wp_enqueue_script('fullpage');

    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/scripts.js', array(), '1.0.0', true );
    wp_enqueue_script( 'tictactoe', get_stylesheet_directory_uri() . '/js/tictactoe.js', array(), '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts', PHP_INT_MAX );

//activer image mise en avant
add_theme_support( 'post-thumbnails' );



/*Theme Option*/
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Header Settings',
		'menu_title'	=> 'Header',
		'parent_slug'	=> 'theme-general-settings',
	));
	
}
?>