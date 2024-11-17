import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/form-section.css' 

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqaklkag");

  useEffect(() => {
    window.onload = function() { 
      var el = document.getElementById('g-recaptcha-response'); 
      if (el) { 
        el.setAttribute('required', 'required'); 
      } 
    }
  }, []);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
        <label className="form-label" htmlFor="name">
          <input type="text" id="name" placeholder="¿Cuál es tu nombre?" name="name" required />
        </label>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label className="form-label" htmlFor="email">
          <input type="email" id="email" placeholder="¿Cuál es tu email?" name="email" required />
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
          />
        </label>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <label>
          <input type="checkbox" name="checkbox-terms" id="checkbox" required />
          <span> Acepto la política de privacidad.</span>
          <a href="/aviso-legal">+ info Política de Privacidad</a>
        </label>
        <div className="g-recaptcha" data-sitekey="6LdWwIEqAAAAAA7YTTHhzoLOzfgsXOcSNuomf8h-"></div>
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