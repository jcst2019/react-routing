
# 🌐 Proyecto React - Ejemplo de Routing

Este proyecto demuestra cómo implementar navegación en una aplicación React usando `react-router-dom`. Se crean múltiples vistas y se configura un sistema de rutas con componentes reutilizables.

---

## 🚀 Requisitos previos

- Node.js y npm instalados
- Editor de código (como VS Code)

---

## 🧱 1. Crear un nuevo proyecto React con Vite

```bash
npm create vite@latest mi-proyecto-routing -- --template react
cd mi-proyecto-routing
npm install
```

---

## 📦 2. Instalar React Router

```bash
npm install react-router-dom
```

---

## 🗂 3. Estructura del proyecto

```bash
/src
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
└── App.js
```

---

## ✏️ 4. Crear los archivos del ejemplo

### `/components/Navbar.jsx`

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/about">Acerca</Link>
    </nav>
  );
}

export default Navbar;
```

---

### `/pages/Home.jsx`

```jsx
function Home() {
  return <h1>Bienvenido a la Página de Inicio</h1>;
}

export default Home;
```

---

### `/pages/About.jsx`

```jsx
function About() {
  return <h1>Información de la Aplicación</h1>;
}

export default About;
```

---

### `/pages/NotFound.jsx`

```jsx
function NotFound() {
  return <h1>Error 404 - Página no encontrada</h1>;
}

export default NotFound;
```

---

## 🧭 5. Configurar las rutas en `App.js`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 🧪 6. Ejecutar el proyecto

```bash
npm run dev
```

---

## 🎯 Resultado esperado

- Accede a `/` para ver la página de inicio.
- Accede a `/about` para ver la sección "Acerca".
- Accede a cualquier otra ruta (ej. `/hola`) y verás el mensaje de página no encontrada (404).

---

## 📌 Notas

- Este ejemplo usa `react-router-dom v6+`.
- Asegúrate de que los componentes estén bien importados.
- Puedes agregar más rutas según tu necesidad.

---

## 📚 Créditos

Ejemplo creado para la clase de **React JS – Integración con Servicios Web**, Tema 2: **Routing**.
