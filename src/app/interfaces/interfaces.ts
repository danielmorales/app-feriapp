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

export interface Ferias {
    ok: boolean;
    ferias: Feria[];
}

export interface Feria {
    id_feria?: number;
    geo_feria?: string;
    nombre_feria?: string;
    descripcion_feria?: string;
    created_at?: string;
    updated_at?: string;
}

export interface Puestos {
  puestos: Puesto[];
}

export interface Puesto {
  id_puesto?: number;
  nombre_puesto?: string;
  descripcion_puesto?: string;
  fk_id_feria?: number;
}
export interface Productos {
  productos: Producto[];
}

export interface Producto {
  id_producto: number;
  nombre_producto: string;
  descripcion_producto: string;
}

// Para la lista de compras con el checkbox

export interface Checkbox {
  id: number;
  ok: boolean;
}

// Los productos de un puesto en particular
export interface ProductosPuestoLista {
  ProductosPuesto: ProductosPuesto[];
}

export interface ProductosPuesto {
  fk_id_producto: number;
  precio: number;
  updated_at: string;
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
