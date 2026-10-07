import { useEffect, useState } from "react";

type Enquiry = {
  id: number; firstName: string; lastName: string; email: string;
  phone: string; service: string; postcode: string; message: string | null;
  createdAt: string;
};

export default function Admin() {
  const [username, setUsername] = useState<string | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    const me = await fetch("/api/auth/me", { credentials: "include" });
    if (!me.ok) { setUsername(null); setLoading(false); return; }
    const person = await me.json();
    setUsername(person.username);
    const response = await fetch("/api/enquiries", { credentials: "include" });
    if (response.ok) setEnquiries(await response.json());
    else setError("Could not load enquiries.");
    setLoading(false);
  }

  useEffect(() => { load().catch(() => { setError("Could not connect."); setLoading(false); }); }, []);

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST", credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
    });
    if (!response.ok) { setError(response.status === 503 ? "Login is not configured yet." : "Sign in failed."); return; }
    setLoading(true);
    await load();
  }

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUsername(null);
    setEnquiries([]);
  }

  return <main className="min-h-screen bg-[#f8f7f5] p-6 text-[#0c1222]">
    <div className="mx-auto max-w-3xl">
      <a href="/" className="underline">Back to website</a>
      <h1 className="my-8 text-3xl font-bold">Enquiries</h1>
      {error && <p role="alert" className="mb-4 text-red-700">{error}</p>}
      {loading ? <p>Loading…</p> : username ? <>
        <div className="mb-6 flex items-center justify-between"><p>Signed in as {username}</p>
          <button onClick={signOut} className="bg-[#0c1222] px-4 py-2 text-white">Sign out</button></div>
        {enquiries.length === 0 ? <p>No enquiries yet.</p> :
          <div className="space-y-4">{enquiries.map(item =>
            <article key={item.id} className="border bg-white p-5">
              <h2 className="font-bold">{item.firstName} {item.lastName}</h2>
              <p>{new Date(item.createdAt).toLocaleString("en-GB")} · {item.service} · {item.postcode}</p>
              <p><a className="underline" href={`mailto:${item.email}`}>{item.email}</a> · <a className="underline" href={`tel:${item.phone}`}>{item.phone}</a></p>
              {item.message && <p className="mt-3 whitespace-pre-wrap">{item.message}</p>}
            </article>)}</div>}
      </> : <form onSubmit={signIn} className="max-w-sm space-y-4 border bg-white p-6">
        <label className="block">Username<input name="username" required autoComplete="username" className="mt-1 block w-full border p-2" /></label>
        <label className="block">Password<input name="password" type="password" required autoComplete="current-password" className="mt-1 block w-full border p-2" /></label>
        <button className="bg-[#0c1222] px-4 py-2 text-white">Sign in</button>
      </form>}
    </div>
  </main>;
}
