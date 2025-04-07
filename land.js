

document.querySelectorAll('[data-tippy-item]').forEach(triggerElement => {

    const targetSelector = triggerElement.dataset.tippyItem; // Например, "#target"
    const targetElement = document.querySelector(`[data-tippy-position="${targetSelector}"]`);
    triggerElement.addEventListener('mouseenter', (e) => {
        targetElement.classList.add('hov');
    });

    triggerElement.addEventListener('mouseleave', (e) => {
        targetElement.classList.remove('hov');
    });
    if (targetElement) {
        tippy(triggerElement, {
            allowHTML: true,
            theme: 'land-theme',
            content: (reference) => {
                const title = reference.getAttribute('data-tippy-name');
                const value = reference.getAttribute('data-tippy-value');
                const result = `<div><span class="tippy-num">${value}</span><span class="tippy-val">${title}</span></div>`;
                return result;
            },
            placement: 'top',
            getReferenceClientRect: () => targetElement.getBoundingClientRect(),
        });
    }
});