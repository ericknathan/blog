import styled from 'styled-components';

export const AuthorCardContainer = styled.div`
  display: flex;
  gap: 2rem;

  padding: 2rem 2.5rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AuthorDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.5rem 0;
  min-height: 9.25rem;
  width: 100%;

  > p {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    gap: 1rem;
    text-align: center;
  }
`;

export const AuthorCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.blue};

    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover,
    &:focus {
      border-bottom-color: ${({ theme }) => theme.blue};
      outline: none;
    }
  }
`;

export const AuthorCardFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: auto;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-right: 1.5rem;

    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  @media (max-width: 780px) {
    margin-top: 0;
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;
