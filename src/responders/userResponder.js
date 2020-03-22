module.exports = ({ cote, userService }) => {
  const userResponder = new cote.Responder({
     name: 'user responder'
  });
  userResponder.on('get user responder', async (req, cb) => {
    console.log(req.type);
    const user = await userService.getUser();
    
    cb(user);
  });
};

