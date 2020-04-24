export function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

export function assertArrayEquals(a, b, desc) {
  if (a.length != b.length) {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
    return false;
  }

  for (let i=0; i<a.length; i++) {
    if (a[i] != b[i]) {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
      return false;
    }
  }

  console.log(`${desc} ... PASS`);
  return true;
}