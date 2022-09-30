import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  AuthorCardContainer,
  AuthorCardFooter,
  AuthorCardHeader,
  AuthorDataContainer,
} from './styles';
import { useGithub } from '../../contexts/GithubContext';

export function AuthorCard() {
  const { githubUser } = useGithub();

  return (
    <AuthorCardContainer>
      <img
        src={githubUser.avatar_url}
        alt={`Foto de perfil de ${githubUser.name}`}
      />
      <AuthorDataContainer>
        <AuthorCardHeader>
          <h1>{githubUser.name}</h1>
          <a href={`https://github.com/${githubUser.username}`}>
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </AuthorCardHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <AuthorCardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {githubUser.username}
          </span>
          {githubUser.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {githubUser.company}
            </span>
          )}
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {githubUser.followers} seguidores
          </span>
        </AuthorCardFooter>
      </AuthorDataContainer>
    </AuthorCardContainer>
  );
}
