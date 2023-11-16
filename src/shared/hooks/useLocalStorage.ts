"useclient"
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Obtiene el valor actual del localStorage o utiliza el valor inicial proporcionado
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Crea un estado local para el valor
  const [value, setValue] = useState<T>(initial);

  // Almacena el valor en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
