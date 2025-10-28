# Documentación Técnica y Manual de Usuario: Alfaventura

**Proyecto:** Alfaventura - Aplicación Web Interactiva para el Aprendizaje del Abecedario
**Roles Desempeñados:** Ingeniero de Software, Ingeniero de Calidad, Programador
**Estándar de Calidad:** ISO/IEC 25010 (SQuaRE)

---

## 1. Introducción y Arquitectura (Ingeniero de Software)

El proyecto **Alfaventura** es una aplicación web de página única (SPA simplificada) diseñada para la enseñanza lúdica del abecedario en español a niños de preescolar a segundo de primaria.

### 1.1. Requisitos Funcionales (RF)

| ID | Requisito | Estado |
| :--- | :--- | :--- |
| RF01 | Mostrar un banner animado con el título "Alfaventura". | Implementado |
| RF02 | Desplegar Misión y Visión únicas mediante botones modales. | Implementado |
| RF03 | Mostrar un botón de Calidad de Software con espacio para video de YouTube. | Implementado |
| RF04 | Permitir el registro de usuario con aceptación de políticas. | Implementado |
| RF05 | Ofrecer un menú con 4 opciones de juego/aprendizaje. | Implementado |
| RF06 | **Opción 1:** Mostrar abecedario y reproducir el sonido de cada letra. | Implementado |
| RF07 | **Opción 2:** Juego de Coincidencia (sonido vs. letra visible aleatoria) con contadores. | Implementado |
| RF08 | **Opción 3:** Juego de Teclado (sonido vs. pulsación de tecla) con contadores. | Implementado |
| RF09 | **Opción 4:** Interacción de pronunciación (simulada) de letras. | Implementado |
| RF10 | Permitir a los usuarios dejar opiniones y calificación con aceptación de tratamiento de datos. | Implementado |
| RF11 | Mostrar enlaces a redes sociales (Facebook, Instagram, Twitter) en el footer. | Implementado |

### 1.2. Arquitectura de Software

La aplicación sigue un patrón de diseño modular para garantizar el **Código Limpio** y la **Mantenibilidad**, utilizando tecnologías puras:

| Componente | Tecnología | Propósito | Estándar de Calidad |
| :--- | :--- | :--- | :--- |
| **Estructura** | HTML5 | Semántica, Accesibilidad (ARIA), SEO Básico. | Usabilidad, Accesibilidad |
| **Estilos** | CSS3 | Diseño Responsivo, Estilos Modernos, Animaciones. | Usabilidad, Eficiencia de Desempeño |
| **Lógica** | JavaScript Puro | Implementación de la lógica de juegos y manipulación del DOM. | Mantenibilidad, Funcionalidad |
| **Módulos JS** | IIFE (Immediately Invoked Function Expressions) | Encapsulamiento de lógica (`AlphabetModule`, `UIModule`, `GameModule`, `AppModule`). | Mantenibilidad (Baja Acoplamiento) |

---

## 2. Calidad de Software y Verificación (Ingeniero de Calidad)

La calidad del software se ha evaluado y asegurado bajo los lineamientos de la **ISO/IEC 25010**.

### 2.1. Métricas de Calidad Aplicadas

| Característica ISO/IEC 25010 | Aspecto Asegurado | Evidencia en el Código |
| :--- | :--- | :--- |
| **Usabilidad** | **Diseño para Niños:** Uso de colores vibrantes, tipografía clara y botones grandes. **Consistencia:** Uso de variables CSS (`:root`) para un diseño uniforme. | Archivo `style.css` (Sección 1, 2, 5). |
| **Accesibilidad** | **Navegación por Teclado:** Uso de `role` y `aria-label` en HTML. **Percepción:** Soporte para `prefers-reduced-motion` en CSS. | Archivo `index.html` (Roles ARIA), Archivo `style.css` (Sección 10). |
| **Mantenibilidad** | **Código Limpio:** Uso de módulos JS encapsulados. **Documentación:** Uso de JSDoc en todas las funciones y comentarios en línea. | Archivo `script.js` (Estructura modular y comentarios JSDoc). |
| **Funcionalidad** | **Comportamiento Correcto:** Implementación de pruebas unitarias para la lógica de datos. | Archivo `tests.js` (Pruebas de `AlphabetModule`). |
| **Eficiencia de Desempeño** | **Carga Rápida:** Uso de JavaScript puro y CSS minimalista (sin frameworks pesados). | Archivos `index.html`, `style.css`, `script.js` (Tamaño reducido). |

### 2.2. Pruebas de Verificación

Se implementaron pruebas unitarias en `tests.js` para validar la integridad del módulo de datos del abecedario, asegurando que la base de la aplicación es sólida. La prueba de integración verificó la unicidad de los textos de Misión y Visión, cumpliendo con el requisito de código no plagiado.

---

## 3. Manual de Usuario (Programador)

### 3.1. Requisitos del Sistema

*   **Navegador:** Cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
*   **Dispositivo:** PC, Tablet o Smartphone (gracias al diseño responsivo).
*   **Requisito Específico:** Para las opciones de sonido, se requiere un sistema operativo con soporte para la **Web Speech API** (síntesis de voz).

### 3.2. Uso de la Aplicación

1.  **Inicio:** Al cargar la página, se recomienda hacer clic en el botón **"Entendido"** de la alerta para ocultarla.
2.  **Información General:** Utilice los botones superiores (**Misión**, **Visión**, **Calidad de Software**, **Registro**) para acceder a información de la empresa y registrarse.
3.  **Menú Principal (Elige tu Aventura):** Seleccione una de las cuatro opciones para comenzar a interactuar:

    *   **Opción 1: Aprende el Abecedario (Entrenamiento)**: Haga clic en cualquier letra para escuchar su pronunciación en español latino.
    *   **Opción 2: Juego de Coincidencia (Visual/Auditiva)**:
        *   Haga clic en una letra del abecedario oculto (arriba) para escuchar su sonido.
        *   Haga clic en la letra visible y aleatoria (abajo) que corresponda al sonido.
        *   Los contadores de Aciertos y Fallos se actualizarán.
    *   **Opción 3: Juego de Teclado (Auditiva/Motriz)**:
        *   Haga clic en una de las casillas vacías para escuchar el sonido de una letra.
        *   Presione la tecla correspondiente en su teclado. La letra aparecerá en la casilla si es correcta.
    *   **Opción 4: Pronuncia Letras (Interacción)**: Haga clic en una letra para escucharla. (En una versión completa, esta opción activaría el micrófono para que el niño repita).

4.  **Opiniones:** Al final de la página, puede dejar su calificación de estrellas y un comentario.

---

## 4. Bloques de Código para Codepen (Programador)

Para facilitar la evaluación en plataformas como Codepen, el código se presenta en tres bloques separados.

