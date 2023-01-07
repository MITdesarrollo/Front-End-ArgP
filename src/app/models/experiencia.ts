export interface Experiencia {
    id: number;
    puesto?: string;
    descripcion: string;
    img: string;
    empresa: string;
    url?: string;
    activo?: string;
    inicio: Date;
    fin?: Date;
}
