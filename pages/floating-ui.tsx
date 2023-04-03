import { useFloating } from "@floating-ui/react";

export const FloatingUIExample = () => {
	useFloating();
	return (
		<div
			className="tw-w-70 tw-h-80 tw-bg-grey-placeholder"
			// style={}
			// 	className="tw-w-70 tw-h-80  tw-rounded-sm tw-border-grey tw-border-solid tw-border-2
			// tw-overflow-auto tw-flex tw-gap-3"
		>
			scroll container
			{/* <div className="tw-w-50 tw-h-50 tw-mx-auto "> container 1 </div>
			<div className="tw-w-50 tw-h-50 tw-mx-auto "> container 1 </div>
			<div className="tw-w-50 tw-h-50 tw-mx-auto "> container 1 </div>
			<div className="tw-w-50 tw-h-50 tw-mx-auto "> container 1 </div> */}
			<p className="text-3xl tw-font-bold underline">Hello world!</p>
		</div>
	);
};

export default FloatingUIExample;
