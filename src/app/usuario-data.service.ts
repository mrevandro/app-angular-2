import {Injectable} from '@angular/core';
import {Usuario} from "./usuario";

@Injectable()
export class UsuarioDataService {

    ultimoId: number = 0;

    usuarios: Usuario[] = [];

    constructor() {
    }

    salvarUsuario(usuario: Usuario): UsuarioDataService {
        if (!usuario.id) {
            usuario.id = ++this.ultimoId;
        }
        this.usuarios.push(usuario);
        return this;
    }

    removerUsuarioPorId(id: number): UsuarioDataService {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        return this;
    }

    atualizarUsuarioPorId(id: number, values: Object = {}): Usuario {
        let usuario = this.buscarUsuarioPorId(id);
        if(!usuario) {
            return null;
        }
        Object.assign(usuario, values);
        return usuario;
    }

    buscarTodosUsuarios(): Usuario[] {
        return this.usuarios;
    }

    buscarUsuarioPorId(id: number): Usuario {
        return this.usuarios.filter(usuario => usuario.id === id).pop();
    }

}
