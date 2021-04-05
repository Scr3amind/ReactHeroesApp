import { mount, shallow } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";
import "../../setupTest";

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar login si no se está autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            dispatch : jest.fn(),
            user: {
                name: 'Isaac',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper.find('nav').exists()).toBe(true);
    })
    
    
    
})
