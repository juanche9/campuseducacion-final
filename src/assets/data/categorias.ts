import { Categoria } from "src/app/model/categoria.model";

export class Categorias {

    static lista = [new Categoria(268, 251,"Comunidades",47,"comunidades", [
        new Categoria(3,3,"Andalucía",251,"andalucia", []),
        new Categoria(4,4,"Cataluña",251,"cataluna", []),
        new Categoria(5,5,"Madrid",251,"madrid", []),
        new Categoria(6,6,"Comunidad Valenciana",251,"comunidad-valenciana", []),
        new Categoria(7,7,"Galicia",251,"galicia", []),
        new Categoria(8,8,"Castilla y León",251,"castilla-y-leon", []),
        new Categoria(9,9,"País Vasco",251,"pais-vasco", []),
        new Categoria(10,10,"Islas Canarias",251,"islas-canarias", []),
        new Categoria(11,11,"Murcia",251,"murcia", []),
        new Categoria(12,12,"Aragón",251,"aragon", []),
        new Categoria(13,13,"Islas Baleares",251,"islas-baleares", []),
        new Categoria(14,14,"Extremadura",251,"extremadura", []),
        new Categoria(15,15,"Asturias",251,"asturias", []),
        new Categoria(16,16,"Navarra",251,"navarra", []),
        new Categoria(17,17,"Cantabria",251,"cantabria", []),
        new Categoria(18,18,"La Rioja",251,"la-rioja", []),
        new Categoria(19,19,"Castilla-La Mancha",251,"castilla-la-mancha", []),
        new Categoria(20,20,"Ceuta y Melilla",251,"ceuta-melilla", []),
    ]),
    new Categoria(56,740,"Temarios",47,"temarios", [
        new Categoria(57,57,"Temarios Maestros",740,"temarios-maestros", []),
        new Categoria(58,58,"Temarios Secundaria",740,"temarios-secundaria", []),
        new Categoria(59,59,"Temarios FP",740,"temarios-fp", []),
        new Categoria(60,60,"Temarios Otros Cuerpos",740,"temarios-otros-cuerpos", []),
    ]),
    new Categoria(2,2,"Convocatorias",47,"convocatorias", [
        new Categoria(55,55,"Convocatorias 2011",2,"convocatorias-2011", []),
        new Categoria(54,54,"Convocatorias 2012",2,"convocatorias-2012", []),
        new Categoria(53,53,"Convocatorias 2013",2,"convocatorias-2013", []),
        new Categoria(371,346,"Convocatorias 2014",2,"convocatorias-2014", []),
        new Categoria(632,607,"Convocatorias 2015",2,"convocatorias-2015", []),
        new Categoria(739,714,"Convocatorias 2016",2,"convocatorias-2016", []),
        new Categoria(828,808,"Convocatorias 2017",2,"convocatorias-2017", []),
    ]),
    new Categoria(216,199,"Bolsas de trabajo",47,"bolsas-de-trabajo", [
        new Categoria(217,200,"Bolsas Andalucía",199,"bolsas-andalucia", []),
        new Categoria(218,201,"Bolsas Aragón",199,"bolsas-aragon", []),
        new Categoria(219,202,"Bolsas Asturias",199,"bolsas-asturias", []),
        new Categoria(220,203,"Bolsas Baleares, (Islas)",199,"bolsas-baleares-islas", []),
        new Categoria(221,204,"Bolsas Canarias, (Islas)",199,"bolsas-canarias-islas", []),
        new Categoria(222,205,"Bolsas Cantabria",199,"bolsas-cantabria", []),
        new Categoria(223,206,"Bolsas Castilla - La Mancha",199,"bolsas-castilla-la-mancha", []),
        new Categoria(224,207,"Bolsas Castilla y León",199,"bolsas-castilla-y-leon", []),
        new Categoria(225,208,"Bolsas Cataluña",199,"bolsas-cataluna", []),
        new Categoria(226,209,"Bolsas Ceuta",199,"bolsas-ceuta", []),
        new Categoria(227,210,"Bolsas Melilla",199,"bolsas-melilla", []),
        new Categoria(228,211,"Bolsas Extremadura",199,"bolsas-extremadura", []),
        new Categoria(229,212,"Bolsas Galicia",199,"bolsas-galicia", []),
        new Categoria(230,213,"Bolsas Madrid",199,"bolsas-madrid", []),
        new Categoria(231,214,"Bolsas Murcia",199,"bolsas-murcia", []),
        new Categoria(232,215,"Bolsas Navarra",199,"bolsas-navarra", []),
        new Categoria(233,216,"Bolsas Pais Vasco",199,"bolsas-pais-vasco", []),
        new Categoria(234,217,"Bolsas La Rioja",199,"bolsas-la-rioja", []),
        new Categoria(235,218,"Bolsas Valencia",199,"bolsas-valencia", []),
        new Categoria(236,219,"Bolsas fuera de España",199,"bolsas-exterior", []),
    ]),
    new Categoria(269,252,"Cuerpos Docentes",47,"cuerpo", [
        new Categoria(99,99,"Maestros",252,"primaria", [
            new Categoria(21,21,"Oposiciones Maestros",773,"primaria", [
                new Categoria(633,608,"Oposiciones Maestros 2015",21,"oposiciones-maestros-2015", []),
                new Categoria(740,715,"Oposiciones Maestros 2016",21,"oposiciones-maestros-2016", []),
            ]),
            new Categoria(635,610,"Bolsas de Trabajo",252,"bolsas-trabajo-primaria", []),
        ]),
        new Categoria(99,99,"Secundaria",252,"secundaria", [
            new Categoria(22,22,"Oposiciones Secundaria",773,"secundaria", [
                new Categoria(634,609,"Oposiciones Secundaria 2015",22,"oposiciones-secundaria-2015", []),
                new Categoria(741,716,"Oposiciones Secundaria 2016",22,"oposiciones-secundaria-2016", []),
            ]),
            new Categoria(636,611,"Bolsas Trabajo Secundaria",252,"bolsas-trabajo-secundaria", []),
        ]),
        new Categoria(33,33,"Inspectores",252,"inspectores", []),
    ]),
    new Categoria(798, 798,"Recursos",47,"recursos", [
        new Categoria(1033,1013,"Recursos Docentes",798,"recursos", []),
        new Categoria(904,884,"Revista Digital Docente",798,"revista-digital-docente", []),
    ])
    ];

    constructor() { }
}
