const categories = [
    { id: 'structure',   number: 1, label: 'Structure' },
    { id: 'connectors',  number: 2, label: 'Connectors' },
    { id: 'hardware',    number: 3, label: 'Hardware' },
    { id: 'canopy',      number: 4, label: 'Canopy' },
];

const catalog = {
    // 1. Structure
    leg:              { item: '1-01', name: 'Leg',                      category: 'structure',  description: 'Legs for the tent',                image: 'images/parts/leg.png' },
    eveTubeLarge:     { item: '1-02', name: "9'3\" Eve Tube",           category: 'structure',  description: "9'3\" eve tube",                   image: 'images/parts/evetubelarge.png' },
    eveTubeSmall:     { item: '1-03', name: "5'0\" Eve Tube",           category: 'structure',  description: "5'0\" eve tube",                   image: 'images/parts/evetubesmall.png' },
    centerPole:       { item: '1-04', name: 'Centre Pole',              category: 'structure',  description: 'Makes the tent rigid',             image: 'images/parts/centrepole.png' },

    // 2. Connectors
    corner:           { item: '2-01', name: 'Corner Joint',            category: 'connectors', description: 'Connects eve tubes to legs',       image: 'images/parts/cornerjoint.png' },
    teeConnector:     { item: '2-02', name: 'Tee Connector',           category: 'connectors', description: 'Connects eve tubes to legs',       image: 'images/parts/cornerjoint.png' },
    straightJoiner:   { item: '2-03', name: 'Straight Joiner',         category: 'connectors', description: 'Connects eve tubes end-to-end',    image: 'images/parts/joiner.png' },
    crossJoint:       { item: '2-04', name: '4-way Cross Joint',       category: 'connectors', description: 'Connects eve tubes to legs',       image: 'images/parts/crossjoint.png' },

    // 3. Hardware
    groundStake:      { item: '3-01', name: 'Ground Stakes',                category: 'hardware',   description: 'Secures tent to the ground',        image: 'images/parts/groundstake.png' },
    DClip:            { item: '3-02', name: 'D-Clip',                       category: 'hardware',   description: 'Secures tent pieces to each other', image: 'images/parts/dclip.png' },
    wallCableGreen:   { item: '3-03', name: 'Wall Cables (Green)',          category: 'hardware',   description: 'Green ends',                        image: 'images/parts/legcable.png' },
    wallCableYellow:  { item: '3-04', name: 'Wall Cables (Yellow)',         category: 'hardware',   description: 'Yellow ends',                       image: 'images/parts/legcable.png' },
    wallCableBlack:   { item: '3-05', name: 'Wall Cables (Black)',          category: 'hardware',   description: 'Black ends',                        image: 'images/parts/legcable.png' },
    legCable:         { item: '3-06', name: 'Leg Cables',                   category: 'hardware',   description: 'Protective outer layer',            image: 'images/parts/legcable.png' },
    crossCableGreen:  { item: '3-07', name: 'Cross Cables (Green)',         category: 'hardware',   description: 'Green ends',                        image: 'images/parts/crosscable.png' },
    crossCableSilver: { item: '3-08', name: 'Cross Cables (Silver)',        category: 'hardware',   description: 'Silver ends',                       image: 'images/parts/crosscable.png' },
    crossCableRed:    { item: '3-09', name: 'Cross Cables (Reddish Brown)', category: 'hardware',   description: 'Reddish brown ends',                image: 'images/parts/crosscable.png' },
    crossCable:       { item: '3-10', name: 'Cross Cables',                 category: 'hardware',   description: 'Provides cross tension',            image: 'images/parts/crosscable.png' },
    crossCableYellow: { item: '3-11', name: 'Cross Cables (Yellow)',        category: 'hardware',   description: 'Yellow ends',                       image: 'images/parts/crosscable.png' },

    // 4. Canopy
    canopy10x10:      { item: '4-01', name: "10' x 10' Canopy",        category: 'canopy',     description: 'Vinyl canopy that provides shade', image: 'images/parts/canopy.png' },
    canopy10x20:      { item: '4-02', name: "10' x 20' Canopy",        category: 'canopy',     description: 'Vinyl canopy that provides shade', image: 'images/parts/canopy.png' },
    canopy20x20:      { item: '4-03', name: "20' x 20' Canopy",        category: 'canopy',     description: 'Vinyl canopy that provides shade', image: 'images/parts/canopy.png' },
    canopy20x30:      { item: '4-04', name: "20' x 30' Canopy",        category: 'canopy',     description: 'Vinyl canopy that provides shade', image: 'images/parts/canopy.png' },
    canopy20x40:      { item: '4-05', name: "20' x 40' Canopy",        category: 'canopy',     description: 'Vinyl canopy that provides shade', image: 'images/parts/canopy.png' },
};

