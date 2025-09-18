export type CacheEntry<T> = {
    createdAt: number,
    val: T
};

class Cache {

    #cache = new Map<string, CacheEntry<unknown>>();
    #reapIntervalId : NodeJS.Timeout | undefined;
    #interval: number;
    

    constructor() {
        this.#reapIntervalId = undefined;
        this.#interval = 0;
    }

    #reap() {
        for (const key in this.#cache)
        {
            const entry  = this.#cache.get(key);
            if (entry && entry.createdAt > Date.now() - this.#interval)
                this.#cache.delete(key);
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }

    add<T>(key: string, val: CacheEntry<T>) {
        this.#cache.set(key, val)
    }

    get<T>(key: string) {
        return this.#cache.get(key) as CacheEntry<T> | undefined;
    }
};

