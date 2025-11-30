// ==========================================
// DATA SECTION
// Edit this list to change your books/slides
// ==========================================
const resources = [
    {
        id: '7',
        title: 'Physics - Chapter 3',
        author: 'Physics Department',
        type: 'SLIDE',
        subject: 'Physics',
        description: 'Slides for Chapter 3: Vectors.',
        url: 'physics_content/Chapter 3.pptx',
        videoUrl: null,
        notes: 'Covers vector operations and components.',
        coverImage: 'https://picsum.photos/seed/physics3/400/300'
    },
    {
        id: '8',
        title: 'Physics - Chapter 4',
        author: 'Physics Department',
        type: 'SLIDE',
        subject: 'Physics',
        description: 'Slides for Chapter 4: Motion in Two and Three Dimensions.',
        url: 'physics_content/chap_4.pptx',
        videoUrl: null,
        notes: 'Projectile motion and uniform circular motion.',
        coverImage: 'https://picsum.photos/seed/physics4/400/300'
    },
    {
        id: '9',
        title: 'Physics - Chapter 15',
        author: 'Physics Department',
        type: 'SLIDE',
        subject: 'Physics',
        description: 'Slides for Chapter 15: Oscillations.',
        url: 'physics_content/chap_15.pptx',
        videoUrl: null,
        notes: 'Simple harmonic motion and pendulums.',
        coverImage: 'https://picsum.photos/seed/physics15/400/300'
    },
    {
        id: '10',
        title: 'Physics - Chapter 15 (Part 2)',
        author: 'Physics Department',
        type: 'SLIDE',
        subject: 'Physics',
        description: 'Part 2 of slides for Chapter 15: Damped and Forced Oscillations.',
        url: 'physics_content/chap15 (PART 2).pptx',
        videoUrl: null,
        notes: 'Resonance and damping.',
        coverImage: 'https://picsum.photos/seed/physics15p2/400/300'
    },
    {
        id: '11',
        title: 'Physics - Chapter 21',
        author: 'Physics Department',
        type: 'SLIDE',
        subject: 'Physics',
        description: 'Slides for Chapter 21: Electric Charge.',
        url: 'physics_content/chapter_21.pptx',
        videoUrl: null,
        notes: 'Coulomb\'s Law and charge conservation.',
        coverImage: 'https://picsum.photos/seed/physics21/400/300'
    },
    {
        id: '12',
        title: 'Physics - Chapter 22',
        author: 'Physics Department',
        type: 'SLIDE',
        subject: 'Physics',
        description: 'Slides for Chapter 22: Electric Fields.',
        url: 'physics_content/chapter_22.pptx',
        videoUrl: null,
        notes: 'Electric field lines and dipoles.',
        coverImage: 'https://picsum.photos/seed/physics22/400/300'
    },
    {
        id: '6',
        title: 'Fundamentals of Physics',
        author: 'Halliday, Resnick, Walker',
        type: 'BOOK',
        subject: 'Physics',
        description: 'The 10th edition of the gold-standard in physics education.',
        url: 'physics_content/fundamentals_of_physics.pdf',
        videoUrl: null,
        notes: 'A great resource for introductory physics concepts.',
        coverImage: 'https://picsum.photos/seed/physics/400/300'
    },
    {
        id: '13',
        title: 'Thomas Calculus (13th Edition)',
        author: 'George B. Thomas',
        type: 'BOOK',
        subject: 'Calculus',
        description: 'Widely used calculus textbook covering single and multivariable calculus.',
        url: 'calculus_content/Thomas Calculus 13th Edition.pdf',
        videoUrl: null,
        notes: 'Great for practice problems and theory.',
        coverImage: 'https://picsum.photos/seed/calculus/400/300'
    },
    {
        id: '14',
        title: 'Programming - Week 02 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 02.',
        url: 'programming_content/Week_02_Lec_01 (1).pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog02/400/300'
    },
    {
        id: '15',
        title: 'Programming - Week 03 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 03.',
        url: 'programming_content/Week_03_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog03/400/300'
    },
    {
        id: '16',
        title: 'Programming - Week 04 Lec 02',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 04.',
        url: 'programming_content/Week_04_Lec_02.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog04/400/300'
    },
    {
        id: '17',
        title: 'Programming - Week 05 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 05.',
        url: 'programming_content/Week_05_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog05/400/300'
    },
    {
        id: '18',
        title: 'Programming - Week 06 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 06.',
        url: 'programming_content/Week_06_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog06/400/300'
    },
    {
        id: '19',
        title: 'Programming - Week 07 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 07.',
        url: 'programming_content/Week_07_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog07a/400/300'
    },
    {
        id: '20',
        title: 'Programming - Week 07 Lec 02',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 07.',
        url: 'programming_content/Week_07_Lec_02.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog07b/400/300'
    },
    {
        id: '21',
        title: 'Programming - Week 08 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 08.',
        url: 'programming_content/Week_08_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog08a/400/300'
    },
    {
        id: '22',
        title: 'Programming - Week 08 Lec 02',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 08.',
        url: 'programming_content/Week_08_Lec_02.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog08b/400/300'
    },
    {
        id: '23',
        title: 'Programming - Week 09 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 09.',
        url: 'programming_content/Week_09_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog09a/400/300'
    },
    {
        id: '24',
        title: 'Programming - Week 09 Lec 02',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 09.',
        url: 'programming_content/Week_09_Lec_02.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog09b/400/300'
    },
    {
        id: '25',
        title: 'Programming - Week 10 Lec 01',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 10.',
        url: 'programming_content/Week_10_Lec_01.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog10a/400/300'
    },
    {
        id: '26',
        title: 'Programming - Week 10 Lec 02',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 10.',
        url: 'programming_content/Week_10_Lec_02.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog10b/400/300'
    },
    {
        id: '27',
        title: 'Programming - Week 11 Lec 02',
        author: 'CS Department',
        type: 'SLIDE',
        subject: 'Programming',
        description: 'Lecture slides for week 11.',
        url: 'programming_content/Week_11_Lec_02.pptx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/prog11b/400/300'
    },
    {
        id: '28',
        title: 'Pakistan Studies - Geography of Pakistan',
        author: 'Dept. of Pakistan Studies',
        type: 'SLIDE',
        subject: 'Pakistan Studies',
        description: 'Comprehensive coverage of Pakistan geography.',
        url: 'pak_study_content/Geography of Pakistan.pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/pak1/400/300'
    },
    {
        id: '29',
        title: 'Pakistan Studies - Mr. Qazmi Notes',
        author: 'Mr. Qazmi',
        type: 'BOOK',
        subject: 'Pakistan Studies',
        description: 'Pakistan studies compiled notes.',
        url: 'pak_study_content/pdfcoffee.com_pakistan-studies-mr-qazmi-pdf-free (1).pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/pak2/400/300'
    },
    {
        id: '30',
        title: 'Ideology - Pakistan Studies Notes',
        author: 'Compiled',
        type: 'BOOK',
        subject: 'Ideology',
        description: 'Notes relevant to ideology and Pakistan studies.',
        url: 'ideology_content/pdfcoffee.com_pakistan-studies-mr-qazmi-pdf-free (1).pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/ideology/400/300'
    },
    {
        id: '31',
        title: 'Functional English - Business Letters',
        author: 'English Dept.',
        type: 'SLIDE',
        subject: 'Functional English',
        description: 'Guide and examples for business letters.',
        url: 'functional_english_content/Business_Letters (1).pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/eng1/400/300'
    },
    {
        id: '32',
        title: 'Functional English - Modifiers Worksheet',
        author: 'English Dept.',
        type: 'SLIDE',
        subject: 'Functional English',
        description: 'Worksheet on misplaced and dangling modifiers.',
        url: 'functional_english_content/Misplaced_Dangling_Modifier_Worksheet_with_Reasoning.docx',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/eng2/400/300'
    },
    {
        id: '33',
        title: 'Functional English - Modifiers Overview',
        author: 'English Dept.',
        type: 'SLIDE',
        subject: 'Functional English',
        description: 'Overview of modifiers in grammar.',
        url: 'functional_english_content/Modifiers_Misplaced.pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/eng3/400/300'
    },
    {
        id: '34',
        title: 'Functional English - Pronoun Reference',
        author: 'English Dept.',
        type: 'SLIDE',
        subject: 'Functional English',
        description: 'Notes on pronoun reference.',
        url: 'functional_english_content/Pronoun Reference.pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/eng4/400/300'
    },
    {
        id: '35',
        title: 'Functional English - Dangling Modifiers',
        author: 'English Dept.',
        type: 'SLIDE',
        subject: 'Functional English',
        description: 'Notes on dangling modifiers.',
        url: 'functional_english_content/dangling-modifiers (1) (1).pdf',
        videoUrl: null,
        notes: null,
        coverImage: 'https://picsum.photos/seed/eng5/400/300'
    },
    {
        id: '1',
        title: 'Introduction to Java Programming',
        author: 'Y. Daniel Liang',
        type: 'BOOK', // Use 'BOOK' or 'SLIDE'
        subject: 'Computer Science',
        description: 'A comprehensive guide to learning Java from basics to advanced concepts.',
        url: '#', // Link to the resource (PDF or site)
        videoUrl: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', // Optional: related video link
        notes: 'Focus on Chapters 1-5 for exam prep.', // Optional: quick notes
        coverImage: 'https://picsum.photos/seed/java1/400/300'
    },
    {
        id: '2',
        title: 'Web Design for Beginners',
        author: 'EduShare Team',
        type: 'SLIDE',
        subject: 'Web Development',
        description: 'Lecture slides covering HTML structure, CSS styling, and responsive design.',
        url: '#',
        videoUrl: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
        notes: 'Review responsive design section and media queries.',
        coverImage: 'https://picsum.photos/seed/web1/400/300'
    },
    {
        id: '3',
        title: 'Data Structures and Algorithms',
        author: 'Robert Lafore',
        type: 'BOOK',
        subject: 'Computer Science',
        description: 'Understand how to efficiently store and process data using Java.',
        url: '#',
        videoUrl: 'https://www.youtube.com/watch?v=8hly31xKli0',
        notes: 'Practice arrays, stacks, and queues; solve 5 problems/day.',
        coverImage: 'https://picsum.photos/seed/dsa/400/300'
    },
    {
        id: '4',
        title: 'Database Management Systems',
        author: 'Prof. John Smith',
        type: 'SLIDE',
        subject: 'Databases',
        description: 'University slides on SQL, Normalization, and Relational Databases.',
        url: '#',
        videoUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        notes: 'Memorize normal forms and practice SELECT/JOIN queries.',
        coverImage: 'https://picsum.photos/seed/db/400/300'
    },
    {
        id: '5',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        type: 'BOOK',
        subject: 'Computer Science',
        description: 'A handbook of agile software craftsmanship. Essential for every developer.',
        url: '#',
        videoUrl: 'https://www.youtube.com/watch?v=7EmboKQH8lM',
        notes: 'Naming, functions, and error handling are the key chapters.',
        coverImage: 'https://picsum.photos/seed/clean/400/300'
    }
];

