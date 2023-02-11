import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") return;

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_xv389hp",
        "template_5aechdc",
        templateParams,
        "LdchdFLUoGi4TTDeZ"
      )
      .then(
        (response) => {
          toast.success("Email enviado com sucesso!", {
            theme: "colored",
          });
          console.log(
            "EMAIL ENVIADO COM SUCESSO!",
            response.status,
            response.text
          );
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Erro ao enviar email", {
            theme: "colored",
          });
          console.log("ERRO: ", error);
        }
      );
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
