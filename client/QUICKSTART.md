# 🚀 Guía de Inicio Rápido - AlenjandrIA

**Tu Biblioteca de Conocimiento Infinito**

## Instalación y Ejecución

```bash
# 1. Navegar a la carpeta del cliente
cd client

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

## 🎯 Primeros Pasos

### 1. Explorar el Sitio Público

Inicia en la página principal (`/`) y navega por las diferentes secciones públicas:

- **Inicio** (`/`) - Hero y características
- **Clases** (`/clases`) - Catálogo de clases
- **Peticiones** (`/peticiones`) - Peticiones de alumnos
- **FAQ** (`/preguntas-frecuentes`) - Preguntas frecuentes
- **Contacto** (`/contacto`) - Formulario de contacto

### 2. Usar las Herramientas de Desarrollo

Visita `/dev-tools` para:

- **Cambiar de rol** fácilmente con un clic
- **Ver todas las rutas** disponibles
- **Buscar rutas** por nombre o área
- **Ver estadísticas** de la aplicación

### 3. Explorar los Dashboards

#### Como Alumno
```
URL: /alumno
Características:
- Dashboard con widgets de progreso
- Gestión de clases matriculadas
- Crear y gestionar peticiones
- Historial de compras
- Sistema de mensajería
- Notificaciones
```

#### Como Profesor
```
URL: /profesor
Características:
- Dashboard con métricas de ingresos
- Gestión de clases publicadas
- Agenda y calendario
- Responder peticiones de alumnos
- Calificar tareas
- Visualizar ingresos e informes
```

#### Como Admin
```
URL: /admin
Características:
- Panel de control general
- Gestión de usuarios
- Administración de clases
- Herramientas de moderación
- Gestión financiera
```

### 4. Probar el Flujo de Compra

1. Ir a `/clases`
2. Seleccionar una clase
3. Agregar al carrito (`/carrito`)
4. Proceder al checkout (`/comprar`)
5. Completar los 3 pasos
6. Ver confirmación (`/comprar/exito/:id`)

## 📁 Estructura del Proyecto

```
client/src/
├── app/
│   ├── App.tsx                 # Componente raíz
│   ├── providers.tsx           # Providers globales
│   └── routes/
│       └── index.tsx           # Definición de rutas
├── pages/
│   ├── public/                 # Páginas públicas (11)
│   ├── auth/                   # Autenticación (2)
│   ├── alumno/                 # Dashboard alumno (9)
│   ├── profesor/               # Dashboard profesor (9)
│   ├── admin/                  # Panel admin (7)
│   ├── checkout/               # Proceso de compra (3)
│   ├── errors/                 # Páginas de error (3)
│   └── dev/                    # Herramientas dev (1)
├── shared/
│   └── ui/
│       ├── layouts/
│       │   ├── PublicLayout.tsx
│       │   └── DashboardLayout.tsx
│       ├── components/         # Componentes compartidos
│       └── primitives/         # Componentes base
└── store/                      # Estado global (Zustand)
```

## 🎨 Personalización

### Cambiar Colores por Rol

Edita `src/shared/ui/layouts/DashboardLayout.tsx`:

```typescript
const roleConfig = {
  alumno: {
    color: 'emerald',      // Verde
    bgClass: 'bg-emerald-500',
    // ...
  },
  profesor: {
    color: 'amber',        // Ámbar/Naranja
    bgClass: 'bg-amber-500',
    // ...
  },
  admin: {
    color: 'violet',       // Violeta/Púrpura
    bgClass: 'bg-violet-500',
    // ...
  },
};
```

### Agregar una Nueva Ruta

1. **Crear la página**:
```typescript
// src/pages/nueva-area/NuevaPagina.tsx
export function NuevaPagina() {
  return <div>Mi nueva página</div>;
}
```

2. **Agregar la ruta**:
```typescript
// src/app/routes/index.tsx
const NuevaPagina = lazy(() => import('../../pages/nueva-area/NuevaPagina')...);

// En el array de routes:
{
  path: '/nueva-pagina',
  element: publicRoute(NuevaPagina, 'Cargando...'),
}
```

3. **Agregar al menú** (si aplica):
```typescript
// En el layout correspondiente
const navItems = [
  // ...
  { label: 'Nueva Página', path: '/nueva-pagina', icon: '🆕' },
];
```

## 🔍 Debugging

### Ver logs de navegación
Abre la consola del navegador para ver:
```
📍 Ruta actual: /alumno/clases
```

### Inspeccionar rutas
1. Ir a `/dev-tools`
2. Buscar la ruta específica
3. Ver detalles y área

### Componentes React DevTools
Instala React DevTools para inspeccionar el árbol de componentes.

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `PascalCase.tsx`
- Páginas: `NombrePage.tsx`
- Layouts: `NombreLayout.tsx`
- Utilidades: `camelCase.ts`

### Imports
Usa los alias configurados:
```typescript
import { Component } from '@shared/ui/components/Component';
import { useSomething } from '@shared/hooks/useSomething';
import { AlumnoPage } from '@pages/alumno/AlumnoPage';
```

### Estilos
Usa Tailwind CSS:
```typescript
<div className="flex items-center gap-md p-md bg-primary text-primary-foreground rounded-lg">
  Contenido
</div>
```

## 🐛 Problemas Comunes

### Error: "Cannot find module"
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Puerto 5173 ocupado
```bash
# Cambiar el puerto en vite.config.ts
server: {
  port: 3000  // O el puerto que prefieras
}
```

### Rutas no funcionan
1. Verifica que el servidor esté corriendo
2. Limpia caché del navegador
3. Verifica que la ruta exista en `routes/index.tsx`

## 📚 Recursos Adicionales

- **Navegación**: `client/NAVIGATION.md`
- **Paginación**: `client/PAGINATION.md`
- **README**: `README.md`
- **Changelog**: `CHANGELOG.md`

## 🎯 Próximos Pasos Sugeridos

1. **Familiarízate** con la estructura navegando por todas las áreas
2. **Explora** las herramientas de desarrollo en `/dev-tools`
3. **Revisa** el código de las páginas para entender los patrones
4. **Personaliza** los colores y textos según tus necesidades
5. **Agrega** nuevas funcionalidades siguiendo los patrones existentes

## 💡 Tips

- Usa `/dev-tools` frecuentemente para navegar entre roles
- Todos los formularios son mock (no guardan datos reales)
- Los logs en consola ayudan a entender el flujo
- Las páginas están diseñadas para ser auto-explicativas
- El código está comentado para facilitar la comprensión

## 🤝 Contribuir

Para agregar nuevas funcionalidades:
1. Crea una nueva rama
2. Implementa siguiendo los patrones existentes
3. Documenta los cambios en CHANGELOG.md
4. Actualiza esta guía si es necesario

---

**¿Preguntas?** Revisa la documentación en `client/NAVIGATION.md` o explora el código fuente.
