/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

type FormData = {
  nombre: string;
  enviaFruta: string;
  frutaFavorita: string;
  otraFruta: string;
  practicidad: string;
  consumoHijo: string;
  valoracionSnack: string;
  dispuestoPagar: string;
  disponibilidadColegio: string;
  comentarios: string;
};

import { useState } from 'react';
import { motion } from 'motion/react';

type FormData = {
  nombre: string;
  enviaFruta: string;
  frutaFavorita: string;
  otraFruta: string;
  practicidad: string;
  consumoHijo: string;
  valoracionSnack: string;
  dispuestoPagar: string;
  disponibilidadColegio: string;
  comentarios: string;
};

import { useState } from 'react';

type FormData = {
  nombre: string;
  enviaFruta: string;
  frutaFavorita: string;
  otraFruta: string;
  practicidad: string;
  consumoHijo: string;
  valoracionSnack: string;
  dispuestoPagar: string;
  disponibilidadColegio: string;
  comentarios: string;
};

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    enviaFruta: '',
    frutaFavorita: '',
    otraFruta: '',
    practicidad: '',
    consumoHijo: '',
    valoracionSnack: '',
    dispuestoPagar: '',
    disponibilidadColegio: '',
    comentarios: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center">
          <h2 className="text-3xl font-sans font-medium text-neutral-900 mb-4">¡Gracias!</h2>
          <p className="font-sans text-neutral-600">Hemos recibido tus respuestas sobre la lonchera escolar de {formData.nombre || 'tu hijo(a)'}.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition"
          >
            Nueva encuesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-neutral-100"
      >
        <h1 className="text-2xl font-sans font-medium text-neutral-900 mb-8">🍍 Encuesta rápida sobre frutas para loncheras escolares 🍊</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">Nombre del padre/madre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full border border-neutral-200 rounded-lg p-2" />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">¿Sueles enviar fruta en la lonchera de tu hijo(a)?</legend>
            {['Sí', 'No'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="enviaFruta" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">¿Qué fruta le gusta más a tu hijo(a)?</legend>
            {['Mango', 'Piña', 'Mandarina'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="frutaFavorita" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
            <label className="flex items-center space-x-2 text-sm text-neutral-700">
              <input type="radio" name="frutaFavorita" value="Otra" onChange={handleChange} />
              <span>Otra:</span>
              <input type="text" name="otraFruta" onChange={handleChange} className="border border-neutral-200 rounded p-1 ml-2" />
            </label>
          </fieldset>
          
          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">¿Qué tan práctico te parecería comprar fruta fresca ya lista para consumir?</legend>
            {['Muy práctico', 'Algo práctico', 'Poco práctico'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="practicidad" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">¿Tu hijo(a) consumiría fruta fresca cortada y envasada para llevar al colegio?</legend>
            {['Sí', 'No', 'No estoy seguro(a)'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="consumoHijo" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">¿Qué valoras más al elegir un snack para la lonchera?</legend>
            {['Que sea saludable', 'Que le guste a mi hijo(a)', 'Que sea práctico', 'Que tenga buen precio'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="valoracionSnack" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">¿Cuánto estarías dispuesto(a) a pagar por una porción de fruta lista para consumir?</legend>
            {['Menos de S/3', 'Entre S/3 y S/5', 'Más de S/5'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="dispuestoPagar" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-neutral-900 mb-2">Si este producto estuviera disponible en el colegio o cerca de él, ¿te interesaría comprarlo?</legend>
            {['Sí', 'No', 'Tal vez'].map((op) => (
              <label key={op} className="flex items-center space-x-2 text-sm text-neutral-700">
                <input type="radio" name="disponibilidadColegio" value={op} onChange={handleChange} />
                <span>{op}</span>
              </label>
            ))}
          </fieldset>

          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-1">Comentarios o sugerencias:</label>
            <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} rows={3} className="w-full border border-neutral-200 rounded-lg p-2" />
          </div>
        </div>

        <button type="submit" className="mt-8 w-full bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition">
          Enviar respuestas
        </button>
      </form>
    </div>
  );
};

export default App;






