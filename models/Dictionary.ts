import KeyValuePair from "./KeyValuePair";

class Dictionary {
  private data: Array<KeyValuePair>;

  constructor();
  constructor(data: Array<KeyValuePair>);
  constructor(data?: Array<KeyValuePair>) {
    this.data = data || [];
  }

  get value(): Array<KeyValuePair> {
    return this.data;
  }

  set value(newValue: Array<KeyValuePair>) {
    this.data = newValue;
  }

  Add(item: KeyValuePair): void {
    this.data.push(item);
  }

  Append(key: string, value: string): void {
    this.data.push(new KeyValuePair(key, value));
  }

  Erase(key: string): void {
    this.data = this.data.filter(item => item.key !== key);
  }

  Contain(key: string): boolean {
    return this.data.some(item => item.key === key);
  }

  Find(key: string): string | null {
    const foundItem = this.data.find(item => item.key === key);
    return foundItem ? foundItem.value : null;
  }

  get length(): number {
    return this.data.length;
  }

  get Keys(): string[] {
    return this.data.map(x => x.key);
  }

  get Values(): string[] {
    return this.data.map(x => x.value);
  }
}

export default Dictionary;
