import { getFact } from "../../../src/prueba-tecnica/service/getFack"

describe('Prueba de servicio', () => {

    test('Esta prueba debe de tener un fack', async () => { 

        const resp = await getFact();

        expect(typeof resp).toBe('string');

    })


})