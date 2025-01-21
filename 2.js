function mul(num, callback) {
  callback(num * 2);
}

function sub(num, callback) {
  callback(num - 3);
}

function add(num, callback) {
  callback(num + 10);
}

mul(2, (res, err) => {
  if (!err) {
    sub(res, (sres, err2) => {
      if (!err2) {
        add(sres, (ares, err3) => {
          if (!err3) {
            console.log(ares);
          }
        });
      }
    });
  }
});
