import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { fromZodError } from "zod-validation-error";
import { z } from "zod";

const ObjectWithId = z.object({
  id: z.string(),
});

const PersonSchema = z.object({
  name: z.string().min(1),
  age: z.number().min(1),
  id: z.any(),
  // email: z.string().optional(),
});

const person = {
  name: "John",
  age: 20,
  id: true,
};

const personParsed = PersonSchema.safeParse(person);
console.log(personParsed);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
