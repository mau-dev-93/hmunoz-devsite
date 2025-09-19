# useNavbarScroll Hook

Hook personalizado para implementar navegación de navbar con detección automática de secciones activas durante el scroll.

## Características

✅ **Scroll suave programático** - Navegación fluida al hacer click en items del navbar  
✅ **Detección automática** - Actualiza el item activo basado en la sección visible  
✅ **Prevención de conflictos** - Evita interferencias entre scroll manual y programático  
✅ **Algoritmo estable** - Sin temblores ni cambios inconsistentes en la selección  
✅ **Debounce integrado** - Optimizado para performance durante scroll  
✅ **Responsivo** - Se adapta automáticamente a diferentes alturas de navbar  

## Instalación

```javascript
import { useNavbarScroll } from '../hooks/useNavbarScroll';
```

## Uso Básico

### 1. Definir las secciones

```javascript
const SECTIONS = [
  { id: "hero_section", label: "Inicio" },
  { id: "about_section", label: "Sobre mí" },
  { id: "projects_section", label: "Proyectos" },
  { id: "contact_section", label: "Contacto" }
];
```

### 2. Implementar en el componente

```javascript
import { useNavbarScroll } from '../hooks/useNavbarScroll';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const offsetTop = isMobile ? 56 : 64; // Altura del navbar

  const { activeSection, scrollToSection } = useNavbarScroll(SECTIONS, offsetTop);

  const handleTabClick = (sectionId, index) => {
    scrollToSection(sectionId, index);
  };

  return (
    <Tabs value={activeSection}>
      {SECTIONS.map((section, index) => (
        <Tab
          key={section.id}
          onClick={() => handleTabClick(section.id, index)}
          label={section.label}
        />
      ))}
    </Tabs>
  );
};
```

### 3. Asegurar que las secciones tengan los IDs correctos

```javascript
// En tus componentes de sección
<Box id="hero_section" component="section">
  {/* Contenido de la sección */}
</Box>

<Box id="about_section" component="section">
  {/* Contenido de la sección */}
</Box>
```

### 4. Configurar CSS para scroll-margin-top

```css
/* En tu archivo de estilos globales */
section { 
  scroll-margin-top: 64px; 
}

@media (max-width: 900px) { 
  section { 
    scroll-margin-top: 56px; 
  } 
}
```

## API

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `sections` | `Array<{id: string, label: string}>` | - | Array de objetos con id y label de cada sección |
| `offsetTop` | `number` | `64` | Altura del navbar fijo en píxeles |

### Retorna

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `activeSection` | `number` | Índice de la sección actualmente activa |
| `scrollToSection` | `function` | Función para navegar a una sección específica |

### scrollToSection(sectionId, index)

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `sectionId` | `string` | ID del elemento HTML de la sección |
| `index` | `number` | Índice de la sección en el array |

## Ejemplo Completo con Material UI

```javascript
import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from '@mui/material';
import { useNavbarScroll } from '../hooks/useNavbarScroll';

const SECTIONS = [
  { id: "hero_section", label: "Inicio" },
  { id: "about_section", label: "Sobre mí" },
  { id: "projects_section", label: "Proyectos" },
  { id: "contact_section", label: "Contacto" }
];

const Navbar = () => {
  const { activeSection, scrollToSection } = useNavbarScroll(SECTIONS, 64);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Sitio Web
        </Typography>
        
        <Tabs value={activeSection}>
          {SECTIONS.map((section, index) => (
            <Tab
              key={section.id}
              label={section.label}
              onClick={() => scrollToSection(section.id, index)}
              sx={{
                color: 'white',
                '&.Mui-selected': { color: 'secondary.main' }
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

// En tus secciones
const HeroSection = () => (
  <Box id="hero_section" component="section" minHeight="100vh">
    <h1>Sección Hero</h1>
  </Box>
);

const AboutSection = () => (
  <Box id="about_section" component="section" minHeight="100vh">
    <h1>Sobre Mí</h1>
  </Box>
);
```

## Notas Técnicas

### Algoritmo de Detección

El hook usa un scroll listener con debounce que:

1. **Encuentra secciones visibles** - Detecta qué secciones están en el viewport
2. **Calcula distancias** - Mide la distancia de cada sección al "punto ideal" (navbar + 50px)
3. **Elige la mejor opción** - Selecciona la sección más cercana al punto ideal
4. **Prioriza secciones completas** - Da preferencia a secciones completamente visibles

### Performance

- **Debounce de 50ms** - Evita actualizaciones excesivas durante scroll
- **Event listener pasivo** - No bloquea el scroll del navegador
- **Cleanup automático** - Remueve listeners al desmontar el componente

### Compatibilidad

- ✅ Todos los navegadores modernos
- ✅ Mobile y desktop
- ✅ Funciona con scroll suave nativo del navegador
- ✅ Compatible con Material UI v7

## Troubleshooting

### El navbar no se actualiza durante scroll manual
- Verificar que las secciones tengan los IDs correctos
- Asegurar que `offsetTop` coincida con la altura real del navbar
- Comprobar que las secciones tengan suficiente altura para ser detectadas

### Los clicks no funcionan
- Verificar que `scrollToSection` se llame con los parámetros correctos
- Asegurar que los elementos de sección existan en el DOM
- Revisar que no haya CSS que interfiera con el scroll

### Selección inestable
- Ajustar el valor de `offsetTop` si es necesario
- Verificar que las secciones tengan `scroll-margin-top` configurado
- Comprobar que no haya múltiples navbars o elementos fijos interfiriendo