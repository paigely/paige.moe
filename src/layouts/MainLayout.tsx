import { JsxElement } from "@july/snarl/jsx-runtime";

const styles = `
* {
	appearance: none;
	font-family: var(--font-primary);
	scrollbar-color: var(--accent-300) transparent;
	scrollbar-width: auto;
}

html {
	--font-primary: Iosevka Custom Web, monospace;

	--background-primary: #151515;
	--background-secondary: #1b1b1b;
	--background-tertiary: #252525;
	--background-quaternary: #303030;

	--foreground: #a1b0b8;
	--foreground-secondary: #838d93;
	--foreground-tertiary: #757f85;

	--accent-600: #832e31;
	--accent-500: #a63c40;
	--accent-400: #d3494e;
	--accent-300: #fc595f;
	--accent-200: #df9395;
	--accent-100: #ba8586;

	--round-small: 0.5rem;
	--round-medium: 1rem;
	--round-large: 1.5rem;
	--round-full: 9999px;

	font-family: var(--font-primary);
	background-color: var(--background-primary);
	color: var(--foreground);
}

body {
	margin: 0;
}

main {
	padding-inline: 1rem;
	margin: auto;
	max-width: 832px;
	padding-top: 3rem;
}

a {
	cursor: pointer;
	text-decoration: none;
	color: var(--foreground);
}

a:not(.button):not(.card), a:not(.button):not(.card):visited {
	color: var(--accent-400);
	font-weight: 600;
}
a:not(.button):not(.card):hover {
	text-decoration: underline;
}

button, .button {
	background-color: var(--background-secondary);
	color: var(--foreground);
	border: 0.5px solid var(--background-tertiary);
	border-radius: var(--round-full);
	padding-inline: 1rem;
	padding-block: 0.7rem;
	cursor: pointer;
	margin-top: 1rem;
	margin-right: 0.5rem;
	display: block;
	text-align: center;
}

button.prominent, .button.prominent {
	border-color: var(--accent-300);
	background-color: var(--accent-400);
	color: var(--background-primary);
	font-weight: 600;
}

hr {
	border: none;
	background-color: var(--background-tertiary);
	height: 1px;
	margin-block: 0;
	margin-top: 1rem;
}

.card {
	border-radius: var(--round-medium);
	padding-inline: 1rem;
	padding-bottom: 1rem;
	background-color: var(--background-secondary);
	border: 1px solid var(--background-tertiary);
	margin-top: 0rem;
	transition: background-color .1s, border-color .1s;
}

.card hr {
	margin-inline: -1rem;
}

a.card:hover {
	background-color: var(--background-tertiary);
	border-color: var(--background-quaternary);
}

a.card hr {

	transition: background-color .1s;
}

a.card:hover hr {
	background-color: var(--background-quaternary);
}

::selection {
	background-color: var(--accent-400);
	color: var(--background-primary);
}

p, b {
	margin-bottom: 0;
	margin-top: 1rem;
	font-size: 14px;
}

h1 {
	margin-block: 1rem 0;
	font-size: 24px;
}

h2 {
	margin-block: 1.75rem 1rem;
	font-weight: 600;
	font-style: italic;
	font-size: 16px;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;
}

.spacer {
	flex: 1;
}

.lastfm-card {
	display: flex;
	gap: 1rem;
	padding-top: 1rem;
	align-items: center;
}

.lastfm-info {
	display: flex;
	gap: 4.5px;
	flex-direction: column;
}

.lastfm-art {
	border-radius: var(--round-small);
}

.lastfm-title {
	margin-top: 0;
	font-weight: 600;
	font-size: 1.25rem;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	line-clamp: 1;
	max-width: 500px;
}

.lastfm-artist {
	margin-top: 0;
	display: flex;
	align-items: center;
	gap: 4px;
	text-overflow: ellipsis;
}

.lastfm-logo {
	align-self: flex-start;
}

footer {
	margin: auto;
	width: fit-content;
}
footer sub {
	font-weight: 600;
	color: var(--foreground-tertiary);
}
footer sub a {
	color: var(--foreground-tertiary) !important;
	text-decoration: underline;
}

.project-title {
	display: flex;
	align-items: center;
	padding-top: 1rem;
	gap: 0.3rem;
}
.project-title p {
	margin-top: 0;
	line-height: 0;
}

.project-title-title {
	font-weight: 500;
}

.project-lang {
	color: var(--foreground);
	font-weight: 100;
	font-size: 13px;
}

.project-dot {
	border-radius: var(--round-full);
	background: var(--color);
	width: 12px;
	height: 12px;
}

.friend {
	image-rendering: pixelated;
	margin-right: 5px;
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
				<style>{styles}</style>
			</head>
			<body>
				<main>
					{[children]}
				</main>
			</body>
		</html>
	);
}
