import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.navbar};
  color: ${({ theme }) => theme.colors.text};
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
  
  p, a {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    margin-bottom: 0.8rem;
    display: block;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer id="contacto">
      <FooterContent>
        <FooterSection>
          <h3>503 LogisticaSV</h3>
          <p>Soluciones logísticas integrales con tecnología de punta y servicio personalizado.</p>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <h3>Enlaces Rápidos</h3>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#flota">Nuestra Flota</a>
          <a href="#contacto">Contacto</a>
        </FooterSection>
        
        <FooterSection>
          <h3>Contacto</h3>
          <p>San Salvador, El Salvador</p>
          <p>info@503logisticasv.com</p>
          <p>+503 2222-2222</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} 503 LogisticaSV. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;