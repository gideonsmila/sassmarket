import Link from 'next/link';
import { Input, Button } from 'magicui';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/all-tools?search=${encodeURIComponent(search)}`);
    } else {
      router.push('/all-tools');
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">SaaS Investigator</h1>
      <div className="mb-4 flex gap-2">
        <Input
          placeholder="Search tools"
          className="w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="mt-4 space-x-2">
        <Link href="/tools?category=DevOps">
          <Button>DevOps</Button>
        </Link>
        <Link href="/tools?category=HR">
          <Button>HR</Button>
        </Link>
        <Link href="/tools?category=Marketing">
          <Button>Marketing</Button>
        </Link>
        <Link href="/tools?category=Finance">
          <Button>Finance</Button>
        </Link>
        <Link href="/tools?category=Security">
          <Button>Security</Button>
        </Link>
        <Link href="/all-tools">
          <Button variant="outline">All Tools</Button>
        </Link>
      </div>
    </main>
  );
}
