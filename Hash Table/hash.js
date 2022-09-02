class HashTable {
  constructor(size = 27) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 23;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [];

    this.keyMap[hashedKey].push([key, value]);

    return hashedKey;
  }
  get(key) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) return undefined;

    const element = this.keyMap[hashedKey].find((arr) => arr[0] === key);
    return element ? element[1] : undefined;
  }
  values() {
    const valuesArr = [];
    this.keyMap.forEach((pairHolder) => {
      if (pairHolder) {
        pairHolder.forEach((keyValuePair) => {
          const value = keyValuePair[1];
          if (!valuesArr.includes(value)) valuesArr.push(value);
        });
      }
    });
    return valuesArr;
  }
  keys() {
    const keysArr = [];
    this.keyMap.forEach((pairHolder) => {
      if (pairHolder) {
        pairHolder.forEach((keyValuePair) => {
          const key = keyValuePair[0];
          if (!keysArr.includes(key)) keysArr.push(key);
        });
      }
    });
    return keysArr;
  }
}
