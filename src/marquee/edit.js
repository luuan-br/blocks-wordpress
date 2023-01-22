import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<div
			{...blockProps}
			className={`${blockProps.className} marquee marquee--fixed`}
		>
			<div className="wrapper">
				<div>
					<RichText
						tagName="span"
						value={attributes.heading}
						onChange={(heading) => setAttributes({ heading })}
						placeholder="Enter heading here..."
					/>
				</div>
			</div>
		</div>
	);
}
