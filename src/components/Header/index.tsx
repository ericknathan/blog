import githubBlogLogoImage from '../../assets/github-blog-logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogoImage} alt=">_ Github Blog" />
    </HeaderContainer>
  );
}
