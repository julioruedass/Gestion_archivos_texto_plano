class Motivo {
    constructor(p_clave_motivo,p_descripcion_motivo, p_usuario,p_fecha, p_extra_1,p_extra_2,p_extra_3,p_extra_4) {
        this.clave_motivo = p_clave_motivo;
        this.descripcion_motivo = p_descripcion_motivo;
        this.usuario = p_usuario;
        this.fecha = p_fecha;
        this.extra1 = p_extra_1; 
        this.extra2 = p_extra_2; 
        this.extra3 = p_extra_3; 
        this.extra4 = p_extra_4; 
    }
  }

  class Motivos  {
    constructor() {
     this.motivos = [];  // Array para almacenar objetos Detalle
     }
         // Método para agregar un detalle al array
         agregarMotivo() {
             const nuevoMotivo = new Motivo(p_clave_motivo,p_descripcion_motivo, p_usuario,p_fecha, p_extra_1,p_extra_2,p_extra_3,p_extra_4);
             this.motivos.push(nuevoMotivo);
         }

        get_motivos(){
            return this.motivos;
        }
     }

class Detalle {
    constructor(p_clave,p_value1, p_value2,p_identificador,p_comportamiento,p_tipo,p_requerido,p_capturable,p_extra_1,p_extra_2,p_extra_3,p_extra_4) {
        this.clave = p_clave;
        this.value1 = p_value1;
        this.value2 = p_value2;
        this.comportamiento = p_comportamiento;
        this.tipo = p_tipo;    
        this.requerido = p_requerido;
        this.capturable = p_capturable;
        this.identificador = p_identificador;
        this.extra1 = p_extra_1;
        this.extra2 = p_extra_2;
        this.extra3 = p_extra_3;
        this.extra4 = p_extra_4;
    }
  }

  class Detalles  {
   constructor() {
    this.detalles = [];  // Array para almacenar objetos Detalle
    }
        // Método para agregar un detalle al array
        agregarDetalle() {
            const nuevoDetalle = new Detalle(p_clave,p_value1, p_value2,p_identificador,p_comportamiento,p_tipo,p_requerido,p_capturable,p_extra_1,p_extra_2,p_extra_3,p_extra_4);
            this.detalles.push(nuevoDetalle);
        }

        //Retornas detalles
        get_detalles(){
            return this.detalles;
            }            
    }

  class Parametros {
    constructor(p_clave,p_identificador,p_value1, p_value2, p_extra) {
        this.clave = p_clave;
        this.identificador = p_identificador;
        this.value1 = p_value1;
        this.value2 = p_value2;
        this.extra = p_extra; 
    }
  }


  class Objeto {
    constructor(p_serie,p_identificador,p_clave_objeto,p_detalles, p_motivo_anterior,p_motivo_nuevo,p_parametros,
        p_extra_1,p_extra_2,p_extra_3,p_extra_4
    ) {
        this.serie= p_serie;
        this.identificador = p_identificador;
        this.clave_objeto = p_clave_objeto;
        this.detalles = p_detalles;
        this.motivo_anterior = p_motivo_anterior;
        this.motivo_nuevo = p_motivo_nuevo;
        this.parametros = p_parametros;
        this.extra_1 = p_extra_1;
        this.extra_2 = p_extra_2;
        this.extra_3 = p_extra_3;
        this.extra_4 = p_extra_4;
    }
  } 
