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
