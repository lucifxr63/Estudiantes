# 📱 App Móvil de AlenjandrIA - Documento de Conceptualización

## 🎯 Visión General

La app móvil de AlenjandrIA extiende la plataforma web para ofrecer una experiencia nativa optimizada para aprendizaje en movimiento, especialmente para clases presenciales y herramientas especializadas.

---

## 🚀 Características Clave

### **1. Modo Offline First**
```
┌─────────────────────────────────┐
│  📱 App Móvil                   │
│                                 │
│  ✓ Descarga de clases           │
│  ✓ Uso sin internet             │
│  ✓ Sincronización automática    │
│  ✓ Progreso guardado localmente │
└─────────────────────────────────┘
```

**Beneficios:**
- Ver clases de video sin conexión
- Practicar en el parque (calistenia, yoga)
- Usar en viajes
- Sincroniza cuando hay WiFi

### **2. Notificaciones Push Inteligentes**

**Para Estudiantes:**
- 🔔 "Tu clase con Juan empieza en 15 minutos"
- 📚 "Nuevo módulo disponible en React Avanzado"
- ⏰ "¡Hora de practicar! 🎸 Llevas 3 días sin tocar"
- 🏆 "¡Completaste el 50%! Sigue así"

**Para Profesores:**
- 💬 "Nueva solicitud de clase de Ana García"
- 💰 "Pago recibido: $50"
- ⭐ "Nueva reseña de 5 estrellas"
- 📊 "Reporte semanal: 12 clases, $450 ganados"

### **3. Herramientas Nativas Optimizadas**

#### **A) Cámara Integrada**
```typescript
// Grabar progreso
- Comparación lado a lado (antes/después)
- Slow motion nativo (120fps, 240fps)
- Análisis de postura con ML Kit
- Compartir con profesor directamente
```

#### **B) Sensores del Dispositivo**
```typescript
// Para clases de fitness
- Acelerómetro: Contar repeticiones
- Giroscopio: Detectar posturas
- GPS: Tracking de running/ciclismo
- Heart Rate: Monitor de frecuencia cardíaca (Apple Watch)
```

#### **C) Audio Optimizado**
```typescript
// Para clases de música
- Latencia ultra-baja (< 10ms)
- Afinador con acceso directo al micrófono
- Metrónomo con vibración háptica
- Grabación de alta calidad (48kHz)
```

### **4. Modo Presencial**

**Características especiales para clases presenciales:**

```
┌──────────────────────────────────┐
│  📍 Modo Presencial              │
│                                  │
│  • Navegación turn-by-turn       │
│  • Check-in automático (geofence)│
│  • Chat en vivo con profesor     │
│  • Compartir ubicación en tiempo │
│    real (seguro)                 │
│  • Cronómetro de clase           │
└──────────────────────────────────┘
```

**Flujo típico:**
1. Confirmas clase → Aparece en calendario
2. 1 hora antes → Notificación con navegación
3. Llegas al lugar → Check-in automático
4. Durante clase → Herramientas especializadas
5. Al terminar → Calificar y pagar

---

## 🎨 Diseño de UI Móvil

### **Navegación Principal**

```
┌────────────────────────────────────┐
│         🏠 AlenjandrIA             │
├────────────────────────────────────┤
│                                    │
│  🔍 Buscar clases...               │
│                                    │
│  📚 Mis Cursos (3)                 │
│  ┌────────────────────────────┐   │
│  │ React Avanzado       75% ▶ │   │
│  │ TypeScript           45% ▶ │   │
│  │ Guitarra Acústica    20% ▶ │   │
│  └────────────────────────────┘   │
│                                    │
│  💬 Próximas Clases                │
│  ┌────────────────────────────┐   │
│  │ Hoy 3:00 PM                │   │
│  │ Calistenia con Ana         │   │
│  │ 📍 Parque Centenario       │   │
│  └────────────────────────────┘   │
│                                    │
├────────────────────────────────────┤
│  🏠  📚  📅  💬  👤               │
└────────────────────────────────────┘
```

### **Widgets de Pantalla de Inicio** (iOS/Android)

```
┌──────────────────────┐  ┌──────────────────────┐
│ 🎸 Práctica Diaria   │  │ ⏱️ Timer HIIT        │
│                      │  │                      │
│ 🔥 5 días seguidos   │  │ ▶️ Iniciar           │
│                      │  │ 20s trabajo          │
│ Guitarra: 45min      │  │ 10s descanso         │
│ 🏆 ¡Sigue así!       │  │ 8 rondas            │
└──────────────────────┘  └──────────────────────┘
```

---

## 🛠️ Stack Tecnológico Sugerido

### **Opción 1: React Native (Recomendado)**
```
✅ Pros:
- Comparte código con web (80%)
- Mismos componentes UI
- Equipo actual de React ya sabe
- Hot reload para desarrollo rápido
- Expo para builds fáciles

❌ Contras:
- Performance nativa no perfecta
- Dependencias de terceros
```

