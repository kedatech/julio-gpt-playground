// "use client"
// import { useState, useEffect } from 'react';

// export function useLocalStorage<T>(key: string, initialValue: T) {
  
//   const [value, setValue] = useState<T>([] as T);
//   useEffect(()=> {
//     const storedValue = localStorage.getItem(key);
//     storedValue ? setValue(JSON.parse(storedValue)) : null
//   }, []) 

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue] as const;
// }
