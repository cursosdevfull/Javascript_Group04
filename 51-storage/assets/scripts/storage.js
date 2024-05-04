class StorageLocal {
  save(key, value) {
    localStorage.setItem(key, value);
  }

  retrieve(key) {
    return localStorage.getItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

class StorageSession {
  save(key, value) {
    sessionStorage.setItem(key, value);
  }

  retrieve(key) {
    return sessionStorage.getItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}

class StorageCookie {
  save(key, value) {
    const expiresInSeconds = 30;
    const expiresDate = new Date();

    expiresDate.setTime(expiresDate.getTime() + expiresInSeconds * 1000);

    document.cookie = `${key}=${value}; expires=${expiresDate.toGMTString()}`;
  }

  retrieve(key) {
    const pairCookies = this.getPairsCookies(); // key1=value1 ;key2=value2 // ["key1=value1", "key2=value2"]
    const cookies = this.getCookiesLikeJSON(pairCookies);
    return cookies[key];
    // {key1: value1, key2: value2}
  }

  getPairsCookies() {
    return document.cookie.split(";").map((el) => el.trim()); // key1=value1 ;key2=value2 // ["key1=value1", "key2=value2"]
  }

  getCookiesLikeJSON(pairs) {
    return pairs.reduce(this.cookieReduce, {});
  }

  cookieReduce(previousValue, currentValue) {
    const [key, value] = currentValue.split("="); // ["key1", "value1"]

    if (!previousValue[key]) previousValue[key] = value;

    return previousValue;
  }

  clear() {
    const pairCookies = this.getPairsCookies(); // key1=value1 ;key2=value2 // ["key1=value1", "key2=value2"]
    const cookies = this.getCookiesLikeJSON(pairCookies); // {key1: value1, key2: value2}

    const expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() - 1);

    for (const prop in cookies) {
      document.cookie = `${prop}=; expires=${expiresDate.toGMTString()}`;
    }
  }
}

class Storage {
  constructor(factory) {
    this.factory = factory;
  }

  save(key, value) {
    this.factory.save(key, value);
  }

  retrieve(key) {
    const value = this.factory.retrieve(key);
    console.log("value retrieved", value);
  }

  remove() {
    this.factory.clear();
  }
}

const typeFactory = {
  local: StorageLocal,
  session: StorageSession,
  cookie: StorageCookie,
};

const selectFactory = (type) => {
  return new typeFactory[type]();
};

export { selectFactory, Storage };