### **Opción 2: Flutter**
```
✅ Pros:
- Performance nativa excelente
- UI hermosa out-of-the-box
- Hot reload ultra rápido
- Creciente popularidad

❌ Contras:
- Equipo debe aprender Dart
- Menos librerías especializadas
```

### **Opción 3: Native (Swift + Kotlin)**
```
✅ Pros:
- Performance perfecta
- Acceso total a APIs nativas
- UX perfecta para cada plataforma

❌ Contras:
- 2 equipos separados
- Doble trabajo
- Más costoso
```

**Recomendación: React Native con Expo**

---

## 📊 Priorización de Features

### **MVP (3-4 meses)**
1. ✅ Login/Registro
2. ✅ Ver mis cursos
3. ✅ Player de video offline
4. ✅ Notificaciones básicas
5. ✅ Herramientas básicas (metrónomo, timer)

### **V2 (2-3 meses adicionales)**
1. 🔶 Clases presenciales con navegación
2. 🔶 Check-in automático
3. 🔶 Chat en tiempo real
4. 🔶 Grabación de progreso
5. 🔶 Apple Watch / Wear OS

### **V3 (3-4 meses adicionales)**
1. 🔷 AR para análisis de postura
2. 🔷 ML para detección de ejercicios
3. 🔷 Social: compartir logros
4. 🔷 Gamificación avanzada
5. 🔷 iPad con Pencil para partituras

---

## 💰 Monetización Móvil

### **Modelo Freemium**
```
Gratuito:
- Ver clases compradas
- Herramientas básicas
- 3 descargas offline por mes

Premium ($9.99/mes):
- Descargas ilimitadas
- Todas las herramientas
- Modo sin conexión extendido
- Prioridad en soporte
```

### **In-App Purchases**
```
- Paquetes de clases: $19.99 - $99.99
- Clases individuales: $5 - $50
- Certificaciones: $15 - $40
- Storage extra biblioteca: $2.99/mes
```

---

## 🎯 KPIs a Medir

### **Engagement**
- DAU/MAU (Daily/Monthly Active Users)
- Tiempo promedio en app
- Sesiones por día
- Clases completadas vs iniciadas

### **Retención**
- D1, D7, D30 retention
- Churn rate
- Push notification opt-in rate
- Feature adoption rate

### **Revenue**
- ARPU (Average Revenue Per User)
- LTV (Lifetime Value)
- Conversion web → mobile
- IAP revenue

---

## 🚦 Plan de Lanzamiento

### **Fase 1: Beta Cerrada (1 mes)**
- 100 usuarios seleccionados
- Profesores de cada categoría
- Feedback intensivo
- Bug fixing

### **Fase 2: Beta Abierta (2 meses)**
- Soft launch en 1 país (Argentina)
- TestFlight / Google Play Beta
- Iterar según feedback
- Optimizar performance

### **Fase 3: Lanzamiento Global (3 meses)**
- App Store + Google Play
- Press kit y PR
- Marketing campaign
- Referral program

---

## 🎨 Diferenciadores Clave

### **1. Contextualidad Inteligente**
La app detecta qué estás haciendo y te ofrece las herramientas correctas:

```
🎸 Clase de Guitarra detectada
→ Ofrece: Afinador, Metrónomo, Grabadora

💪 Clase de Fitness detectada
→ Ofrece: Timer HIIT, Contador de reps, Heart rate

🧘 Clase de Yoga detectada
→ Ofrece: Timer meditación, Música relajante
```

### **2. Continuidad Perfecta**
```
Web ←→ Mobile ←→ Tablet ←→ Watch

- Empieza en web, continúa en móvil
- Progreso sincronizado en tiempo real
- Notificaciones cross-device
- Handoff entre dispositivos (iOS)
```

### **3. Modo Compañero de Práctica**
```
📱 Deja el móvil cerca mientras practicas

- Detecta automáticamente qué haces
- Cuenta repeticiones con IA
- Da feedback por voz
- Celebra logros con animaciones
- Sugiere pausas inteligentes
```

---

## 📝 Conclusión

La app móvil de AlenjandrIA no es solo una versión portátil de la web. Es una **herramienta de práctica activa** que transforma el aprendizaje con:

✅ **Offline-first** para practicar en cualquier lugar
✅ **Sensores nativos** para feedback inteligente  
✅ **Herramientas especializadas** integradas
✅ **Notificaciones** que motivan la práctica constante
✅ **Experiencia nativa** optimizada por categoría

**Next Steps:**
1. Validar MVP con usuarios actuales
2. Definir stack técnico definitivo
3. Contratar equipo mobile (1 React Native dev)
4. Desarrollo en paralelo con web
5. Beta en 3-4 meses

---

**Documento creado:** Octubre 2024  
**Versión:** 1.0  
**Propietario:** Equipo AlenjandrIA
