export function getDummyHandler(req, res) {
  const data = [...Array(10).keys()].map(i => {
    let item = i + 1;
    return {
      title: `Title of Dummy ${item}`,
      body: `This body of Dummy ${item}`,
    };
  });

  res.json({
    dummies: data,
  });
}

export function postDummyHandler(req, res) {
  res.json({
    message: "Thanks for you request",
    data: req.body,
  });
}
