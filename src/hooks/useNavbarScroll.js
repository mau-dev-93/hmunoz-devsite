/**
 * Hook personalizado para manejar navegación de navbar con detección automática de secciones
 * 
 * Funcionalidades:
 * - Scroll suave programático al hacer click en items del navbar
 * - Detección automática de la sección activa durante scroll manual
 * - Prevención de conflictos entre scroll programático y manual
 * - Algoritmo estable que evita temblores en la selección
 * 
 * @param {Array} sections - Array de objetos con {id, label} de las secciones
 * @param {number} offsetTop - Altura del navbar fijo (default: 64px)
 * @returns {Object} { activeSection: number, scrollToSection: function }
 * 
 * @example
 * const SECTIONS = [
 *   { id: "hero_section", label: "Inicio" },
 *   { id: "about_section", label: "Sobre mí" }
 * ];
 * 
 * const { activeSection, scrollToSection } = useNavbarScroll(SECTIONS, 64);
 * 
 * // En el JSX:
 * <Tabs value={activeSection}>
 *   {SECTIONS.map((section, index) => (
 *     <Tab onClick={() => scrollToSection(section.id, index)} />
 *   ))}
 * </Tabs>
 */

import { useState, useEffect, useCallback, useRef } from 'react';

export const useNavbarScroll = (sections, offsetTop = 64) => {
    const [activeSection, setActiveSection] = useState(0);
    const isScrollingRef = useRef(false);
    const timeoutRef = useRef(null);
    const activeSectionRef = useRef(0);

    // Mantener la referencia actualizada
    useEffect(() => {
        activeSectionRef.current = activeSection;
    }, [activeSection]);

    // Función para scroll suave nativo
    const scrollToSection = useCallback((sectionId, index) => {
        // Cancelar timeout anterior si existe
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Establecer inmediatamente la sección activa y el flag de scrolling
        setActiveSection(index);
        isScrollingRef.current = true;

        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offsetTop;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Timeout más largo para liberar el flag de scrolling
            timeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
            }, 1500);
        }
    }, [offsetTop]);

    // Intersection Observer para detectar sección activa (temporalmente desactivado)
    useEffect(() => {
        // Comentamos temporalmente para debug
        return () => { };
    }, [sections, offsetTop]);

    // Backup scroll listener en caso de que Intersection Observer no funcione bien
    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            if (isScrollingRef.current) return;

            // Debounce para evitar demasiadas actualizaciones
            if (scrollTimeout) clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                // Buscar la sección que está más cerca del top del navbar
                let bestMatch = { index: 0, distance: Infinity };

                sections.forEach((section, index) => {
                    const element = document.getElementById(section.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const elementTop = rect.top;
                        const elementBottom = rect.bottom;

                        // La sección está visible si alguna parte está en el viewport
                        if (elementBottom > offsetTop && elementTop < window.innerHeight) {
                            // Calcular la distancia al punto ideal (justo después del navbar)
                            const idealPosition = offsetTop + 50; // 50px después del navbar
                            const distance = Math.abs(elementTop - idealPosition);

                            // Si esta sección está más cerca del punto ideal, es la mejor opción
                            if (distance < bestMatch.distance) {
                                bestMatch = { index, distance };
                            }

                            // También considerar si la sección está completamente por encima del navbar
                            if (elementTop <= offsetTop && elementBottom > offsetTop + 100) {
                                bestMatch = { index, distance: 0 }; // Prioridad máxima
                            }
                        }
                    }
                });

                if (bestMatch.index !== activeSectionRef.current) {
                    setActiveSection(bestMatch.index);
                }
            }, 50); // Debounce de 50ms
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [sections, offsetTop]);

    return { activeSection, scrollToSection };
};