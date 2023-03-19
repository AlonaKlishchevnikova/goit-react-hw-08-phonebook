import { nanoid } from "nanoid";

const items = [
      {
        id: nanoid(),
        text: "Home",
        link: "/",
        private: false,
    },
   {
        id: nanoid(),
        text: "Сontacts",
       link: "/contacts",
         private: true,
    },
];

export default items;