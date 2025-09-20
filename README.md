# MobileApp - Aplicación de Meditación Guiada por IA

Una aplicación móvil desarrollada con React Native y Expo que ofrece sesiones de meditación guiadas y analizadas por inteligencia artificial para mejorar el bienestar mental.

## 🚀 Características

- **Dashboard:** Vista principal con estadísticas y resumen de progreso
- **Biblioteca:** Gestión y selección de contenido de meditación
- **Meditación:** Sesiones guiadas por IA con controles de reproducción
- **Grabación:** Sistema para registrar sentimientos post-sesión
- **Resultados:** Análisis y feedback personalizado después de cada meditación
- **Sistema de colores:** Paleta de colores del diseño consistente

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma para desarrollo y deployment
- **TypeScript** - Tipado estático para JavaScript
- **React Navigation** - Navegación entre pantallas
- **React Native Paper** - Componentes UI Material Design
- **React Native SVG** - Renderizado de iconos SVG
- **React Native WebView** - Integración de contenido web

## 📋 Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Expo Go** (aplicación móvil para testing)

## 🚀 Instalación y ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo - Iniciar Expo

```bash
npm start
```

### 3. Probar la aplicación

- **En dispositivo físico**: Instala Expo Go desde App Store/Play Store y escanea el código QR

## 🔧 Scripts Disponibles

```bash
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CustomHeader.tsx
│   ├── CustomModal.tsx
│   ├── EqualizerAnimation.tsx
│   └── FeatureCard.tsx
├── screens/            # Pantallas de la aplicación
│   ├── HomeScreen.tsx
│   ├── LibraryScreen.tsx
│   ├── LoginScreen.tsx
│   ├── MeditationScreen.tsx
│   ├── ResultScreen.tsx
│   └── SplashScreen.tsx
├── navigation/         # Configuración de navegación
│   └── AppNavigator.tsx
├── config/            # Configuraciones
│   └── designSystem.ts
├── theme/             # Temas y estilos
│   └── theme.ts
├── types/             # Definiciones de tipos TypeScript
│   └── declarations.d.ts
└── assets/            # Recursos estáticos
    └── svgConstants.ts
```

## 🎯 Funcionalidades Principales

- **Pantalla de Inicio**: Dashboard con estadísticas de progreso
- **Biblioteca de Meditaciones**: Selección de tipos de meditación
- **Sesión de Meditación**: Reproducción de meditaciones guiadas con controles
- **Grabación de Sentimientos**: Sistema para registrar emociones post-sesión
- **Pantalla de Resultados**: Análisis y feedback post-meditación
- **Sistema de Alarmas**: Programación de recordatorios
