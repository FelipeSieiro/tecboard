import "./event-form.style.css";
import { FormField } from "../FormField";
import { FormLabel } from "../FormLabel";
import { FormTitle } from "../FormTitle";
import { Button } from "../Button";
import { SelectDropdown } from "../SelectDropdown";
import { InputField } from "../InputField";

export function EventForm() {
  return (
    <form className="event-form">
      <FormTitle>Preencha para criar um evento:</FormTitle>

      <div className="fields">
        <FormField>
          <FormLabel htmlFor="nome">Qual o nome do evento?</FormLabel>
          <InputField
            type="text"
            name="nome"
            id="nome"
            placeholder="Summer dev hits"
          />
        </FormField>

        <FormField>
          <FormLabel htmlFor="data">Data do evento?</FormLabel>
          <InputField
            type="text"
            name="data"
            id="data"
            placeholder="XX/XX/XXXX"
          />
        </FormField>  
        
        <FormField>
          <FormLabel htmlFor="data">Data do evento?</FormLabel>
          <SelectDropdown/>
        </FormField>  

        <div className="actions">
          <Button>
            Criar Evento
          </Button>
        </div>
      </div>

    </form>
  );
}
