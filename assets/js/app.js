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



window.addEventListener("template-loaded", AddRemoveClass)


function AddRemoveClass() {
    let listLi = document.querySelectorAll(".nav-direction_box li");

    listLi.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            let lis = item.querySelectorAll(".nav-subnav_direction li");
            if (lis.length > 0) {
                document.querySelector(".nav-subnav_direction-link.subnav-direction_active")?.classList.remove("subnav-direction_active");
                lis[0].querySelector(".nav-subnav_direction-link")?.classList.add("subnav-direction_active");
                let dropdownInner = lis[0].closest(".nav-dropdown_inner");
                if (dropdownInner) {
                    dropdownInner.querySelector(".nav-subnav_center.dp-block")?.classList.remove("dp-block");
                    dropdownInner.querySelector(".nav-subnav_center")?.classList.add("dp-block");
                }
                lis.forEach((li, index) => {
                    li.addEventListener("mouseenter", () => {
                        document.querySelector(".nav-subnav_direction-link.subnav-direction_active")?.classList.remove("subnav-direction_active");
                        li.querySelector(".nav-subnav_direction-link")?.classList.add("subnav-direction_active");

                        if (dropdownInner) {
                            dropdownInner.querySelector(".nav-subnav_center.dp-block")?.classList.remove("dp-block");
                            dropdownInner.querySelectorAll(".nav-subnav_center")[index]?.classList.add("dp-block");
                        }
                    });
                });
            }
        });
    });
}

