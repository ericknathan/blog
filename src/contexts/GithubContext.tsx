import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';

import { api } from '../lib/axios';
import { PostModel } from '../models/post';

const { VITE_GITHUB_USERNAME, VITE_GITHUB_BLOG_REPOSITORY } = import.meta.env;

type GithubUser = {
  name: string;
  avatar_url: string;
  username: string;
  bio: string;
  followers: number;
  company: string;
};

interface GithubContextProps {
  githubUser: GithubUser;
  blogPosts: PostModel[];
  refreshUserData: () => void;
  searchPosts: (searchTerm: string) => void;
}

const GithubContext = createContext({} as GithubContextProps);

interface GithubContextProviderProps {
  children: JSX.Element;
}

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [githubUser, setGithubUser] = useState<GithubUser>({} as GithubUser);
  const [blogPosts, setBlogPosts] = useState<PostModel[]>([]);

  async function refreshUserData() {
    const githubUserResponse = await api.get(`/users/${VITE_GITHUB_USERNAME}`);
    const { name, avatar_url, company, followers, bio }: GithubUser =
      githubUserResponse.data;

    setGithubUser({
      name,
      avatar_url,
      username: VITE_GITHUB_USERNAME,
      company,
      followers,
      bio,
    });
  }

  async function getPosts() {
    const blogPostsResponse = await api.get(
      `/repos/${VITE_GITHUB_USERNAME}/${VITE_GITHUB_BLOG_REPOSITORY}/issues`,
    );
    const blogPostsData = blogPostsResponse.data;

    setBlogPosts(blogPostsData);
  }

  async function searchPosts(searchTerm: string) {
    console.log({
      teste: `/search/issues?q=${encodeURIComponent(
        searchTerm,
      )}%20repo:${VITE_GITHUB_USERNAME}/${VITE_GITHUB_BLOG_REPOSITORY}`,
    });
    const blogPostsResponse = await api.get(
      `/search/issues?q=${encodeURIComponent(
        searchTerm,
      )}%20repo:${VITE_GITHUB_USERNAME}/${VITE_GITHUB_BLOG_REPOSITORY}`,
    );
    const blogPostsData = blogPostsResponse.data.items;

    console.log({ blogPostsData });

    setBlogPosts(blogPostsData);
  }

  useEffect(() => {
    refreshUserData();
    getPosts();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        refreshUserData,
        githubUser,
        blogPosts,
        searchPosts,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export const useGithub = () => useContext(GithubContext);
