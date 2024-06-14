import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      name: "Desain Web",
      description:
        "Saya dapat membantu Anda membuat desain web yang menarik dan responsif.",
    },
    {
      name: "Pengembangan Web",
      description:
        "Saya dapat membangun website yang handal dan mudah digunakan menggunakan teknologi terbaru.",
    },
    {
      name: "Optimasi Website",
      description:
        "Saya dapat membantu Anda mengoptimasi website Anda untuk memaksimalkan performa ",
    },
  ];

  return (
    <div className="services">
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
