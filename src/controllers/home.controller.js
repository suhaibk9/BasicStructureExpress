const homePingController = (req, res) => {
  res.json({ msg: 'Hello from Home Ping Controller' });
};
module.exports = {
  homePingController,
};
