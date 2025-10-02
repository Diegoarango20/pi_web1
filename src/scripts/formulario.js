// Selectores DOM para los inputs del formulario

const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const celularInput = document.getElementById('celular'); 
const tecnicaInput = document.getElementById('carrera');
const ingresosInput = document.getElementById('ingresos');
const mensajeInput = document.getElementById('mensaje');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const celular = celularInput.value.trim();
  const tecnica = tecnicaInput.value.trim();
  const ingresos = ingresosInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (nombre && email && celular && tecnica && ingresos) {
    alert(
      `Gracias por postularte, ${nombre}.\n` +
      `Te contactaremos pronto a: ${email} / Celular: ${celular}.\n` +
      `Técnica a estudiar: ${tecnica}\n` +
      `Ingresos reportados: $${ingresos}\n` +
      (mensaje ? `Motivación: ${mensaje}` : '')
    );
    form.reset();
  } else {
    alert('Por favor completa todos los campos obligatorios.');
  }
});
