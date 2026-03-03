import { Friend } from "../types.ts";

export default function ({ friends }: { friends: Friend[] }) {
	return (
		<>
			<h2>friends</h2>
			<div class="friends">
				{friends.map((friend) => {
					if (typeof friend !== "string") {
						return (
							<a
								href={friend.href}
								title={friend.title}
								class="friend"
								target="_blank"
							>
								<img
									src={friend.image}
									width={88}
									height={31}
									alt={`${friend.title}'s 88x31`}
								/>
							</a>
						);
					} else {
						return (
							<iframe
								height="31"
								src="https://kyu.re/button.min.html"
								style="border:none"
								width="88"
								class="friend"
							>
							</iframe>
						);
					}
				})}
			</div>
		</>
	);
}
