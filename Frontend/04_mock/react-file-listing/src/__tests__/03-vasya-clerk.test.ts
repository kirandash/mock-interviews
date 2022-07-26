/*
## Vasya Clerk

The new "Avengers" movie has just been released!
There are a lot of people at the cinema box office standing in a huge line.
Each of them has a single 100, 50 or 25 dollars bill.
A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk.
He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change
if he initially has no money and sells the tickets strictly
in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change.
Otherwise return NO.

### Examples

tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25,50,25,100,25,25,25,100,25,25,50,100,50,25]); // NO
*/

/** Pseudocode
 * loop through queue
 * create variable counterMoney to store counterMoney after sell
 * count change to give = bill - price
 * if change is 0 add price to counterMoney
 * if change is less than counterMoney then add price to counterMoney and give back change to customer
 * else break loop and return No (change > counterMoney)
 * Return Yes in end
 */
function tickets(bills: number[]) {
  let counterMoney = 0;
  const PRICE = 25;
  for (let bill of bills) {
    const change = bill - PRICE;
    if (change === 0) {
      // if change is 0 add price to counterMoney
      counterMoney += PRICE;
    } else if (change <= counterMoney) {
      // if change is less than counterMoney then add price to counterMoney and give back change to customer
      counterMoney += PRICE;
      counterMoney -= change;
    } else if (change > counterMoney) {
      // if change > counterMoney return No
      return "NO";
    } else {
      throw Error("something wrong!");
    }
  }
  return "YES";
}

// alternate but verbose
function tickets2(bills: number[]) {
  let count_25 = 0;
  let count_50 = 0;

  for (let bill of bills) {
    let ok = false;
    const change = bill - 25;
    if (change === 0) {
      ok = true;
    } else if (change === 25) {
      if (count_25 > 0) {
        count_25--;
        ok = true;
      }
    } else if (change === 75) {
      if (count_50 >= 1 && count_25 >= 1) {
        count_25--;
        count_50--;
        ok = true;
      }
      if (count_25 >= 3) {
        count_25 -= 3;
        ok = true;
      }
    }
    if (!ok) {
      return "NO";
    }
    if (bill === 25) {
      count_25++;
    } else if (bill === 50) {
      count_50++;
    } else if (bill === 100) {
      // meh
    }
  }

  return "YES";
}

describe("tests", () => {
  describe("YES", () => {
    it("[25, 25, 50]", () => expect(tickets([25, 25, 50])).toBe("YES"));
  });

  describe("NO", () => {
    it("[25, 100]", () => expect(tickets([25, 100])).toBe("NO"));
    it("[25,50,25,100,25,25,25,100,25,25,50,100,50,25]", () =>
      expect(
        tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 50, 25])
      ).toBe("NO"));
  });
});

export default {};
