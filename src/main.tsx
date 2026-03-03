import { createRouter, logger, staticFiles } from "@july/snarl";
import { LastFM } from "./types.ts";
import MainLayout from "./layouts/MainLayout.tsx";
import Projects from "./components/Projects.tsx";
import NowPlaying from "./components/NowPlaying.tsx";
import Links from "./components/Links.tsx";
import Footer from "./components/Footer.tsx";
import Friends from "./components/Friends.tsx";
import { FRIENDS, LINKS, MISC_PROJECTS, PROJECTS } from "./constants.ts";

const getTrack = async () => {
	const params = new URLSearchParams({
		"method": "user.getrecenttracks",
		"user": "ohmaigotto",
		"format": "json",
		"api_key": Deno.env.get("LASTFM_TOKEN")!,
		"limit": "1",
	});
	const track =
		((await (await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`))
			.json()) as LastFM.RecentTracksResponse).recenttracks.track[0];
	return track;
};

const router = createRouter();
router.use(
	logger(),
	staticFiles("./static", { immutable: true, maxAge: 86400 }),
);
router.get("/", async (ctx) => {
	const track = await getTrack();
	return ctx.html(
		"<!DOCTYPE html>" + (
			<MainLayout>
				<h1>/peɪd͡ʒ/</h1>
				<p>I occasionally write half-assed software.</p>
				<NowPlaying track={track} />
				<Projects projects={PROJECTS} />
				<Projects
					title="things i've worked on"
					projects={MISC_PROJECTS}
				/>
				<Friends friends={FRIENDS} />
				<Links links={LINKS} />
				<Footer />
			</MainLayout>
		),
	);
});
router.get("/.well-known/matrix/client", (ctx) => {
	return ctx.json({
		"m.homeserver": {
			base_url: "https://tuwunel.maize.moe",
		},
	}, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
});
router.get("/.well-known/matrix/server", (ctx) => {
	return ctx.json({
		"m.server": "tuwunel.maize.moe:443",
	}, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
});

Deno.serve(router.fetch);
