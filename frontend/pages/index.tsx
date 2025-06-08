import Link from 'next/link';
import { Input, Button } from 'magicui';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">SaaS Investigator</h1>
      <Input placeholder="Search tools" className="mb-4 w-full" />
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
