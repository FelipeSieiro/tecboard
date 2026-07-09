import "./formulario-de-eventos.estilos.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Button } from "../Button";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            name="nome"
            id="nome"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="data">Data do evento?</Label>
          <CampoDeEntrada
            type="text"
            name="data"
            id="data"
            placeholder="XX/XX/XXXX"
          />
        </CampoDeFormulario>  
        
        <CampoDeFormulario>
          <Label htmlFor="data">Data do evento?</Label>
          <ListaSuspensa/>
        </CampoDeFormulario>  

        <div className="action">
          <Button>
            Criar Evento
          </Button>
        </div>
      </div>

    </form>
  );
}