// ==========================================
// APPLICATION LOGIC
// ==========================================

// 1. Navigation Logic
function navigateTo(pageId) {
    // Hide all pages
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show the selected page
    const selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update Navbar Active State
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.getElementById('nav-' + pageId);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // If going to courses, ensure something is rendered
    if (pageId === 'courses') {
        const firstBtn = document.querySelector('.filter-btn');
        const subject = firstBtn ? firstBtn.textContent : null;
        renderCourses(subject || null);
        if (firstBtn) firstBtn.classList.add('active');
    }
}

// 2. Data Rendering Logic
const gridContainer = document.getElementById('course-grid');
let selectedSubject = null;
let selectedType = 'BOOK'; // 'BOOK' or 'SLIDE'

function updateHash() {
    if (!selectedSubject) return;
    const typeSlug = selectedType === 'BOOK' ? 'books' : 'lectures';
    location.hash = `#courses?subject=${encodeURIComponent(selectedSubject)}&type=${typeSlug}`;
}

function parseHash() {
    const hash = location.hash || '';
    if (!hash.startsWith('#courses')) return null;
    const query = hash.split('?')[1];
    if (!query) return null;
    const params = new URLSearchParams(query);
    const subject = params.get('subject');
    const typeSlug = (params.get('type') || '').toLowerCase();
    const type = typeSlug === 'lectures' ? 'SLIDE' : 'BOOK';
    return { subject, type };
}

