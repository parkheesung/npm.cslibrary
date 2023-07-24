class KeyValuePair {
    public key: string;
    public value: string;
  
    constructor();
    constructor(key: string, value: string);
    constructor(key?: string, value?: string) {
      this.key = key || '';
      this.value = value || '';
    }
  }
  
  export default KeyValuePair;
  