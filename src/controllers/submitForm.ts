import { compiledTestStore, submitSuccessful } from "../compiledTestStore";
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
    compiledTestStore.set(response.data);
    submitSuccessful.set(true);
    return response.data;
  } catch (err) {
    submitSuccessful.set(false);
    console.log(err);
  }
}

export function handleFormSubmission(body) {
  const form = document.querySelector("form");
  const formData = new FormData(form);

  let response = POST("/", JSON.stringify(body));
}
