import { Friend, Link, Project } from "./types.ts";

export const LINKS: Link[] = [
	{ title: "codeberg", href: "https://codeberg.org/paige" },
	{ title: "github", href: "https://github.com/paigely" },
	{ title: "last.fm", href: "https://www.last.fm/user/ohmaigotto" },
];

export const PROJECTS: Project[] = [
	{
		owner: "paige",
		title: "Navic",
		description:
			"Navidrome client app for Android and iOS with Material 3 Expressive design",
		href: "https://github.com/paigely/Navic",
		language: "Kotlin",
		languageColor: "#6942cd",
	},
	{
		owner: "paige",
		title: "Cobu",
		description: "Very WIP iOS Forgejo client, built entirely with UIKit",
		href: "https://github.com/paigely/Cobu",
		language: "Swift",
		languageColor: "#f05138",
	},
	{
		owner: "paige",
		title: "RevertHUD",
		description: "Bring back the pre-tahoe volume HUD",
		href: "https://github.com/paigely/RevertHUD",
		language: "Swift",
		languageColor: "#f05138",
	},
	{
		owner: "paige",
		title: "Filecafe",
		description: "File manager for jailbroken iOS >=14.0",
		href: "https://github.com/paigely/Filecafe",
		language: "Swift",
		languageColor: "#f05138",
	},
];

export const MISC_PROJECTS: Project[] = [
	{
		owner: "claration",
		title: "Impactor",
		description:
			"WIP feature rich iOS/tvOS sideloading application written in Rust.",
		href: "https://github.com/claration/Impactor",
		language: "Rust",
		languageColor: "#dea584",
	},
	{
		owner: "Vendicated",
		title: "Vencord",
		description: "The cutest Discord modification",
		href: "https://github.com/Vendicated/Vencord",
		language: "TypeScript",
		languageColor: "#3178c6",
	},
];

export const FRIENDS: Friend[] = [
	{
		href: "",
		image: "/88x31.gif",
		title: "me",
	},
	{
		href: "https://osage.dev",
		image: "/badges/omar.gif",
		title: "omar",
	},
	"livia",
	{
		href: "https://khcrysalis.dev",
		image: "/badges/samara.png",
		title: "samara",
	},
	{
		href: "https://mugman.tech",
		image: "/badges/mugman.gif",
		title: "mugman",
	},
	{
		href: "https://caitlyn.moe",
		image: "/badges/caitlyn.png",
		title: "caitlyn",
	},
	{
		href: "https://hhls.xyz",
		image: "/badges/nekohaxx.png",
		title: "nekohaxx",
	},
	{
		href: "https://elissa.moe",
		image: "/badges/elissa.png",
		title: "elissa",
	},
	{
		href: "https://rushii.dev",
		image: "/badges/rushii.gif",
		title: "rushii",
	},
	{
		href: "https://github.com/acquitelol",
		image: "/badges/rosie.png",
		title: "rosie",
	},
	{
		href: "https://vendicated.dev/",
		image: "/badges/ven.gif",
		title: "vendicated",
	},
	{
		href: "https://uncutified.moe/",
		image: "/badges/recutified.gif",
		title: "recutified",
	},
	{
		href: "https://worf.win/",
		image: "/badges/worfwin.gif",
		title: "wrof",
	},
	{
		href: "https://sadan.zip",
		image: "/badges/sadan.png",
		title: "sadan",
	},
	{
		href: "https://zt64.dev",
		image: "/badges/zt.png",
		title: "zeet",
	},
	{
		href: "https://wingio.xyz/",
		image: "/badges/wing.gif",
		title: "wing",
	},
	{
		href: "https://faf4a.me/",
		image: "/badges/fafa.gif",
		title: "fafa",
	},
];
