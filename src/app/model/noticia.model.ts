import { Categoria } from "./categoria.model";

export class Noticia {

        public icon: string | undefined;
        public details: boolean | undefined;
        public fecha: string | undefined;

        constructor(
            public ID: number,
            public Date: string,
            public Content: string,
            public Extracto: string,
            public Title: string,
            public Link: string,
            public Imagen: string,
            public Categories: Categoria[],
            public GUID: string
        ) { }
    }

