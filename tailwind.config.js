module.exports = {
	content: ["./app/*.{ts,tsx,js,jsx}", "./pages/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			maxHeight: {
				"400": "400px",
			},
			opacity: {
				"25": "0.25",
			},
			width: {
				fit: "fit-content",
				300: "300px",
			},
			height: {
				fit: "fit-content",
			},
			spacing: {
				"2.5": "0.625rem",
				"45": "11.25rem",
				"70": "17.5rem",
			},
			animation: {
				"reverse-spin": "reverse-spin 1s linear infinite",
			},
			keyframes: {
				"reverse-spin": {
					from: {
						transform: "rotate(360deg)",
					},
				},
			},
		},
		boxShadow: {
			md: "0px 4px 4px rgba(0, 0, 0, 0.1)",
			l: "0 0 10px rgba(0, 0, 0, 0.5)",
		},
		colors: {
			transparent: "transparent",
			black: {
				DEFAULT: "#2D2D2D",
			},
			white: {
				DEFAULT: "#FFFFFF",
			},
			blue: {
				DEFAULT: "#3284D0",
			},
			yellow: {
				DEFAULT: "#FFECBD",
			},
			purple: {
				DEFAULT: "#4F333C",
			},
			orange: {
				darker: "#A63B01",
				lighter: "#D96E34",
				lightest: "#FEB791",
				DEFAULT: "#D04A02",
				hover: "rgba(221, 128, 117, 0.16)",
				selected: "rgba(221, 128, 117, 0.32)",
			},
			green: {
				DEFAULT: "#175d2d",
			},
			red: {
				DEFAULT: "#E0301E",
			},
			data: {
				"darker-blue": "#3284D0",
				pink: "#D62FC5",
				mint: "#2FD69A",
				"lighter-green": "#86DB4F",
				"lighter-blue": "#65ABEB",
				purple: "#D5B6F7",
				yellow: "#F3AC49",
				red: "#E0301E",
			},
			tickMarkHighlight: {
				DEFAULT: "rgba(125, 125, 125, 0.2)",
				blue: "rgba(0, 61, 171, 0.2)",
			},
			grey: {
				placeholder: "#BDBDBD",
				DEFAULT: "#7D7D7D",
				lighter: "#E0E0E0",
				lightest: "#F5F5F5",
				disabled: "#F2F2F2",
				tooltip: "#464646",
			},
			status: {
				correct: "#175C2C",
				undetermined: "#C28A00",
				suggested: "#003DAB",
				warning: "#FFBF1F",
				incorrect: "#E0301E",
			},
			table: {
				"alternate-row-grey": "#F5F5F5",
			},
		},
		fontSize: {
			h3: ["22px", "36px"],
			h4: ["16px", "28px"],
			h5: ["14px", "20px"],
			p: ["14px", "20px"],
			sm: ["12px", "16px"],
			hint: ["12px", "21px"],
			tooltip: ["10px", "12px"],
			status: ["12px", "21px"],
			button: ["12px", "16px"],
		},
	},
	prefix: "tw-",
	variants:  {
		extend: {
			visibility: ["group-hover"],
		},
	},
};

