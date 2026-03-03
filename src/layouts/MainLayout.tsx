import { JsxElement } from "@july/snarl/jsx-runtime";

const theme = {
	fontPrimary: "Iosevka Custom Web, monospace",

	bgPrimary: "#151515",
	bgSecondary: "#1b1b1b",
	bgTertiary: "#252525",
	bgQuaternary: "#303030",

	fg: "#a1b0b8",
	fgSecondary: "#838d93",

	fgTertiary: "#757f85",

	accent600: "#832e31",
	accent500: "#a63c40",
	accent400: "#d3494e",
	accent300: "#fc595f",
	accent200: "#df9395",
	accent100: "#ba8586",

	roundSmall: "8px",
	roundMedium: "16px",
	roundLarge: "24px",
	roundFull: "9999px",
};

const styles = `
* {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	font-family: ${theme.fontPrimary};
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

html {
	font-family: ${theme.fontPrimary};
	background-color: ${theme.bgPrimary};
	color: ${theme.fg};
	color-scheme: dark;
	overflow-x: hidden;
}

body {
	margin: 0;
	overflow-x: hidden;
}

a {
	cursor: pointer;
	text-decoration: none;
	color: ${theme.fg};
}

a:not(.button):not(.card), a:not(.button):not(.card):visited {
	color: ${theme.accent400};
	font-weight: 600;
}

a:not(.button):not(.card):hover {
	text-decoration: underline;
}

button, .button {
	background-color: ${theme.bgSecondary};
	color: ${theme.fg};
	border: 0.5px solid ${theme.bgTertiary};
	-moz-border-radius: ${theme.roundFull};
	-khtml-border-radius: ${theme.roundFull};
	-webkit-border-radius: ${theme.roundFull};
	border-radius: ${theme.roundFull};
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 11.2px;
	padding-bottom: 11.2px;
	cursor: pointer;
	margin-top: 16px;
	margin-right: 8px;
	display: block;
	text-align: center;
}

button.prominent, .button.prominent {
	border-color: ${theme.accent300};
	background-color: ${theme.accent400};
	color: ${theme.bgPrimary};
	font-weight: 600;
}

hr {
	border: none;
	background-color: ${theme.bgTertiary};
	height: 1px;
	margin-top: 16px;
	margin-bottom: 0;
}

.card {
	-moz-border-radius: ${theme.roundMedium};
	-khtml-border-radius: ${theme.roundMedium};
	-webkit-border-radius: ${theme.roundMedium};
	border-radius: ${theme.roundMedium};
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	background-color: ${theme.bgSecondary};
	border: 1px solid ${theme.bgTertiary};
	margin-top: 0rem;
	-webkit-transition: background-color .1s, border-color .1s;
	-o-transition: background-color .1s, border-color .1s;
	transition: background-color .1s, border-color .1s;
	display: block;
}

.card hr {
	margin-left: -16px;
	margin-right: -16px;
}

a.card:hover {
	background-color: ${theme.bgTertiary};
	border-color: ${theme.bgQuaternary};
}

a.card hr {
	-webkit-transition: background-color .1s;
	-o-transition: background-color .1s;
	transition: background-color .1s;
}

a.card:hover hr {
	background-color: ${theme.bgQuaternary};
}

::selection {
	background-color: ${theme.accent400};
	color: ${theme.bgPrimary};
}

::-moz-selection {
	background-color: ${theme.accent400};
	color: ${theme.bgPrimary};
}

p, b {
	margin-bottom: 0;
	margin-top: 16px;
	font-size: 14px;
}

h1 {
	margin-top: 16px;
	margin-bottom: 0;
	font-size: 24px;
}

h2 {
	margin-top: 28px;
	margin-bottom: 16px;
	font-weight: 600;
	font-style: italic;
	font-size: 16px;
}

table {
	width: 100%;
	table-layout: fixed;
	border-collapse: separate;
	border-spacing: 0;
}

td {
	vertical-align: top;
}

tr td {
	padding-left: 4px;
	padding-bottom: 8px
}

tr td:first-child {
	padding-left: 0px;
	padding-right: 4px;
}

@media (max-width: 600px) {
	table {
		display: block !important;
		width: 100% !important;
	}
	tbody {
		display: block !important;
		width: 100% !important;
	}
	td {
		display: block !important;
		width: 100% !important;
		margin-bottom: 10px !important;
		padding-left: 0 !important;
		padding-right: 0 !important;
		padding-bottom: 0 !important;
	}
	tr {
		display: block !important;
		width: 100% !important;
	}
}

.lastfm-card {
	display: table;
	width: 100%;
	border-collapse: separate;
	padding-top: 16px;
	margin-right: 0;
}

.lastfm-art-container {
	display: table-cell;
	vertical-align: top;
	width: 1px;
}

.lastfm-art {
	display: block;
	-webkit-border-radius: ${theme.roundSmall};
	border-radius: ${theme.roundSmall};
	width: 70px;
	height: 70px;
}

.lastfm-info {
	display: table-cell;
	vertical-align: middle;
	text-align: left;
	padding-left: 12px;
}

.lastfm-title, .lastfm-artist, .lastfm-status {
	margin: 0;
	padding: 0;
	line-height: 1.2;
}

.lastfm-info * {
	vertical-align: middle;
}

.lastfm-info .icon {
	margin-right: 4px;
	width: 14px;
	height: 14px !important;
	vertical-align: middle !important;
}

.lastfm-title {
	font-weight: 600;
	font-size: 1.25rem;
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

footer {
	margin-left: auto;
	margin-right: auto;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
}

footer sub {
	font-weight: 600;
	color: ${theme.fgTertiary};
}

footer sub a {
	color: ${theme.fgTertiary} !important;
	text-decoration: underline;
}

.project-title {
	display: block;
	padding-top: 16px;
}

.project-title * {
	display: inline;
}

.project-title-left {
	margin-top: 0;
	font-weight: 500;
}

.project-title-right {
	float: right;
}

.project-lang {
	display: inline;
	vertical-align: middle;
}

.project-dot {
	-moz-border-radius: ${theme.roundFull};
	-khtml-border-radius: ${theme.roundFull};
	-webkit-border-radius: ${theme.roundFull};
	border-radius: ${theme.roundFull};
	width: 12px;
	height: 12px;
	margin-right: 4.8px;
	display: inline-block;
	vertical-align: middle;
}

.friends {
	width: 100%:
}

.friend {
	image-rendering: -moz-crisp-edges;
	image-rendering: pixelated;
	margin-right: 5px;
}

center.content {
	text-align: start;
	padding-left: 16px;
	padding-right: 16px;
	margin-left: auto;
	margin-right: auto;
	max-width: 864px;
	padding-top: 48px;
}
`;

export default function (
	{ children }: { children: JsxElement | JsxElement[] },
) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>/peɪd͡ʒ/</title>
				<link rel="stylesheet" href="/iosevka-custom/import.css" />
				<link rel="stylesheet" href="/fontello/import.css" />
				<style>{styles}</style>
			</head>
			<body>
				{/* @ts-ignore */}
				<center class="content">
					<main>
						{[children]}
					</main>
					{/* @ts-ignore */}
				</center>
			</body>
		</html>
	);
}
