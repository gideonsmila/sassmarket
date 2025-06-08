import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">SaaS Investigator</h1>
      <input className="border p-2 w-full" placeholder="Search tools" />
      <div className="mt-4 space-x-4">
        <Link href="/tools?category=DevOps" className="text-blue-600">DevOps</Link>
        <Link href="/tools?category=HR" className="text-blue-600">HR</Link>
        <Link href="/tools?category=Marketing" className="text-blue-600">Marketing</Link>
        <Link href="/tools?category=Finance" className="text-blue-600">Finance</Link>
        <Link href="/tools?category=Security" className="text-blue-600">Security</Link>
      </div>
    </main>
  );
}
