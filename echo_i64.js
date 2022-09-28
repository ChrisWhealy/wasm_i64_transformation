const wasmFilePath = "./echo_i64.wasm"

var wasmFn

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Async function to create Wasm instance
const startWasm = async pathToWasmFile => {
  // Fetch the WASM module and instantiate
  let wasmMod = await WebAssembly.instantiateStreaming(fetch(pathToWasmFile), {})
  wasmFn = wasmMod.instance.exports
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Everything starts here
const testVal1 = "0x1234567890ABCDEF"
const testVal2 = "0xDEADBEEFDEADBEEF"

const mysteryVal = BigInt(-2152411021524111)

console.log(`testVal1 = ${BigInt(testVal1)}, ${BigInt(testVal1).toString(16)}`)
console.log(`testVal2 = ${BigInt(testVal2)}, ${BigInt(testVal2).toString(16)}`)

console.log(`mysteryVal = ${mysteryVal}, ${mysteryVal.toString(16)}`)

await startWasm(wasmFilePath)

// Test i64 values over JS -> Wasm interface
const response1 = wasmFn.echoI64(BigInt(testVal1))
const response2 = wasmFn.echoI64(BigInt(testVal2))

console.log(`Wasm echoI64("${testVal1}") = ${BigInt(response1).toString(16)}`)
console.log(`Wasm echoI64("${testVal2}") = ${BigInt(response2).toString(16)}`)
