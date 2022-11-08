import {StorageAdapter} from "./StorageAdapter";

export class AppStorage {
    private storage: StorageAdapter;

    constructor(storage: StorageAdapter) {
        this.storage = storage;
    }

    set(storage: StorageAdapter) {
        this.storage = storage;
    }

    create(name: string) {
        this.storage.create(name);
    }

    add(name: string, data: unknown) {
        this.storage.add(name, data);
    }

    get(name: string) {
        return this.storage.get(name);
    }

    remove(name: string) {
        this.storage.remove(name);
    }

    removeAll() {
        this.storage.removeAll();
    }
}