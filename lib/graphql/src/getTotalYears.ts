import { meta } from "@/config/metadata";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";

interface GraphqlResponse {
 data: {
  user: {
   contributionsCollection: {
    contributionYears: number[];
   };
  } | null;
 };
}

export async function getTotalYears(): Promise<number[]> {
 const { data }: GraphqlResponse = await requestGraphql(
  `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionYears
        }
      }
    }
  `,
  {
   username: meta.accounts.github.username,
  }
 );

 return data.user?.contributionsCollection.contributionYears ?? [];
}
