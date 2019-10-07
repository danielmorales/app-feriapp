export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    comentariopuesto: Comentariopuesto[];
}

export interface Comentariopuesto {
    id_comentariopuesto: number;
    texto_comentariopuesto: string;
    created_at: string;
    updated_at: string;
    fk_id_cuenta: number;
    cuentum: Cuenta;
  }

export interface Cuenta {
    id_cuenta?: number;
    nombre?: string;
    apellido?: string;
    correo_cuenta?: string;
    password_cuenta?: string;
    created_at?: string;
    updated_at?: string;
    activo?: number;
  }

  /*
export interface ComentarioPuesto {
    id_comentariopuesto: number;
    texto_comentariopuesto: string;
    created_at: Date;
    updated_at: Date;
    fk_id_puesto: number;
    fk_id_cuenta: number;
}
*/
