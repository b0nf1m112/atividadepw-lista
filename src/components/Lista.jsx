function Lista({ itens }) {
    return(
        <div>
            {itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : ( 
                <h2>Melhores Games Atualizados 2025😎</h2>
            
            ) }
        </div>
    )
}

export default Lista