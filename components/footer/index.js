import { ColLinks, FooterSection, FooterTitle, LinkObj } from "./styles";
import { FaFacebook, FaGithubAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterSection>
      <ColLinks>
        <FooterTitle>Navigation:</FooterTitle>
        <LinkObj href="#">Home</LinkObj>
        <LinkObj href="#about">About</LinkObj>
        <LinkObj href="#my-projects">Projects</LinkObj>
        <LinkObj href="#contact">Contact</LinkObj>
      </ColLinks>
      <ColLinks>
        <FooterTitle>My Links</FooterTitle>
        <LinkObj target="_blank" href="https://github.com/matheuspsantos"><FaGithubAlt /> &nbsp;github</LinkObj>
        <LinkObj target="_blank" href="https://linkedin.com/in/matheuspesantos"><FaLinkedinIn /> &nbsp; linkedin</LinkObj>
        <LinkObj target="_blank" href="https://instagram.com/matheus_psantos"><FaInstagram /> &nbsp; instagram</LinkObj>
        <LinkObj target="_blank" href="https://facebook.com/matheus064"><FaFacebook /> &nbsp; facebook</LinkObj>
      </ColLinks>
    </FooterSection>
  );
}