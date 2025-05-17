import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { Route } from "./+types/roadmap";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Roadmap" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  // You could fetch roadmap data here
  return json({
    items: [
      { title: "Feature A", status: "Done" },
      { title: "Feature B", status: "In Progress" },
      { title: "Feature C", status: "Planned" },
    ]
  });
}

export default function RoadmapRoute() {
  const { items } = useLoaderData<typeof loader>();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Roadmap</h1>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="p-3 border rounded shadow-sm">
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-500">Status: {item.status}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
