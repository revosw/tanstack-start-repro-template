import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { QueryProvider } from "../QueryProvider";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		notFoundComponent(props) {
			return <div>Not found...</div>;
		},
		head: ({ loaderData }) => ({
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: "Repro template",
				},
				{
					description: "Quickly create bug reproduction projects to aid fixing",
				},
			],
		}),
		ssr: true,
		shellComponent: RootDocument,
	},
);

function RootDocument() {
	return (
		<html lang="no">
			<head>
				<HeadContent />
			</head>
			<body>
				<QueryProvider>
					<Outlet />
				</QueryProvider>
				<Scripts />
			</body>
		</html>
	);
}
