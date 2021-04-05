import { mount, shallow } from "enzyme";
import { Router } from "react-router";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import '../../../setupTest';

describe('Pruebas en <LoginScreen />', () => {

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: false,
        }
    }
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }
    

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <Router history={historyMock}>
                <LoginScreen />
            </Router>
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe realizar el dispatch y navegación', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(historyMock.replace).toHaveBeenCalled();
    })
    
    
    
})
