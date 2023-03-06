import { GetUserData } from "/lib/graphQl";

export async function GET() {
 const start = Date.now();
 const user = await GetUserData();
 return new Response(JSON.stringify(user), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
   "Server-Timing": `response;dur=${Date.now() - start}ms`,
  },
 });
}