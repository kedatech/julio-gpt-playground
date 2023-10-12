/* eslint-disable max-len */
import { RoutesConstants, inmutableConstants, routesContstants } from './constants';

interface SEO {
    title: string;
    description: string;
    keywords: string[];
}

type RouteKey = keyof RoutesConstants;

/** @description Definición de las rutas y sus metadatos de SEO */
const seoByRoute: Record<RouteKey, SEO> = {
    INICIO: {
      title: `${inmutableConstants.NOMBRE} web site`,
      description: 'Hola soy JulioGPT tu asistente en la ESFE',
      keywords: [
        'JulioGPT',
        'Julio IA',
        'Chabot Julio',
        'artificial intelligence',
        'Capybara',
        'Julio Capybara'
      ],
    },
    CHAT: {
      title: `Chatea con ${inmutableConstants.NOMBRE}`,
      description: 'Chatea con JulioGPT y preguntale sobre cualquier tema de la ESFE/AGAPE',
      keywords: [
        'chat',
        'chatbot',
        'asistencia',
        'atención al cliente'
      ]
    },
    DESCARGA: {
      title: `Descarga ${inmutableConstants.NOMBRE} `,
      description: 'Descarga Julio para Android, iOS y Windows',
      keywords: [
        'descargar',
        'juliogpt movil',
        'download',
        'android'
      ]
    },
    SOBRE: {
      title: `Sobre ${inmutableConstants.NOMBRE} `,
      description: 'Conoce mas sobre Julio y como esta desarrollado, sus creadores, como colaborar y mas',
      keywords: [
        'como esta hecho',
        'desarrolladores',
        'about',
        'julio'
      ]
    }
    
};

/**@description Función para obtener los metadatos de SEO de una ruta específica */
export function getSEO(route: RouteKey): SEO | undefined {
    return seoByRoute[route];
}