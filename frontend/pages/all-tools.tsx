import Link from 'next/link';
import { Card, Input } from 'magicui';
import type { Tool } from '../data/tools';
import { tools } from '../data/tools';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

export default function AllTools() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [openSource, setOpenSource] = useState('All');

  useEffect(() => {
    if (router.query.category) {
      setCategory(router.query.category as string);
    }
    if (router.query.search) {
      setSearch(router.query.search as string);
    }
    if (router.query.openSource) {
      setOpenSource(router.query.openSource as string);
    }
  }, [router.query]);

  const categories = useMemo(() => Array.from(new Set(tools.map(t => t.category))), []);

  const filteredTools = tools.filter(tool => {
    if (search && !tool.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (category !== 'All' && tool.category !== category) {
      return false;
    }
    if (openSource === 'true' && !tool.openSource) {
      return false;
    }
    if (openSource === 'false' && tool.openSource) {
      return false;
    }
    return true;
  });

  return (
    <main className="p-8 h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">All Tools</h1>

      <div className="mb-4 flex flex-col sm:flex-row sm:items-end gap-4">
        <Input
          placeholder="Search by name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-1/3"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Categories</option>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={openSource}
          onChange={e => setOpenSource(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="true">Open Source</option>
          <option value="false">Proprietary</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map(tool => (
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
        {filteredTools.length === 0 && <p>No tools found.</p>}
      </div>
    </main>
  );
}
