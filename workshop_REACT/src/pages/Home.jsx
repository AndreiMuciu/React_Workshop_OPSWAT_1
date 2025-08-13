import FancyButton from '../components/FancyButton';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section className="prose dark:prose-invert max-w-none">
        <h2>Hello! 👋</h2>
        <p>
          This is a simple React app demonstrating various components and features. 
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Use the button above to toggle the theme.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Demo component: FancyButton</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <FancyButton>Primary</FancyButton>
          <FancyButton variant="outline">Outline</FancyButton>
          <FancyButton variant="ghost">Ghost</FancyButton>
          <FancyButton loading size="sm">Loading</FancyButton>
        </div>
      </section>
    </div>
  );
}
