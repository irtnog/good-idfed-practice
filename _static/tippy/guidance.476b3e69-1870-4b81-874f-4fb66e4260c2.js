selector_to_html = {"a[href=\"#research-and-education-federations-working-group-refeds\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Research and Education Federations Working Group (REFEDS)<a class=\"headerlink\" href=\"#research-and-education-federations-working-group-refeds\" title=\"Link to this heading\">#</a></h2><p>Security Contact</p>", "a[href=\"#\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Guidance<a class=\"headerlink\" href=\"#guidance\" title=\"Link to this heading\">#</a></h1><h2>InCommon Federation<a class=\"headerlink\" href=\"#incommon-federation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#guidance\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Guidance<a class=\"headerlink\" href=\"#guidance\" title=\"Link to this heading\">#</a></h1><h2>InCommon Federation<a class=\"headerlink\" href=\"#incommon-federation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#incommon-federation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">InCommon Federation<a class=\"headerlink\" href=\"#incommon-federation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#organization-for-the-advancement-of-structured-information-standards-oasis\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Organization for the Advancement of Structured Information Standards (OASIS)<a class=\"headerlink\" href=\"#organization-for-the-advancement-of-structured-information-standards-oasis\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#edugain\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">eduGAIN<a class=\"headerlink\" href=\"#edugain\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#internet-engineering-task-force-ietf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Internet Engineering Task Force (IETF)<a class=\"headerlink\" href=\"#internet-engineering-task-force-ietf\" title=\"Link to this heading\">#</a></h2>"}
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
