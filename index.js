
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function EstudioMusical() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      setResult("🎵 Instrumento detectado y recreado exitosamente (simulado).");
    }, 3000);
  };

  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen p-6">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">🎧 Estudio Sonar AI</h1>
        <p className="text-xl">Producción musical profesional con inteligencia artificial</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <img src="/mic.jpg" alt="Micrófono profesional" className="rounded-2xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Mejora de Voz con IA</h2>
            <p>Afinamos, limpiamos y realzamos tu voz con tecnología de vanguardia para lograr un sonido profesional.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <img src="/channels.jpg" alt="Separación de canales" className="rounded-2xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Separación de Canales</h2>
            <p>Extraemos voces, instrumentos o beats de tus canciones con precisión para que puedas remezclar o mejorar.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <img src="/master.jpg" alt="Masterización" className="rounded-2xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Masterización con IA</h2>
            <p>Procesamos tu pista final con herramientas avanzadas para lograr volumen, claridad y balance perfecto.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <img src="/produccion.jpg" alt="Producción musical" className="rounded-2xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Producción a Medida</h2>
            <p>Desde una idea hasta la canción final: beats originales, arreglos y producción completa a tu medida.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 md:col-span-2">
          <CardContent className="p-4">
            <img src="/instrument.jpg" alt="Detección de instrumentos" className="rounded-2xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">🎹 Calcar Instrumento desde Canción (con IA)</h2>
            <p className="mb-4">Subí un archivo de audio (MP3/WAV) y detectaremos cualquier instrumento para recrearlo con IA.</p>
            <input 
              type="file" 
              accept="audio/*" 
              onChange={handleFileChange} 
              className="mb-4 text-white"
            />
            <Button onClick={handleUpload} disabled={uploading}>
              {uploading ? "Procesando..." : "Subir y Calcar"}
            </Button>
            {result && <p className="mt-4 text-green-400">{result}</p>}
          </CardContent>
        </Card>
      </section>

      <motion.section 
        className="bg-gray-950 rounded-2xl p-6 text-center"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">📞 Contacto</h2>
        <p className="mb-2">Email: contacto@estudiosonar.ai</p>
        <p className="mb-2">WhatsApp: +598 123 456 789</p>
        <p className="mb-2">Instagram: @estudiosonar</p>
        <Button className="mt-4">Solicitar Servicio</Button>
      </motion.section>
    </main>
  );
}