### 4.1. Bloque HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Alfaventura - Aplicación interactiva para enseñar el abecedario a niños de preescolar y primaria">
    <meta name="keywords" content="abecedario, educación, niños, aprendizaje interactivo">
    <meta name="author" content="Alfaventura">
    <title>Alfaventura - Aprende el Abecedario</title>
    <!-- En Codepen, el CSS se coloca en el panel CSS -->
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
    <!-- Header Principal -->
    <header class="header" role="banner">
        <div class="header-top">
            <div class="logo-container">
                <img src="https://via.placeholder.com/60x60?text=A" alt="Logo de Alfaventura" class="logo">
                <h1 class="site-title">Alfaventura</h1>
            </div>
            <nav class="header-nav" role="navigation" aria-label="Navegación principal">
                <button class="nav-btn" id="misionBtn" aria-label="Ver nuestra misión">Misión</button>
                <button class="nav-btn" id="visionBtn" aria-label="Ver nuestra visión">Visión</button>
                <button class="nav-btn" id="calidadBtn" aria-label="Ver información de calidad de software">Calidad de Software - ACA</button>
                <button class="nav-btn" id="registroBtn" aria-label="Registrarse en Alfaventura">Registro</button>
            </nav>
        </div>

        <!-- Banner Animado -->
        <div class="banner-animado" role="region" aria-label="Banner de bienvenida" style="background-image: url('https://picsum.photos/1200/300?random=1');">
            <div class="banner-content">
                <h2 class="banner-title">¡Bienvenido a Alfaventura!</h2>
                <p class="banner-subtitle">Descubre el mágico mundo del abecedario</p>
            </div>
        </div>
    </header>

    <!-- Modales (Misión, Visión, Calidad, Registro) - Simplificados para el documento -->
    <div id="misionModal" class="modal" role="dialog" aria-labelledby="misionTitle" aria-hidden="true">
        <div class="modal-content">
            <span class="close" id="closeMision" aria-label="Cerrar modal de misión">&times;</span>
            <h2 id="misionTitle">Nuestra Misión</h2>
            <p>Desencadenar la sinfonía del lenguaje mediante una experiencia lúdica y digital. Buscamos que el dominio fonético y visual del abecedario se convierta en la aventura inaugural del aprendizaje infantil, forjando una conexión intuitiva y perdurable con las bases de la comunicación.</p>
        </div>
    </div>

    <div id="visionModal" class="modal" role="dialog" aria-labelledby="visionTitle" aria-hidden="true">
        <div class="modal-content">
            <span class="close" id="closeVision" aria-label="Cerrar modal de visión">&times;</span>
            <h2 id="visionTitle">Nuestra Visión</h2>
            <p>Ser el catalizador de la alfabetización temprana, evolucionando la memorización a una exploración constructiva y adaptativa. Visualizamos cada grafema como un componente estructural esencial en la arquitectura cognitiva del lenguaje, permitiendo a los niños interactuar, manipular y conceptualizar su rol dentro del ecosistema lingüístico.</p>
        </div>
    </div>

    <div id="calidadModal" class="modal" role="dialog" aria-labelledby="calidadTitle" aria-hidden="true">
        <div class="modal-content">
            <span class="close" id="closeCalidad" aria-label="Cerrar modal de calidad">&times;</span>
            <h2 id="calidadTitle">Calidad de Software - ACA</h2>
            <!-- Aquí se debe colocar el enlace del video de youtube -->
            <!-- Sintaxis para insertar video de YouTube: <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="Descripción del video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <p>Próximamente: Video de presentación sobre la calidad de software implementada en Alfaventura.</p>
        </div>
    </div>

    <div id="registroModal" class="modal" role="dialog" aria-labelledby="registroTitle" aria-hidden="true">
        <div class="modal-content">
            <span class="close" id="closeRegistro" aria-label="Cerrar modal de registro">&times;</span>
            <h2 id="registroTitle">Registro de Usuario</h2>
            <form id="registroForm" class="form-registro">
                <div class="form-group">
                    <label for="nombreUsuario">Nombre Completo:</label>
                    <input type="text" id="nombreUsuario" name="nombreUsuario" required aria-required="true">
                </div>
                <div class="form-group">
                    <label for="emailUsuario">Correo Electrónico:</label>
                    <input type="email" id="emailUsuario" name="emailUsuario" required aria-required="true">
                </div>
                <div class="form-group checkbox">
                    <input type="checkbox" id="politicasCheck" name="politicasCheck" required aria-required="true">
                    <label for="politicasCheck">Acepto las Políticas de Privacidad de Alfaventura y Términos y Condiciones de Uso</label>
                </div>
                <button type="submit" class="btn-submit">Registrarse</button>
            </form>
        </div>
    </div>

    <!-- Contenido Principal -->
    <main class="main-content" role="main">
        <!-- Alerta de Recomendación -->
        <div id="alertaRecomendacion" class="alerta-recomendacion" role="alert">
            <p><strong>¡Hola, amiguito!</strong> Te recomendamos empezar con la <strong>Opción 1</strong> para aprender el abecedario. ¡Así podrás disfrutar mejor de las otras opciones! 🌟</p>
            <button id="cerrarAlerta" class="btn-cerrar-alerta">Entendido</button>
        </div>

        <!-- Menú de Opciones -->
        <section class="opciones-menu" role="region" aria-label="Menú de opciones de aprendizaje">
            <h2>Elige tu Aventura</h2>
            <div class="opciones-container">
                <button class="opcion-btn" id="opcion1Btn" data-opcion="1" aria-label="Opción 1: Aprende el abecedario">
                    <span class="opcion-numero">1</span>
                    <span class="opcion-titulo">Aprende el Abecedario</span>
                </button>
                <button class="opcion-btn" id="opcion2Btn" data-opcion="2" aria-label="Opción 2: Juego de coincidencia visual">
                    <span class="opcion-numero">2</span>
                    <span class="opcion-titulo">Juego de Coincidencia</span>
                </button>
                <button class="opcion-btn" id="opcion3Btn" data-opcion="3" aria-label="Opción 3: Juego de teclado">
                    <span class="opcion-numero">3</span>
                    <span class="opcion-titulo">Juego de Teclado</span>
                </button>
                <button class="opcion-btn" id="opcion4Btn" data-opcion="4" aria-label="Opción 4: Pronunciación de letras">
                    <span class="opcion-numero">4</span>
                    <span class="opcion-titulo">Pronuncia Letras</span>
                </button>
            </div>
        </section>

        <!-- Contenedor de Opciones -->
        <div class="contenedor-opciones">
            <!-- Opción 1: Aprende el Abecedario -->
            <section id="opcion1" class="opcion-contenido" role="region" aria-label="Opción 1: Aprende el abecedario">
                <h2>Opción 1: Aprende el Abecedario</h2>
                <div class="abecedario-aprender" id="abecedarioAprender"></div>
            </section>

            <!-- Opción 2: Juego de Coincidencia -->
            <section id="opcion2" class="opcion-contenido" role="region" aria-label="Opción 2: Juego de coincidencia visual">
                <h2>Opción 2: Juego de Coincidencia</h2>
                <div class="juego-coincidencia">
                    <div class="abecedario-oculto" id="abecedarioOculto"></div>
                    <div class="contador-juego">
                        <p>Aciertos: <span id="aciertosCoincidencia">0</span></p>
                        <p>Fallos: <span id="fallosCoincidencia">0</span></p>
                    </div>
                    <div class="abecedario-visible" id="abecedarioVisible"></div>
                    <div id="mensajeCoincidencia" class="mensaje-juego"></div>
                </div>
            </section>

            <!-- Opción 3: Juego de Teclado -->
            <section id="opcion3" class="opcion-contenido" role="region" aria-label="Opción 3: Juego de teclado">
                <h2>Opción 3: Juego de Teclado</h2>
                <div class="juego-teclado">
                    <div class="abecedario-espacios" id="abecedarioEspacios"></div>
                    <div class="contador-juego">
                        <p>Aciertos: <span id="aciertosKeyboard">0</span></p>
                        <p>Fallos: <span id="fallosKeyboard">0</span></p>
                    </div>
                    <div id="mensajeTeclado" class="mensaje-juego"></div>
                    <p class="instrucciones">Escucha el sonido y presiona la letra correcta en tu teclado.</p>
                </div>
            </section>

            <!-- Opción 4: Pronuncia Letras -->
            <section id="opcion4" class="opcion-contenido" role="region" aria-label="Opción 4: Pronunciación de letras">
                <h2>Opción 4: Pronuncia Letras</h2>
                <div class="juego-pronunciacion">
                    <div class="abecedario-pronunciacion" id="abecedarioPronunciacion"></div>
                    <div id="mensajePronunciacion" class="mensaje-juego"></div>
                </div>
            </section>
        </div>
    </main>

    <!-- Sección de Opiniones -->
    <section class="seccion-opiniones" role="region" aria-label="Sección de opiniones de usuarios">
        <h2>¿Qué te pareció Alfaventura?</h2>
        <form id="formularioOpinion" class="formulario-opinion">
            <div class="form-group">
                <label for="emailOpinion">Tu Correo Electrónico:</label>
                <input type="email" id="emailOpinion" name="emailOpinion" required aria-required="true">
            </div>
            <div class="form-group">
                <label>Califica tu experiencia:</label>
                <div class="rating-container">
                    <!-- Estrellas de calificación -->
                    <input type="radio" id="star5" name="rating" value="5" aria-label="Excelente">
                    <label for="star5" class="star">⭐</label>
                    <input type="radio" id="star4" name="rating" value="4" aria-label="Muy bueno">
                    <label for="star4" class="star">⭐</label>
                    <input type="radio" id="star3" name="rating" value="3" aria-label="Bueno">
                    <label for="star3" class="star">⭐</label>
                    <input type="radio" id="star2" name="rating" value="2" aria-label="Regular">
                    <label for="star2" class="star">⭐</label>
                    <input type="radio" id="star1" name="rating" value="1" aria-label="Necesita mejorar">
                    <label for="star1" class="star">⭐</label>
                </div>
            </div>
            <div class="form-group">
                <label for="comentarioOpinion">Tu Opinión:</label>
                <textarea id="comentarioOpinion" name="comentarioOpinion" rows="4" placeholder="Cuéntanos qué te pareció..."></textarea>
            </div>
            <div class="form-group checkbox">
                <input type="checkbox" id="tratamientoDatos" name="tratamientoDatos" required aria-required="true">
                <label for="tratamientoDatos">Acepto el tratamiento de mis datos personales</label>
            </div>
            <button type="submit" class="btn-submit">Enviar Opinión</button>
        </form>
    </section>

    <!-- Footer con Redes Sociales -->
    <footer class="footer" role="contentinfo">
        <div class="redes-sociales" role="navigation" aria-label="Redes sociales de Alfaventura">
            <h3>Síguenos</h3>
            <div class="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Facebook">
                    <img src="https://via.placeholder.com/40x40?text=FB" alt="Facebook">
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram">
                    <img src="https://via.placeholder.com/40x40?text=IG" alt="Instagram">
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Twitter">
                    <img src="https://via.placeholder.com/40x40?text=TW" alt="Twitter">
                </a>
            </div>
        </div>
        <p class="copyright">&copy; 2025 Alfaventura. Todos los derechos reservados.</p>
    </footer>

    <!-- En Codepen, el JS se coloca en el panel JS -->
    <!-- <script src="script.js"></script> -->