const tents = {
    tent10x10: {
        label: "10' x 10'",
        bom: [
            { partId: 'canopy10x10',    quantity: 1 },
            { partId: 'leg',            quantity: 4 },
            { partId: 'eveTubeLarge',   quantity: 4 },
            { partId: 'centerPole',     quantity: 1 },
            { partId: 'corner',         quantity: 4 },
            { partId: 'groundStake',    quantity: 4 },
            { partId: 'DClip',          quantity: 5 },
            { partId: 'wallCableGreen', quantity: 4 },
            { partId: 'crossCableGreen',quantity: 2 },
        ]
    },
    tent10x20: {
        label: "10' x 20'",
        bom: [
            { partId: 'canopy10x20',     quantity: 1 },
            { partId: 'leg',             quantity: 4 },
            { partId: 'eveTubeLarge',    quantity: 6 },
            { partId: 'centerPole',      quantity: 1 },
            { partId: 'corner',          quantity: 4 },
            { partId: 'straightJoiner',  quantity: 2 },
            { partId: 'groundStake',     quantity: 4 },
            { partId: 'DClip',           quantity: 5 },
            { partId: 'wallCableGreen',  quantity: 2 },
            { partId: 'wallCableYellow', quantity: 2 },
            { partId: 'crossCableSilver',quantity: 2 },
        ]
    },
    tent20x20: {
        label: "20' x 20'",
        bom: [
            { partId: 'canopy20x20',   quantity: 1 },
            { partId: 'leg',           quantity: 4 },
            { partId: 'eveTubeLarge',  quantity: 8 },
            { partId: 'centerPole',    quantity: 1 },
            { partId: 'teeConnector',  quantity: 4 },
            { partId: 'straightJoiner',quantity: 2 },
            { partId: 'groundStake',   quantity: 4 },
            { partId: 'DClip',         quantity: 5 },
            { partId: 'legCable',      quantity: 4 },
            { partId: 'crossCable',    quantity: 2 },
        ]
    },
    tent20x30: {
        label: "20' x 30'",
        bom: [
            { partId: 'canopy20x30',     quantity: 1 },
            { partId: 'leg',             quantity: 6 },
            { partId: 'eveTubeLarge',    quantity: 10 },
            { partId: 'eveTubeSmall',    quantity: 4 },
            { partId: 'centerPole',      quantity: 2 },
            { partId: 'corner',          quantity: 4 },
            { partId: 'straightJoiner',  quantity: 3 },
            { partId: 'crossJoint',      quantity: 2 },
            { partId: 'groundStake',     quantity: 6 },
            { partId: 'DClip',           quantity: 8 },
            { partId: 'wallCableYellow', quantity: 2 },
            { partId: 'wallCableBlack',  quantity: 2 },
            { partId: 'crossCableRed',   quantity: 2 },
        ]
    },
};

// ── UI Rendering ──────────────────────────────────────────────────────────────

function renderTentInputs() {
    const container = document.querySelector('.tent-container');
    container.innerHTML = '';
    for (const [tentId, tent] of Object.entries(tents)) {
        const div = document.createElement('div');
        div.className = 'tent';
        div.innerHTML = `
            <label for="${tentId}">${tent.label}:</label>
            <input type="number" id="${tentId}" value="0" min="0" inputmode="numeric" oninput="updateTentState('${tentId}')" />
            <button onclick="increment('${tentId}')">+</button>
            <button onclick="decrement('${tentId}')">-</button>
        `;
        container.appendChild(div);
    }
}

