"use client";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // todo Aquí deberías integrar tu backend o servicio de email
      await new Promise((res) => setTimeout(res, 1500));
      setSent(true);
    } catch {
      setError("No se pudo enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 sm:py-16 flex flex-col items-center px-2 sm:px-6"
    >
  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center w-full">Contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-xl shadow-md p-4 sm:p-8 border border-slate-100"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-3 py-2 sm:px-4 sm:py-2 border rounded focus:outline-none focus:ring text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-3 py-2 sm:px-4 sm:py-2 border rounded focus:outline-none focus:ring text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full mb-4 px-3 py-2 sm:px-4 sm:py-2 border rounded focus:outline-none focus:ring text-sm sm:text-base"
          rows={5}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
        {sent && (
          <p className="text-green-600 mt-4 text-sm sm:text-base">
            ¡Mensaje enviado!
          </p>
        )}
        {error && (
          <p className="text-red-600 mt-4 text-sm sm:text-base">{error}</p>
        )}
      </form>
      <p className="mt-6 text-slate-500 text-xs sm:text-sm">
        O escríbeme a{" "}
        <a href="mailto:jairoirineo1604@gmail.com"  className="underline">
          jairoirineo1604@gmail.com
        </a>
      </p>
    </motion.section>
  );
}
