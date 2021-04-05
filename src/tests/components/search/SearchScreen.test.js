import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router';
import { SearchScreen } from '../../../components/search/SearchScreen';
import '../../../setupTest';

describe('Pruebas en <SearchScreen />', () => {
    
    test('debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar a batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman145']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.html().includes('No Result')).toBe(true);
    })

    test('debe llamar el push del history ', () => {
        const history = {
            push: jest.fn(),
            listen: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>

                <Route path="/search" component={() => <SearchScreen history={history} />}/>
        
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target:{
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(history.push).toHaveBeenCalledWith('?q=batman');


    })
    
    
    
    

})
