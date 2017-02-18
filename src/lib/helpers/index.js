const jsonprint = (data) => {
  // console.dir(results.ops, { colors: true })
  return console.log(JSON.stringify(data, undefined, 2))
}

module.exports = { jsonprint }