function updateBreadcrumb() {
    const el = document.getElementById('course-crumbs');
    if (!el) return;
    if (!selectedSubject) { el.textContent = ''; return; }
    const typeLabel = selectedType === 'BOOK' ? 'Books' : 'Lectures';
        el.innerHTML = `Courses &rsaquo; <strong>${selectedSubject}</strong> &rsaquo; <strong>${typeLabel}</strong>`;
}

function createCardHTML(item) {
    const typeLabel = item.type === 'BOOK' ? '📖 Book' : '📊 Slide';
    const typeColor = item.type === 'BOOK' ? '#e1f5fe' : '#fff3e0';
    const typeTextColor = item.type === 'BOOK' ? '#0277bd' : '#ef6c00';
        const viewUrl = encodeURI(item.url);
        const videoUrl = item.videoUrl ? encodeURI(item.videoUrl) : null;

    return `
      <div class="card">
        <div class="card-img" style="background-image: url('${item.coverImage}');"></div>
        <div class="card-body">
            <span class="card-type" style="color: ${typeTextColor}; background: ${typeColor}; padding: 2px 6px; border-radius: 4px;">
                ${typeLabel}
            </span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-author">By ${item.author}</p>
                <p class="card-desc">${item.description}</p>
                    <div style="display:flex; gap:10px; flex-wrap:wrap;">
                        <a href="${viewUrl}" target="_blank" class="card-link">View Material</a>
                        ${videoUrl ? `<a href="${videoUrl}" target="_blank" class="card-link" style="background:#e74c3c;">Watch Video</a>` : ''}
                    </div>
                        ${item.notes ? `<div style="margin-top:10px; padding:10px; border-left:3px solid #3498db; background:#f4f9ff; color:#2c3e50; font-size:0.9rem;">${item.notes}</div>` : ''}
        </div>
      </div>
    `;
}

