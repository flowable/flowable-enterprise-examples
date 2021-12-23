const desiredInc = process.argv[2] || "patch";
const execSync = require("child_process").execSync;
const semver = require("semver");
const packagejson = require("./package.json");
const fs = require("fs");
const run = cmd => execSync(cmd, { stdio: "inherit" });

if (["major", "minor", "patch"].indexOf(desiredInc) < 0) {
  throw "usage: node newversion.js VERSION\nwhere VERSION is major, minor or patch " + desiredInc;
}

const current = packagejson.version;
const newVersion = semver.inc(current, desiredInc);

try {
  const f = fs
    .readFileSync("../palette/pom.xml", "utf8")
    .replace(/<version>.*<\/version>/, `<version>${newVersion}</version>`);
  packagejson.version = newVersion;

  run("git stash");
  run("git pull");
  fs.writeFileSync("../palette/pom.xml", f);
  fs.writeFileSync("package.json", JSON.stringify(packagejson, null, 2));
  run("git add package.json ../palette/pom.xml");
  run(`git commit -m "Pre-release version ${newVersion}"`);
  run(`git tag -a v${newVersion} -m "v${newVersion}"`);
  run("git push --follow-tags");
} catch (e) {
  console.error(e.message, e.stderr, e.stdout);
} finally {
  try {
    run("git stash pop");
  } catch (e1) {}
}
