const announcements = [
    {
        title: "សប្តាហ៍ទី ២៦​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/14ueg3P2_L_s_RQMbur6prBqsUWgUTN0x/preview"
    },
    {
        title: "សប្តាហ៍ទី ២៥​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/1m5QeWha-LHhpZHAtRMIObs_eR69ELPfO/preview"
    },
    {
        title: "សប្តាហ៍ទី ២៤​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/11rFPrIgwrkfqXqnB9QJSfsnO_VOFWJ0y/preview"
    },
    {
        title: "សប្តាហ៍ទី ២៣​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/11rFPrIgwrkfqXqnB9QJSfsnO_VOFWJ0y/preview"
    },
    {
        title: "សប្តាហ៍ទី ២២​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/17cnSwvmwimIYs6qB-rjI5lVbby0P0Wd3/preview"
    },
    {
        title: "សប្តាហ៍ទី ២១​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/1oVODIRjYUhJn9cEL9YC6YbxcOt_60Gh7/preview"
    },
    {
        title: "សប្តាហ៍ទី ២០​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/13ovWCpTCac7hzuaDtiRTvK5aREOln3KG/preview"
    },
    {
        title: "សប្តាហ៍ទី ១៩​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/1v9VCwQGJD-3cdVwBAFxQyv_XJZZcJmyr/preview"
    },
    {
        title: "សប្តាហ៍ទី ១៨​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/1yhXxx2aZgonRYXexe9uU65kpYOCkCkX1/preview"
    },
    {
        title: "សប្តាហ៍ទី ១៧​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/1SURZH8Fap_ESsdEr_vn76zUhNFcGiEJ1/preview"
    },
    {
        title: "សប្តាហ៍ទី ១៦​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/14LhmH68U4Xe73QHuYxN6U8nc65deHPMU/preview"
    },
    {
        title: "សប្តាហ៍ទី ១៥​ រដូវធម្មតា",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "https://drive.google.com/file/d/1CnjrqarJPLL1Zv8qVBBWJ4Z_HMqVDO60/preview"
    },
    {
        title: "សប្តាហ៍ទី ១៤​ រដូវធម្មតា",
        date: "July 10, 2023",
        content: "This is the content for Announcement 1.",
        pdfLink: "https://drive.google.com/file/d/14wEoIG4ObvsbnX6tmkJEE39oFfhu2pKM/preview"
    },
    
    {
        title: "Announcement 2",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "path/to/announcement2.pdf"
    },
    {
        title: "Announcement 2",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "path/to/announcement2.pdf"
    },
    {
        title: "Announcement 2",
        date: "July 11, 2023",
        content: "This is the content for Announcement 2.",
        pdfLink: "path/to/announcement2.pdf"
    },
];

const postsPerPage = 5;
let currentPage = 1;

function displayPosts(page) {
    const postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";

    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = announcements.slice(start, end);

    paginatedPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("d-flex", "mb-3");
        
        const postDetails = `
            <img class="img-fluid" src="img/blog-1.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt="">
            <a href="#" class="h5 d-flex align-items-center bg-light px-3 mb-0" style="font-family: 'Noto Serif Khmer', serif;">${post.title}</a>
        `;
        postDiv.innerHTML = postDetails;
        postDiv.addEventListener("click", () => {
            document.getElementById("pdfViewer").src = post.pdfLink;
        });

        postContainer.appendChild(postDiv);
    });

    updatePaginationControls();
}

function updatePaginationControls() {
    const paginationControls = document.getElementById("paginationControls");
    paginationControls.innerHTML = "";

    const totalPages = Math.ceil(announcements.length / postsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.classList.add("btn", "btn-primary", "me-2");
        pageButton.textContent = i;
        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayPosts(currentPage);
        });

        paginationControls.appendChild(pageButton);
    }
}

// Initial display
displayPosts(currentPage);
