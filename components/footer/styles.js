import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  background: #1f1f1f;
  color: white;
  height: auto;
  width: 100%;
  padding: 20px 10% 20px 10%;
  margin: 20px 0 0 0; 
  position: relative;
  text-decoration: none;
  
`;

export const ColLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  position: relative;
  margin: 15px;
`;

export const LinkObj = styled.a`
  color: white;

  text-decoration: none;
  text-align: left;
`;

export const FooterTitle = styled.h4`
  font-size: 14pt;
  font-weight: bold;

`;