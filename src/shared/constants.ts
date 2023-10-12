/**Constantes compartidas */
interface Constants {
  readonly NOMBRE: string;
  readonly EMAIL: string;
  readonly DESAROLLADORES: Dev[];
}
interface Dev {
  nombre: string
  github: string
}

export interface RoutesConstants {
  readonly INICIO: string[][];
  readonly CHAT: string[][];
  readonly DESCARGA: string[][];
  readonly SOBRE: string[][];
}
/**
* @description Constantes inmutables de la aplicación
*/

export const inmutableConstants: Constants = {
  NOMBRE: 'JulioGPT',
  EMAIL: 'julio.capybara.gpt@gmail.com',
  DESAROLLADORES:[
    {
      nombre:"Eliseo Arévalo",
      github:"github.com/eliseodesign"
    },
    {
      nombre:"Daniel Rodrigez",
      github:"github.com/arev-dev"
    },
    {
      nombre:"Gabriela Herrera",
      github:"github.com/gaby-herrera"
    }
  ],
};

/**
* @description Constantes de rutas
*/
export const routesContstants: RoutesConstants = {
  INICIO: [
      ['/home', 'Inicio']
  ],
  CHAT: [
      ['/chat', 'Chatea con Julio']
  ],
  DESCARGA:[
    ['/download','Descarga la App']
  ],
  SOBRE:[
    ['/about','Sobre nosotros']
  ]
};