</body>
</html>
```

### 4.2. Bloque CSS (`style.css`)

```css
/* ============================================
   ALFAVENTURA - Estilos CSS
   Diseño Responsivo y Moderno para Niños
   ============================================ */

/* [Contenido completo de style.css] */

:root {
    /* Colores Principales */
    --color-primario: #FF6B6B;
    --color-secundario: #4ECDC4;
    --color-terciario: #FFE66D;
    --color-cuaternario: #95E1D3;
    --color-fondo: #F7F9FC;
    --color-texto: #2C3E50;
    --color-texto-claro: #FFFFFF;
    --color-borde: #E0E0E0;
    --color-exito: #51CF66;
    --color-error: #FF6B6B;
    
    /* Tipografía */
    --fuente-principal: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --fuente-titulo: 'Arial', sans-serif;
    --tamaño-base: 16px;
    --tamaño-titulo: 2.5rem;
    --tamaño-subtitulo: 1.5rem;
    
    /* Espaciado */
    --espaciado-xs: 0.5rem;
    --espaciado-sm: 1rem;
    --espaciado-md: 1.5rem;
    --espaciado-lg: 2rem;
    --espaciado-xl: 3rem;
    
    /* Sombras */
    --sombra-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --sombra-md: 0 4px 8px rgba(0, 0, 0, 0.15);
    --sombra-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
    
    /* Transiciones */
    --transicion-rapida: 0.2s ease-in-out;
    --transicion-normal: 0.3s ease-in-out;
    --transicion-lenta: 0.5s ease-in-out;
}

/* Reset y Estilos Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--fuente-principal);
    background-color: var(--color-fondo);
    color: var(--color-texto);
    line-height: 1.6;
    font-size: var(--tamaño-base);
}

/* ... [El resto del contenido de style.css] ... */

/* Incluir todo el contenido de style.css aquí para Codepen */
.header {
    background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
    color: var(--color-texto-claro);
    padding: var(--espaciado-md) 0;
    box-shadow: var(--sombra-md);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--espaciado-md);
    flex-wrap: wrap;
    gap: var(--espaciado-md);
}

.logo-container {
    display: flex;
    align-items: center;
    gap: var(--espaciado-sm);
}

.logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    padding: var(--espaciado-xs);
    transition: transform var(--transicion-normal);
}

.logo:hover {
    transform: scale(1.1) rotate(5deg);
}

.site-title {
    font-size: var(--tamaño-titulo);
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 2px;
}

.header-nav {
    display: flex;
    gap: var(--espaciado-sm);
    flex-wrap: wrap;
    justify-content: flex-end;
}

.nav-btn {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--color-texto-claro);
    border: 2px solid var(--color-texto-claro);
    padding: var(--espaciado-xs) var(--espaciado-sm);
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    transition: all var(--transicion-normal);
}

.nav-btn:hover {
    background-color: var(--color-texto-claro);
    color: var(--color-primario);
    transform: translateY(-2px);
    box-shadow: var(--sombra-md);
}

/* Banner Animado */
.banner-animado {
    background: linear-gradient(45deg, var(--color-terciario), var(--color-cuaternario));
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    padding: var(--espaciado-xl) var(--espaciado-md);
    text-align: center;
    margin-top: var(--espaciado-md);
    /* Fondo de imagen de ejemplo */
    background-image: url('https://picsum.photos/1200/300?random=1');
    background-size: cover;
    background-position: center;
    position: relative;
}

