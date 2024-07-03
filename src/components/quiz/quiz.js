
// Calcular la cantidad de letras que hay
const cadena = "parangaricutirimicuaro";

/* const cantidadDeLetras = (letra, frase) => {
    let letrasEncontradas = 0;
    const fraseEnMinuscula = frase.toLowerCase();
    const letraMinuscula = letra.toLowerCase();

    // TODO realizar la búsqueda de letras.
    for (let i = 0; i < fraseEnMinuscula.length; i++) {
        const element = fraseEnMinuscula[i];
        if (element==letraMinuscula) {
            letrasEncontradas++;            
        }
        
    }

    return letrasEncontradas;
}
 */

const cantidadDeLetras = (charToFind,phrase)=>{
    const chars =  phrase.toLowerCase().split("");
    const lowerCharToFind = charToFind.toLowerCase();
    const foundChars = chars.filter( char => char === lowerCharToFind );
    return foundChars.length;
}

// exportacion nombrada
 export { cadena };

// exportación por default
export default cantidadDeLetras;

