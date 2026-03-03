import { Project } from "../types.ts";

export default function (
	{ projects, title = "projects" }: { projects: Project[]; title?: string },
) {
	const columns = 2;
	const rows = [];
	for (let i = 0; i < projects.length; i += columns) {
		rows.push(projects.slice(i, i + columns));
	}

	return (
		<>
			<h2>{title}</h2>
			<table class="projects">
				<tbody>
					{rows.map((row) => (
						<tr>
							{row.map((project) => (
								<td>
									<a class="card" href={project.href} target="_blank">
										<div class="project-title">
											<div class="project-title-left">
												<b>{project.owner}</b>/{project.title}
											</div>
											<div class="project-title-right">
												<span
													class="project-dot"
													style={`background: ${project.languageColor}`}
												>
												</span>
												<span class="project-lang">{project.language}</span>
											</div>
										</div>
										<hr />
										<p>{project.description}</p>
									</a>
								</td>
							))}
							{row.length < columns && <div class="card-spacer"></div>}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
