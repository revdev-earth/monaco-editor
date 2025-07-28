# Monaco Playground

Un entorno de desarrollo moderno y elegante para experimentar con JavaScript, construido con React, TypeScript y Monaco Editor.

![Monaco Playground Preview](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-0.52+-007ACC?style=for-the-badge&logo=visual-studio-code)

## Características

### Temas Visuales Impresionantes

- **Cosmic**: Tema espacial con gradientes púrpura y rosa
- **Terminal**: Estilo hacker con tonos verdes y cian
- **Neon**: Colores vibrantes con efectos neón
- **Dark**: Tema oscuro minimalista y elegante

### Editor Avanzado

- **Monaco Editor** integrado (el mismo de VS Code)
- **Sintaxis highlighting** personalizada para JavaScript
- **Temas de editor**: Dark y Solar
- **Auto-completado** y formato automático
- **Fuentes monospace** con ligaduras (JetBrains Mono, Fira Code)

### Funcionalidades

- **Ejecución en tiempo real** de código JavaScript
- **Copiar código** al portapapeles
- **Descargar código** como archivo .js
- **Múltiples temas** con transiciones suaves
- **Efectos visuales** con partículas animadas
- **Diseño responsivo** para todos los dispositivos

### Características Técnicas

- **Tokenizador personalizado** para mejor highlighting
- **Evaluación segura** de código JavaScript
- **Captura de console.log** en tiempo real
- **Manejo de errores** con mensajes descriptivos
- **Interfaz moderna** con glassmorphism y efectos blur

## Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos de instalación

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/monaco-playground.git
cd monaco-playground
```

2. Instala las dependencias

```bash
npm install
```

3. Inicia el servidor de desarrollo

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta el linter
```

## Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5.8** - Superset tipado de JavaScript
- **Vite 7** - Herramienta de construcción rápida
- **Tailwind CSS 4.1** - Framework de CSS utility-first
- **Monaco Editor 0.52** - Editor de código de VS Code
- **Lucide React** - Iconos modernos
- **ESLint** - Linter para JavaScript/TypeScript

## Estructura del Proyecto

```
monaco-playground/
├── src/
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── ...
├── public/              # Archivos estáticos
├── package.json         # Dependencias y scripts
├── vite.config.ts       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
└── README.md            # Este archivo
```

## Características del Editor

### Temas Personalizados

El proyecto incluye dos temas de editor personalizados:

- **One Dark Custom**: Versión mejorada del tema oscuro
- **Solarized Light**: Tema claro con colores cálidos

### Tokenización Avanzada

Sistema de tokenización personalizado que reconoce:

- Métodos de console (log, error, warn)
- Métodos de arrays (map, filter, reduce, etc.)
- Delimitadores y operadores
- Template literals con expresiones
- Comentarios y strings

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

Desarrollado con amor por Rev Dev

## Agradecimientos

- Monaco Editor por proporcionar un excelente editor
- Tailwind CSS por el sistema de diseño
- Lucide por los iconos hermosos
- La comunidad de React por las mejores prácticas
