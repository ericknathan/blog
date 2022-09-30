import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostCardLink = styled(Link)`
  text-decoration: none;
`;

export const PostCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme['base-post']};

  transition: transform 0.2s;

  > header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    > h3 {
      color: ${({ theme }) => theme['base-title']};
    }

    > time {
      color: ${({ theme }) => theme['base-span']};
      white-space: nowrap;
    }
  }

  > p {
    height: 6.75rem;

    color: ${({ theme }) => theme['base-text']};

    text-overflow: ellipsis;
    overflow: hidden !important;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
