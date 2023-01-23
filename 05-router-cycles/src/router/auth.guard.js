const isAuthenticateGuard = async ( to, from, next ) => {
    return new Promise( () => {
        const r = Math.random() * 100;

        if ( r > 50 ) {
            console.log('Autenticado');
            next();
        } else {
            console.log('Bloqueado');
            next({ name: 'pokemon-home' });
        }
    });
}

export default isAuthenticateGuard;