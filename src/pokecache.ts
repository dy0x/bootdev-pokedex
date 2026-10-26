export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  #reap() {
    const cutoff = Date.now() - this.#interval;
    for (const [key, { createdAt, val }] of this.#cache) {
      if (createdAt < cutoff) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, { createdAt: Date.now(), val: val });
  }

  get<T>(key: string) {
    const cacheVal = this.#cache.get(key);
    if (!cacheVal) {
      return undefined;
    }
    return cacheVal.val;
  }
}
