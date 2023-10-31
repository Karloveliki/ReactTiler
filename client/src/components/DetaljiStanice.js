function DetaljiStanice({stanica}){

    if (!stanica) {
        return <div>Odaberite stanicu klikom na oznaku na karti</div>
    }
    return(
        <div>
            Detalji stanice:  { stanica.name } {stanica.frekvencija} {stanica.vrstaGlazbe}
        </div>

    )
}
export default DetaljiStanice;