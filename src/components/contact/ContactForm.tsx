import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const EMPTY_VALUES: FormValues = { name: '', email: '', message: '' };

type Status = 'idle' | 'sending' | 'success' | 'error';

function validate(values: FormValues): string | null {
  if (!values.name.trim()) return 'Escribe tu nombre.';
  if (!EMAIL_PATTERN.test(values.email.trim())) return 'Escribe un correo válido.';
  if (!values.message.trim()) return 'Escribe tu mensaje.';
  if (values.name.trim().length > 100) return 'El nombre es demasiado largo.';
  if (values.message.trim().length > 2000) return 'El mensaje no puede pasar de 2000 caracteres.';
  return null;
}

const FIELD_CLASS =
  'w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 transition-colors duration-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-brand-400 dark:focus:ring-brand-900';

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateField = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate(values);
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('sending');
    setErrorMessage(null);

    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMessage('No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.');
      return;
    }

    setStatus('success');
    setValues(EMPTY_VALUES);
  };

  if (status === 'success') {
    return (
      <div role="status" className="animate-fade-down flex flex-col items-center gap-4 py-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">Gracias por escribirme. Te responderé lo antes posible.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-full border border-brand-300 px-5 py-2.5 font-semibold text-brand-700 transition-colors hover:bg-brand-50 dark:border-zinc-700 dark:text-brand-300 dark:hover:bg-zinc-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const isSending = status === 'sending';

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Nombre
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          value={values.name}
          onChange={updateField('name')}
          placeholder="Tu nombre"
          className={FIELD_CLASS}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Correo
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          value={values.email}
          onChange={updateField('email')}
          placeholder="tu@correo.com"
          className={FIELD_CLASS}
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="contact-message" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={updateField('message')}
          placeholder="Cuéntame sobre tu proyecto u oportunidad"
          className={`${FIELD_CLASS} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="alert" aria-live="polite" className={`min-h-[1.5rem] text-sm font-medium ${errorMessage ? 'text-brand-700 dark:text-brand-300' : 'text-transparent'}`}>
          {errorMessage ?? '.'}
        </p>
        <button
          type="submit"
          disabled={isSending}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
        >
          {isSending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
