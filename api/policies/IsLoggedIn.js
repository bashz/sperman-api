module.exports = async (req, res, proceed) => {
  if (!req.session.userId) {
    return res.forbidden(new Error('Unauthenticated user trying to access protected ressource'))
  }
  return proceed()
}
