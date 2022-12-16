function toggleHiddenClass() {
    let codeExamples = document.querySelector(".code-examples");
    codeExamples.addEventListener("click",function(e) {
        if (e.target.classList.contains("code-item__title")) {
            let code=e.target.parentElement.querySelector(".code-item__code");
            code.classList.toggle("hidden");
        }
    })
    }
window.onload=toggleHiddenClass();