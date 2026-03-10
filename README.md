# Sass Portfolio

Sitio web de portfolio personal construido con Vite, HTML y Sass.

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd sass-porfolio
```

2. Instala las dependencias:
```bash
npm install
```

## 📝 Scripts Disponibles

### Desarrollo
Inicia el servidor de desarrollo con hot-reload:
```bash
npm run dev
```
El sitio estará disponible en `http://localhost:5173`

### Build
Genera la versión de producción:
```bash
npm run build
```

### Preview
Previsualiza la versión de producción:
```bash
npm run preview
```

### Deploy
Despliega en GitHub Pages:
```bash
npm run deploy
```

## 🛠️ Tecnologías

- **Vite** - Build tool y servidor de desarrollo
- **Sass** - Preprocesador CSS
- **HTML** - Estructura del sitio

## 📁 Estructura del Proyecto

```
sass-porfolio/
├── src/
│   ├── assets/
│   │   ├── images/    # Imágenes del sitio
│   │   └── icons/     # Iconos SVG
│   ├── scss/
│   │   ├── abstracts/ # Variables y mixins
│   │   ├── base/      # Reset y tipografía
│   │   ├── components/# Botones, formulario, cards
│   │   └── layout/    # Hero, header, footer, secciones
│   ├── index.html     # Página principal
│   └── main.js        # Punto de entrada
└── package.json       # Configuración del proyecto
```

## 🎨 Secciones

- **Hero** - Presentación con foto de perfil
- **Skills** - Tecnologías y habilidades
- **Projects** - Portfolio de proyectos
- **Contact** - Formulario de contacto

## 🎨 Diseño Responsive

El sitio está optimizado para:
- **Desktop** - Ancho completo
- **Tablet** - ≤ 768px
- **Mobile** - ≤ 375px
