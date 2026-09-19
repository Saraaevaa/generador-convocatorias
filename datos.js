const configuracion = {
    minimoConvocados: 1,
    maximoConvocados: 99,
    convocadosPorDefecto: 18,
    convocadosOficial: 18,
    campoIndependiente: true,
    lugarIndependiente: true
};

const equipos = [
    {
        id: "cadete-b",
        nombre: "Cadete B (Autonómica)",
        totalJugadores: 25,

        jugadores: [
            { dorsal: 1, nombre: "Brian Gómez", posiciones: ["Portero", "", ""] },
            { dorsal: 13, nombre: "Felipe Barrios", posiciones: ["Portero", "", ""] },

            { dorsal: 11, nombre: "Álvaro Rico", posiciones: ["Defensa", "", ""] },
            { dorsal: 3, nombre: "Marcos Alonso", posiciones: ["Defensa", "", ""] },
            { dorsal: 24, nombre: "Justin Chávez", posiciones: ["Defensa", "", ""] },
            { dorsal: 4, nombre: "Álvaro Martí", posiciones: ["Defensa", "", ""] },
            { dorsal: 5, nombre: "Rubén Molín", posiciones: ["Defensa", "", ""] },
            { dorsal: 33, nombre: "Javier Galiña", posiciones: ["Defensa", "", ""] },
            { dorsal: 12, nombre: "Álvaro Pírez", posiciones: ["Defensa", "", ""] },
            { dorsal: 22, nombre: "Marcos López", posiciones: ["Defensa", "", ""] },

            { dorsal: 8, nombre: "Ander Andoni", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 14, nombre: "Raúl Miguel", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 20, nombre: "Hugo Marcos", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 10, nombre: "Javier Fernández", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 16, nombre: "Juan Villanueva", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 15, nombre: "Daniel Gallo", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 19, nombre: "Eric Cámara", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 18, nombre: "Bruno Rossi", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 7, nombre: "Jaime Vera", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 21, nombre: "Diego Hernández", posiciones: ["Centrocampista", "", ""] },
            { dorsal: 77, nombre: "Suren Militonian", posiciones: ["Centrocampista", "", ""] },

            { dorsal: 17, nombre: "Jonathan Ezer", posiciones: ["Delantero", "", ""] },
            { dorsal: 9, nombre: "Rodrigo Puerto", posiciones: ["Delantero", "", ""] }
        ],

        entrenador: "Eduardo Caballero",

        cuerpoTecnico: [
            "David",
            "Kim",
            "Valenzuela"
        ]
    }
];

const rivales = [
    {
        id: "fundacion-adf",
        nombre: "Fundación ADF 'A'",
        escudo: "escudos/Fundación_ADF.png",
        equipos: ["cadete-b"]
    },
    {
        id: "juventud-sanse",
        nombre: "Juventud Sanse 'A'",
        escudo: "escudos/Juventud_Sanse.png",
        equipos: ["cadete-b"]
    },
    {
        id: "colmenar-viejo",
        nombre: "A.D. Colmenar Viejo 'A'",
        escudo: "escudos/Colmenar_Viejo.png",
        equipos: ["cadete-b"]
    },
    {
        id: "atletico-chopera",
        nombre: "Atlético Chopera Alcobendas 04 'C'",
        escudo: "escudos/Atlético_Chopera.png",
        equipos: ["cadete-b"]
    },
    {
        id: "academia-futbol-alcobendas",
        nombre: "C.D.E. Academia de Fútbol Alcobendas 'A'",
        escudo: "escudos/Academia_Fútbol_Alcobendas.png",
        equipos: ["cadete-b"]
    },
    {
        id: "rayo-ciudad-alcobendas",
        nombre: "Rayo Ciudad Alcobendas C.F. 'B'",
        escudo: "escudos/Rayo_Ciudad_Alcobendas.png",
        equipos: ["cadete-b"]
    },
    {
        id: "san-sebastian-reyes",
        nombre: "U.D. San Sebastián de los Reyes S.A.D 'B'",
        escudo: "escudos/San_Sebastián_Reyes.png",
        equipos: ["cadete-b"]
    },
    {
        id: "electrocor",
        nombre: "C.D.Electrocor Las Rozas 'A'",
        escudo: "escudos/Electrocor.png",
        equipos: ["cadete-b"]
    },
    {
        id: "dv7-madrid",
        nombre: "CD DV7 Madrid 'A'",
        escudo: "escudos/DV7_Madrid.png",
        equipos: ["cadete-b"]
    },
    {
        id: "union-adarve",
        nombre: "A.D. Unión Adarve 'C'",
        escudo: "escudos/Unión_Adarve.png",
        equipos: ["cadete-b"]
    },
    {
        id: "alcobendas",
        nombre: "Alcobendas C.F. 'A'",
        escudo: "escudos/Alcobendas.png",
        equipos: ["cadete-b"]
    },
    {
        id: "zona-norte",
        nombre: "Unión Zona Norte 'A'",
        escudo: "escudos/Zona_Norte.png",
        equipos: ["cadete-b"]
    },
    {
        id: "efmo-boadilla",
        nombre: "E.F.M.O Boadilla 'A'",
        escudo: "escudos/EFMO_Boadilla.png",
        equipos: ["cadete-b"]
    },
    {
        id: "galapagar",
        nombre: "C.D. Galapagar 'B'",
        escudo: "escudos/Galapagar.png",
        equipos: ["cadete-b"]
    },
    {
        id: "las-matas",
        nombre: "U.D. Las Matas C.F. 'A'",
        escudo: "escudos/Las_Matas.png",
        equipos: ["cadete-b"]
    }
];

const equipaciones = [
    {
        equipoId: "cadete-b",

        camiseta: [
            {
                nombre: "Azul",
                color: "Azul",
                imagen: "escudos/Camiseta_azul.png"
            },
            {
                nombre: "Rosa",
                color: "Rosa",
                imagen: "escudos/Camiseta_rosa.png"
            }
        ],

        pantalon: [
            {
                nombre: "Blanco",
                color: "Blanco",
                imagen: "escudos/Pantalón_blanco.png"
            },
            {
                nombre: "Negro",
                color: "Negro",
                imagen: "escudos/Pantalón_negro.png"
            }
        ],

        medias: [
            {
                nombre: "Azul",
                color: "Azul",
                imagen: "escudos/Medias_azul.png"
            },
            {
                nombre: "Negro",
                color: "Negro",
                imagen: "escudos/Medias_negro.png"
            }
        ]
    }
];
