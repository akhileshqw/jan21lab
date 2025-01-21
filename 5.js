function fetchData(url) {
  let p = new Promise((resolve, reject) => {
    if (url.includes("error")) {
      reject("failed to get data");
    } else {
      resolve("data fetched successfully");
    }
  });

  return p;
}

let res = fetchData("https://localhost:/error/3000/login/");

let rres = res
  .then((x) => {
    console.log(x);
  })
  .catch((y) => {
    console.log(y);
  })
  .finally(() => {
    console.log("work done");
  });
