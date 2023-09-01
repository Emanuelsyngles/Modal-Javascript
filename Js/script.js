function openmodal() {
  const modal = document.getElementById('janela-modal')
  modal.classList.add('open')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'fechar' || e.target.id == 'janela-modal') {
      modal.classList.remove('open')
    }
  })
}