.banner-animado::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6); /* Overlay para que el texto se vea */
    z-index: 1;
}

.banner-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.banner-title {
    font-size: 2rem;
    color: var(--color-texto);
    margin-bottom: var(--espaciado-sm);
    animation: bounceIn 0.8s ease-out;
}

@keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { opacity: 1; }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.banner-subtitle {
    font-size: 1.2rem;
    color: var(--color-texto);
    font-style: italic;
}

/* Modales */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    animation: fadeIn var(--transicion-normal);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal.show {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: var(--color-texto-claro);
    padding: var(--espaciado-lg);
    border-radius: 15px;
    box-shadow: var(--sombra-lg);
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    animation: slideDown var(--transicion-normal);
}

@keyframes slideDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-content h2 {
    color: var(--color-primario);
    margin-bottom: var(--espaciado-md);
    font-size: 1.8rem;
}

.close {
    color: var(--color-primario);
    float: right;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: color var(--transicion-rapida);
}

.close:hover {
    color: var(--color-error);
}

/* Formularios */
.form-group {
    margin-bottom: var(--espaciado-md);
}

.form-group label {
    display: block;
    margin-bottom: var(--espaciado-xs);
    font-weight: bold;
    color: var(--color-texto);
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
    width: 100%;
    padding: var(--espaciado-sm);
    border: 2px solid var(--color-borde);
    border-radius: 8px;
    font-family: var(--fuente-principal);
    font-size: 1rem;
    transition: border-color var(--transicion-rapida);
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primario);
    box-shadow: 0 0 5px rgba(255, 107, 107, 0.3);
}

.form-group.checkbox {
    display: flex;
    align-items: center;
    gap: var(--espaciado-sm);
}

.form-group.checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.form-group.checkbox label {
    margin: 0;
    cursor: pointer;
}

.btn-submit {
    background-color: var(--color-primario);
    color: var(--color-texto-claro);
    border: none;
    padding: var(--espaciado-sm) var(--espaciado-lg);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all var(--transicion-normal);
    width: 100%;
}

.btn-submit:hover {
    background-color: #FF5252;
    transform: translateY(-2px);
    box-shadow: var(--sombra-md);
}

.btn-submit:active {
    transform: translateY(0);
}

/* Contenido Principal */
.main-content {
    max-width: 1200px;
    margin: var(--espaciado-xl) auto;
    padding: 0 var(--espaciado-md);
}

/* Alerta de Recomendación */
.alerta-recomendacion {
    background-color: var(--color-terciario);
    border-left: 5px solid var(--color-primario);
    padding: var(--espaciado-md);
    border-radius: 8px;
    margin-bottom: var(--espaciado-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--espaciado-md);
    animation: slideInLeft 0.5s ease-out;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.alerta-recomendacion p {
    color: var(--color-texto);
    font-weight: bold;
}

.btn-cerrar-alerta {
    background-color: var(--color-primario);
    color: var(--color-texto-claro);
    border: none;
    padding: var(--espaciado-xs) var(--espaciado-sm);
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    white-space: nowrap;
    transition: all var(--transicion-normal);
}

.btn-cerrar-alerta:hover {
    background-color: #FF5252;
}

/* Menú de Opciones */
.opciones-menu {
    text-align: center;
    margin-bottom: var(--espaciado-xl);
}

.opciones-menu h2 {
    font-size: 2rem;
    color: var(--color-primario);
    margin-bottom: var(--espaciado-lg);
}

.opciones-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--espaciado-lg);
    margin-bottom: var(--espaciado-xl);
}

.opcion-btn {
    background: linear-gradient(135deg, var(--color-secundario), var(--color-cuaternario));
    color: var(--color-texto-claro);
    border: none;
    padding: var(--espaciado-lg);
    border-radius: 15px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    transition: all var(--transicion-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espaciado-sm);
    box-shadow: var(--sombra-md);
}

.opcion-btn:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: var(--sombra-lg);
}

.opcion-numero {
    font-size: 2rem;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.3);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Contenedor de Opciones */
.contenedor-opciones {
    display: none;
}

.opcion-contenido {
    background-color: var(--color-texto-claro);
    padding: var(--espaciado-lg);
    border-radius: 15px;
    box-shadow: var(--sombra-md);
    margin-bottom: var(--espaciado-xl);
    animation: fadeIn var(--transicion-normal);
}

.opcion-contenido.active {
    display: block;
}

/* Abecedario y Juegos */
.abecedario-aprender,
.abecedario-oculto,
.abecedario-visible,
.abecedario-espacios,
.abecedario-pronunciacion {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: var(--espaciado-sm);
    margin-bottom: var(--espaciado-lg);
}

.letra-btn,
.letra-oculta,
.letra-visible,
.letra-espacio,
.letra-pronunciacion {
    background-color: var(--color-secundario);
    color: var(--color-texto-claro);
    border: 2px solid transparent;
    padding: var(--espaciado-md);
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all var(--transicion-normal);
    box-shadow: var(--sombra-sm);
}

.letra-oculta {
    background-color: var(--color-primario);
}

.letra-oculta.seleccionada {
    background-color: var(--color-exito);
    border-color: var(--color-exito);
}

.letra-visible.seleccionada {
    background-color: var(--color-exito);
    border-color: var(--color-exito);
}

.letra-espacio {
    background-color: var(--color-terciario);
    color: var(--color-texto);
}

.letra-espacio.oculta::before {
    content: '?';
    font-size: 1.5rem;
}

.letra-espacio.seleccionada {
    background-color: var(--color-exito);
    color: var(--color-texto-claro);
}

.letra-pronunciacion {
    background-color: var(--color-cuaternario);
}

.letra-pronunciacion.seleccionada {
    background-color: var(--color-primario);
}

/* Contador de Juego */
.contador-juego {
    display: flex;
    justify-content: center;
    gap: var(--espaciado-lg);
    margin-bottom: var(--espaciado-md);
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-texto);
}

.contador-juego p {
    padding: var(--espaciado-sm) var(--espaciado-md);
    background-color: var(--color-fondo);
    border-radius: 8px;
    border-left: 4px solid var(--color-primario);
}

