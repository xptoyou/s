document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".block");
    const pageContent = document.getElementById("page-content");
    const saveBtn = document.getElementById("saveBtn");

    // Drag event listeners
    blocks.forEach(block => {
        block.addEventListener("dragstart", dragStart);
    });

    pageContent.addEventListener("dragover", dragOver);
    pageContent.addEventListener("drop", drop);

    function dragStart(e) {
        e.dataTransfer.setData("type", e.target.dataset.type);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const type = e.dataTransfer.getData("type");
        
        if (type === "text") {
            const newTextBlock = document.createElement("p");
            newTextBlock.textContent = "New Text Block";
            pageContent.appendChild(newTextBlock);
        } else if (type === "image") {
            const newImageBlock = document.createElement("img");
            newImageBlock.src = "https://via.placeholder.com/150";
            pageContent.appendChild(newImageBlock);
        }
    }

    // Save button event listener
    saveBtn.addEventListener("click", function() {
        const contentHtml = pageContent.innerHTML;
        
        fetch('/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: contentHtml })
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
    });
});
