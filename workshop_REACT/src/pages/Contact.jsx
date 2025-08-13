import { useState } from 'react';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/AndreiMuciu',
    description: 'See my projects on GitHub.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path fillRule="evenodd" d="M12 .5C5.373.5 0 5.872 0 12.518c0 5.302 3.438 9.799 8.207 11.387.6.111.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.738-4.042-1.61-4.042-1.61-.546-1.401-1.333-1.775-1.333-1.775-1.09-.757.083-.742.083-.742 1.205.086 1.84 1.251 1.84 1.251 1.07 1.852 2.807 1.318 3.492 1.008.108-.791.418-1.318.762-1.622-2.665-.309-5.466-1.367-5.466-6.081 0-1.344.465-2.444 1.235-3.302-.124-.308-.535-1.554.117-3.241 0 0 1.008-.33 3.301 1.261a11.33 11.33 0 0 1 3.005-.41c1.02.005 2.047.139 3.005.41 2.291-1.591 3.297-1.261 3.297-1.261.654 1.687.243 2.933.12 3.241.77.858 1.233 1.958 1.233 3.302 0 4.725-2.807 5.768-5.479 6.071.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.289 0 .32.19.694.8.576C20.565 22.313 24 17.818 24 12.518 24 5.872 18.627.5 12 .5Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://ro.linkedin.com/in/andrei-constantin-mucioniu-6553a726a',
    description: 'Connect with me professionally on LinkedIn.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.371 4.268 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.116 20.452H3.558V9h3.558v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.272V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    )
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulare trimitere
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  }

  const disabled = !form.name || !form.email || !form.message;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 w-full">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nume</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Ex: Andrei"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mesaj</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full resize-y rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Write your message here..."
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={disabled}
            className="inline-flex items-center justify-center rounded-md bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-500 text-white px-5 py-2 text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 dark:focus:ring-offset-gray-900"
          >
            Send
          </button>
          {submitted && <span className="text-sm text-green-600 dark:text-green-400">Message sent! (simulated)</span>}
        </div>
      </form>
        </div>
        <aside className="space-y-6">
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Social</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">You can also find me on these platforms. Click the card to open the link.</p>
            <ul className="space-y-4">
              {socials.map(s => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500 hover:bg-white dark:hover:bg-gray-700 transition shadow-sm"
                  >
                    <span className="text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                      {s.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium text-gray-900 dark:text-gray-100 leading-tight">{s.name}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{s.description}</span>
                    </span>
                    <span className="text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
