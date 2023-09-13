function loader(file, done) {
  const data = require(file);
  const result = {};
  if (data) {
    const mapData = data;
    Object.keys(mapData).forEach((key) => {
      result[mapData[key]] = key;
    });
  }

  done(result);
}

module.exports = loader;
