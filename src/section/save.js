import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save();
	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();

	return (
		<section
			{...blockProps}
			className={`${blockProps.className} container welcome`}
		>
			<div className="welcome__content">
				<div className="wrapper-content">
					<InnerBlocks.Content />

					<div className="footer-welcome">
						<button className="text">scroll</button>
						<p className="text">//@{anoAtual}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
