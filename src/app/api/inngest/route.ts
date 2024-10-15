import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { helloWorld } from "../../../inngest/functions";
// import type { NextRequest } from "next/server";

// Create an API that serves zero functions
//  const s = serve({
//   client: inngest,
//   functions: [
//     helloWorld,
//     /* your functions will be passed here later! */
//   ],
// });


const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
      helloWorld,
      /* your functions will be passed here later! */
    ],
  });
// export {s.GET as GET, s.POST as POST, s.PUT as PUT};
// const GET = s.GET as (expectedReq: NextRequest) => Promise<Response>;
// const POST = s.POST as (expectedReq: NextRequest) => Promise<Response>
// const PUT = s.PUT as (expectedReq: NextRequest) => Promise<Response>

export { GET,  POST, PUT };