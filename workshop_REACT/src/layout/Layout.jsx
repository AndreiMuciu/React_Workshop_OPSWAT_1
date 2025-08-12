import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <footer className="mt-auto text-center py-6 text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Mucioniu Constantin-Andrei. All rights reserved.
      </footer>
    </div>
  );
}
