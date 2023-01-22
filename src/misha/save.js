import {
	useBlockProps,
	RichText,
	getColorClassName,
} from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const formClass = getColorClassName("form-color", attributes.formColor);
	const formClasses = formClass || "";
	const formStyles = {
		backgroundColor: !formClass ? undefined : props.attributes.customFormColor,
	};

	return (
		<div className={formClasses} style={formStyles} {...useBlockProps.save()}>
			<RichText.Content tagName="h3" value={attributes.heading} />
			<form>
				<input type="email" placeholder="Enter your email address" />
				<RichText.Content tagName="button" value={attributes.buttonText} />
				<input type="hidden" name="list_id" value={attributes.list_id} />
				<input
					type="hidden"
					name="double_opt_in"
					value={true == attributes.doubleoptin ? "yes" : "no"}
				/>
			</form>
		</div>
	);
}
