// Simplu utilitar pentru concatenarea claselor (evitam dependinta externa)
function cn(...parts) {
  return parts.filter(Boolean).join(' ');
}

/**
 * Un buton de prezentare (demo) cu stiluri Tailwind si 3 variante.
 * Nu are functionalitate reala implicita; foloseste prop-ul onClick daca ai nevoie.
 */
export default function FancyButton({
  children = 'Click me',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  ...rest
}) {
  const isDisabled = disabled || loading;
  const base = 'inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400 focus:ring-brand-500 dark:focus:ring-offset-gray-900',
    outline: 'border border-brand-600 text-brand-600 hover:bg-brand-50 dark:border-brand-400 dark:text-brand-300 dark:hover:bg-brand-900/30 focus:ring-brand-500 dark:focus:ring-offset-gray-900',
    ghost: 'text-brand-600 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-900/30 focus:ring-brand-500 dark:focus:ring-offset-gray-900'
  };
  const sizes = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5'
  };

  return (
    <button
      type="button"
      aria-disabled={isDisabled}
      disabled={isDisabled}
  className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
      )}
      {children}
    </button>
  );
}
