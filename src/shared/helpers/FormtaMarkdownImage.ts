const direccionDelHost = "https://julio-gpt-backend.onrender.com/images";

export function formatMarkdownImage(markdown: string): string {
    // Expresión regular para buscar imágenes en formato ![alt](src)
    const regex = /!\[.*?\]\((.*?)\)/g;

    // Reemplazar las URLs de las imágenes
    const nuevoMarkdown = markdown.replace(regex, (_, src) => {
        // Verificar si la URL tiene el formato esperado
        if (src.startsWith("../images/")) {
            // Construir la nueva URL
            const nuevaURL = `${direccionDelHost}/${src.replace("../images/", "")}`;
            // Devolver la nueva URL formateada en el mismo formato markdown
            return `![alt](${nuevaURL})`;
        } else {
            // Si la URL no cumple con el formato esperado, devolver la original
            return `![alt](${src})`;
        }
    });

    return nuevoMarkdown;
}

// Ejemplo de uso
// const markdownOriginal = `
// # Ejemplo de Markdown

// ¡Hola! Esto es un ejemplo de un markdown con imágenes.

// ![Imagen 1](../images/saber-saberser-saberhacer.png)

// ![Imagen 2](../images/otra-imagen.png)
// `;

// const markdownModificado = formatMarkdownImage(markdownOriginal);

// console.log(markdownModificado);
