/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {UsuarioDataService} from './usuario-data.service';
import {Usuario} from "./usuario";
import {utils} from "protractor";

export class TestUsuarioUtils {
    criarUsuario(numeroUsuario: number): Usuario {
        if(numeroUsuario === 1) {
            return new Usuario({nome: 'João', email: 'joao@gmail.com', ativo: false});
        } else if(numeroUsuario === 2) {
            return new Usuario({nome: 'José', email: 'jose@gmail.com', ativo: true});
        } else {
            new Usuario({nome: 'Pedro', email: 'pedro@gmail.com', ativo: true});
        }
    }
}

describe('UsuarioDataService', () => {
    let utils = new TestUsuarioUtils();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsuarioDataService]
        });
    });

    it('should ...', inject([UsuarioDataService], (service: UsuarioDataService) => {
        expect(service).toBeTruthy();
    }));

    describe('#buscarTodosUsuarios()', () => {
        it('deve retornar um array vazio por default', inject([UsuarioDataService], (service: UsuarioDataService) => {
            expect(service.buscarTodosUsuarios()).toEqual([]);
        }));

        it('deve retornar todos os usuários', inject([UsuarioDataService], (service: UsuarioDataService) => {
            let usuario1 = utils.criarUsuario(1);
            let usuario2 = utils.criarUsuario(2);
            service.salvarUsuario(usuario1);
            service.salvarUsuario(usuario2);
            expect(service.buscarTodosUsuarios()).toEqual([usuario1, usuario2]);
        }));
    });

    describe('#salvarUsuario()', () => {
        it('deve incrementar id de usuário automaticamente', inject([UsuarioDataService], (service: UsuarioDataService) => {
            let usuario1 = utils.criarUsuario(1);
            let usuario2 = utils.criarUsuario(2);
            service.salvarUsuario(usuario1);
            service.salvarUsuario(usuario2);
            expect(service.buscarUsuarioPorId(1)).toEqual(usuario1);
            expect(service.buscarUsuarioPorId(2)).toEqual(usuario2);
        }));
    });

});
