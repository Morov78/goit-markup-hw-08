(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    bodyMenuRef: document.querySelector("[body-noscroll]")
  };
  // const bodyMenuRef = document.querySelector("[body-noscroll]");

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.bodyMenuRef.classList.toggle("is-open");
  }
  // bodyMenuRef.classList.toggle("is-open");
})();