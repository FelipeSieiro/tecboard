//props é um objeto que contem todas as propriedades passadas para o componente
import "./titulo-formulario.css"

export function TituloFormulario(props){
  return(
    <h2 className='tituloFormulario'>{props.children}</h2>
  )
}