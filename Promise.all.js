export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;
    if (unresolved === 0) {
      resolve(results);
      return;
    }
    iterable.forEach((item, index) => {
      Promise.resolve(item).then((value) => {
        console.log(index);
        results[index] = value;
        unresolved--;
        if (unresolved === 0) {
          resolve(results);
        }
      }),
        (err) => {
          reject(err);
        };
    });
  });
}
