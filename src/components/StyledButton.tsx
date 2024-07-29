// src/components/GlassCard.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  margin: 20px 0;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface GlassCardProps {
  children: ReactNode;
}

const GlassCardComponent: React.FC<GlassCardProps> = ({ children }) => {
  return <GlassCard>{children}</GlassCard>;
};

export default GlassCardComponent;
