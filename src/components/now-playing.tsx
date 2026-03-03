import { LastFM } from "../types.ts";

export default function ({ track }: { track?: LastFM.Track }) {
	if (!track) return;
	const { name, url } = track;
	const artist = track.artist?.["#text"];
	const coverArt = (track.image?.[3] ??
		track.image?.[2] ??
		track.image?.[1] ??
		track.image?.[0])?.["#text"];
	const album = track.album?.["#text"];
	if (!name || !url || !artist || !coverArt || !album) return;
	return (
		<>
			<h2>
				{track["@attr"]?.nowplaying ? "listening to" : "last listened to"}
			</h2>
			<a class="card lastfm-card" href={url} target="_blank">
				<div class="lastfm-art-container">
					<img
						src={coverArt}
						class="lastfm-art"
						width={70}
						height={70}
					/>
				</div>
				<div class="lastfm-info">
					<p class="lastfm-title">{name}</p>
					<p class="lastfm-artist">
						<span class="icon icon-microphone"></span>
						<span>{artist}</span>
					</p>
					<p class="lastfm-artist">
						<span class="icon icon-album"></span>
						<span>{album}</span>
					</p>
				</div>
			</a>
		</>
	);
}
