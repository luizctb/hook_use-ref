// useRef não tem a reenderização igual ao useState, ver no console do navegador
"use client"

import { useState, useEffect, useRef } from "react";


function References() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const numberRef = useRef(0); // referência numberRef

    const buttonRef = useRef(); // referência buttonRef

    const oldCountRef = useRef(); // referência oldCountRef
    
    // Não renderiza o componente
    useEffect(() => {
        //setNumber((prevNumber) => prevNumber + 10);
        numberRef.current = Math.random()
    });

    // Referência para elementos de DOM
    useEffect(() => {
        console.log(buttonRef.current.click()); // elemento do DOM e não mais um valor
    }, []);

    // Referência do valor anterior
    useEffect(() => {
        oldCountRef.current = count;
    }, [count]);

    return(
        <div>
            <h1>O number é: {number}</h1>            
            <h1>O contador é: {count}</h1>
            <h2>O contador anterior era: {oldCountRef.current}</h2>
            <button 
                ref={buttonRef}
                onClick={() => 
                setCount((prevCount) => prevCount + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Adicionar
            </button>
            <h1>O number do useEffect é: {numberRef.current}</h1>

        </div>
    );
}

export default References;

// ##################################################################################

// Código base de inicialização

// function References() {
//     const [count, setCount] = useState(0);

//     console.log("Renderizou");

//     return(
//         <div>
//             <h1>O contador é: {count}</h1>
//             <button 
//                 onClick={() => 
//                 setCount((prevCount) => prevCount + 1)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Adicionar
//             </button>
//         </div>
//     );
// }

// export default References;

// ##################################################################################

// Função que será ativada toda vez que tiver uma renderização do componente. Cria uma variável (const numberRef = useRef(0)). Gera um número aleatório e não o looping infinito.

// function References() {
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(0);

//     const numberRef = useRef(0);

//     console.log("Renderizou");

//     console.log(numberRef);

//     useEffect(() => {
//         //setNumber((prevNumber) => prevNumber + 10);
//         numberRef.current = Math.random()
//     });

//     return(
//         <div>
//             <h1>O number é: {number}</h1>
//             <h1>O number do useEffect é: {numberRef.current}</h1>
//             <h1>O contador é: {count}</h1>
//             <button 
//                 onClick={() => 
//                 setCount((prevCount) => prevCount + 1)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Adicionar
//             </button>
//         </div>
//     );
// }

// export default References;

// ##################################################################################

// Referência de simulação pela programção e não pelo usuário. O button ref, tem o atributo ref que aceita uma estância um valor do hook useRef e vai no button. Simular um click que toda vez que entrar na tela do componente clicar no button para iniciar com um valor, fazer um useEffect que roa uma vez e array de depência vazio.

// function References() {
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(0);

//     const numberRef = useRef(0);

//     const buttonRef = useRef();
//     // Não renderiza o componente
//     useEffect(() => {
//         //setNumber((prevNumber) => prevNumber + 10);
//         numberRef.current = Math.random()
//     });

//     // Referência para elementos de DOM
//     useEffect(() => {
//         console.log(buttonRef.current.click()); // elemento do DOM e não mais um valor
//     }, [])

//     return(
//         <div>
//             <h1>O number é: {number}</h1>
//             <h1>O number do useEffect é: {numberRef.current}</h1>
//             <h1>O contador é: {count}</h1>
//             <button 
//                 ref={buttonRef}
//                 onClick={() => 
//                 setCount((prevCount) => prevCount + 1)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Adicionar
//             </button>
//         </div>
//     );
// }

// export default References;

// ##################################################################################

// Usar use Ref como refência do valor anterior, para salvar valor anterior. Exemplo referência para o número anterior que estava no count. Usado para mapear valor antigo.
