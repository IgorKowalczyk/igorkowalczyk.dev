import { meta } from "@/config/metadata";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";

interface GraphqlResponse {
 data: {
  user: {
   contributionsCollection: {
    contributionCalendar: {
     totalContributions: number;
    };
   } | null;
  };
 };
}

export async function getTotalContributionsForYear(year: number): Promise<number> {
 const from = `${year}-01-01T00:00:00Z`;
 const to = `${year}-12-31T23:59:59Z`;

 const { data }: GraphqlResponse = await requestGraphql(
  `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `,
  {
   username: meta.accounts.github.username,
   from,
   to,
  }
 );

 if (!data.user || !data.user.contributionsCollection) return 0;

 return data.user.contributionsCollection.contributionCalendar.totalContributions;
}
