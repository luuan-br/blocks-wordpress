<?php
/**
 * Plugin Name:       Instanta Waves Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       instanta-waves-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_instanta_waves_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocka' );
	register_block_type( __DIR__ . '/build/blockb' );
	register_block_type( __DIR__ . '/build/misha' );
	register_block_type( __DIR__ . '/build/marquee' );
	register_block_type( __DIR__ . '/build/section' );
}

add_action( 'init', 'create_block_instanta_waves_blocks_block_init' );

// function sidebar_plugin_register() {
//     wp_register_script(
//         'plugin-sidebar-js',
//         plugins_url( '/instanta-waves-blocks/build/sidebar/index.js' ),
// 		array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
//     );
// }

// add_action( 'init', 'sidebar_plugin_register' );

// function sidebar_plugin_script_enqueue() {
//     wp_enqueue_script( 'plugin-sidebar-js' );
// }

// add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );
