// https://rudrastyh.com/gutenberg/plugin-sidebars.html

import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/edit-post";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
// import { image } from "@wordpress/icons";

// Custom SVG icon
// const icon = <svg width="20" height="20"> ... </svg>;

// Icon from Dashicons
const icon = "chart-area";

const MishaTextControl = compose(
	withDispatch(function (dispatch, props) {
		return {
			setMetaValue: function (value) {
				dispatch("core/editor").editPost({ meta: { [props.metaKey]: value } });
			},
		};
	}),
	withSelect(function (select, props) {
		return {
			metaValue:
				select("core/editor").getEditedPostAttribute("meta")[props.metaKey],
		};
	})
)(function (props) {
	return (
		<TextControl
			type="text"
			label={props.label}
			value={props.metaValue}
			onChange={(content) => {
				props.setMetaValue(content);
			}}
		/>
	);
});

const PluginSidebarTest = () => {
	return (
		<PluginSidebar name="misha-seo" title="SEO" icon="chart-area">
			<PanelBody>
				<MishaTextControl label="Title" metaKey="misha_plugin_seo_title" />
				<MishaTextareaControl
					label="Description"
					metaKey="misha_plugin_seo_description"
				/>
				<MishaToggleControl
					label="Hide from search engines"
					metaKey="misha_plugin_seo_robots"
				/>
			</PanelBody>
		</PluginSidebar>
	);
};

registerPlugin("plugin-sidebar-test", {
	render: PluginSidebarTest,
});
