import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';



describe('Counter Component', () => {

    test('Should to be match with snapshot', () => {
        const wrapper = shallowMount( Counter );
        expect( wrapper.html() ).toMatchSnapshot();
    });

    test('h2 must to have the default value "Counter"', () => {
        const wrapper = shallowMount( Counter );

        expect( wrapper.find('h2').exists() ).toBeTruthy();
        
        /** Seek the first */
        const h2 = wrapper.find('h2')
        console.log(h2.text())

        expect(h2.text()).toBe('Counter');
    });

});