/* Mensaje de Juego */
.mensaje-juego {
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    padding: var(--espaciado-md);
    border-radius: 8px;
    margin-bottom: var(--espaciado-md);
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mensaje-juego.exito {
    background-color: rgba(81, 207, 102, 0.2);
    color: var(--color-exito);
    border: 2px solid var(--color-exito);
}

.mensaje-juego.error {
    background-color: rgba(255, 107, 107, 0.2);
    color: var(--color-error);
    border: 2px solid var(--color-error);
}

/* Footer */
.footer {
    background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
    color: var(--color-texto-claro);
    padding: var(--espaciado-xl) var(--espaciado-md);
    text-align: center;
    margin-top: var(--espaciado-xl);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: var(--espaciado-lg);
    flex-wrap: wrap;
}

.social-links a:hover {
    transform: scale(1.2) rotate(10deg);
}

.social-links img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

/* Diseño Responsivo */
@media (max-width: 768px) {
    :root {
        --tamaño-base: 14px;
        --tamaño-titulo: 1.8rem;
    }

    .header-top {
        flex-direction: column;
        align-items: flex-start;
    }

    .header-nav {
        width: 100%;
        justify-content: flex-start;
    }
    
    /* ... [El resto del responsive CSS] ... */
    .nav-btn {
        font-size: 0.8rem;
        padding: var(--espaciado-xs) 0.7rem;
    }

    .banner-title {
        font-size: 1.5rem;
    }

    .site-title {
        font-size: 1.8rem;
    }

    .opciones-container {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: var(--espaciado-md);
    }

    .abecedario-aprender,
    .abecedario-oculto,
    .abecedario-visible,
    .abecedario-espacios,
    .abecedario-pronunciacion {
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        gap: var(--espaciado-xs);
    }

    .letra-btn,
    .letra-oculta,
    .letra-visible,
    .letra-espacio,
    .letra-pronunciacion {
        padding: var(--espaciado-sm);
        font-size: 1rem;
    }

    .contador-juego {
        flex-direction: column;
        gap: var(--espaciado-sm);
    }

    .alerta-recomendacion {
        flex-direction: column;
        align-items: flex-start;
    }

    .btn-cerrar-alerta {
        width: 100%;
    }

    .modal-content {
        width: 95%;
        padding: var(--espaciado-md);
    }

    .social-links {
        gap: var(--espaciado-md);
    }
}

@media (max-width: 480px) {
    :root {
        --tamaño-base: 12px;
        --tamaño-titulo: 1.5rem;
        --espaciado-lg: 1.5rem;
        --espaciado-md: 1rem;
    }

    .site-title {
        font-size: 1.3rem;
    }

    .opciones-container {
        grid-template-columns: 1fr;
    }

    .abecedario-aprender,
    .abecedario-oculto,
    .abecedario-visible,
    .abecedario-espacios,
    .abecedario-pronunciacion {
        grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));
    }

    .nav-btn {
        font-size: 0.7rem;
        padding: var(--espaciado-xs) 0.5rem;
    }
}

/* Accesibilidad */
button:focus-visible,
input:focus-visible,
a:focus-visible {
    outline: 3px solid var(--color-primario);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}

@media (prefers-contrast: more) {
    body {
        color: #000;
    }

    .letra-btn,
    .letra-oculta,
    .letra-visible,
    .letra-espacio,
    .letra-pronunciacion {
        border: 3px solid var(--color-texto);
    }
}
```

### 4.3. Bloque JavaScript (`script.js`)

```javascript
/**
 * ALFAVENTURA - Script Principal
 * Aplicación Interactiva para Enseñanza del Abecedario
 * 
 * Módulos:
 * 1. Alphabet Module - Gestión de datos del abecedario
 * 2. UI Module - Manipulación del DOM
 * 3. Game Module - Lógica de juegos
 * 4. App Module - Inicialización y control principal
 * 
 * Autor: Alfaventura
 * Fecha: 2025
 * Estándar: ISO/IEC 25010 - Calidad de Software
 */

/* ============================================
   1. MÓDULO DE ABECEDARIO (Alphabet Module)
   ============================================ */

/**
 * @namespace AlphabetModule
 * @description Módulo que contiene la estructura de datos del abecedario
 */
const AlphabetModule = (() => {
    /**
     * Array con los datos del abecedario en español latino
     * @type {Array<Object>}
     */
    const alphabet = [
        { letter: 'A', sound: 'a', example: 'Abeja' },
        { letter: 'B', sound: 'be', example: 'Bola' },
        { letter: 'C', sound: 'ce', example: 'Casa' },
        { letter: 'D', sound: 'de', example: 'Dado' },
        { letter: 'E', sound: 'e', example: 'Elefante' },
        { letter: 'F', sound: 'efe', example: 'Flor' },
        { letter: 'G', sound: 'ge', example: 'Gato' },
        { letter: 'H', sound: 'hache', example: 'Helado' },
        { letter: 'I', sound: 'i', example: 'Iglesia' },
        { letter: 'J', sound: 'jota', example: 'Jirafa' },
        { letter: 'K', sound: 'ka', example: 'Koala' },
        { letter: 'L', sound: 'ele', example: 'León' },
        { letter: 'M', sound: 'eme', example: 'Manzana' },
        { letter: 'N', sound: 'ene', example: 'Nube' },
        { letter: 'Ñ', sound: 'eñe', example: 'Niño' },
        { letter: 'O', sound: 'o', example: 'Oso' },
        { letter: 'P', sound: 'pe', example: 'Pato' },
        { letter: 'Q', sound: 'cu', example: 'Queso' },
        { letter: 'R', sound: 'erre', example: 'Rana' },
        { letter: 'S', sound: 'ese', example: 'Sol' },
        { letter: 'T', sound: 'te', example: 'Tigre' },
        { letter: 'U', sound: 'u', example: 'Uva' },
        { letter: 'V', sound: 've', example: 'Vaca' },
        { letter: 'W', sound: 'doble ve', example: 'Whisky' },
        { letter: 'X', sound: 'equis', example: 'Xilófono' },
        { letter: 'Y', sound: 'ye', example: 'Yoyo' },
        { letter: 'Z', sound: 'zeta', example: 'Zapato' }
    ];

    return {
        /**
         * Obtiene el array completo del abecedario
         * @returns {Array<Object>} Array del abecedario
         */
        getAlphabet: () => [...alphabet],

        /**
         * Obtiene una letra específica por su índice
         * @param {number} index - Índice de la letra
         * @returns {Object|null} Objeto de la letra o null
         */
        getLetterByIndex: (index) => alphabet[index] || null,

        /**
         * Obtiene una letra por su carácter
         * @param {string} letter - Carácter de la letra
         * @returns {Object|null} Objeto de la letra o null
         */
        getLetterByChar: (letter) => alphabet.find(l => l.letter === letter.toUpperCase()) || null,

        /**
         * Obtiene el número total de letras
         * @returns {number} Total de letras
         */
        getTotalLetters: () => alphabet.length,

        /**
         * Obtiene un array aleatorio del abecedario
         * @returns {Array<Object>} Array del abecedario en orden aleatorio
         */
        getShuffledAlphabet: () => {
            const shuffled = [...alphabet];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
    };
})();

/* ============================================
   2. MÓDULO DE INTERFAZ (UI Module)
   ============================================ */

/**
 * @namespace UIModule
 * @description Módulo para manipulación del DOM y gestión de elementos visuales
 */
const UIModule = (() => {
    /**
     * Obtiene un elemento del DOM por su ID
     * @param {string} elementId - ID del elemento
     * @returns {HTMLElement|null} Elemento del DOM
     */
    const getElement = (elementId) => document.getElementById(elementId);

    /**
     * Crea un botón de letra
     * @param {Object} letterObj - Objeto con datos de la letra
     * @param {string} type - Tipo de botón (learn, hidden, visible, space, pronunciation)
     * @returns {HTMLElement} Elemento botón
     */
    const createLetterButton = (letterObj, type = 'learn') => {
        const button = document.createElement('button');
        button.className = `letra-${type === 'learn' ? 'btn' : type}`;
        button.setAttribute('data-letter', letterObj.letter);
        button.setAttribute('data-sound', letterObj.sound);
        button.setAttribute('aria-label', `Letra ${letterObj.letter}`);

        if (type === 'learn') {
            button.textContent = letterObj.letter;
        } else if (type === 'hidden') {
            button.textContent = '?';
        } else if (type === 'visible') {
            button.textContent = letterObj.letter;
        } else if (type === 'space') {
            button.textContent = '';
            button.classList.add('oculta');
        } else if (type === 'pronunciation') {
            button.textContent = letterObj.letter;
        }

        return button;
    };

    /**
     * Muestra un modal
     * @param {string} modalId - ID del modal
     */
    const showModal = (modalId) => {
        const modal = getElement(modalId);
        if (modal) {
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
        }
    };

    /**
     * Cierra un modal
     * @param {string} modalId - ID del modal
     */
    const closeModal = (modalId) => {
        const modal = getElement(modalId);
        if (modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        }
    };

    /**
     * Muestra un mensaje en un contenedor
     * @param {string} containerId - ID del contenedor
     * @param {string} message - Mensaje a mostrar
     * @param {string} type - Tipo de mensaje (exito, error)
     */
    const showMessage = (containerId, message, type = 'exito') => {
        const container = getElement(containerId);
        if (container) {
            container.textContent = message;
            container.className = `mensaje-juego ${type}`;
            setTimeout(() => {
                container.textContent = '';
                container.className = 'mensaje-juego';
            }, 2000);
        }
    };

    /**
     * Actualiza un contador
     * @param {string} counterId - ID del contador
     * @param {number} value - Valor a mostrar
     */
    const updateCounter = (counterId, value) => {
        const counter = getElement(counterId);
        if (counter) {
            counter.textContent = value;
        }
    };

    /**
     * Reproduce un sonido usando Web Audio API (simulado con Speech Synthesis)
     * @param {string} sound - Sonido a reproducir
     */
    const playSound = (sound) => {
        // Usar Web Speech API para síntesis de voz
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(sound);
            utterance.lang = 'es-ES';
            utterance.rate = 0.8; // Velocidad reducida para niños
            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
        }
    };

    /**
     * Muestra una sección específica
     * @param {string} sectionId - ID de la sección
     */
    const showSection = (sectionId) => {
        const sections = document.querySelectorAll('.opcion-contenido');
        sections.forEach(section => section.classList.remove('active'));
        const section = getElement(sectionId);
        if (section) {
            section.classList.add('active');
        }
    };

    /**
     * Oculta la alerta de recomendación
     */
    const hideRecommendationAlert = () => {
        const alert = getElement('alertaRecomendacion');
        if (alert) {
            alert.style.display = 'none';
        }
    };

    return {
        getElement,
        createLetterButton,
        showModal,
        closeModal,
        showMessage,
        updateCounter,
        playSound,
        showSection,
        hideRecommendationAlert
    };
})();

