import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import '../../setupTest';

describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: true,
            name: 'Isaac'
        }
    }
    
    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();    
    })
    
    
})
