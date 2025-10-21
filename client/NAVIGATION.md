# 🗺️ Mapa de Navegación - AlenjandrIA

**Tu Biblioteca de Conocimiento Infinito**

Este documento describe la estructura completa de navegación de la aplicación.

## 📊 Diagrama Mermaid

```mermaid
%%{init:{"theme":"base","themeVariables":{"fontFamily":"Inter, ui-sans-serif","primaryColor":"#4379F2","lineColor":"#94a3b8","clusterBkg":"#f8fafc","tertiaryColor":"#f1f5f9"}}}%%
flowchart TD
  subgraph PUBLICO["Público"]
    INICIO["Inicio\n/"]
    CLASES["Clases\n/clases"]
    DETALLE_CLASE["Detalle de Clase\n/clases/:id"]
    PETICIONES["Peticiones\n/peticiones"]
    ACERCA_DE["Acerca de\n/acerca-de"]
    PREGUNTAS_FRECUENTES["Preguntas Frecuentes\n/preguntas-frecuentes"]
    CONTACTO["Contacto\n/contacto"]
    TERMINOS["Términos\n/terminos"]
    PRIVACIDAD["Privacidad\n/privacidad"]
    REGISTRO["Registro\n/registro"]
    INICIO_SESION["Iniciar Sesión\n/iniciar-sesion"]
  end

  subgraph ALUMNO["Alumno (Autenticado)"]
    DASH_ALUMNO["Inicio\n/alumno"]
    MIS_CLASES["Mis Clases\n/alumno/clases"]
    MIS_PETICIONES["Mis Peticiones\n/alumno/peticiones"]
    NUEVA_PETICION["Nueva Petición\n/alumno/peticiones/nueva"]
    MIS_COMPRAS["Mis Compras\n/alumno/compras"]
    FACTURAS["Facturas\n/alumno/facturas"]
    MENSAJES["Mensajes\n/alumno/mensajes"]
    NOTIFICACIONES["Notificaciones\n/alumno/notificaciones"]
    PERFIL_ALUMNO["Mi Perfil\n/alumno/perfil"]
  end

  subgraph PROFESOR["Profesor (Autenticado)"]
    DASH_PROFESOR["Inicio\n/profesor"]
    CLASES_PROFESOR["Mis Clases\n/profesor/clases"]
    NUEVA_CLASE["Nueva Clase\n/profesor/clases/nueva"]
    AGENDA["Agenda\n/profesor/agenda"]
    PETICIONES_ALUMNOS["Peticiones\n/profesor/peticiones"]
    TAREAS["Tareas\n/profesor/tareas"]
    INGRESOS["Ingresos\n/profesor/ingresos"]
    INFORMES["Informes\n/profesor/informes"]
    PERFIL_PROFESOR["Perfil\n/profesor/perfil"]
  end

  subgraph ADMIN["Administrador"]
    DASH_ADMIN["Panel\n/admin"]
    USUARIOS["Usuarios\n/admin/usuarios"]
    CLASES_ADMIN["Clases\n/admin/clases"]
    MODERACION["Moderación\n/admin/moderacion"]
    REPORTES["Reportes\n/admin/reportes"]
    FINANZAS["Finanzas\n/admin/finanzas"]
    AJUSTES["Ajustes\n/admin/ajustes"]
  end

  subgraph CHECKOUT["Proceso de Compra"]
    CARRITO["Carrito\n/carrito"]
    COMPRAR["Comprar\n/comprar"]
    EXITO["¡Éxito!\n/comprar/exito/:id"]
  end

  subgraph ERRORES["Errores"]
    E403["403 Prohibido"]
    E404["404 No encontrado"]
    E500["500 Error del servidor"]
  end

  subgraph DEV["Desarrollo"]
    DEV_TOOLS["Dev Tools\n/dev-tools"]
  end

  %% Flujos principales
  INICIO --> CLASES --> DETALLE_CLASE
  DETALLE_CLASE --> CARRITO --> COMPRAR --> EXITO
  INICIO --> REGISTRO --> DASH_ALUMNO
  INICIO --> INICIO_SESION --> DASH_ALUMNO
  
  %% Estilos
  classDef publico fill:#F5F8FF,stroke:#4379F2,color:#0B1F5C;
  classDef alumno fill:#ECFDF5,stroke:#10B981,color:#064E3B;
  classDef profesor fill:#FFFBEB,stroke:#F59E0B,color:#92400E;
  classDef admin fill:#F5F3FF,stroke:#8B5CF6,color:#5B21B6;
  classDef checkout fill:#ECFDF5,stroke:#10B981,color:#065F46;
  classDef error fill:#FEE2E2,stroke:#DC2626,color:#991B1B;
  classDef dev fill:#FFFBEB,stroke:#F59E0B,color:#92400E;
  
  class INICIO,CLASES,DETALLE_CLASE,PETICIONES,ACERCA_DE,PREGUNTAS_FRECUENTES,CONTACTO,TERMINOS,PRIVACIDAD,REGISTRO,INICIO_SESION publico;
  class DASH_ALUMNO,MIS_CLASES,MIS_PETICIONES,NUEVA_PETICION,MIS_COMPRAS,FACTURAS,MENSAJES,NOTIFICACIONES,PERFIL_ALUMNO alumno;
  class DASH_PROFESOR,CLASES_PROFESOR,NUEVA_CLASE,AGENDA,PETICIONES_ALUMNOS,TAREAS,INGRESOS,INFORMES,PERFIL_PROFESOR profesor;
  class DASH_ADMIN,USUARIOS,CLASES_ADMIN,MODERACION,REPORTES,FINANZAS,AJUSTES admin;
  class CARRITO,COMPRAR,EXITO checkout;
  class E403,E404,E500 error;
  class DEV_TOOLS dev;
```

