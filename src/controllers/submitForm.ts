const url = "/test";

export async function POST(url, body) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data.body;
  } catch (err) {
    console.log(err);
  }
}

export function handleFormSubmission(body) {
  const form = document.querySelector("form");
  const formData = new FormData(form);

  let response = POST("/", JSON.stringify(body));
}
