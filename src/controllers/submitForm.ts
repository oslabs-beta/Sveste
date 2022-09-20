const url = "/test";

export async function POST(url, body) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await res.json();
    return data.body;
  } catch (err) {
    console.log(err);
  }
}

export function handleFormSubmission() {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const testParam = new URLSearchParams();
  const testBody = {};
  for (const [key, value] of formData) {
    if (key === "htmlTag" && typeof value === "string") {
      testParam.append(key, value);
    } else {
      testBody[key] = value;
    }
  }
  let response = POST("/test?" + testParam, JSON.stringify(testBody));
}
