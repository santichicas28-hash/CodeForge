"use client";

import { Hammer, Wrench, Zap, PaintBucket, Drill, Home } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      id: "building",
      name: "Construcción y Edificación",
      description:
        "Servicios completos de construcción y edificación para tu hogar",
      icon: Home,
      color: "bg-blue-500",
    },
    {
      id: "masonry",
      name: "Albañilería",
      description: "Trabajo profesional en ladrillo, piedra y concreto",
      icon: Hammer,
      color: "bg-orange-500",
    },
    {
      id: "electricity",
      name: "Servicios Eléctricos",
      description:
        "Electricistas licenciados para todas tus necesidades eléctricas",
      icon: Zap,
      color: "bg-yellow-500",
    },
    {
      id: "painting",
      name: "Pintura",
      description: "Servicios de pintura interior y exterior",
      icon: PaintBucket,
      color: "bg-purple-500",
    },
    {
      id: "plumbing",
      name: "Plomería",
      description: "Instalación y reparación de plomería experta",
      icon: Wrench,
      color: "bg-blue-600",
    },
    {
      id: "carpentry",
      name: "Carpintería",
      description:
        "Soluciones personalizadas de carpintería y trabajo en madera",
      icon: Drill,
      color: "bg-amber-600",
    },
  ];

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-9 py-7">
          {/* Company Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://ucarecdn.com/52c2cca2-b3b2-4716-a5b6-b8d982cf8677/-/format/auto/"
              alt="Soluciones Logo"
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Servicios para el Hogar
          </h1>
          <p className="text-gray-600 mt-2 text-center">
            Selecciona los servicios que necesitas para tu hogar
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServices.includes(service.id);

            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isSelected ? "ring-2 ring-blue-500 ring-offset-2" : ""
                }`}
              >
                <div
                  className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {isSelected ? "Seleccionado" : "Haz clic para seleccionar"}
                  </span>
                  {isSelected && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Services Summary */}
        {selectedServices.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tus Servicios Seleccionados
            </h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {selectedServices.map((serviceId) => {
                const service = services.find((s) => s.id === serviceId);
                return (
                  <span
                    key={serviceId}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {service.name}
                  </span>
                );
              })}
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Solicitar Cotización
            </button>
          </div>
        )}
      </main>
    </div>
  );
}