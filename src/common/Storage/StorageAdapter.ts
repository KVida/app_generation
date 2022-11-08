export interface StorageAdapter {
    create: (name: string) => void;
    add: (name: string, data: unknown) => void;
    get: (name: string) => string;
    remove: (name: string) => void;
    removeAll: () => void;
}