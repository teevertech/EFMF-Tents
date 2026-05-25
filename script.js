const tents = {
    tent10x10: {
        canopy10x10: { quantity: 1, name: "10' x 10' canopy", description: "vinyl canopy that provides shade", image: "images/parts/canopy.png" },
        leg: { quantity: 4, name: "Leg", description: "legs for the tent", image: "images/parts/leg.png" },
        corner: { quantity: 4, name: "Corner", description: "connects eve tubes to legs", image: "images/parts/cornerjoint.png" },
        wallCableGreen: { quantity: 4, name: "Wall Cables (green)", description: "Green ends", image: "images/parts/legcable.png" },
        crossCableGreen: { quantity: 2, name: "Cross Cables (green)", description: "Green ends", image: "images/parts/crosscable.png" },
        eveTubeLarge: { quantity: 4, name: "9'3 Eve Tube", description: "9'3 Eve Tube", image: "images/parts/evetubelarge.png" },
        centerPole: { quantity: 1, name: "Centre Pole", description: "Makes the tent rigid", image: "images/parts/centrepole.png" },
        groundStake: { quantity: 4, name: "Ground Stakes", description: "Secures tent to the ground", image: "images/parts/groundstake.png" },
        DClip: { quantity: 5, name: "D-Clip", description: "Secures tent pieces to each other", image: "images/parts/dclip.png" }
    },
    tent10x20: {
        canopy10x20: { quantity: 1, name: "10' x 20' canopy", description: "vinyl canopy that provides shade", image: "images/parts/canopy.png" },
        leg: { quantity: 4, name: "Leg", description: "legs for the tent", image: "images/parts/leg.png" },
        corner: { quantity: 4, name: "Corner", description: "connects eve tubes to legs", image: "images/parts/cornerjoint.png" },
        wallCableGreen: { quantity: 2, name: "Wall Cables (Green)", description: "Green Ends", image: "images/parts/legcable.png" },
        wallCableYellow: { quantity: 2, name: "Wall Cables (Yellow)", description: "Yellow Ends", image: "images/parts/legcable.png" },
        crossCableSilver: { quantity: 2, name: "Cross Cables (Silver)", description: "Green ends", image: "images/parts/crosscable.png" },
        eveTubeLarge: { quantity: 6, name: "9'3 Eve Tube", description: "9'3 Eve Tube", image: "images/parts/evetubelarge.png" },
        centerPole: { quantity: 1, name: "Centre Pole", description: "Makes the tent rigid", image: "images/parts/centrepole.png" },
        groundStake: { quantity: 4, name: "Ground Stakes", description: "Secures tent to the ground", image: "images/parts/groundstake.png" },
        straightJoiner: { quantity: 2, name: "Straight Joiner", description: "Connects eve tubes", image: "images/parts/joiner.png" },
        DClip: { quantity: 5, name: "D-Clip", description: "Secures tent pieces to each other", image: "images/parts/dclip.png" }
    },
    tent20x30: {
        canopy20x30: { quantity: 1, name: "20' x 30' canopy", description: "vinyl canopy that provides shade", image: "images/parts/canopy.png" },
        leg: { quantity: 6, name: "Leg", description: "legs for the tent", image: "images/parts/leg.png" },
        corner: { quantity: 4, name: "Corner", description: "connects eve tubes to legs", image: "images/parts/cornerjoint.png" },
        wallCableYellow: { quantity: 2, name: "Wall Cables (Yellow)", description: "Yellow Ends", image: "images/parts/legcable.png" },
        wallCableBlack: { quantity: 2, name: "Wall Cables (Black)", description: "Black Ends", image: "images/parts/legcable.png" },
        crossCableRed: { quantity: 2, name: "Cross Cables (Reddish Brown)", description: "Reddish Brown Ends", image: "images/parts/crosscable.png" },
        eveTubeLarge: { quantity: 10, name: "9'3 Eve Tube", description: "9'3 Eve Tube", image: "images/parts/evetubelarge.png" },
        eveTubeSmall: { quantity: 4, name: "5'0 Eve Tube", description: "5'0 Eve Tube", image: "images/parts/evetubesmall.png" },
        centerPole: { quantity: 2, name: "Centre Pole", description: "Makes the tent rigid", image: "images/parts/centrepole.png" },
        groundStake: { quantity: 6, name: "Ground Stakes", description: "Secures tent to the ground", image: "images/parts/groundstake.png" },
        straightJoiner: { quantity: 3, name: "Straight Joiner", description: "Connects eve tubes", image: "images/parts/joiner.png" },
        crossJoint: { quantity: 2, name: "4-way Cross Joint", description: "Connects Eve Joint to Legs", image: "images/parts/crossjoint.png" },
        DClip: { quantity: 8, name: "D-Clip", description: "Secures tent pieces to each other", image: "images/parts/dclip.png" }
    },
    tent20x20: {
        canopy20x20: { quantity: 1, name: "20' x 20' canopy", description: "vinyl canopy that provides shade", image: "images/parts/canopy.png" },
        leg: { quantity: 4, name: "Leg", description: "legs for the tent", image: "images/parts/leg.png" },
        teeConnector: { quantity: 4, name: "Tee Connector", description: "connects eve tubes to legs", image: "images/parts/cornerjoint.png" },
        legCable: { quantity: 4, name: "Leg Cables", description: "Protective outer layer", image: "images/parts/legcable.png" },
        crossCable: { quantity: 2, name: "Cross Cables", description: "Provides cross tension", image: "images/parts/crosscable.png" },
        eveTubeLarge: { quantity: 8, name: "9'3 Eve Tube", description: "9'3 Eve Tube", image: "images/parts/evetubelarge.png" },
        centerPole: { quantity: 1, name: "Centre Pole", description: "Makes the tent rigid", image: "images/parts/centrepole.png" },
        groundStake: { quantity: 4, name: "Ground Stakes", description: "Secures tent to the ground", image: "images/parts/groundstake.png" },
        straightJoiner: { quantity: 2, name: "Straight Joiner", description: "Connects eve tubes", image: "images/parts/joiner.png" },
        DClip: { quantity: 5, name: "D-Clip", description: "Secures tent pieces to each other", image: "images/parts/dclip.png" }
    },
    tent20x40: {
        canopy20x40: { quantity: 1, name: "20' x 40' canopy", description: "vinyl canopy that provides shade", image: "images/parts/canopy.png" },
        leg: { quantity: 6, name: "Leg", description: "legs for the tent", image: "images/parts/leg.png" },
        wallCableYelow: { quantity: 2, name: "Wall Cables (Yellow)", description: "Yellow Ends", image: "images/parts/legcable.png" },
        crossCableYellow: { quantity: 4, name: "Cross Cables", description: "Provides cross tension", image: "images/parts/crosscable.png" },
        eveTubeLarge: { quantity: 10, name: "9'3 Eve Tube", description: "9'3 Eve Tube", image: "images/parts/evetubelarge.png" },
        eveTubeSmall: { quantity: 4, name: "5'0 Eve Tube", description: "5'0 Eve Tube", image: "images/parts/evetubesmall.png" },
        centerPole: { quantity: 2, name: "Centre Pole", description: "Makes the tent rigid", image: "images/parts/centrepole.png" },
        groundStake: { quantity: 6, name: "Ground Stakes", description: "Secures tent to the ground", image: "images/parts/groundstake.png" },
        straightJoiner: { quantity: 7, name: "Straight Joiner", description: "Connects eve tubes", image: "images/parts/joiner.png" },
        crossJoint: { quantity: 2, name: "Cross Joint", description: "Connects Eve Joint to Legs", image: "images/parts/crossjoint.png" },
        DClip: { quantity: 8, name: "D-Clip", description: "Secures tent pieces to each other", image: "images/parts/dclip.png" }
    },
};

