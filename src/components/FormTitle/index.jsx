//props é um objeto que contem todas as propriedades passadas para o componente
import "./form-title.style.css"

export function FormTitle(props){
  return(
    <h2 className='form-title'>{props.children}</h2>
  )
}