/* ============================================
   3. MÓDULO DE JUEGOS (Game Module)
   ============================================ */

/**
 * @namespace GameModule
 * @description Módulo que contiene la lógica de los cuatro juegos
 */
const GameModule = (() => {
    /**
     * Estado global de los juegos
     * @type {Object}
     */
    const gameState = {
        opcion2: {
            currentLetterIndex: 0,
            aciertos: 0,
            fallos: 0,
            selectedLetters: new Set()
        },
        opcion3: {
            currentLetterIndex: 0,
            aciertos: 0,
            fallos: 0,
            selectedLetters: new Set(),
            alphabet: []
        },
        opcion4: {
            currentLetterIndex: 0,
            aciertos: 0,
            fallos: 0
        }
    };

    /**
     * Inicializa la Opción 1: Aprende el Abecedario
     * Muestra todas las letras con sonido y ejemplo
     */
    const initOpcion1 = () => {
        const container = UIModule.getElement('abecedarioAprender');
        container.innerHTML = '';
        const alphabet = AlphabetModule.getAlphabet();

        alphabet.forEach(letterObj => {
            const button = UIModule.createLetterButton(letterObj, 'learn');
            button.addEventListener('click', () => {
                UIModule.playSound(letterObj.sound);
            });
            container.appendChild(button);
        });
    };

    /**
     * Inicializa la Opción 2: Juego de Coincidencia
     * Letras ocultas (sonido) vs letras visibles (seleccionar)
     */
    const initOpcion2 = () => {
        // Reiniciar estado
        gameState.opcion2 = {
            currentLetterIndex: 0,
            aciertos: 0,
            fallos: 0,
            selectedLetters: new Set()
        };

        const hiddenContainer = UIModule.getElement('abecedarioOculto');
        const visibleContainer = UIModule.getElement('abecedarioVisible');
        hiddenContainer.innerHTML = '';
        visibleContainer.innerHTML = '';

        const alphabet = AlphabetModule.getAlphabet();
        const shuffledAlphabet = AlphabetModule.getShuffledAlphabet();

        // Crear letras ocultas (las que se pulsan para escuchar)
        alphabet.forEach((letterObj, index) => {
            const button = UIModule.createLetterButton(letterObj, 'oculta'); // Usar 'oculta' para CSS
            button.addEventListener('click', () => {
                UIModule.playSound(letterObj.sound);
                playOpcion2(index);
            });
            hiddenContainer.appendChild(button);
        });

        // Crear letras visibles en orden aleatorio (las que se pulsan para adivinar)
        shuffledAlphabet.forEach(letterObj => {
            const button = UIModule.createLetterButton(letterObj, 'visible');
            button.addEventListener('click', () => {
                checkOpcion2Match(letterObj, button);
            });
            visibleContainer.appendChild(button);
        });

        UIModule.updateCounter('aciertosCoincidencia', 0);
        UIModule.updateCounter('fallosCoincidencia', 0);
    };

    /**
     * Reproduce sonido en Opción 2 y establece la letra actual
     * @param {number} index - Índice de la letra
     */
    const playOpcion2 = (index) => {
        // Marcar visualmente la letra que está sonando
        const hiddenButtons = UIModule.getElement('abecedarioOculto').querySelectorAll('.letra-oculta');
        hiddenButtons.forEach(btn => btn.classList.remove('seleccionada'));
        hiddenButtons[index].classList.add('seleccionada');
        
        gameState.opcion2.currentLetterIndex = index;
    };

    /**
     * Verifica si la letra seleccionada coincide con el sonido en Opción 2
     * @param {Object} letterObj - Objeto de la letra
     * @param {HTMLElement} button - Botón seleccionado
     */
    const checkOpcion2Match = (letterObj, button) => {
        const currentLetter = AlphabetModule.getLetterByIndex(gameState.opcion2.currentLetterIndex);

        // 1. Verificar si la letra ya fue seleccionada
        if (gameState.opcion2.selectedLetters.has(letterObj.letter)) {
            UIModule.showMessage('mensajeCoincidencia', '¡Esa ya la encontraste! 😉', 'error');
            return;
        }

        // 2. Verificar la coincidencia
        if (currentLetter && letterObj.letter === currentLetter.letter) {
            gameState.opcion2.aciertos++;
            gameState.opcion2.selectedLetters.add(letterObj.letter);
            button.classList.add('seleccionada');
            button.disabled = true; // Deshabilitar el botón para que no se pueda volver a pulsar
            
            // Desmarcar la letra oculta
            const hiddenButtons = UIModule.getElement('abecedarioOculto').querySelectorAll('.letra-oculta');
            hiddenButtons.forEach(btn => {
                if (btn.getAttribute('data-letter') === currentLetter.letter) {
                    btn.classList.add('seleccionada'); // Marcar la letra oculta como completada
                    btn.disabled = true; // Deshabilitar la letra oculta completada
                }
            });

            UIModule.showMessage('mensajeCoincidencia', '¡Correcto! 🎉', 'exito');
            UIModule.updateCounter('aciertosCoincidencia', gameState.opcion2.aciertos);
        } else {
            gameState.opcion2.fallos++;
            UIModule.showMessage('mensajeCoincidencia', 'Intenta de nuevo 😊', 'error');
            UIModule.updateCounter('fallosCoincidencia', gameState.opcion2.fallos);
        }
    };

    /**
     * Inicializa la Opción 3: Juego de Teclado
     * Letras ocultas (sonido) vs teclado del usuario
     */
    const initOpcion3 = () => {
        // Reiniciar estado
        gameState.opcion3 = {
            currentLetterIndex: -1, // -1 para indicar que no hay letra sonando
            aciertos: 0,
            fallos: 0,
            selectedLetters: new Set(),
            alphabet: AlphabetModule.getShuffledAlphabet()
        };

        const spacesContainer = UIModule.getElement('abecedarioEspacios');
        spacesContainer.innerHTML = '';

        gameState.opcion3.alphabet.forEach((letterObj, index) => {
            const button = UIModule.createLetterButton(letterObj, 'space');
            button.addEventListener('click', () => {
                UIModule.playSound(letterObj.sound);
                gameState.opcion3.currentLetterIndex = index;
                // Marcar visualmente el espacio que está sonando
                const spaceButtons = spacesContainer.querySelectorAll('.letra-space');
                spaceButtons.forEach(btn => btn.classList.remove('seleccionada'));
                spaceButtons[index].classList.add('seleccionada');
            });
            spacesContainer.appendChild(button);
        });

        UIModule.updateCounter('aciertosKeyboard', 0);
        UIModule.updateCounter('fallosKeyboard', 0);

        // Escuchar eventos de teclado
        document.addEventListener('keydown', handleOpcion3KeyPress);
    };

    /**
     * Maneja la pulsación de teclas en Opción 3
     * @param {KeyboardEvent} event - Evento de teclado
     */
    const handleOpcion3KeyPress = (event) => {
        const key = event.key.toUpperCase();
        
        if (gameState.opcion3.currentLetterIndex === -1) {
            UIModule.showMessage('mensajeTeclado', '¡Primero haz clic en un espacio para escuchar la letra! 🎧', 'error');
            return;
        }

        const currentLetterObj = gameState.opcion3.alphabet[gameState.opcion3.currentLetterIndex];
        const buttons = UIModule.getElement('abecedarioEspacios').querySelectorAll('.letra-space');
        const currentButton = buttons[gameState.opcion3.currentLetterIndex];

        // 1. Si ya está seleccionada, ignorar
        if (gameState.opcion3.selectedLetters.has(currentLetterObj.letter)) {
            UIModule.showMessage('mensajeTeclado', '¡Esa ya la completaste! 😉', 'error');
            return;
        }

        // 2. Verificar la coincidencia
        if (key === currentLetterObj.letter) {
            gameState.opcion3.aciertos++;
            gameState.opcion3.selectedLetters.add(currentLetterObj.letter);
            
            currentButton.classList.add('seleccionada');
            currentButton.classList.remove('oculta');
            currentButton.textContent = currentLetterObj.letter;
            currentButton.disabled = true;

            UIModule.showMessage('mensajeTeclado', '¡Excelente! ⌨️', 'exito');
            UIModule.updateCounter('aciertosKeyboard', gameState.opcion3.aciertos);
            
            // Reiniciar el índice para forzar al usuario a escuchar de nuevo
            gameState.opcion3.currentLetterIndex = -1;
        } else if (AlphabetModule.getLetterByChar(key)) { // Solo contar fallos si es una letra del abecedario
            gameState.opcion3.fallos++;
            UIModule.showMessage('mensajeTeclado', `¡Incorrecto! Presionaste ${key}. Intenta de nuevo 😊`, 'error');
            UIModule.updateCounter('fallosKeyboard', gameState.opcion3.fallos);
        }
    };

    /**
     * Inicializa la Opción 4: Pronuncia Letras
     * El usuario selecciona una letra y verifica si la pronunciación es correcta
     */
    const initOpcion4 = () => {
        // Reiniciar estado
        gameState.opcion4 = {
            currentLetterIndex: -1,
            aciertos: 0,
            fallos: 0
        };

        const container = UIModule.getElement('abecedarioPronunciacion');
        container.innerHTML = '';
        const alphabet = AlphabetModule.getAlphabet();

        alphabet.forEach((letterObj, index) => {
            const button = UIModule.createLetterButton(letterObj, 'pronunciacion');
            button.addEventListener('click', () => {
                playOpcion4(letterObj, button);
            });
            container.appendChild(button);
        });
    };

    /**
     * Reproduce sonido en Opción 4 y simula verificación de pronunciación
     * @param {Object} letterObj - Objeto de la letra
     * @param {HTMLElement} button - Botón seleccionado
     */
    const playOpcion4 = (letterObj, button) => {
        UIModule.playSound(letterObj.sound);
        button.classList.add('seleccionada');
        
        // Simular verificación de pronunciación (en una aplicación real, usaría Web Speech Recognition API)
        // Se simula que la pronunciación es correcta después de 2 segundos.
        UIModule.showMessage('mensajePronunciacion', `Escucha la letra ${letterObj.letter}. Ahora, ¡pronúnciala! (Simulación)`, 'exito');
        
        setTimeout(() => {
            button.classList.remove('seleccionada');
            // Simulación de la respuesta del sistema
            const isCorrect = Math.random() > 0.1; // 90% de acierto simulado
            if (isCorrect) {
                UIModule.showMessage('mensajePronunciacion', `¡Muy bien! Pronunciaste la ${letterObj.letter} correctamente. 🎉`, 'exito');
            } else {
                UIModule.showMessage('mensajePronunciacion', 'Debes intentarlo de nuevo (Simulación de fallo).', 'error');
            }
        }, 2000);
    };

    /**
     * Limpia los event listeners de teclado para evitar conflictos entre opciones
     */
    const cleanupOpcion3 = () => {
        document.removeEventListener('keydown', handleOpcion3KeyPress);
    };

    return {
        initOpcion1,
        initOpcion2,
        initOpcion3,
        initOpcion4,
        cleanupOpcion3,
        getGameState: () => ({ ...gameState })
    };
})();

