selector_to_html = {"a[href=\"#fm-01-federation-metadata\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FM-01 Federation Metadata<a class=\"headerlink\" href=\"#fm-01-federation-metadata\" title=\"Link to this heading\">#</a></h1><h2>Guideline<a class=\"headerlink\" href=\"#guideline\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#references\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">References<a class=\"headerlink\" href=\"#references\" title=\"Link to this heading\">#</a></h2><p>TODO BE2-SP-04, BE2-FO-04, SDP-SP20, SDP-MD01, SDP-MD02, SDP-MD03,\nSDP-04?, SDP-MD05</p>", "a[href=\"#discussion\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Discussion<a class=\"headerlink\" href=\"#discussion\" title=\"Link to this heading\">#</a></h2><p>TODO: What\u2019s multilateral federation?  Why?  Keywords: scaling,\ndynamic recognition of new services or identity providers, graceful\nmanagement of change like rekeying.  Note usefulness in bi-lateral\ninteractions.  Give tangible examples.</p>", "a[href=\"#guideline\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Guideline<a class=\"headerlink\" href=\"#guideline\" title=\"Link to this heading\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
