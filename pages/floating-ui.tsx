import { useEffect, useRef } from "react";

export const FloatingUIExample = () => {
	const floating = useRef<HTMLElement>();
	const reference = useRef<HTMLElement>();

	/*
	TODO: use computePosition, autoUpdate and shift, to display the div id="floating" next to the div id="reference", whenever user scoll the sub-containers
	insde id="container"
	*/
	useEffect(() => {
		return () => {};
	}, [floating, reference]);

	return (
		<div>
			<div
				id="container"
				className="tw-w-[700px] tw-h-[500px]  tw-rounded-sm tw-border-grey tw-border-solid tw-border-2
			tw-overflow-scroll "
			>
				scroll container
				<div className="tw-w-50 tw-h-80 tw-bg-data-lighter-green tw-m-2">
					sub-container 1{" "}
					<div id="reference" className="tw-bg-grey-lightest tw-p-2 tw-m-2 tw-w-20 tw-rounded-md">
						floating target
					</div>
				</div>
				<div className="tw-w-50 tw-h-80 tw-bg-data-lighter-green tw-m-2"> sub-container 2 </div>
				<div className="tw-w-50 tw-h-80 tw-bg-data-lighter-green tw-m-2"> sub-container 3 </div>
				<div className="tw-w-50 tw-h-80 tw-bg-data-lighter-green tw-m-2"> sub-container 4 </div>
			</div>
			<div
				id="floating"
				// style={{ top: y ?? 0, left: x ?? 0, position: strategy }}
				className="tw-w-50 tw-w-50 tw-bg-blue tw-opacity-50 tw-rounded-md"
			>
				floating
			</div>
		</div>
	);
};

export default FloatingUIExample;
