import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTruck, FaWarehouse, FaGlobeAmericas, FaBoxes } from 'react-icons/fa';

const ServicesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.navbar};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const services = [
  {
    icon: <FaTruck />,
    title: 'Transporte Nacional',
    description: 'Distribución eficiente en todo el territorio salvadoreño con flota moderna y segura.'
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Transporte Internacional',
    description: 'Soluciones logísticas para importación y exportación a Centroamérica y más allá.'
  },
  {
    icon: <FaWarehouse />,
    title: 'Almacenamiento',
    description: 'Espacios seguros y climatizados para el resguardo de tu mercadería.'
  },
  {
    icon: <FaBoxes />,
    title: 'Distribución Last Mile',
    description: 'Entrega puerta a puerta con seguimiento en tiempo real.'
  }
];

const Services: React.FC = () => {
  return (
    <ServicesContainer id="servicios">
      <SectionTitle>
        Nuestros <span>Servicios</span>
      </SectionTitle>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;