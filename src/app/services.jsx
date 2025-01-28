"use client";
import Image from "next/image";
import { FaAmbulance, FaGraduationCap, FaChild, FaCross, FaHospital, FaHome } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "AMBULANCE SERVICE",
      image: "/ambulance.jpg", // Replace with actual image path
      bgColor: "bg-blue-500",
    },
    {
      title: "EDUCATIONAL",
      icon: <FaGraduationCap className="text-white text-3xl" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "CHILDREN SERVICES",
      image: "/children.jpg", // Replace with actual image path
      bgColor: "bg-green-500",
    },
    {
      title: "GRAVEYARD SERVICES",
      icon: <FaCross className="text-white text-3xl" />,
      bgColor: "bg-orange-500",
    },
    {
      title: "HOSPITAL SERVICES",
      image: "/hospital.jpg", // Replace with actual image path
      bgColor: "bg-red-500",
    },
    {
      title: "HOMES & ORPHANAGE CENTRES",
      icon: <FaHome className="text-white text-3xl" />,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">OUR SERVICES</h2>
        <p className="text-gray-500 mt-2">Serving Humanity is the Spirit of All Religions</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-48 h-64 flex flex-col justify-between rounded-lg overflow-hidden shadow-md ${service.bgColor}`}
          >
            {service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={200}
                className="w-full h-28 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-28">{service.icon}</div>
            )}
            <div className="text-white text-center p-2">
              <h3 className="text-sm font-bold">{service.title}</h3>
            </div>
            <div className="p-2">
              <button className="bg-white text-gray-700 px-3 py-1 rounded-md text-xs font-semibold w-full hover:bg-gray-200">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
