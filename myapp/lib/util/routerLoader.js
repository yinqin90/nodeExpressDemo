var requireDirectory = require("require-directory");
var routes = requireDirectory(module, "../../routes");
module.exports = function (app) {
    for (key in routes) {
        if (key === "index") app.use("/", routes[key]);  
        else app.use("/" + key, routes[key]);
    }
};