import {StorageAdapter} from "./StorageAdapter";

export class LocalStorage implements StorageAdapter {

    create(name: string) {
        localStorage.setItem(name, '');
    }

    add(name: string, data: unknown) {
        let storage = this.get(name);
        let jsonData = JSON.parse(String(data));
        if (storage === '') {
            let arrData = [];
            arrData.push(jsonData);

            localStorage.setItem(name, JSON.stringify(arrData));
        } else {
            let arrData = JSON.parse(storage);
            arrData.push(jsonData);

            localStorage.setItem(name, JSON.stringify(arrData));
        }
    }

    get(name: string) {
        return localStorage.getItem(name) as string;
    }

    remove(name: string) {
        localStorage.removeItem(name);
    }

    removeAll() {
        localStorage.clear();
    }
}