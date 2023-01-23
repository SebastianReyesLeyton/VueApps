import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Counter );
    })

    test('Should to be match with snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    });

    test('h2 must to have the default value "Counter"', () => {
        expect( wrapper.find('h2').exists() ).toBeTruthy();
        
        /** Seek the first */
        const h2 = wrapper.find('h2')
        console.log(h2.text())

        expect(h2.text()).toBe('Counter');
    });

    test('The default value must be 100 in p', () => {
        const value = wrapper.find('[data-testid="counter"]').text();
        expect( value.split(' ')[0] ).toBe('100');

    });

    test('Increase counter value one unit and decrease two times', async () => {
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button');

        await increaseBtn.trigger('click');    
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testid="counter"]').text();
        expect( value.split(' ')[0] ).toBe('99');

    });

    test('Default value', () => {
        const { start } = wrapper.props();
        const value = wrapper.find('[data-testid="counter"]').text();
        expect( Number(value) ).toBe( start );
    })

});