## 📁 Estructura de Rutas

### 🌐 Área Pública
```
/                           # Inicio
/clases                     # Explorar clases
/clases/:id                 # Detalle de clase
/peticiones                 # Peticiones públicas
/acerca-de                  # Acerca de
/preguntas-frecuentes       # FAQ
/contacto                   # Contacto
/terminos                   # Términos y condiciones
/privacidad                 # Política de privacidad
/registro                   # Crear cuenta
/iniciar-sesion             # Iniciar sesión
```

### 🎓 Área Alumno
```
/alumno                     # Dashboard
/alumno/clases              # Mis clases
/alumno/clases/:id          # Detalle de clase
/alumno/peticiones          # Mis peticiones
/alumno/peticiones/nueva    # Nueva petición
/alumno/peticiones/:id      # Detalle de petición
/alumno/compras             # Mis compras
/alumno/compras/:id         # Detalle de compra
/alumno/facturas            # Facturas
/alumno/mensajes            # Mensajes
/alumno/chat/:id?           # Chat
/alumno/notificaciones      # Notificaciones
/alumno/perfil              # Mi perfil
```

### 👨‍🏫 Área Profesor
```
/profesor                       # Dashboard
/profesor/clases                # Mis clases
/profesor/clases/nueva          # Nueva clase
/profesor/clases/:id/editar     # Editar clase
/profesor/clases/:id/estadisticas # Estadísticas
/profesor/agenda                # Agenda
/profesor/sesiones              # Sesiones
/profesor/sesiones/:id          # Detalle de sesión
/profesor/peticiones            # Peticiones de alumnos
/profesor/peticiones/:id        # Responder petición
/profesor/tareas                # Tareas pendientes
/profesor/tareas/:id/calificar  # Calificar tarea
/profesor/informes              # Informes
/profesor/ingresos              # Ingresos
/profesor/retiros               # Retiros
/profesor/perfil                # Perfil
```

### ⚙️ Área Admin
```
/admin                      # Dashboard
/admin/usuarios             # Gestión de usuarios
/admin/usuarios/:id         # Detalle de usuario
/admin/clases               # Gestión de clases
/admin/moderacion           # Herramientas de moderación
/admin/reportes             # Reportes del sistema
/admin/finanzas             # Gestión financiera
/admin/ajustes              # Configuración
```

### 🛒 Checkout
```
/carrito                    # Carrito de compras
/comprar                    # Proceso de compra
/comprar/exito/:orderId     # Compra exitosa
```

### ❌ Páginas de Error
```
/403                        # Acceso prohibido
/404                        # Página no encontrada
/500                        # Error del servidor
```

### 🔧 Desarrollo
```
/dev-tools                  # Herramientas de desarrollo
```

