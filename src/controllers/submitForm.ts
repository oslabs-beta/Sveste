const submitForm = {};
const url = '/test'

export async function POST(body: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    });
    const data = await res.json();
    return data.body;
  } catch(err) {
    console.log(err);
  }
}