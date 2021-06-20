export interface Tarea {
    id: number,
    nombreTarea: string;
    fechaCreacion: Date;
    fechaFinalizacion: Date;
    explicacion: string;
    importante: boolean;
    creador: string;
  }