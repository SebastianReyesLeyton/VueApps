/* Test suite */
describe( 'Example Component', () => {

    test( 'Debe de sar mayor a 10', () => {
        
        /* Arrange */
        let value = 10;

        /* Act */
        value = value + 2;

        /* Assert */
        expect(value).toBeGreaterThan(10);

    });

});