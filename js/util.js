import { storage } from './storage.js';
import { bootstrap } from './bootstrap.js';

export const util = (() => {

    const opacity = (id, speed = 0.01) => {
        const element = document.getElementById(id);
        let op = parseInt(element.style.opacity);

        let clear = null;
        clear = setInterval(() => {
            if (op > 0) {
                element.style.opacity = op.toString();
                op -= speed;
            } else {
                clearInterval(clear);
                clear = null;
                element.remove();
            }
        }, 10);
    };

    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    const disableButton = (button, message = 'Loading..') => {

        button.disabled = true;
        const tmp = button.innerHTML;
        button.innerHTML = `<div class="spinner-border spinner-border-sm my-0 ms-0 me-1 p-0" style="height: 0.8rem; width: 0.8rem"></div>${message}`;

        return {
            restore: () => {
                button.innerHTML = tmp;
                button.disabled = false;
            },
        };
    };

    const addLoadingCheckbox = (checkbox) => {
        checkbox.disabled = true;

        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        const tmp = label.innerHTML;
        label.innerHTML = `<div class="spinner-border spinner-border-sm my-0 ms-0 me-1 p-0" style="height: 0.8rem; width: 0.8rem"></div>${tmp}`;

        return {
            restore: () => {
                label.innerHTML = tmp;
                checkbox.disabled = false;
            },
        };
    };

    const animate = (svg, timeout, classes) => {
        setTimeout(() => {
            svg.classList.add(classes);
        }, timeout);
    };

    const modal = (img) => {
        document.getElementById('show-modal-image').src = img.src;
        (new bootstrap.Modal('#modal-image')).show();
    };

    const close = () => {
        storage('information').set('info', true);
    };

     // Clipboard copy function
    const copy = (element, successText) => {
        const textToCopy = element.getAttribute('data-copy');
        try { 
            navigator.clipboard.writeText(textToCopy);
            // Visual feedback
            const originalText = element.innerHTML;
            element.innerHTML = successText;
        
            // Revert text after 2 seconds
            setTimeout(() => {
                element.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            alert('Failed to copy: ' + err.message);
        }
    }

    return {
        close,
        modal,
        opacity,
        animate,
        escapeHtml,
        disableButton,
        addLoadingCheckbox,
        copy
    }
})();