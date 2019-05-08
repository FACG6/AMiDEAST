
exports.authorization = (req, res, next) => (req.payload ? next() : res.redirect('/login'));
exports.permission = (req, res, next) => (req.payload ? res.redirect('/') : next());

exports.studentpermission = (req, res, next) => (req.payload.role === 'student' ? next() : res.redirect('/staff'));
exports.staffpermission = (req, res, next) => (req.payload.role === 'staff' ? next() : res.redirect('/staff'));
