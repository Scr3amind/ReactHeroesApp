import { mount } from "enzyme"
import { Navbar } from "../../../components/ui/Navbar"
import { AuthContext } from "../../../auth/AuthContext";
import '../../../setupTest'
import { MemoryRouter, Router } from "react-router";
import { types } from "../../../types/types";

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: true,
            name: 'Isaac'
        }
    }

    afterEach(() => {
        jest.clearAllMocks();
    });

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el campo name que contiene el context', () => {
        expect(wrapper.html().includes(contextValue.user.name)).toBe(true);
    })

    test('debe de llamar el logout y usar history', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith(
            {
                type:types.logout
            }
        );

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
        
    })
    
    
    

    
})
