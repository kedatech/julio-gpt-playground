export function formatoPersonalizado(fecha: Date): string {
  const ahora = new Date();
  const diferencia = Math.floor((ahora.getTime() - fecha.getTime()) / 1000); // Diferencia en segundos

  if (diferencia < 60) {
      return `Hace ${diferencia} segundos`;
  } else if (diferencia < 3600) {
      const minutos = Math.floor(diferencia / 60);
      return `Hace ${minutos} minutos`;
  } else if (diferencia < 86400) {
      const horas = Math.floor(diferencia / 3600);
      return `Hace ${horas} horas`;
  } else if (
      fecha.getDate() === ahora.getDate() - 1
  ) {
      return `Ayer`;
  } else if (
      fecha.getDate() === ahora.getDate() - 2
  ) {
      return 'Antier';
  } else {
      const opcionesDeFecha = { year: 'numeric', month: 'long', day: 'numeric' };
      return fecha.toLocaleDateString('es-ES', opcionesDeFecha);
  }
}