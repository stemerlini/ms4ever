import { util } from './util.js';
import { guest } from './guest.js';
import { theme } from './theme.js';
import { progress } from './progress.js';
import { pagination } from './pagination.js';
import { rsvp } from './rsvp.js';


document.addEventListener('DOMContentLoaded', () => {
    theme.check();
    pagination.init();
    
    guest.init();
    progress.init();
    window.AOS.init();
    rsvp.init();

    window.rsvp = rsvp;
    window.util = util;
    window.guest = guest;
    window.theme = theme;
    window.pagination = pagination;
});
