/* Catch the button that makes event */
let verifyButton = document.getElementById( 'verify-button' );
/* Shows paragraph */
render.innerHTML = 'Llevas 0 postales';
/* This button generate event */
verifyButton.addEventListener('click', () =>{
    /* Catch inputs and his values */
    let inputValpo = document.getElementById( 'input-valpo' ).value;
    let inputVolcano = document.getElementById( 'input-volcano' ).value;
    let inputDesert = document.getElementById( 'input-desert' ).value;
    /* Add value's inputs and convert from string to number */
    let totalPostals = Number( inputDesert ) + Number( inputVolcano ) + Number( inputValpo );
    /* This conditional shows you've exceeded the limit and next conditional shows
    how many postal you've bought  */
    if( totalPostals > 10 ){
        render.innerHTML = `¡¡EXCEDES EL LÍMITE!! <br> No puedes llevar más de 10 postales`;
    } else if( totalPostals <= 10 ) {
        render.innerHTML = `Llevas ${ totalPostals } postales`;
    }
    /* After make click on button, inputs are cleaned */
    document.getElementById( 'input-valpo' ).value = '';
    document.getElementById( 'input-volcano' ).value = '';
    document.getElementById( 'input-desert' ).value = '';
}
)