function renderCourses(subject, type) {
    if (!gridContainer) return;

    // Ensure proper layout class on the container (single grid)
    gridContainer.className = 'grid-container';
    gridContainer.innerHTML = ''; // Clear existing content

    const filteredItems = resources.filter(item => (!subject || item.subject === subject));

    let itemsToShow = filteredItems;
    if (type === 'BOOK') {
        itemsToShow = filteredItems.filter(i => i.type === 'BOOK');
    } else if (type === 'SLIDE') {
        itemsToShow = filteredItems.filter(i => i.type !== 'BOOK');
    }

    if (itemsToShow.length === 0) {
        gridContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">No resources found.</p>';
        return;
    }

    gridContainer.innerHTML = itemsToShow.map(createCardHTML).join('');
}

// 3. Filter Button Logic
function filterBySubject(subject, btnElement) {
    // Update active button style
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if(btnElement) {
        btnElement.classList.add('active');
    }

    // Track and render
    selectedSubject = subject;
    renderTypeTabs();
    renderCourses(selectedSubject, selectedType);
    updateBreadcrumb();
    try { localStorage.setItem('selectedSubject', selectedSubject); } catch {}
    updateHash();
}

// 4. Dynamic Filter Generation
function renderSubjectFilters() {
    const filtersContainer = document.querySelector('.filters');
    if (!filtersContainer) return;

    const subjects = Array.from(new Set(resources.map(item => item.subject)));

    filtersContainer.innerHTML = subjects.map(subject => 
        `<button class="filter-btn" onclick="filterBySubject('${subject}', this)">${subject}</button>`
    ).join('');
}

function renderTypeTabs() {
    const tabsContainer = document.querySelector('.type-tabs');
    if (!tabsContainer) return;
    const types = [
        { key: 'BOOK', label: 'Books' },
        { key: 'SLIDE', label: 'Lectures' }
    ];
    tabsContainer.innerHTML = types.map(t => `
        <button class="type-btn ${selectedType === t.key ? 'active' : ''}" onclick="setType('${t.key}')">${t.label}</button>
    `).join('');
}

function setType(type) {
    selectedType = type;
    renderTypeTabs();
    renderCourses(selectedSubject, selectedType);
    updateBreadcrumb();
    try { localStorage.setItem('selectedType', selectedType); } catch {}
    updateHash();
}

// 5. Contact Form Logic
function handleContactSubmit(event) {
    event.preventDefault(); // Stop page from refreshing
    alert("Thank you for contacting us! We have received your message and will get back to you shortly.");
    
    // Clear the form
    event.target.reset();
}

// 6. Initialize the App
document.addEventListener('DOMContentLoaded', () => {
    renderSubjectFilters();
    const parsed = parseHash();
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    const subjects = buttons.map(b => b.textContent);
    let lsSubject = null; let lsType = null;
    try {
        lsSubject = localStorage.getItem('selectedSubject');
        lsType = localStorage.getItem('selectedType');
    } catch {}

    if (parsed && parsed.subject && subjects.includes(parsed.subject)) {
        selectedSubject = parsed.subject;
        selectedType = parsed.type;
        const btn = buttons.find(b => b.textContent === selectedSubject);
        if (btn) btn.classList.add('active');
    } else if (lsSubject && subjects.includes(lsSubject)) {
        selectedSubject = lsSubject;
        selectedType = (lsType === 'SLIDE' ? 'SLIDE' : 'BOOK');
        const btn = buttons.find(b => b.textContent === selectedSubject);
        if (btn) btn.classList.add('active');
    } else {
        const firstBtn = document.querySelector('.filter-btn');
        selectedSubject = firstBtn ? firstBtn.textContent : null;
        selectedType = 'BOOK';
        if (firstBtn) firstBtn.classList.add('active');
    }
    renderTypeTabs();
    renderCourses(selectedSubject, selectedType);
    updateBreadcrumb();

    // Footer year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
});
