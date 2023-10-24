import "../stylesheet/headerComponent.css"

function HeaderComponent({titulo, imagen}){
    return (
    
        <div className="div-header">
            <h2>{titulo} <img src={imagen} alt="Logo-react" /></h2>

        </div>


    )
}

export default HeaderComponent