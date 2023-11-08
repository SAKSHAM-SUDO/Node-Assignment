const express = require('express');
const imageRoute = require('./images.routes');
const taskRoute = require('./task.routes');
const userRoute = require('./user.routes');
const variantRoute = require('./vehicle.routes');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/image',
    route: imageRoute,
  },
  {
    path: '/tasks',
    route: taskRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/vehicle',
    route: variantRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
