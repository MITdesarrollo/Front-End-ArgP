export interface Experiencia {
    id: number;
    puesto?: string;
    descripcion: string;
    img: string;
    empresa: string;
    url?: string;
    activo: boolean;
    inicio: Date;
    fin?: Date;
}