## 🎨 Layouts

### PublicLayout
- **Ubicación**: `src/shared/ui/layouts/PublicLayout.tsx`
- **Usado en**: Todas las páginas públicas
- **Características**:
  - Header con navegación
  - Footer completo
  - Links a login/registro

### DashboardLayout
- **Ubicación**: `src/shared/ui/layouts/DashboardLayout.tsx`
- **Usado en**: Dashboards de Alumno, Profesor y Admin
- **Características**:
  - Sidebar con navegación contextual
  - Header con información de usuario
  - Responsive con menú móvil
  - Colores distintivos por rol:
    - Alumno: Verde (emerald)
    - Profesor: Ámbar (amber)
    - Admin: Violeta (violet)

## 🔐 Sistema de Permisos

| Ruta | Público | Alumno | Profesor | Admin |
|------|---------|---------|----------|-------|
| `/` | ✅ | ✅ | ✅ | ✅ |
| `/clases` | ✅ | ✅ | ✅ | ✅ |
| `/registro` | ✅ | ❌ | ❌ | ❌ |
| `/alumno/*` | ❌ | ✅ | ❌ | 👁️ |
| `/profesor/*` | ❌ | ❌ | ✅ | 👁️ |
| `/admin/*` | ❌ | ❌ | ❌ | ✅ |
| `/carrito` | ❌ | ✅ | ❌ | ❌ |

**Leyenda**:
- ✅ Acceso completo
- ❌ Acceso denegado
- 👁️ Solo lectura (Admin puede ver dashboards de otros roles)

## 📱 Navegación por Rol

### Alumno
```
🏠 Inicio → Dashboard con widgets
📚 Mis Clases → Clases matriculadas
📢 Peticiones → Solicitudes de clases
🛍️ Compras → Historial de compras
💬 Mensajes → Chat con profesores
🔔 Notificaciones → Centro de notificaciones
👤 Perfil → Información personal
```

### Profesor
```
🏠 Inicio → Dashboard con métricas
📚 Mis Clases → Clases publicadas
📅 Agenda → Calendario de sesiones
📢 Peticiones → Oportunidades de enseñanza
📝 Tareas → Calificaciones pendientes
💰 Ingresos → Gestión de pagos
📊 Informes → Reportes de progreso
👤 Perfil → Perfil profesional
```

### Admin
```
🏠 Inicio → Panel de control
👥 Usuarios → Gestión de usuarios
📚 Clases → Administrar clases
🛡️ Moderación → Herramientas de moderación
🚨 Reportes → Sistema de reportes
💰 Finanzas → Gestión financiera
⚙️ Ajustes → Configuración del sistema
```

## 🚀 Características Técnicas

### Lazy Loading
Todas las rutas utilizan `React.lazy()` para optimizar el bundle:
```typescript
const HomePage = lazy(() => import('./pages/public/HomePage').then(m => ({ default: m.HomePage })));
```

### Suspense
Todas las rutas están envueltas en Suspense con un componente de Loading:
```typescript
<Suspense fallback={<Loading label="Cargando..." />}>
  <Component />
</Suspense>
```

### Logs de Navegación
En modo desarrollo, cada cambio de ruta se registra en consola:
```typescript
if (import.meta.env.DEV) {
  console.log('📍 Ruta actual:', window.location.pathname);
}
```

## 🛠️ Herramientas de Desarrollo

Accede a `/dev-tools` para:
- 🔄 Cambiar entre roles fácilmente
- 📋 Ver índice completo de rutas
- 🔍 Buscar rutas por área o nombre
- 📊 Ver estadísticas de rutas por área

## 📝 Notas de Implementación

1. **Todas las páginas están implementadas** con componentes funcionales
2. **Tailwind CSS** para todos los estilos
3. **Sin estado global** (por ahora, pendiente de integración con backend)
4. **Mock UI** - Todas las interacciones son simuladas
5. **Accesibilidad** - Navegación por teclado y ARIA labels

## 🔜 Próximos Pasos

- [ ] Integrar autenticación real
- [ ] Conectar con backend
- [ ] Implementar guards de ruta por rol
- [ ] Agregar breadcrumbs dinámicos
- [ ] Implementar búsqueda global
- [ ] Agregar analytics de navegación
