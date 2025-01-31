if ( window.location.pathname.includes( 'PayTM/Account.html' ) ) {

  const myBillsButton = document.getElementById( "MyBillsButton" );
  const popup = document.getElementById( "popup" );
  const closeButton = document.querySelector( ".close" );

  myBillsButton.addEventListener( "click", () => { popup.style.display = "block"; });

  closeButton.addEventListener("click", () => { popup.style.display = "none"; });

  window.addEventListener( "click", ( event ) => {

    if ( event.target == popup ) { popup.style.display = "none"; }
    
  });

} else if ( window.location.pathname.includes( 'PayTM.html' ) ) {

  const inputControl = document.querySelector('.custom-input__control');

  inputControl.addEventListener( 'click', () => {

      inputControl.classList.add('clicked');
    
  });

};