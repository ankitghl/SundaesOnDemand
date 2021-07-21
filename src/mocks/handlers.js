import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Choclate", imageePath: "/images/choclate.jpg" },
        { name: "Vanilla", imageePath: "/images/vanilla.jpg" },
      ])
    );
  }),

  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imageePath: "/images/cherries.jpg" },
        { name: "M&Ms", imageePath: "/images/m-and-ms.jpg" },
        { name: "Hot fudge", imageePath: "/images/hot-fudge.jpg" },
      ])
    );
  }),
];
