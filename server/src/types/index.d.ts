export type UserRole = 'profesor' | 'alumno';

export interface ApiResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}
