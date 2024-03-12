function createInt8TypedArray(length, position, value) {
  // Check if the specified position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array using the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position in the Int8Array
  int8Array[position] = value;

  // Return the DataView of the ArrayBuffer
  return new DataView(buffer);
}

export default createInt8TypedArray;
