import { useState } from 'preact/hooks';
import { useGithub } from '../../contexts/GithubContext';
import { PostModel } from '../../models/post';

import { PostCard } from '..';
import {
  PostListContainer,
  PostListSearchForm,
  PostsContainer,
} from './styles';

export function PostList() {
  const { blogPosts, searchPosts } = useGithub();

  function handleSearchPosts(event: any) {
    const query = event.target.value;

    if (query % 3 === 0) {
      searchPosts(query);
    }
  }

  return (
    <PostListContainer>
      <PostListSearchForm>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input
          type="search"
          placeholder="Buscar conteúdo"
          onChange={handleSearchPosts}
        />
      </PostListSearchForm>
      <PostsContainer>
        {blogPosts.map((post) => (
          <PostCard key={post.id} postData={post} />
        ))}
      </PostsContainer>
    </PostListContainer>
  );
}
