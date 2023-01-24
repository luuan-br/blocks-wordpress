import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();
	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();

	const ALLOWED_BLOCKS = ["core/video"];

	return (
		<section {...blockProps} className={`${blockProps.className}`}>
			<div className="wrapper-block-content">
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />

				<div className="footer-welcome">
					<button className="text">scroll</button>
					<p className="text">//@{anoAtual}</p>
				</div>
			</div>
		</section>
	);
}
