import React from 'react';
import { mount } from "enzyme";
import { PrivateRoute } from '../../routers/PrivateRoute';
import "../../setupTest";
import { MemoryRouter } from 'react-router';

describe('Pruebas en <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    
    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span> Listo! </span>}
                    {... props}
                />
            </MemoryRouter>
        );
            
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname);

    });

    test('debe de bloquear el componente si no está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span> Listo! </span>}
                    {... props}
                />
            </MemoryRouter>
        );
            
        expect(wrapper.find('span').exists()).toBe(false);
    })
    
    
})
