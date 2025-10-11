// import { useEffect, useRef, useState } from 'react';

// function useScrollReveal(options = { threshold: 0.1, rootMargin: "0px" }) {
//   // 1. O estado para saber se o elemento está visível
//   const [isVisible, setIsVisible] = useState(false);

//   // 2. A referência ao elemento DOM que queremos observar
//   const ref = useRef(null);

//   useEffect(() => {
//     const element = ref.current;

//     // 3. A lógica do IntersectionObserver
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Quando o elemento entra na tela, atualiza o estado
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           // 4. Para a observação após o elemento se tornar visível
//           observer.unobserve(element);
//         }
//       },
//       options
//     );

//     // 5. Inicia a observação se o elemento existir
//     if (element) {
//       observer.observe(element);
//     }

//     // 6. Função de limpeza: para de observar quando o componente é desmontado
//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, [options]); // O hook re-executa se as opções mudarem

//   // 7. Retorna a referência e o estado de visibilidade
//   return [ref, isVisible];
// }

// export default useScrollReveal;