export type MockUser = {
  id: string;
  name: string;
  role: 'profesor' | 'alumno';
  avatarUrl?: string;
};

export const users: MockUser[] = [
  { id: 'u1', name: 'Ana Castillo', role: 'alumno' },
  { id: 'u2', name: 'Miguel Soto', role: 'profesor' }
];
