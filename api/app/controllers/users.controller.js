const getUsers = function(req, res) {
  res.json({ users: [{ name: 'Juni Brosas' }] });
};

module.exports = {
  getUsers
};
