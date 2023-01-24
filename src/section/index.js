//https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/

import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

registerBlockType(metadata, {
	edit: Edit,
	save: Save,
});
