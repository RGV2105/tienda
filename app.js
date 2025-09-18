const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const statCitasEl = document.getElementById("stat-citas");
const toastEl = document.getElementById("toast");

function addBubble(text, who='bot'){
  const div = document.createElement("div");
  div.className = who==="user" ? "bubble user" : (who==="sys" ? "sys" : "bubble bot");
  div.innerHTML = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function sendUser(text){
  if(!text.trim()) return;
  addBubble(text, "user");
  handleUser(text.trim());
}

function handleUser(text){
  if(text.includes("cita")) addBubble("Claro 😊. ¿Qué día y hora prefieres para tu cita?");
  else if(text.includes("recordatorio")) addBubble("He programado un recordatorio ✔️. Te avisaré 24h antes.");
  else if(text.includes("pago")) addBubble("Puedes realizar tu pago seguro con Payphone aquí 👉 [Enlace Simulado]");
  else addBubble("Lo siento, aún estoy aprendiendo. ¿Quieres agendar una cita?");
}

document.getElementById("send").addEventListener("click", ()=>{
  const text = inputEl.value; inputEl.value="";
  sendUser(text);
});

inputEl.addEventListener("keydown", (e)=>{
  if(e.key==="Enter"){ e.preventDefault(); document.getElementById("send").click(); }
});

// Mensaje inicial
addBubble("👋 ¡Hola! Soy el asistente de DIPTE Creaciones. Escribe 'cita', 'recordatorio' o 'pago' para comenzar.");
