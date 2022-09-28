import { compiledTestStore } from "../compiledTestStore";
import axios from "axios";
const url = "/test";

export async function POST(url, body) {
  try {
    let parsedBody = JSON.stringify(body, [
      "id",
      "type",
      "parentId",
      "value",
      "children",
    ]);

    const response = await axios.post(url, parsedBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    compiledTestStore.set(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export function handleFormSubmission(body) {
  const form = document.querySelector("form");
  const formData = new FormData(form);

  let response = POST("/", JSON.stringify(body));
}