function updateTentState(tentId) {
    const el = document.getElementById(tentId);
    const div = el.closest('.tent');
    const active = parseInt(el.value) > 0;
    div.classList.toggle('tent-active', active);
}

function generatePartsList() {
    const allZero = Object.keys(tents).every(tentId => {
        const el = document.getElementById(tentId);
        return !el || parseInt(el.value) === 0;
    });

    if (allZero) {
        document.getElementById('partsList').innerHTML = '<p>Please enter a value greater than 0 for at least one tent.</p>';
        return;
    }

    // Accumulate totals keyed by partId
    const totals = {};
    for (const [tentId, tent] of Object.entries(tents)) {
        const el = document.getElementById(tentId);
        const qty = el ? parseInt(el.value) || 0 : 0;
        if (qty <= 0) continue;
        for (const { partId, quantity } of tent.bom) {
            totals[partId] = (totals[partId] || 0) + quantity * qty;
        }
    }

    // Group by category, sort by item number within each group
    const grouped = {};
    for (const cat of categories) grouped[cat.id] = [];

    for (const [partId, qty] of Object.entries(totals)) {
        const part = catalog[partId];
        grouped[part.category].push({ partId, qty, part });
    }
    for (const cat of categories) {
        grouped[cat.id].sort((a, b) => a.part.item.localeCompare(b.part.item));
    }

    document.getElementById('partsList').innerHTML = generateTable(grouped);
}

function generateTable(grouped) {
    let table = "<div class='table-responsive'><table><tr><th>Item</th><th>Image</th><th>Part</th><th>Qty</th></tr>";
    for (const cat of categories) {
        const parts = grouped[cat.id];
        if (!parts || parts.length === 0) continue;
        const subtotal = parts.reduce((sum, { qty }) => sum + qty, 0);
        table += `<tr class="category-header"><td colspan="3">${cat.number}. ${cat.label}</td><td class="category-subtotal">${subtotal}</td></tr>`;
        for (const { qty, part } of parts) {
            const escapedDesc = part.description.replace(/'/g, "\\'").replace(/"/g, '\\"');
            table += `<tr>
                <td class="item-num">${part.item}</td>
                <td><img src="${part.image}" alt="${part.name}" class="thumbnail" onclick="showImage('${part.image}', '${escapedDesc}')"></td>
                <td>${part.name}</td>
                <td>${qty}</td>
            </tr>`;
        }
    }
    table += "</table></div>";
    return table;
}

function showImage(src, description) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.onclick = () => document.body.removeChild(overlay);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('large-image-container');

    const img = document.createElement('img');
    img.src = src;
    img.classList.add('large-image');

    const desc = document.createElement('p');
    desc.textContent = description;
    desc.classList.add('image-description');

    imgContainer.appendChild(img);
    imgContainer.appendChild(desc);
    overlay.appendChild(imgContainer);
    document.body.appendChild(overlay);
}

function resetInputs() {
    for (const tentId of Object.keys(tents)) {
        const el = document.getElementById(tentId);
        if (el) el.value = 0;
    }
    document.getElementById('partsList').innerHTML = '';
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    document.getElementById('themeSwitch').checked = isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function detectSystemTheme() {
    const userPreference = localStorage.getItem('theme');
    if (userPreference === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeSwitch').checked = true;
    } else if (userPreference === 'light') {
        document.body.classList.remove('dark-theme');
        document.getElementById('themeSwitch').checked = false;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        document.getElementById('themeSwitch').checked = true;
    }
}

function increment(tentId) {
    const el = document.getElementById(tentId);
    el.value = (parseInt(el.value) || 0) + 1;
    updateTentState(tentId);
}

function decrement(tentId) {
    const el = document.getElementById(tentId);
    const current = parseInt(el.value) || 0;
    if (current > 0) el.value = current - 1;
    updateTentState(tentId);
}

window.addEventListener('DOMContentLoaded', () => {
    detectSystemTheme();
    renderTentInputs();
});
