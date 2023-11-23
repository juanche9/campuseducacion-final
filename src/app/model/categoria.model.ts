
export class Categoria {

    public icon: string | undefined;
    public details: boolean | undefined;

    constructor(
        public idCategoria: number,
        public idCategoria2: number,
        public nombre: string,
        public parent: number,
        public slug: string,
        public childs: Categoria[]
    ) { }
}
