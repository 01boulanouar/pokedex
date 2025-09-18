export type CacheEntry<T> = {
    createdAt: number,
    val: T
};

export class Cache {

    #cache = new Map<string, CacheEntry<unknown>>();
    #reapIntervalId : NodeJS.Timeout | undefined;
    #interval: number;
    

    constructor(interval: number) {
        this.#reapIntervalId = undefined;
        this.#interval = interval;
        this.#startReapLoop();
    }

    #reap() {
        for (const [key, entry] of this.#cache)
        {
            if (entry.createdAt < Date.now() - this.#interval)
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

    add<T>(key: string, val: T) {
        this.#cache.set(key, { 
            createdAt: Date.now(),
            val 
    })}

    get<T>(key: string) {
        return this.#cache.get(key)?.val as T;
    }

    has<T>(key: string)
    {
        return this.#cache.has(key);
    }
};

