// const url = '/test';
import axios from "axios";

// export async function POST(url, body) {
//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body,
//     });
//     const data = await res;
//     console.log(data.body);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }
// export function POST(url, body) {
//   axios
//     .post(url, {
//       body,
//     })
//     .then((response) => console.log(response.data))
//     .then((response) => {
//       return response;
//     });
// }
export async function POST(url, body) {
  try {
    const response = await axios.post(url, {
      body,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// export function handleFormSubmission() {
//   const form = document.querySelector('form');
//   const formData = new FormData(form);
//   const testParam = new URLSearchParams();
//   const testBody = {};
//   for (const [key, value] of formData) {
//     if (key === 'htmlTag' && typeof value === 'string') {
//       testParam.append(key, value);
//     } else {
//       testBody[key] = value;
//     }
//   }
//   let response = POST('/test?' + testParam, JSON.stringify(testBody));
// }