function generatePartsList() {
    const quantities = {
        tent10x10: parseInt(document.getElementById('tent10x10').value),
        tent10x20: parseInt(document.getElementById('tent10x20').value),
        tent20x30: parseInt(document.getElementById('tent20x30').value)
    };

    // Check if all values are zero
    const allZero = Object.values(quantities).every(value => value === 0);

    if (allZero) {
        document.getElementById('partsList').innerHTML = '<p>Please enter a value greater than 0 for at least one tent.</p>';
        return; // Do not generate the table if all values are zero
    }

    const totalParts = {};
    for (const [tent, parts] of Object.entries(tents)) {
        // Only process parts for tents that have a quantity > 0
        if (quantities[tent] > 0) {
            for (const [partKey, part] of Object.entries(parts)) {
                if (!totalParts[partKey]) {
                    totalParts[partKey] = {
                        name: part.name,
                        quantity: 0,
                        image: part.image,
                        description: part.description
                    };
                }
                totalParts[partKey].quantity += part.quantity * quantities[tent];
            }
        }
    }

    let partsList = document.getElementById('partsList');
    partsList.innerHTML = generateTable(totalParts);
}


function generateTable(parts) {
    let table = "<div class='table-responsive'><table><tr><th>Image</th><th>Part</th><th>Quantity</th></tr>";
    for (let partKey in parts) {
        let part = parts[partKey];
        // Properly escape both single and double quotes for HTML attributes
        const escapedDescription = part.description.replace(/'/g, "\\'").replace(/"/g, '\\"');
        table += `<tr>
                    <td><img src="${part.image}" alt="${part.name}" class="thumbnail" onclick="showImage('${part.image}', '${escapedDescription}')"></td>
                    <td>${part.name}</td>
                    <td>${part.quantity}</td>
                  </tr>`;
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
    imgContainer.appendChild(desc);  // Add the description below the image
    overlay.appendChild(imgContainer);
    document.body.appendChild(overlay);
}

function resetInputs() {
    document.getElementById('tent10x10').value = 0;
    document.getElementById('tent10x20').value = 0;
    document.getElementById('tent20x30').value = 0;
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
    const inputField = document.getElementById(tentId);
    let currentValue = parseInt(inputField.value) || 0; // Default to 0 if the value is not a number
    inputField.value = currentValue + 1;
}

function decrement(tentId) {
    const inputField = document.getElementById(tentId);
    let currentValue = parseInt(inputField.value) || 0; // Default to 0 if the value is not a number
    if (currentValue > 0) {
        inputField.value = currentValue - 1;
    }
}

// Detect system theme on page load
window.addEventListener('DOMContentLoaded', detectSystemTheme);
