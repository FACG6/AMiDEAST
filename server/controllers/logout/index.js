module.exports = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).send({
    error: null,
    data: {
      code: 200,
      msg: 'logout successful',
    },
  });
};
