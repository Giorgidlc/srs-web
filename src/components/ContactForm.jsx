import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/form-section.css' 

export const ContactForm = () => {

  function ResponseSending() {
    return (
      <div className='box-response'>
      <svg width="56px" height="56px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" color="#009697"><path d="M7 12.5L10 15.5L17 8.5" stroke="#009697" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#009697" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

        <h3 className='box-response__title'>Tu mensaje se ha enviado con éxito</h3>
        <p className='box-response__description'>En breve responderemos a tu mensaje</p>
      </div>
    );
  }


  const [state, handleSubmit] = useForm("xbljkpnv");

  
  // Agrega un campo oculto con tu correo electrónico
  const [formValues, setFormValues] = useState({}); 
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  if (state.succeeded) {
    return <ResponseSending />;
  }

  return (
    <section className="form-container-wrap" id="form-contact">
      <div className="form-container__title">
        <h2>¡Resuelve tus dudas!</h2>
        <p>
          Contáctame y obtén respuesta rápida. No importa cuán compleja sea tu
          pregunta, estoy aquí para brindarte la información que necesitas de
          forma clara y concisa.
        </p>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="hidden" name="_replyto" value={formValues.email} /> 
        <label className="form-label" htmlFor="name">
          <input type="text" id="name" placeholder="¿Cuál es tu nombre?" name="name" required onChange={handleChange} />
        </label>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label className="form-label" htmlFor="email">
          <input type="email" id="email" placeholder="¿Cuál es tu email?" name="email" required onChange={handleChange} />
        </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label className="form-label" htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="¿En qué podemos ayudarte?"
            required
            onChange={handleChange}
          />
        </label>
        <ValidationError 
          prefix="Message" 
          field="Message"
          errors={state.errors}
        />
        <label>
          <input type="checkbox" name="checkbox-terms" id="checkbox" required />
          <span> Acepto la política de privacidad.</span>
          <a href="/aviso-legal">+ info Política de Privacidad</a>
        </label>
       
        <button className="btn-submit" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
      <figure className="graph03">
        <img loading="lazy" src="/assets/graph-03.svg" alt="gráfico-03" />
      </figure>
    </section>
  );
}