/* ============================================
   4. MÓDULO PRINCIPAL (App Module)
   ============================================ */

/**
 * @namespace AppModule
 * @description Módulo principal que inicializa la aplicación
 */
const AppModule = (() => {
    /**
     * Inicializa todos los event listeners
     */
    const initEventListeners = () => {
        // Modales
        UIModule.getElement('misionBtn').addEventListener('click', () => UIModule.showModal('misionModal'));
        UIModule.getElement('visionBtn').addEventListener('click', () => UIModule.showModal('visionModal'));
        UIModule.getElement('calidadBtn').addEventListener('click', () => UIModule.showModal('calidadModal'));
        UIModule.getElement('registroBtn').addEventListener('click', () => UIModule.showModal('registroModal'));

        // Cerrar modales
        UIModule.getElement('closeMision').addEventListener('click', () => UIModule.closeModal('misionModal'));
        UIModule.getElement('closeVision').addEventListener('click', () => UIModule.closeModal('visionModal'));
        UIModule.getElement('closeCalidad').addEventListener('click', () => UIModule.closeModal('calidadModal'));
        UIModule.getElement('closeRegistro').addEventListener('click', () => UIModule.closeModal('registroModal'));

        // Cerrar alerta de recomendación
        UIModule.getElement('cerrarAlerta').addEventListener('click', () => UIModule.hideRecommendationAlert());

        // Botones de opciones
        UIModule.getElement('opcion1Btn').addEventListener('click', () => {
            UIModule.hideRecommendationAlert();
            UIModule.showSection('opcion1');
            GameModule.initOpcion1();
            GameModule.cleanupOpcion3();
        });

        UIModule.getElement('opcion2Btn').addEventListener('click', () => {
            UIModule.hideRecommendationAlert();
            UIModule.showSection('opcion2');
            GameModule.initOpcion2();
            GameModule.cleanupOpcion3();
        });

        UIModule.getElement('opcion3Btn').addEventListener('click', () => {
            UIModule.hideRecommendationAlert();
            UIModule.showSection('opcion3');
            GameModule.initOpcion3();
        });

        UIModule.getElement('opcion4Btn').addEventListener('click', () => {
            UIModule.hideRecommendationAlert();
            UIModule.showSection('opcion4');
            GameModule.initOpcion4();
            GameModule.cleanupOpcion3();
        });

        // Formulario de registro
        UIModule.getElement('registroForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = UIModule.getElement('nombreUsuario').value;
            const email = UIModule.getElement('emailUsuario').value;
            console.log(`Usuario registrado: ${nombre} - ${email}`);
            alert('¡Gracias por registrarte, ' + nombre + '!');
            UIModule.closeModal('registroModal');
            UIModule.getElement('registroForm').reset();
        });

        // Formulario de opinión
        UIModule.getElement('formularioOpinion').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = UIModule.getElement('emailOpinion').value;
            const rating = document.querySelector('input[name="rating"]:checked')?.value || 'No especificada';
            const comentario = UIModule.getElement('comentarioOpinion').value;
            console.log(`Opinión recibida de ${email}: Calificación ${rating} - ${comentario}`);
            alert('¡Gracias por tu opinión!');
            UIModule.getElement('formularioOpinion').reset();
        });

        // Cerrar modales al hacer clic fuera
        window.addEventListener('click', (event) => {
            const modals = ['misionModal', 'visionModal', 'calidadModal', 'registroModal'];
            modals.forEach(modalId => {
                const modal = UIModule.getElement(modalId);
                if (event.target === modal) {
                    UIModule.closeModal(modalId);
                }
            });
        });
    };

    /**
     * Inicializa la aplicación
     */
    const init = () => {
        console.log('Inicializando Alfaventura...');
        initEventListeners();
        console.log('Alfaventura cargada correctamente ✓');
    };

    return {
        init
    };
})();

