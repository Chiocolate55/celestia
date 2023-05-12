export function dataToHex(txData) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(txData);
  const buffer = new Uint8Array(bytes).buffer;
  return Buffer.from(buffer).toString("hex");
}