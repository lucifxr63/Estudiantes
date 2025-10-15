import { useMemo, useState } from 'react';
import { SearchFilters } from '../types';
import { classes } from '@mocks/classes';

export function useSearch() {
  const [filters, setFilters] = useState<SearchFilters>({ query: '' });

  const results = useMemo(() => {
    if (!filters.query) return classes;
    return classes.filter((clase) =>
      clase.title.toLowerCase().includes(filters.query.toLowerCase()) ||
      clase.description.toLowerCase().includes(filters.query.toLowerCase())
    );
  }, [filters.query]);

  return {
    filters,
    setFilters,
    results
  };
}
