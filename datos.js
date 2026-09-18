const configuracion = {
    convocadosOficial: 18
};


const equipos = [
    {
        id: "cadete-b",
        nombre: "Cadete B",
        totalJugadores: 25,

        jugadores: [
            {
                dorsal: 1,
                nombre: "Jugador de prueba 1",
                posiciones: ["POR", "", ""]
            },
            {
                dorsal: 2,
                nombre: "Jugador de prueba 2",
                posiciones: ["DEF", "MC", ""]
            },
            {
                dorsal: 3,
                nombre: "Jugador de prueba 3",
                posiciones: ["DEF", "EXT", ""]
            }
        ],

        entrenador: "Entrenador de prueba",

        cuerpoTecnico: [
            "Ayudante de prueba"
        ]
    }
];


const rivales = [
    {
        id: "fundacion-adf",
        nombre: "Fundación ADF",
        escudo: "escudos/Fundación_ADF.png",
        equipos: ["cadete-b"]
    }
];


const equipaciones = [
    {
        equipoId: "cadete-b",

        camiseta: [
            {
                nombre: "Camiseta 1",
                color: "Color 1",
                imagen: ""
            },
            {
                nombre: "Camiseta 2",
                color: "Color 2",
                imagen: ""
            }
        ],

        pantalon: [
            {
                nombre: "Pantalón 1",
                color: "Color 1",
                imagen: ""
            },
            {
                nombre: "Pantalón 2",
                color: "Color 2",
                imagen: ""
            }
        ],

        medias: [
            {
                nombre: "Medias 1",
                color: "Color 1",
                imagen: ""
            },
            {
                nombre: "Medias 2",
                color: "Color 2",
                imagen: ""
            }
        ]
    }
];
