import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	return (
		<div class="marquee marquee--fixed" {...useBlockProps.save()}>
			<div class="wrapper">
				<div>
					<RichText.Content tagName="span" value={attributes.heading} />
					<RichText.Content tagName="span" value={attributes.heading} />
				</div>
			</div>
		</div>
	);
}
