import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { Tool } from '../../data/tools';
import { tools } from '../../data/tools';

interface Review {
  id: number;
  rating: number;
  comment: string;
}

interface ToolDetailData extends Tool {
  reviews: Review[];
}

export default function ToolDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [tool, setTool] = useState<ToolDetailData | null>(null);

  useEffect(() => {
    if (id) {
      const t = tools.find(t => t.id === Number(id));
      if (t) {
        setTool({ ...t, reviews: [] });
      }
    }
  }, [id]);

  if (!tool) return <p>Loading...</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">{tool.name}</h1>
      <p className="mb-4">{tool.description}</p>
      <h2 className="font-semibold mb-2">Reviews</h2>
      <ul>
        {tool.reviews.map(r => (
          <li key={r.id} className="mb-2 border-b pb-2">
            <p>Rating: {r.rating} / 5</p>
            <p>{r.comment}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
