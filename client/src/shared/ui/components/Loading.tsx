export function Loading({ label = 'Cargando' }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex items-center gap-sm">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <span className="text-sm text-foreground/80">{label}...</span>
    </div>
  );
}
