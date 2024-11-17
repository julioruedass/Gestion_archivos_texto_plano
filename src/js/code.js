 
    class Elemento{
        constructor(p_clave,p_identificador,p_value1, p_value2, p_extra_1,p_extra_2,p_extra_3,p_extra_4){
            this.clave = p_clave;
            this.identificador = p_identificador;
            this.value1 = p_value1;
            this.value2 = p_value2;
            this.extra_1 = p_extra_1;
            this.extra_2 = p_extra_2;
            this.extra_3 = p_extra_3;  
            this.extra_4 = p_extra_4;
            }
    }

    function f_crear_elemento(p_clave,p_identificador,p_value1, p_value2, p_extra_1,p_extra_2,p_extra_3,p_extra_4){
        let req_elemento = new Elemento(p_clave,p_identificador,p_value1, p_value2, p_extra_1,p_extra_2,p_extra_3,p_extra_4);
        return req_elemento;
    }

    function f_descargar_archive(p_tipo,p_name, p_txt){
        let v_data ='';
        if (p_tipo == 'json' || p_tipo =='JSON'){  v_data ='data:text/json;charset=utf-8,'; }
        if (p_tipo == 'xml'  || p_tipo =='XML' ){  v_data ='data:text/xml;charset=utf-8,'; }
        let element = document.createElement('a');
        element.setAttribute('href', v_data + encodeURIComponent(p_txt));
        element.setAttribute('download', p_name);  
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element); 
    }
    function f_obtener_elementos_data(p_tipo){
        let arrayElementos;
        if (p_tipo == "JS"){
            arrayElementos = document.getElementsByClassName("elemento") //js v1
        }else if(p_tipo == "JS2"){
            document.querySelectorAll(".elemento") //v2
        }else if(p_tipo == "JQ"){
            arrayElementos = $('.elemento') //Jquery
        }
        return arrayElementos;
    }

        //OBTIENE LA CLASE ELEMENTO Y LOS ITERA OOBTENIENDO SU CLAVE, SERIE ID Y SU VALOR
        function f_obtener_data_json_javascript(){
            let j_json = {};
            let requisitos = [];
            let arrayElementos;
            // Obtener campos dinamicos,
            arrayElementos = f_obtener_elementos_data("JS");
            // Recorrer campos dinamicos e ir formando JSON,
            for (let i = 0; i < arrayElementos.length; i++) {
                const campo  = arrayElementos.item(i)
                const objetoRequisito = f_crear_elemento(
                campo.getAttribute("id"),campo.getAttribute("data-req"),campo.getAttribute("value"))
                // Append al array de requisitos
                requisitos.push(objetoRequisito)
            }
            // Append a json, array de requisitos,
            j_json.requisitos = requisitos
            j_json.estatus="valido";
            return j_json  
        }

        function f_obtener_data_json_javascript_v2(){
            let j_json = {};
            let requisitos = [];
            let arrayElementos;
            // Obtener campos dinamicos,
            arrayElementos = f_obtener_elementos_data("JS");
            // Recorrer campos dinamicos e ir formando JSON,
            for (let i = 0; i < arrayElementos.length; i++) {
                const campo = arrayElementos.item(i)
                const objetoRequisito = {
                    clave_elemento   : campo.getAttribute("id"),
                    serieId_requisito: campo.getAttribute("data-req"),
                    valor1: campo.getAttribute("value"),
                    valor2: null
                }
                // Append al array de requisitos
                requisitos.push(objetoRequisito)
            }
            // Append a json, array de requisitos,
            j_json.requisitos = requisitos
            j_json.estatus="valido";
            return j_json  
        }
        
        
        function f_obtener_data_json_jquery(){
            let j_json = {};
            let requisitos = [];
            let arrayElementos;
            // Obtener campos dinamicos,
            arrayElementos = f_obtener_elementos_data("JS")
            // Recorrer campos dinamicos e ir formando JSON,
            for (let i = 0; i < arrayElementos.length; i++) {
                const campo = arrayElementos.item(i)
                const objetoRequisito = f_crear_elemento(
                campo.getAttribute("id"),campo.getAttribute("data-req"),campo.getAttribute("value"))
                // Append al array de requisitos
                requisitos.push(objetoRequisito)
            }
            // Append a json, array de requisitos,
            j_json.requisitos = requisitos
            j_json.estatus="valido";
            return j_json  
        }

        function f_obtener_data_json_jquery2(){
            let j_json = {};
            let requisitos = [];
            let arrayElementos;
            // Obtener campos dinamicos,
            arrayElementos = f_obtener_elementos_data("JS")
            // Recorrer campos dinamicos e ir formando JSON,
            $(".elemento").each(function( index ) {
                //index <= del array
                //$(this) <= input actual
                const campo  = this;
                const objetoRequisito = f_crear_elemento(
                campo.getAttribute("id"),campo.getAttribute("data-req"),campo.getAttribute("value"))
                // Append al array de requisitos
                requisitos.push(objetoRequisito)
              });
            // Append a json, array de requisitos,
            j_json.requisitos = requisitos
            j_json.estatus="valido";
            return j_json  
        }

        function f_asignar_datos_js(){
            j_json_data = f_obtener_data_json_javascript_v2();
            elemento_pantalla = document.getElementById("data_obj")
            // Convertir el objeto JSON a texto
            let jsonText = JSON.stringify(j_json_data);
            elemento_pantalla.value =jsonText ;
        }


        function f_asignar_datos_jquery(){
            j_json_data = f_obtener_data_json_jquery();
           // Convertir el objeto JSON a texto
           let jsonText = JSON.stringify(j_json_data); 
            //verificar parseado
           let verificar_estatus = j_json_data["estatus"]
            console.log('Estatus:'+ verificar_estatus)
            $("#data_obj").val(jsonText);
           //$("#data_obj").text(j_json_data); 
        }

        function f_asignar_datos_jquery2(){
            j_json_data = f_obtener_data_json_jquery2();
           // Convertir el objeto JSON a texto
           let jsonText = JSON.stringify(j_json_data); 
            $("#data_obj").val(jsonText);
        }

        function f_obtener_xml() {
            var xmlDocument = "<myxmldoc>"
            let arrayElementos;
            // Obtener campos dinamicos,
            arrayElementos = f_obtener_elementos_data("JS")
            // Recorrer campos dinamicos e ir formando JSON,
            var xmlNode = "\t<fname ";
            for (let i = 0; i < arrayElementos.length; i++) {
                const campo = arrayElementos.item(i)
                var xmlNode = "\t<fname ";
                xmlNode += " attr" + i + "=\"" +  campo.getAttribute("id") + "\" ";
                xmlNode += ">" + campo.getAttribute("value") + "</fname>";
                xmlDocument += "\n" + xmlNode;               
                }
                let v_text = xmlDocument + "\n</myxmldoc>";     
                return v_text;
          }


        function f_asignar_xml() {
            let xmlDocument = f_obtener_xml()
            $("#data_obj").val( xmlDocument);
          }



        function f_descargar_json(){
            j_json_data = f_obtener_data_json_jquery();
            // Convertir el objeto JSON a texto
            let jsonText = JSON.stringify(j_json_data); 
            $("#data_obj").val(jsonText);
            f_descargar_archive('JSON','Objeto.json',jsonText);
        }

        function f_descargar_xml() {
            let xmlDocument = f_obtener_xml()
            $("#data_obj").val( v_text);
            f_descargar_archive('XML','Objeto.xml',xmlDocument);
        }          



        // Función para asignar valores a los inputs
        function asignarValores(json) {
            json.requisitos.forEach(item => {
                // Buscar el input con id que coincida con `clave`
                try{
                    const inputElement = document.getElementById(item.clave);  
                    // Si existe el input, asignar el valor de `value1`
                    if (inputElement) {
                        inputElement.value = item.value1;
                    }
                }catch(e){
                    alert("Elementos no encontrados en pantalla o no validos")
                }
            });
        }


    function f_clic_asignar_valores_items(){
        $.getJSON("src/json/data_precarga_obj.json", function(data) {
            asignarValores(data);
        });
    }

    function arrayObjToCsv(ar) {
        let var2 =f_obtener_data_json_jquery2();
        ar =var2.requisitos;
        let separe =";"
        separe=","
        //comprobamos compatibilidad
        if(window.Blob && (window.URL || window.webkitURL)){
            var contenido = "",
                d = new Date(),
                blob,
                reader,
                save,
                clicEvent;
            //creamos contenido del archivo
            for (var i = 0; i < ar.length; i++) {
                //construimos cabecera del csv
                if (i == 0)
                    contenido += Object.keys(ar[i]).join(separe) + "\n";
                //resto del contenido
                contenido += Object.keys(ar[i]).map(function(key){
                    console.log(ar[i][key]);
                                return ar[i][key];
                            }).join(separe) + "\n";
            }
            //creamos el blob
            $("#data_obj").val( contenido);
            blob =  new Blob(["\ufeff", contenido], {type: 'text/csv'});
            //creamos el reader
            var reader = new FileReader();
            reader.onload = function (event) {
                //escuchamos su evento load y creamos un enlace en dom
                save = document.createElement('a');
                save.href = event.target.result;
                save.target = '_blank';
                //aquí le damos nombre al archivo
                save.download = "log_"+ d.getDate() + "_" + (d.getMonth()+1) + "_" + d.getFullYear() +".csv";
                try {
                    //creamos un evento click
                    clicEvent = new MouseEvent('click', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                    });
                } catch (e) {
                    //si llega aquí es que probablemente implemente la forma antigua de crear un enlace
                    clicEvent = document.createEvent("MouseEvent");
                    clicEvent.initEvent('click', true, true);
                }
                //disparamos el evento
                save.dispatchEvent(clicEvent);
                //liberamos el objeto window.URL
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            }
            //leemos como url
            reader.readAsDataURL(blob);
        }else {
            //el navegador no admite esta opción
            alert("Su navegador no permite esta acción");
        }
    };
    
    var miArrayDeObjetos = [
        { CODE: "ORA-00001", ERROR: "unique constraint (string.string) violated", DATE: "2015-10-01" },
        { CODE: "ORA-00017", ERROR: "session requested to set trace event", DATE: "2015-10-29" },
        { CODE: "ORA-02142", ERROR: "missing or invalid ALTER TABLESPACE option", DATE: "2015-11-09" },
        { CODE: "ORA-19500", ERROR: "device block size string is invalid", DATE: "2015-11-14" }
    ];

