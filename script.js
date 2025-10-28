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
     * Reproduce un sonido usando Web Audio API
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

        // Crear letras ocultas
        alphabet.forEach((letterObj, index) => {
            const button = UIModule.createLetterButton(letterObj, 'hidden');
            button.addEventListener('click', () => {
                UIModule.playSound(letterObj.sound);
                playOpcion2(index);
            });
            hiddenContainer.appendChild(button);
        });

        // Crear letras visibles en orden aleatorio
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
        gameState.opcion2.currentLetterIndex = index;
    };

    /**
     * Verifica si la letra seleccionada coincide con el sonido en Opción 2
     * @param {Object} letterObj - Objeto de la letra
     * @param {HTMLElement} button - Botón seleccionado
     */
    const checkOpcion2Match = (letterObj, button) => {
        const currentLetter = AlphabetModule.getLetterByIndex(gameState.opcion2.currentLetterIndex);

        if (letterObj.letter === currentLetter.letter && !gameState.opcion2.selectedLetters.has(letterObj.letter)) {
            gameState.opcion2.aciertos++;
            gameState.opcion2.selectedLetters.add(letterObj.letter);
            button.classList.add('seleccionada');
            UIModule.showMessage('mensajeCoincidencia', '¡Correcto! 🎉', 'exito');
            UIModule.updateCounter('aciertosCoincidencia', gameState.opcion2.aciertos);
        } else if (!gameState.opcion2.selectedLetters.has(letterObj.letter)) {
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
        gameState.opcion3 = {
            currentLetterIndex: 0,
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
        const currentLetter = gameState.opcion3.alphabet[gameState.opcion3.currentLetterIndex];

        if (key === currentLetter.letter && !gameState.opcion3.selectedLetters.has(currentLetter.letter)) {
            gameState.opcion3.aciertos++;
            gameState.opcion3.selectedLetters.add(currentLetter.letter);
            
            const buttons = UIModule.getElement('abecedarioEspacios').querySelectorAll('button');
            buttons[gameState.opcion3.currentLetterIndex].classList.add('seleccionada');
            buttons[gameState.opcion3.currentLetterIndex].textContent = currentLetter.letter;

            UIModule.showMessage('mensajeTeclado', '¡Excelente! ⌨️', 'exito');
            UIModule.updateCounter('aciertosKeyboard', gameState.opcion3.aciertos);
        } else if (key === currentLetter.letter && gameState.opcion3.selectedLetters.has(currentLetter.letter)) {
            UIModule.showMessage('mensajeTeclado', 'Ya seleccionaste esta letra 😊', 'error');
        } else if (Object.keys(gameState.opcion3.alphabet).some(i => gameState.opcion3.alphabet[i].letter === key)) {
            gameState.opcion3.fallos++;
            UIModule.showMessage('mensajeTeclado', 'Intenta de nuevo 😊', 'error');
            UIModule.updateCounter('fallosKeyboard', gameState.opcion3.fallos);
        }
    };

    /**
     * Inicializa la Opción 4: Pronuncia Letras
     * El usuario selecciona una letra y verifica si la pronunciación es correcta
     */
    const initOpcion4 = () => {
        gameState.opcion4 = {
            currentLetterIndex: 0,
            aciertos: 0,
            fallos: 0
        };

        const container = UIModule.getElement('abecedarioPronunciacion');
        container.innerHTML = '';
        const alphabet = AlphabetModule.getAlphabet();

        alphabet.forEach((letterObj, index) => {
            const button = UIModule.createLetterButton(letterObj, 'pronunciation');
            button.addEventListener('click', () => {
                playOpcion4(letterObj, button);
            });
            container.appendChild(button);
        });
    };

    /**
     * Reproduce sonido en Opción 4 y verifica pronunciación
     * @param {Object} letterObj - Objeto de la letra
     * @param {HTMLElement} button - Botón seleccionado
     */
    const playOpcion4 = (letterObj, button) => {
        UIModule.playSound(letterObj.sound);
        button.classList.add('seleccionada');
        
        // Simular verificación de pronunciación (en una aplicación real, usaría Web Speech Recognition API)
        setTimeout(() => {
            button.classList.remove('seleccionada');
        }, 1000);
    };

    /**
     * Limpia los event listeners de teclado
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
        UIModule.getElement('misionBtn').addEventListener('click', () => {
            UIModule.showModal('misionModal');
        });

        UIModule.getElement('visionBtn').addEventListener('click', () => {
            UIModule.showModal('visionModal');
        });

        UIModule.getElement('calidadBtn').addEventListener('click', () => {
            UIModule.showModal('calidadModal');
        });

        UIModule.getElement('registroBtn').addEventListener('click', () => {
            UIModule.showModal('registroModal');
        });

        // Cerrar modales
        UIModule.getElement('closeMision').addEventListener('click', () => {
            UIModule.closeModal('misionModal');
        });

        UIModule.getElement('closeVision').addEventListener('click', () => {
            UIModule.closeModal('visionModal');
        });

        UIModule.getElement('closeCalidad').addEventListener('click', () => {
            UIModule.closeModal('calidadModal');
        });

        UIModule.getElement('closeRegistro').addEventListener('click', () => {
            UIModule.closeModal('registroModal');
        });

        // Cerrar alerta de recomendación
        UIModule.getElement('cerrarAlerta').addEventListener('click', () => {
            UIModule.hideRecommendationAlert();
        });

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
