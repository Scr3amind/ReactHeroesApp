import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router";
import { HeroScreen } from "../../../components/heroes/HeroScreen";
import '../../../setupTest'

describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        goBack: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        length: 10
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']} >
            <HeroScreen history={historyMock}/>
        </MemoryRouter>
    );
    
    test('debe de mostrar el componente redirect si no hay argumentos en URL', () => {
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}  >
                <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('img').exists()).toBe(true);

    });

    test('debe de regresar a la pantalla anterior con Push', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route path="/hero/:heroeId" component={() => <HeroScreen history={historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalled();
    })
    
    test('debe de llamar el Redirect si el heroe no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderasdasd']}  >
                <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>
        );

        expect(wrapper.html().length).toBe(0);
    })
    
    
    
    
})
