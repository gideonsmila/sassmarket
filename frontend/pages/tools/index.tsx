import Link from 'next/link';
import type { Tool } from '../../data/tools';
import { tools } from '../../data/tools';
import { Card } from 'magicui';

export default function Tools() {

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(tool => (
          <Card key={tool.id} className="p-4 border rounded">
            <h2 className="font-semibold mb-1">{tool.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{tool.description}</p>
            <p className="text-sm mb-1">Category: {tool.category}</p>
            <p className="text-sm mb-1">Open Source: {tool.openSource ? 'Yes' : 'No'}</p>
            <Link href={tool.link} className="text-blue-600" target="_blank">
              Visit
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
