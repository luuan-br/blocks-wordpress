import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	getColorClassName,
} from "@wordpress/block-editor";

import {
	TextControl,
	ToggleControl,
	PanelBody,
	PanelRow,
} from "@wordpress/components";

const colorSamples = [
	{
		name: "Coral",
		slug: "coral",
		color: "#FF7F50",
	},
	{
		name: "Lavender",
		slug: "lavender",
		color: "#E6E6FA",
	},
	{
		name: "White",
		slug: "white",
		color: "#ffffff",
	},
];

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const formClass = getColorClassName("form-color", attributes.formColor);
	const formClasses = formClass || "";
	const formStyles = {
		backgroundColor: !formClass ? undefined : attributes.formColor,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Form Settings" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="List ID"
							onChange={(list_id) => setAttributes({ list_id })}
							value={attributes.list_id}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Double Opt In"
							onChange={() =>
								setAttributes({ doubleoptin: !attributes.doubleoptin })
							}
							checked={attributes.doubleoptin}
						/>
					</PanelRow>
				</PanelBody>
				<PanelColorSettings
					title="Awesome Color Options"
					colorSettings={[
						{
							colors: colorSamples,
							value: attributes.formColor,
							label: "Form Color",
							onChange: (formColor) => setAttributes({ formColor }),
						},
					]}
				/>
			</InspectorControls>
			<div
				{...blockProps}
				className={`${blockProps.className} ${formClasses}`}
				style={{ ...blockProps.style, ...formStyles }}
			>
				<RichText
					tagName="h3"
					value={attributes.heading}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(heading) => setAttributes({ heading })}
					placeholder="Enter heading here..."
				/>
				<p>
					<span>Email address</span>
					<RichText
						tagName="span"
						value={attributes.buttonText}
						allowedFormats={[]}
						onChange={(buttonText) => setAttributes({ buttonText })}
						placeholder="Button text..."
					/>
				</p>
			</div>
		</>
	);
}
