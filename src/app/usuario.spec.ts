import {Usuario} from './usuario';

describe('Usuario', () => {
    it('deve criar uma instância de usuário', () => {
        expect(new Usuario()).toBeTruthy();
    });

    it('deve aceitar valores no construtor', () => {
        let usuario = new Usuario({
            nome: 'João',
            email: 'joao@gmail.com',
            ativo: true
        });

        expect(usuario.nome).toEqual('João');
        expect(usuario.email).toEqual('joao@gmail.com');
        expect(usuario.ativo).toEqual(true);
    });

});
