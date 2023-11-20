export function limpiarMarkdown(textoMarkdown: string): string {
    // Eliminar imágenes
    const sinImagenes = textoMarkdown.replace(/!\[.*?\]\(.*?\)/g, '');
  
    // Eliminar cuadros de código
    const sinCuadrosCodigo = sinImagenes.replace(/```[\s\S]*?```/g, '');
  
    // Eliminar otros elementos de Markdown
    const sinMarkdown = sinCuadrosCodigo.replace(/[*_~`]|^#+\s+/gm, '');
  
    // Eliminar enlaces
    const sinEnlaces = sinMarkdown.replace(/\[([^\]]*)\]\(.*?\)/g, '$1');
  
    // Eliminar formato
    const sinFormato = sinEnlaces.replace(/(\*\*|__|\*|_)/g, '');
  
    // Eliminar líneas vacías
    const sinLineasVacias = sinFormato.replace(/^\s*[\r\n]/gm, '');
  
    return sinLineasVacias.trim();
  }
  
  // Ejemplo de uso:
//   const markdownEjemplo = `
//   # Título
  
//   Este es un **ejemplo** de [Markdown](https://es.wikipedia.org/wiki/Markdown).
  
//   ![Imagen](imagen.jpg)
  
//   \`\`\`typescript
//   console.log('Hola, mundo!');
//   \`\`\`
  
//   Otro *párrafo*.
  
//   [Enlace sin formato](https://www.ejemplo.com)
//   `;
  
//   const textoNormal = limpiarMarkdown(markdownEjemplo);
//   console.log(textoNormal);
  