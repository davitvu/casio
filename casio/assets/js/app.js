const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/*
    Hàm này dùng để load form Header và footer

     Cách dùng:
     <div id="parent"></div>
    <script>
        load("#name (id của thẻ box)", "./path-to-template.html (đường dẫn template");
    </script>
*/

function load(selector, path) {
    const cached = localStorage.getItem(path);
    if (cached) {
        $(selector).innerHTML = cached;
    }

    fetch(path)
        .then((res) => res.text())
        .then((html) => {
            if (html !== cached) {
                $(selector).innerHTML = html;
                localStorage.setItem(path, html);
            }
        })
        .finally(() => {
            window.dispatchEvent(new Event("template-loaded"));
        });
}