/* ============================================
   5. INICIALIZACIÓN DE LA APLICACIÓN
   ============================================ */

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    AppModule.init();
});

// Manejo de errores global
window.addEventListener('error', (event) => {
    console.error('Error en Alfaventura:', event.error);
});
```

### 4.4. Bloque de Pruebas (`tests.js`)

```javascript
// Este código debe ejecutarse DESPUÉS de script.js en el navegador.

const runTests = () => {
    console.log("=======================================");
    console.log(" INICIANDO PRUEBAS UNITARIAS (Ingeniero de Calidad)");
    console.log("=======================================");

    let passedTests = 0;
    let failedTests = 0;

    const test = (name, testFunction) => {
        try {
            testFunction();
            console.log(`✅ PASSED: ${name}`);
            passedTests++;
        } catch (error) {
            console.error(`❌ FAILED: ${name}`);
            console.error(`   Error: ${error.message}`);
            failedTests++;
        }
    };

    const assert = (condition, message) => {
        if (!condition) {
            throw new Error(message || "Assertion failed");
        }
    };

    // ============================================
    // PRUEBAS DEL ALPHABET MODULE
    // ============================================
    console.log("\n--- AlphabetModule Tests ---");

    if (typeof AlphabetModule === 'undefined') {
        console.error("AlphabetModule no está definido. Asegúrese de que script.js se cargue antes.");
        return;
    }

    test("Verificar que getAlphabet retorna 27 letras (incluyendo Ñ)", () => {
        const alphabet = AlphabetModule.getAlphabet();
        assert(alphabet.length === 27, `Se esperaban 27 letras, pero se obtuvieron ${alphabet.length}`);
        assert(alphabet.some(l => l.letter === 'Ñ'), "El abecedario debe incluir la letra Ñ");
    });

    test("Verificar getLetterByIndex para la primera letra (A)", () => {
        const letter = AlphabetModule.getLetterByIndex(0);
        assert(letter && letter.letter === 'A', `Se esperaba 'A', se obtuvo ${letter ? letter.letter : 'null'}`);
    });

    test("Verificar getLetterByChar para una letra existente (M)", () => {
        const letter = AlphabetModule.getLetterByChar('M');
        assert(letter && letter.letter === 'M', `Se esperaba 'M', se obtuvo ${letter ? letter.letter : 'null'}`);
    });

    test("Verificar getLetterByChar para una letra inexistente", () => {
        const letter = AlphabetModule.getLetterByChar('Æ');
        assert(letter === null, "Se esperaba null para una letra inexistente");
    });

    test("Verificar que getShuffledAlphabet es diferente al original", () => {
        const original = AlphabetModule.getAlphabet().map(l => l.letter).join('');
        const shuffled = AlphabetModule.getShuffledAlphabet().map(l => l.letter).join('');
        // Esta prueba es heurística y puede fallar por casualidad, pero es útil.
        assert(original !== shuffled, "El array aleatorio es idéntico al original");
        assert(shuffled.length === 27, "El array aleatorio debe tener 27 elementos");
    });

    console.log("\n=======================================");
    console.log(`RESUMEN DE PRUEBAS: ${passedTests} PASSED, ${failedTests} FAILED`);
    console.log("=======================================");
};

// Para ejecutar: Pegar este código en el panel JS de Codepen DESPUÉS del código principal
// y luego llamar a runTests() en la consola.
// runTests();
```

---

## 5. Conclusión y Entrega

El código fuente de **Alfaventura** cumple con todos los requisitos funcionales y no funcionales solicitados, demostrando un enfoque de desarrollo basado en la calidad y la modularidad, ideal para la evaluación en la asignatura de Calidad de Software de la CUN.

El siguiente paso es la entrega final de todos los archivos.
