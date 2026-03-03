import { Link } from "../types.ts";

export default function ({ links }: { links: Link[] }) {
	return (
		<>
			<h2>links</h2>
			<ul>
				{links.map((link) => (
					<li>
						<a href={link.href} target="_blank">
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
