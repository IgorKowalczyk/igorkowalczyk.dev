import { meta } from "@/config/metadata";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";
import { Language } from "@/lib/types";

interface GraphqlResponse {
 data: {
  repository: {
   openGraphImageUrl: string;
   isPrivate: boolean;
   description: string;
   languages: {
    edges: Language[];
    totalSize: number;
   };
   owner: {
    avatarUrl: string;
    name: string;
   };
   stargazerCount: number;
  } | null;
 };
}

interface Response {
 domain: string;
 private: boolean;
 og: string;
 languages: Language[];
 totalSize: number;
 description: string;
 owner: {
  avatar: string;
  name: string;
 };
 stargazerCount: number;
}

export async function GetOGImage(repo: string, owner: string): Promise<Response | null> {
 if (!repo || !owner) return null;
 if (owner !== meta.accounts.github.username) return null;

 const { data }: GraphqlResponse = await requestGraphql(
  `
    query($repo: String!, $owner: String!) {
      repository(name: $repo, owner: $owner) {
        openGraphImageUrl
        isPrivate
        description
        languages(first: 10) {
          edges {
            size
            node {
              color
              name
            }
          }
          totalSize
        }
        owner {
          avatarUrl
          ... on User {
            name
          }
        }
        stargazerCount
      }
    }
  `,
  {
   repo,
   owner,
  }
 );

 if (!data || !data.repository) return null;

 const domain = new URL(data.repository.openGraphImageUrl).hostname.replace("www.", "");

 return {
  domain,
  private: data.repository.isPrivate,
  og: data.repository.openGraphImageUrl,
  languages: data.repository.languages.edges.sort((a, b) => b.size - a.size),
  totalSize: data.repository.languages.totalSize,
  description: data.repository.description,
  owner: {
   avatar: data.repository.owner.avatarUrl,
   name: data.repository.owner.name,
  },
  stargazerCount: data.repository.stargazerCount,
 };
}
