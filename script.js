const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");
const dateInput = document.getElementById("fecha");

if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  dateInput.min = localToday;
}

if (bookingForm && successMessage) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    const formData = new FormData(bookingForm);
    const nombre = formData.get("nombre");
    const servicio = formData.get("servicio");
    const fecha = formData.get("fecha");
    const hora = formData.get("hora");
    const tel = formData.get("telefono");

    successMessage.innerHTML =
      "<strong>¡Solicitud preparada, " + escapeHTML(nombre) + "!</strong><br>" +
      "Servicio: " + escapeHTML(servicio) + "<br>" +
      "Fecha: " + escapeHTML(fecha) + " · Hora: " + escapeHTML(hora) + "<br>" +
      "Teléfono: " + escapeHTML(tel) + "." + "<br>" +
      "¡Nos pondremos en contacto contigo para confirmar tu cita!";
    successMessage.hidden = false;
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

