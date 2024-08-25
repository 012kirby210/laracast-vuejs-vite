import swal from "sweetalert";

export function useFlash() {
    function flash(title = 'Success', text = "hello world", level = 'success') {
        return swal(title, text, level);
    }

    return {flash};
}