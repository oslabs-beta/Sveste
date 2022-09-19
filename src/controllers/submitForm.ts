const submitForm = {};
const url = '/test';

export async function POST(url, body) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const data = await res.json();
    return data.body;
  } catch (err) {
    console.log(err);
  }
}
