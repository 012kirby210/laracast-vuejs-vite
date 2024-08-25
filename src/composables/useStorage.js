import {ref, watch} from "vue";

export function useStorage(key, defaultValue = null) {

    let storedValue = read();

    let val = '';

    if (storedValue) {
        val = ref(storedValue);
    } else {
        val = ref(defaultValue);
        write();
    }


    function write() {
        if ('' === val.value || null === val.value) {
            localStorage.removeItem(key);
        }
        localStorage.setItem(key, val.value);
    }

    function read() {
        return localStorage.getItem(key);
    }

    watch(val, write);

    return val;
}