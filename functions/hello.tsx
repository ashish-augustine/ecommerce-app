// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
]
exports.handler = async function (event: any, context: any) {
  return {
    statusCode: 200,
    body: 'hello world',
  }
}
