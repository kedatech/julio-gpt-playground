"useclient"
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Verifica si el código se está ejecutando en el lado del cliente antes de usar localStorage
  const isClient = typeof window !== 'undefined';

  // Obtiene el valor actual del localStorage o utiliza el valor inicial proporcionado
  const storedValue = isClient ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Crea un estado local para el valor
  const [value, setValue] = useState<T>(initial);

  // Almacena el valor en localStorage cuando cambia (solo si se está ejecutando en el lado del cliente)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isClient]);

  return [value, setValue] as const;
}
