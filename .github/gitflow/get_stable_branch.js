const { stableBranchName, SemVer } = require("./utils.js");
const pkg = require("../../package.json");

const semVer = new SemVer(pkg.version);

const stableBranchRef = stableBranchName(semVer);

console.log(stableBranchRef);
