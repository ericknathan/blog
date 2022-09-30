import { getDateRelativeToNow } from '../../utils/date';
import { PostModel } from '../../models/post';
import { PostCardContainer, PostCardLink } from './styles';

interface PostCardProps {
  postData: PostModel;
}

export function PostCard({ postData }: PostCardProps) {
  const { id, title, created_at, body } = postData;

  return (
    <PostCardLink to={`/post/${id}`}>
      <PostCardContainer>
        <header>
          <h3>{title}</h3>
          <time>{getDateRelativeToNow(new Date(created_at))}</time>
        </header>
        <p>{body.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')}</p>
      </PostCardContainer>
    </PostCardLink>
  );
}
