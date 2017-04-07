export class Usuario {
    id: number;
    nome: string = '';
    email: string = '';
    ativo: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
