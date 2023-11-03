
export interface HorarioMedico {
    idHorario: number;
    diaSemana: string;
    horaInicio: string;
    horaFinalizacion: string;
    hora_inicio_colacion?: string;
    hora_fin_colacion?: string;
    duracionCitas: number;
    rut_medico: string;
    disponibilidad: boolean;
    fechaCreacion: string;
    medico: {
      nombre: string;
      especialidad_medica: string;
      
    };
 
  }
 
  export interface HorarioResponse {
    total: number;
    horarios: HorarioMedico[];
  }