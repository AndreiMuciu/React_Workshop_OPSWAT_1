export default function ProjectCard({ title, description, tech = [], link }) {
  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
          {description}
        </p>
        {tech.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-2">
            {tech.map(t => (
              <li key={t} className="text-xs px-2 py-1 bg-brand-50 dark:bg-brand-700/30 text-brand-700 dark:text-brand-300 rounded-full border border-brand-100 dark:border-brand-700">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
        >
          View project →
        </a>
      )}
    </div>
  );
}
