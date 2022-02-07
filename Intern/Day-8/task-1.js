let info = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json());
//  .then((result) => console.log(result));

async function userFetch() {
  try {
    const result = await info;
    console.log(result);
  } catch (err) {
    console.log("fetch failed", err);
  }
}
userFetch();