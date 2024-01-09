export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer
  const arrayBuffer = new ArrayBuffer(length);
  // Create a DataView to manipulate the buffer
  const dataView = new DataView(arrayBuffer);
  // Check if the position is in the range of the buffer
  if (position >= 0 && position < length) {
    // Set the Int8 value at the specified position
    dataView.setInt8(position, value);
  } else throw new Error('Position outside range');

  return dataView;
}
