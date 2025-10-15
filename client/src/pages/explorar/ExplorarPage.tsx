import { SearchBar } from '@features/search/components/SearchBar';
import { useSearch } from '@features/search/hooks/useSearch';
import { ClassCard } from '@entities/clase/components/ClassCard';
import { Grid } from '@shared/ui/primitives/Grid';
import { PageContainer } from '@shared/ui/components/PageContainer';
import { EmptyState } from '@shared/ui/components/EmptyState';

export function ExplorarPage() {
  const { filters, setFilters, results } = useSearch();

  return (
    <PageContainer>
      <header className="space-y-sm">
        <h1 className="text-2xl font-semibold">Explorar clases</h1>
        <p className="text-foreground/70">Descubre profesores verificados y clases a tu medida.</p>
      </header>
      <SearchBar
        query={filters.query}
        onQueryChange={(value) => setFilters((prev) => ({ ...prev, query: value }))}
      />
      {results.length > 0 ? (
        <Grid gap="lg">
          {results.map((clase) => (
            <ClassCard key={clase.id} clase={clase} />
          ))}
        </Grid>
      ) : (
        <EmptyState
          title="No encontramos resultados"
          description="Ajusta los filtros o intenta con otra búsqueda."
        />
      )}
    </PageContainer>
  );
}
