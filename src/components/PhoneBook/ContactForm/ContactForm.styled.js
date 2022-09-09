import styled from 'styled-components';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${p => `${p.theme.space[7] * 3}px`};
  height: auto;
  gap: ${p => `${p.theme.space[4]}px`};
  padding: ${p => `${p.theme.space[3]}px`};
  border: ${p => p.theme.borders.normal + p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
