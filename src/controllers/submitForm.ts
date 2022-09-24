const url = "/test";

export async function POST(url, body) {
  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
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
