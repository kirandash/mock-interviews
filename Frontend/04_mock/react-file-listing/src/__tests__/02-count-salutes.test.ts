/*
## Count Salutes

There is a narrow hallway in which people can go right and left only.
When two people meet in the hallway, by tradition they must salute each other.
People move at the same speed left and right.

Your task is to write a function that, given a string representation of
people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

### Input

People moving right will be represented by >; people moving left will
be represented by <. An example input would be >--<--->->.
The - character represents empty space, which you need not worry about.

### Examples

Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.
*/

// <<<>

function countSalutes(str: string) {
  /**
   * Pseudocode:
   * Loop through string
   * Create encounters array
   * For every right person push zero salutes to salutes array - possible oncoming encounter
   * If left person comes next and encounters array has length: add one to all encounters
   * Loop through encounters - multiply by 2 and add all = salutes
   * return salutes
   */
  // O(n^2), O(n)
  let encounters: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === ">") {
      encounters.push(0);
    } else if (char === "<" && encounters.length > 0) {
      encounters = encounters.map((item) => item + 1);
    }
  }
  return encounters.reduce((acc, item) => acc + item * 2, 0);
}

// Another solution: O(n^2) O(2n)
function countSalutes2(str: String) {
  let leftArrows = [];
  let rightArrows = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "<") {
      leftArrows.push(i);
    } else if (char === ">") {
      rightArrows.push(i);
    }
  }
  let pairs = 0;
  for (const rightIdx of rightArrows) {
    for (const leftIdx of leftArrows) {
      if (leftIdx < rightIdx) {
        continue;
      }
      pairs++;
    }
  }
  return pairs * 2;
}

describe("tests", () => {
  it("4", () => expect(countSalutes("<---->---<---<-->")).toBe(4));
  it("0", () => expect(countSalutes("------")).toBe(0));
  it("42", () => expect(countSalutes(">>>>>>>>>>>>>>>>>>>>>----<->")).toBe(42));
  it("2", () => expect(countSalutes("<<----<>---<")).toBe(2));
  it("0 for >", () => expect(countSalutes(">")).toBe(0));
});

export default {};
