import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';



describe('Counter Component', () => {

    test('Should to be match with snapshot', () => {

        const wrapper = shallowMount( Counter );

        expect( wrapper.html() ).toMatchSnapshot();
    });

});