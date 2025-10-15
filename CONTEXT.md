# Contexto del producto

## Visión y problema
Estudiantes busca democratizar el acceso a clases particulares conectando alumnos con profesores calificados de manera ágil. Actualmente los alumnos enfrentan dificultad para comparar ofertas, coordinar horarios y validar reputación docente. La plataforma resuelve esto con un catálogo curado, peticiones personalizadas y mensajería estructurada.

## Alcance inicial
- **Fase 1 (Frontend)**: experiencia SPA con navegación por tabs (`Explorar`, `Mis Clases`, `Publicar`, `Perfil`), componentes responsivos y accesibles, mocks de datos y formularios validados con Zod.
- **Fase 2 (Backend)**: esqueleto Express listo para exponer endpoints públicos/privados, comenzando con `GET /health`.

## Personas
- **Alumna Camila (19 años, universitaria)**: necesita apoyo puntual para materias difíciles, valora disponibilidad rápida y comparaciones claras.
- **Profesor Javier (35 años, profesional independiente)**: busca nuevos alumnos, quiere destacar su experiencia y gestionar reservas sin fricción.

## Flujos clave
1. **Explorar clases**: Camila filtra clases por tema/modalidad, consulta fichas y reserva.
2. **Mis clases**: Camila revisa próximas sesiones, recibe recordatorios y evalúa profesores.
3. **Publicar petición**: Camila describe su necesidad y recibe propuestas proactivas.
4. **Perfil**: Javier/Camila ajustan información personal, preferencias y visibilidad.

## KPIs iniciales
- Tasa de conversión búsqueda → reserva.
- Tiempo medio de respuesta a una petición publicada.
- Número de reservas recurrentes por alumno.
- Porcentaje de profesores con calificación ≥ 4.5.

## Supuestos y riesgos
- **Supuestos**: profesores aportan disponibilidad verificada; alumnos tienen medios de pago digitales; la plataforma ofrece soporte en horario extendido.
- **Riesgos**: baja adopción de profesores al inicio, necesidad de verificación KYC, cumplimiento normativo local, escalamiento de soporte.

## Notas de diseño y evolución
- Los tokens de diseño permiten incorporar futuras paletas (corporativa, instituciones) sin reescribir componentes.
- El sistema de tabs actúa como base para menús más complejos (sidebar o breadcrumbs) con la misma lógica accesible.
- El backend crecerá con módulos de autenticación, catálogo, reservas y pagos; la API seguirá contratos tipados en `server/src/types`.
