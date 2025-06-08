import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Tool {
  id: number;
  name: string;
  description: string;
}

export default function Tools() {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/tools')
      .then(res => res.json())
      .then(setTools)
      .catch(console.error);
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <ul>
        {tools.map(tool => (
          <li key={tool.id} className="mb-2">
            <Link href={`/tools/${tool.id}`} className="text-blue-600">
              {tool.name}
            </Link>
            <p className="text-sm text-gray-600">{tool.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
