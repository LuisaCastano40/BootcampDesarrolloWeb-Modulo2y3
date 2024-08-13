export interface User {
    // por debecto en typescript es requerido
    nombreCompleto: string;
    correo: string;
    contrasena: string;
    imagen?: string;
}
