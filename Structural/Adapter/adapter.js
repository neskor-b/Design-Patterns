// Old API with different interface:
class OldAPI {
  request() {
    return "Response from OldAPI";
  }
}
// New API expects getData() method:
class NewAPI {
  getData() {
    return "Response from NewAPI";
  }
}

// Adapter that allows NewAPI interface to work with OldAPI:
class OldAPIAdapter extends NewAPI {
  constructor(oldApiInstance) {
    super();
    this.oldApi = oldApiInstance;
  }
  // Transform getData() call to old interface call:
  getData() {
    return this.oldApi.request();
  }
}

// Usage:
const oldApi = new OldAPI();
const adaptedApi = new OldAPIAdapter(oldApi);
console.log(adaptedApi.getData());  // "Response from OldAPI" 