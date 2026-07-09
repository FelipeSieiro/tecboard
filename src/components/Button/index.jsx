import './button.css'

export function Button(props){
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}