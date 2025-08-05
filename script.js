// Application State
let appState = {
    mode: 'kid', // 'kid' or 'adult'
    accessibility: {
        highContrast: false,
        largeText: false,
        reducedMotion: false
    },
    testResults: {
        color: null,
        texture: null,
        drainage: null,
        life: []
    },
    journalEntries: JSON.parse(localStorage.getItem('soilJournalEntries') || '[]'),
    achievements: JSON.parse(localStorage.getItem('soilAchievements') || '[]')
};

// Educational Content
const educationalContent = {
    basics: {
        kid: {
            title: "What is Soil? 🌍",
            content: `
                <h3>Soil is Amazing!</h3>
                <p>Soil is like a special blanket that covers the Earth. It's made of tiny pieces of rocks, old leaves, and lots of tiny living things that are too small to see!</p>
                
                <h3>What's in Soil?</h3>
                <ul>
                    <li>🪨 <strong>Tiny rock pieces</strong> - These come from big rocks that broke into small pieces over many, many years</li>
                    <li>🍂 <strong>Dead plants and leaves</strong> - These become food for the soil</li>
                    <li>💧 <strong>Water</strong> - Plants drink this water through their roots</li>
                    <li>💨 <strong>Air</strong> - Yes, soil has air bubbles in it! Plants need air too</li>
                    <li>🐛 <strong>Living creatures</strong> - Worms, bugs, and tiny bacteria live in soil</li>
                </ul>
                
                <h3>Fun Soil Facts!</h3>
                <ul>
                    <li>It takes 500 years to make just 1 inch of soil!</li>
                    <li>One handful of soil has more living things in it than there are people on Earth!</li>
                    <li>Worms are soil's best friends - they make it healthy by eating old leaves</li>
                </ul>
            `
        },
        adult: {
            title: "Understanding Soil Composition 🌍",
            content: `
                <h3>Soil Formation and Structure</h3>
                <p>Soil is a complex ecosystem consisting of mineral particles, organic matter, water, air, and countless microorganisms. Understanding soil composition is crucial for sustainable gardening and agriculture.</p>
                
                <h3>Key Components of Healthy Soil</h3>
                <ul>
                    <li><strong>Mineral particles (45%)</strong> - Sand, silt, and clay derived from weathered rock</li>
                    <li><strong>Organic matter (5%)</strong> - Decomposed plant and animal material (humus)</li>
                    <li><strong>Water (25%)</strong> - Essential for plant uptake and soil organisms</li>
                    <li><strong>Air (25%)</strong> - Provides oxygen for root respiration and soil organisms</li>
                </ul>
                
                <h3>Soil Horizons</h3>
                <p>Soil forms in distinct layers called horizons, each with unique characteristics:</p>
                <ul>
                    <li><strong>O Horizon</strong> - Organic layer with fresh and decomposing plant material</li>
                    <li><strong>A Horizon</strong> - Topsoil with mixed organic and mineral matter</li>
                    <li><strong>B Horizon</strong> - Subsoil with accumulated minerals and nutrients</li>
                    <li><strong>C Horizon</strong> - Parent material, partially weathered rock</li>
                </ul>
            `
        }
    },
    importance: {
        kid: {
            title: "Why Soil Matters ⚡",
            content: `
                <h3>Soil is Super Important!</h3>
                <p>Without soil, we couldn't grow food, have flowers, or even have trees! Soil is like the Earth's stomach - it feeds all the plants.</p>
                
                <h3>What Does Soil Do?</h3>
                <ul>
                    <li>🥕 <strong>Grows our food</strong> - All fruits and vegetables need healthy soil</li>
                    <li>🌳 <strong>Helps trees grow big and strong</strong> - Trees clean our air and give us oxygen</li>
                    <li>🏠 <strong>Homes for animals</strong> - Many creatures live in or on soil</li>
                    <li>💧 <strong>Cleans water</strong> - Soil filters dirty water and makes it clean</li>
                    <li>🌡 <strong>Helps control temperature</strong> - Soil keeps the Earth from getting too hot</li>
                </ul>
                
                <h3>Soil Helps Us Every Day!</h3>
                <ul>
                    <li>The cotton in your clothes came from plants grown in soil</li>
                    <li>Your breakfast cereal was made from grains grown in soil</li>
                    <li>Even the wood in your house came from trees that grew in soil</li>
                </ul>
            `
        },
        adult: {
            title: "The Critical Role of Soil in Ecosystems ⚡",
            content: `
                <h3>Soil: The Foundation of Life</h3>
                <p>Soil is one of Earth's most critical resources, supporting 95% of global food production and harboring 25% of the planet's biodiversity. Its health directly impacts climate, water quality, and human well-being.</p>
                
                <h3>Essential Soil Functions</h3>
                <ul>
                    <li><strong>Food Production</strong> - Provides nutrients and support for crops that feed billions</li>
                    <li><strong>Carbon Sequestration</strong> - Stores more carbon than atmosphere and vegetation combined</li>
                    <li><strong>Water Filtration</strong> - Acts as natural filter, purifying groundwater</li>
                    <li><strong>Biodiversity Hub</strong> - Supports countless microorganisms, insects, and soil fauna</li>
                    <li><strong>Flood Control</strong> - Absorbs and regulates water flow during storms</li>
                </ul>
                
                <h3>Global Soil Challenges</h3>
                <ul>
                    <li>Soil erosion affects 33% of global agricultural land</li>
                    <li>Urbanization consumes 1.5 million hectares of farmland annually</li>
                    <li>Chemical contamination threatens soil ecosystems worldwide</li>
                    <li>Climate change increases soil degradation risks</li>
                </ul>
            `
        }
    },
    improvement: {
        kid: {
            title: "Making Soil Happy 🔧",
            content: `
                <h3>How to Help Your Soil!</h3>
                <p>Just like you need healthy food to grow strong, soil needs healthy food too! Here are easy ways to make your soil super happy:</p>
                
                <h3>Feed Your Soil</h3>
                <ul>
                    <li>🍌 <strong>Add banana peels and apple cores</strong> - Bury them in the soil (ask a grown-up first!)</li>
                    <li>🍂 <strong>Add fallen leaves</strong> - Let them sit on top of the soil like a blanket</li>
                    <li>☕ <strong>Coffee grounds</strong> - Ask adults to save used coffee grounds for your garden</li>
                    <li>🥚 <strong>Crushed eggshells</strong> - These give soil important minerals</li>
                </ul>
                
                <h3>Keep Soil Cozy</h3>
                <ul>
                    <li>Put mulch (like wood chips or straw) on top of soil</li>
                    <li>Don't step on garden soil - it squishes the air out!</li>
                    <li>Water gently, like rain, not like a big splash</li>
                </ul>
                
                <h3>Plant Soil's Best Friends</h3>
                <ul>
                    <li>Flowers that bring helpful bugs</li>
                    <li>Plants with deep roots that break up hard soil</li>
                    <li>Cover crops that protect soil when you're not growing food</li>
                </ul>
            `
        },
        adult: {
            title: "Soil Improvement Strategies 🔧",
            content: `
                <h3>Sustainable Soil Enhancement</h3>
                <p>Improving soil health requires a holistic approach that builds organic matter, enhances biological activity, and maintains proper physical structure.</p>
                
                <h3>Organic Matter Enhancement</h3>
                <ul>
                    <li><strong>Composting</strong> - Create nutrient-rich compost from kitchen scraps and yard waste</li>
                    <li><strong>Cover Crops</strong> - Plant nitrogen-fixing legumes and deep-rooted grasses</li>
                    <li><strong>Mulching</strong> - Apply organic mulches to retain moisture and add nutrients</li>
                    <li><strong>Green Manures</strong> - Incorporate fresh plant matter directly into soil</li>
                </ul>
                
                <h3>Physical Structure Improvement</h3>
                <ul>
                    <li><strong>Minimize Tillage</strong> - Reduce soil disturbance to preserve structure</li>
                    <li><strong>Add Coarse Amendments</strong> - Incorporate perlite, vermiculite, or coarse compost</li>
                    <li><strong>Create Raised Beds</strong> - Improve drainage and prevent compaction</li>
                    <li><strong>Install Pathways</strong> - Prevent foot traffic on growing areas</li>
                </ul>
                
                <h3>Biological Activity Enhancement</h3>
                <ul>
                    <li>Encourage beneficial microorganisms with mycorrhizal inoculants</li>
                    <li>Maintain diverse plant communities to support soil food web</li>
                    <li>Avoid synthetic chemicals that harm soil organisms</li>
                    <li>Ensure proper soil pH for optimal microbial activity</li>
                </ul>
            `
        }
    },
    composting: {
        kid: {
            title: "Making Compost - Nature's Recycling! ♻",
            content: `
                <h3>What is Compost?</h3>
                <p>Compost is like nature's special recipe! It's made when old food scraps and leaves get mixed together and turn into super food for plants. It's like magic!</p>
                
                <h3>What Can Go in Compost?</h3>
                <ul>
                    <li>🥕 <strong>Fruit and vegetable scraps</strong> - Apple cores, carrot tops, banana peels</li>
                    <li>🍂 <strong>Leaves and grass</strong> - Fall leaves, grass clippings</li>
                    <li>☕ <strong>Coffee grounds and tea bags</strong> - From grown-ups' drinks</li>
                    <li>🥚 <strong>Eggshells</strong> - Crush them up first</li>
                    <li>📰 <strong>Paper</strong> - Newspaper, cardboard (no shiny stuff)</li>
                </ul>
                
                <h3>What Should NOT Go in Compost?</h3>
                <ul>
                    <li>🥩 Meat or fish</li>
                    <li>🧀 Dairy products like milk or cheese</li>
                    <li>🍟 Oily or greasy foods</li>
                    <li>🐕 Pet waste</li>
                </ul>
                
                <h3>How to Make Compost</h3>
                <ul>
                    <li>Mix green stuff (food scraps) with brown stuff (leaves)</li>
                    <li>Keep it as wet as a wrung-out sponge</li>
                    <li>Turn it with a shovel sometimes to give it air</li>
                    <li>Wait 3-6 months for the magic to happen!</li>
                </ul>
            `
        },
        adult: {
            title: "Composting: Complete Guide ♻",
            content: `
                <h3>The Science of Composting</h3>
                <p>Composting is an aerobic decomposition process that transforms organic waste into nutrient-rich humus. Proper composting requires balancing carbon and nitrogen, maintaining appropriate moisture, and ensuring adequate oxygen flow.</p>
                
                <h3>Composting Materials</h3>
                <p><strong>Green Materials (Nitrogen-rich):</strong></p>
                <ul>
                    <li>Fresh grass clippings, vegetable scraps, coffee grounds</li>
                    <li>Fresh manure (aged at least 6 months before use)</li>
                    <li>Green leaves and plant trimmings</li>
                </ul>
                
                <p><strong>Brown Materials (Carbon-rich):</strong></p>
                <ul>
                    <li>Dry leaves, straw, paper, cardboard</li>
                    <li>Wood chips, sawdust (from untreated wood)</li>
                    <li>Dried grass clippings</li>
                </ul>
                
                <h3>Optimal Composting Conditions</h3>
                <ul>
                    <li><strong>C:N Ratio</strong> - Maintain 25-30:1 carbon to nitrogen ratio</li>
                    <li><strong>Moisture</strong> - Keep at 50-60% moisture content</li>
                    <li><strong>Temperature</strong> - Active compost reaches 130-160°F</li>
                    <li><strong>Aeration</strong> - Turn pile every 2-3 weeks</li>
                    <li><strong>Size</strong> - Minimum 3x3x3 feet for proper heat generation</li>
                </ul>
                
                <h3>Troubleshooting Common Issues</h3>
                <ul>
                    <li><strong>Slow decomposition</strong> - Add nitrogen-rich materials, ensure proper moisture</li>
                    <li><strong>Odors</strong> - Improve aeration, balance green/brown materials</li>
                    <li><strong>Pests</strong> - Avoid meat/dairy, bury food scraps in center</li>
                </ul>
            `
        }
    }
};

// Plant Recommendations Database
const plantRecommendations = {
    clay: [
        { name: "Sunflowers", emoji: "🌻", description: "These bright flowers love clay soil and attract beneficial insects to your garden." },
        { name: "Asters", emoji: "🌸", description: "Beautiful purple flowers that thrive in heavy clay and provide late-season color." },
        { name: "Black-eyed Susan", emoji: "🌼", description: "Cheerful yellow flowers that are perfect for clay soil and very easy to grow." },
        { name: "Daylilies", emoji: "🌺", description: "Colorful flowers that come back every year and love clay soil conditions." }
    ],
    sandy: [
        { name: "Lavender", emoji: "💜", description: "Fragrant purple flowers that love sandy, well-draining soil and attract bees." },
        { name: "Succulents", emoji: "🌵", description: "Easy-care plants that store water and thrive in sandy conditions." },
        { name: "Marigolds", emoji: "🧡", description: "Bright orange flowers that grow well in sandy soil and help protect other plants." },
        { name: "Rosemary", emoji: "🌿", description: "Aromatic herb that loves sandy soil and can be used for cooking." }
    ],
    loam: [
        { name: "Tomatoes", emoji: "🍅", description: "Delicious vegetables that love the perfect balance of nutrients in loamy soil." },
        { name: "Roses", emoji: "🌹", description: "Beautiful, fragrant flowers that thrive in rich, loamy soil conditions." },
        { name: "Peppers", emoji: "🌶", description: "Colorful vegetables that grow excellently in well-balanced loamy soil." },
        { name: "Most Vegetables", emoji: "🥬", description: "Lettuce, carrots, beans, and most garden vegetables love loamy soil." }
    ],
    poor: [
        { name: "Wildflowers", emoji: "🌼", description: "Native flowers that can grow in poor soil and help improve it over time." },
        { name: "Clover", emoji: "🍀", description: "A nitrogen-fixing plant that actually helps improve poor soil naturally." },
        { name: "Nasturtiums", emoji: "🌻", description: "Edible flowers that grow in poor soil and add nutrients as they decompose." },
        { name: "Buckwheat", emoji: "🌾", description: "A cover crop that grows quickly in poor soil and helps build organic matter." }
    ]
};

// Achievement System
const achievements = [
    { id: 'first_test', name: 'Soil Explorer', emoji: '🔬', description: 'Completed your first soil test!' },
    { id: 'all_tests', name: 'Soil Scientist', emoji: '👩‍🔬', description: 'Completed all soil health tests!' },
    { id: 'first_entry', name: 'Garden Journal Keeper', emoji: '📔', description: 'Made your first journal entry!' },
    { id: 'plant_expert', name: 'Plant Expert', emoji: '🌱', description: 'Got plant recommendations for your soil!' },
    { id: 'learner', name: 'Soil Scholar', emoji: '🎓', description: 'Read all educational content!' }
];

// DOM Elements
const elements = {
    modeToggle: document.getElementById('modeToggle'),
    modeText: document.getElementById('modeText'),
    accessibilityBtn: document.getElementById('accessibilityBtn'),
    accessibilityPanel: document.getElementById('accessibilityPanel'),
    closeAccessibility: document.getElementById('closeAccessibility'),
    welcomeTitle: document.getElementById('welcomeTitle'),
    welcomeText: document.getElementById('welcomeText'),
    testingDescription: document.getElementById('testingDescription'),
    overallProgress: document.getElementById('overallProgress'),
    progressText: document.getElementById('progressText'),
    resultsSummary: document.getElementById('resultsSummary'),
    healthScore: document.getElementById('healthScore'),
    scoreLabel: document.getElementById('scoreLabel'),
    recommendationsContainer: document.getElementById('recommendationsContainer'),
    soilTypeSelect: document.getElementById('soilTypeSelect'),
    getRecommendations: document.getElementById('getRecommendations'),
    plantResults: document.getElementById('plantResults'),
    plantsGrid: document.getElementById('plantsGrid'),
    entryTitle: document.getElementById('entryTitle'),
    entryNotes: document.getElementById('entryNotes'),
    photoInput: document.getElementById('photoInput'),
    addPhotoBtn: document.getElementById('addPhotoBtn'),
    photoPreview: document.getElementById('photoPreview'),
    saveEntry: document.getElementById('saveEntry'),
    entriesContainer: document.getElementById('entriesContainer'),
    achievementModal: document.getElementById('achievementModal'),
    achievementBadge: document.getElementById('achievementBadge'),
    achievementTitle: document.getElementById('achievementTitle'),
    achievementDescription: document.getElementById('achievementDescription'),
    closeAchievement: document.getElementById('closeAchievement')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateUI();
    loadJournalEntries();
});

function initializeApp() {
    // Load saved state from localStorage
    const savedState = localStorage.getItem('soilMonitorState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        appState = { ...appState, ...parsed };
    }
    
    // Apply accessibility settings
    applyAccessibilitySettings();
    
    // Update mode-specific content
    updateModeContent();
}

function setupEventListeners() {
    // Mode toggle
    elements.modeToggle.addEventListener('click', toggleMode);
    
    // Accessibility
    elements.accessibilityBtn.addEventListener('click', toggleAccessibilityPanel);
    elements.closeAccessibility.addEventListener('click', closeAccessibilityPanel);
    
    // Accessibility controls
    document.getElementById('highContrast').addEventListener('change', toggleHighContrast);
    document.getElementById('largeText').addEventListener('change', toggleLargeText);
    document.getElementById('reducedMotion').addEventListener('change', toggleReducedMotion);
    
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', switchTab);
    });
    
    // Soil testing
    setupSoilTestListeners();
    
    // Education
    setupEducationListeners();
    
    // Plant recommendations
    elements.getRecommendations.addEventListener('click', getPlantRecommendations);
    
    // Journal
    setupJournalListeners();
    
    // Achievement modal
    elements.closeAchievement.addEventListener('click', closeAchievementModal);
    
    // Click outside to close modal
    elements.achievementModal.addEventListener('click', function(e) {
        if (e.target === elements.achievementModal) {
            closeAchievementModal();
        }
    });
}

function setupSoilTestListeners() {
    // Color test
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectColor(this.dataset.color);
        });
    });
    
    // Texture test
    document.querySelectorAll('.texture-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectTexture(this.dataset.texture);
        });
    });
    
    // Drainage test
    document.querySelectorAll('.drainage-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectDrainage(this.dataset.drainage);
        });
    });
    
    // Life test
    document.getElementById('checkLifeBtn').addEventListener('click', checkLifeSigns);
}

function setupEducationListeners() {
    document.querySelectorAll('.edu-card').forEach(card => {
        card.addEventListener('click', function() {
            showEducationContent(this.dataset.topic);
        });
    });
    
    document.getElementById('backToTopics').addEventListener('click', showEducationTopics);
}

function setupJournalListeners() {
    elements.addPhotoBtn.addEventListener('click', () => elements.photoInput.click());
    elements.photoInput.addEventListener('change', handlePhotoUpload);
    elements.saveEntry.addEventListener('click', saveJournalEntry);
}

// Mode Management
function toggleMode() {
    appState.mode = appState.mode === 'kid' ? 'adult' : 'kid';
    updateModeContent();
    saveAppState();
}

function updateModeContent() {
    const isKidMode = appState.mode === 'kid';
    
    elements.modeText.textContent = isKidMode ? 'Kid Mode' : 'Adult Mode';
    
    if (isKidMode) {
        elements.welcomeTitle.textContent = 'Welcome, Young Gardener! 🌟';
        elements.welcomeText.textContent = "Let's explore the amazing world beneath our feet and learn how to make soil healthy and happy!";
        elements.testingDescription.textContent = "Follow these simple steps to check your soil's health!";
    } else {
        elements.welcomeTitle.textContent = 'Soil Health Assessment Tool 🔬';
        elements.welcomeText.textContent = 'Conduct a comprehensive evaluation of your soil conditions to optimize plant growth and sustainability.';
        elements.testingDescription.textContent = 'Complete these diagnostic tests to evaluate soil health parameters and receive science-based recommendations.';
    }
}

// Accessibility Functions
function toggleAccessibilityPanel() {
    elements.accessibilityPanel.classList.toggle('hidden');
}

function closeAccessibilityPanel() {
    elements.accessibilityPanel.classList.add('hidden');
}

function toggleHighContrast() {
    appState.accessibility.highContrast = !appState.accessibility.highContrast;
    applyAccessibilitySettings();
    saveAppState();
}

function toggleLargeText() {
    appState.accessibility.largeText = !appState.accessibility.largeText;
    applyAccessibilitySettings();
    saveAppState();
}

function toggleReducedMotion() {
    appState.accessibility.reducedMotion = !appState.accessibility.reducedMotion;
    applyAccessibilitySettings();
    saveAppState();
}

function applyAccessibilitySettings() {
    document.body.classList.toggle('high-contrast', appState.accessibility.highContrast);
    document.body.classList.toggle('large-text', appState.accessibility.largeText);
    document.body.classList.toggle('reduced-motion', appState.accessibility.reducedMotion);
    
    // Update checkboxes
    document.getElementById('highContrast').checked = appState.accessibility.highContrast;
    document.getElementById('largeText').checked = appState.accessibility.largeText;
    document.getElementById('reducedMotion').checked = appState.accessibility.reducedMotion;
}

// Tab Management
function switchTab(e) {
    const targetTab = e.currentTarget.dataset.tab;
    
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    e.currentTarget.classList.add('active');
    e.currentTarget.setAttribute('aria-selected', 'true');
    
    // Update active tab panel
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(targetTab).classList.add('active');
}

// Soil Testing Functions
function selectColor(color) {
    appState.testResults.color = color;
    
    // Update UI
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-color=${color}]`).classList.add('selected');
    
    // Show result
    showColorResult(color);
    updateProgress();
    saveAppState();
    
    // Check for first test achievement
    checkAchievement('first_test');
}

function selectTexture(texture) {
    appState.testResults.texture = texture;
    
    // Update UI
    document.querySelectorAll('.texture-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-texture=${texture}]`).classList.add('selected');
    
    // Show result
    showTextureResult(texture);
    updateProgress();
    saveAppState();
}

function selectDrainage(drainage) {
    appState.testResults.drainage = drainage;
    
    // Update UI
    document.querySelectorAll('.drainage-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-drainage=${drainage}]`).classList.add('selected');
    
    // Show result
    showDrainageResult(drainage);
    updateProgress();
    saveAppState();
}

function checkLifeSigns() {
    const checkedBoxes = document.querySelectorAll('input[name="life"]:checked');
    appState.testResults.life = Array.from(checkedBoxes).map(box => box.value);
    
    showLifeResult(appState.testResults.life);
    updateProgress();
    saveAppState();
}

function showColorResult(color) {
    const resultDiv = document.getElementById('colorResult');
    resultDiv.classList.remove('hidden');
    
    const isKidMode = appState.mode === 'kid';
    let message, className;
    
    switch(color) {
        case 'dark-brown':
            message = isKidMode ? 
                "Awesome! Dark brown soil is super healthy and full of good stuff for plants! 🌟" :
                "Excellent! Dark brown soil indicates high organic matter content and excellent nutrient availability.";
            className = '';
            break;
        case 'medium-brown':
            message = isKidMode ?
                "Great! Medium brown soil is healthy and good for growing plants! 👍" :
                "Good! Medium brown soil shows adequate organic matter with room for improvement.";
            className = '';
            break;
        case 'light-brown':
            message = isKidMode ?
                "Your soil needs some food! Try adding compost to make it darker and healthier. 🍂" :
                "Moderate. Light brown soil may benefit from organic matter additions to improve fertility.";
            className = 'warning';
            break;
        case 'gray':
            message = isKidMode ?
                "Gray soil might be too wet or packed down. Let's help it get more air! 💨" :
                "Concerning. Gray coloration may indicate poor drainage or compaction issues.";
            className = 'warning';
            break;
        case 'red':
            message = isKidMode ?
                "Red soil can be good, but it might need some help to hold water better! 💧" :
                "Variable. Red soil indicates iron content but may have drainage or pH considerations.";
            className = 'warning';
            break;
    }
    
    resultDiv.innerHTML = `<p>${message}</p>`;
    resultDiv.className = `test-result ${className}`;
}

function showTextureResult(texture) {
    const resultDiv = document.getElementById('textureResult');
    resultDiv.classList.remove('hidden');
    
    const isKidMode = appState.mode === 'kid';
    let message, className;
    
    switch(texture) {
        case 'clay':
            message = isKidMode ?
                "Clay soil holds water really well, but plants might need help getting air to their roots! Try adding compost. 🌱" :
                "Clay soil has excellent nutrient retention but may require amendments to improve drainage and aeration.";
            className = 'warning';
            break;
        case 'loam':
            message = isKidMode ?
                "Perfect! Loamy soil is like the goldilocks of soil - not too wet, not too dry, just right! 🏆" :
                "Ideal! Loamy soil provides optimal balance of drainage, water retention, and nutrient availability.";
            className = '';
            break;
        case 'sand':
            message = isKidMode ?
                "Sandy soil drains water quickly. Plants might get thirsty fast, so they'll need more water and food! 💧" :
                "Sandy soil drains well but may require frequent watering and organic matter to retain nutrients.";
            className = 'warning';
            break;
    }
    
    resultDiv.innerHTML = `<p>${message}</p>`;
    resultDiv.className = `test-result ${className}`;
}

function showDrainageResult(drainage) {
    const resultDiv = document.getElementById('drainageResult');
    resultDiv.classList.remove('hidden');
    
    const isKidMode = appState.mode === 'kid';
    let message, className;
    
    switch(drainage) {
        case 'fast':
            message = isKidMode ?
                "Your soil drains water quickly! This is good, but plants might get thirsty faster. 🏃‍♂💧" :
                "Good drainage prevents root rot, but may require more frequent watering and nutrient applications.";
            className = '';
            break;
        case 'moderate':
            message = isKidMode ?
                "Perfect! Your soil holds just the right amount of water for plants to drink when they're thirsty! 👌" :
                "Excellent drainage rate provides optimal water availability while preventing waterlogging.";
            className = '';
            break;
        case 'slow':
            message = isKidMode ?
                "Your soil holds onto water for a long time. Plants might get 'wet feet'! Try adding sand or compost. 🦶💧" :
                "Poor drainage can cause root rot and nutrient deficiencies. Consider amendments to improve soil structure.";
            className = 'warning';
            break;
    }
    
    resultDiv.innerHTML = `<p>${message}</p>`;
    resultDiv.className = `test-result ${className}`;
}

function showLifeResult(lifeforms) {
    const resultDiv = document.getElementById('lifeResult');
    resultDiv.classList.remove('hidden');
    
    const isKidMode = appState.mode === 'kid';
    const lifeCount = lifeforms.length;
    let message, className;
    
    if (lifeCount >= 3) {
        message = isKidMode ?
            "Wow! Your soil is buzzing with life! All these creatures help make your soil super healthy! 🎉" :
            "Excellent biological activity! High biodiversity indicates a healthy soil ecosystem.";
        className = '';
    } else if (lifeCount >= 1) {
        message = isKidMode ?
            "Good start! There's some life in your soil. Adding compost can help attract more helpful creatures! 🐛" :
            "Moderate biological activity. Organic matter additions can enhance soil life diversity.";
        className = 'warning';
    } else {
        message = isKidMode ?
            "Your soil needs more friends! Try adding compost and being gentle with the soil to welcome tiny creatures. 🏠" :
            "Low biological activity suggests soil health issues. Focus on building organic matter and reducing disturbance.";
        className = 'error';
    }
    
    resultDiv.innerHTML = `<p>${message}</p>`;
    resultDiv.className = `test-result ${className}`;
}

function updateProgress() {
    const tests = appState.testResults;
    const completedTests = [
        tests.color !== null,
        tests.texture !== null,
        tests.drainage !== null,
        tests.life.length > 0
    ].filter(Boolean).length;
    
    const progress = (completedTests / 4) * 100;
    elements.overallProgress.style.width = `${progress}%`;
    elements.progressText.textContent = `${Math.round(progress)}% Complete`;
    
    if (completedTests === 4) {
        showSummary();
        checkAchievement('all_tests');
    }
}

function showSummary() {
    const score = calculateHealthScore();
    elements.resultsSummary.classList.remove('hidden');
    
    // Animate score
    animateScore(score);
    
    // Generate recommendations
    generateRecommendations();
}

function calculateHealthScore() {
    let score = 0;
    const tests = appState.testResults;
    
    // Color scoring
    if (tests.color === 'dark-brown') score += 30;
    else if (tests.color === 'medium-brown') score += 25;
    else if (tests.color === 'light-brown') score += 15;
    else score += 5;
    
    // Texture scoring
    if (tests.texture === 'loam') score += 30;
    else if (tests.texture === 'clay' || tests.texture === 'sand') score += 15;
    
    // Drainage scoring
    if (tests.drainage === 'moderate') score += 25;
    else if (tests.drainage === 'fast') score += 20;
    else score += 10;
    
    // Life scoring
    score += Math.min(tests.life.length * 5, 15);
    
    return Math.min(score, 100);
}

function animateScore(targetScore) {
    let currentScore = 0;
    const increment = targetScore / 50;
    
    const animation = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(animation);
        }
        
        elements.healthScore.textContent = Math.round(currentScore);
        updateScoreLabel(Math.round(currentScore));
    }, 20);
}

function updateScoreLabel(score) {
    const isKidMode = appState.mode === 'kid';
    let label;
    
    if (score >= 80) {
        label = isKidMode ? 'Soil Superstar! 🌟' : 'Excellent Soil Health';
    } else if (score >= 60) {
        label = isKidMode ? 'Great Gardener! 👍' : 'Good Soil Health';
    } else if (score >= 40) {
        label = isKidMode ? 'Getting Better! 🌱' : 'Fair Soil Health';
    } else {
        label = isKidMode ? 'Needs Some Love 💚' : 'Poor Soil Health';
    }
    
    elements.scoreLabel.textContent = label;
}

function generateRecommendations() {
    const tests = appState.testResults;
    const isKidMode = appState.mode === 'kid';
    const recommendations = [];
    
    // Color-based recommendations
    if (tests.color === 'light-brown' || tests.color === 'gray') {
        recommendations.push(isKidMode ? 
            'Add compost or old leaves to feed your soil!' :
            'Incorporate organic matter through composting or leaf mold.'
        );
    }
    
    // Texture-based recommendations
    if (tests.texture === 'clay') {
        recommendations.push(isKidMode ?
            'Mix in some sand and compost to help air get to plant roots!' :
            'Improve drainage with coarse organic matter and avoid working wet soil.'
        );
    } else if (tests.texture === 'sand') {
        recommendations.push(isKidMode ?
            'Add compost to help your soil hold water better!' :
            'Increase water retention with regular organic matter additions.'
        );
    }
    
    // Drainage-based recommendations
    if (tests.drainage === 'slow') {
        recommendations.push(isKidMode ?
            'Create raised beds or add materials to help water drain!' :
            'Install drainage systems or create raised planting areas.'
        );
    } else if (tests.drainage === 'fast') {
        recommendations.push(isKidMode ?
            'Use mulch to help keep water in the soil longer!' :
            'Apply organic mulch to reduce water evaporation.'
        );
    }
    
    // Life-based recommendations
    if (tests.life.length < 2) {
        recommendations.push(isKidMode ?
            'Add a compost bin to create food for soil creatures!' :
            'Establish composting system to increase soil biological activity.'
        );
    }
    
    // Display recommendations
    const html = 
        `<h4>${isKidMode ? 'How to Make Your Soil Even Better! 🚀' : 'Recommended Improvements'}</h4>
        <ul>${recommendations.map(rec => `<li>${rec}</li>`).join('')}</ul>`;
    
    elements.recommendationsContainer.innerHTML = html;
}

// Education Functions
function showEducationContent(topic) {
    const content = educationalContent[topic][appState.mode];
    
    document.querySelector('.education-grid').classList.add('hidden');
    document.getElementById('educationContent').classList.remove('hidden');
    document.getElementById('contentArea').innerHTML = `
        <h2>${content.title}</h2>
        ${content.content}
    `;
}

function showEducationTopics() {
    document.querySelector('.education-grid').classList.remove('hidden');
    document.getElementById('educationContent').classList.add('hidden');
}

// Plant Recommendations
function getPlantRecommendations() {
    const soilType = elements.soilTypeSelect.value;
    if (!soilType) return;
    
    const plants = plantRecommendations[soilType];
    const plantsHtml = plants.map(plant => `
        <div class="plant-card">
            <div class="plant-emoji">${plant.emoji}</div>
            <h4>${plant.name}</h4>
            <p>${plant.description}</p>
        </div>
    `).join('');
    
    elements.plantsGrid.innerHTML = plantsHtml;
    elements.plantResults.classList.remove('hidden');
    
    checkAchievement('plant_expert');
}

// Journal Functions
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        elements.photoPreview.innerHTML = `<img src="${e.target.result}" alt="Garden photo">`;
        elements.photoPreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

function saveJournalEntry() {
    const title = elements.entryTitle.value.trim();
    const notes = elements.entryNotes.value.trim();
    
    if (!title && !notes) return;
    
    const entry = {
        id: Date.now(),
        title: title || 'Garden Entry',
        notes: notes,
        date: new Date().toLocaleDateString(),
        photo: elements.photoPreview.querySelector('img')?.src || null
    };
    
    appState.journalEntries.unshift(entry);
    saveJournalEntries();
    
    // Clear form
    elements.entryTitle.value = '';
    elements.entryNotes.value = '';
    elements.photoPreview.innerHTML = '';
    elements.photoPreview.classList.add('hidden');
    elements.photoInput.value = '';
    
    // Refresh display
    loadJournalEntries();
    
    // Check achievement
    if (appState.journalEntries.length === 1) {
        checkAchievement('first_entry');
    }
}

function loadJournalEntries() {
    if (appState.journalEntries.length === 0) {
        elements.entriesContainer.innerHTML = `
            <div class="no-entries">
                <div class="no-entries-icon">📔</div>
                <p>Start your garden journal by adding your first entry!</p>
            </div>
        `;
        return;
    }
    
    const entriesHtml = appState.journalEntries.map(entry =>
        `<div class="journal-entry">
            <div class="entry-header">
                <h4 class="entry-title">${entry.title}</h4>
                <span class="entry-date">${entry.date}</span>
            </div>
            <div class="entry-content">
                <div class="entry-notes">${entry.notes}</div>
                ${entry.photo ? `<div class="entry-photo"><img src="${entry.photo}" alt="Garden photo"></div>` : ''}
            </div>
        </div>`).join('');
    
    elements.entriesContainer.innerHTML = entriesHtml;
}

function saveJournalEntries() {
    localStorage.setItem('soilJournalEntries', JSON.stringify(appState.journalEntries));
}

// Achievement System
function checkAchievement(achievementId) {
    if (appState.achievements.includes(achievementId)) return;
    
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement) return;
    
    appState.achievements.push(achievementId);
    saveAppState();
    
    showAchievementModal(achievement);
}

function showAchievementModal(achievement) {
    elements.achievementBadge.textContent = achievement.emoji;
    elements.achievementTitle.textContent = achievement.name;
    elements.achievementDescription.textContent = achievement.description;
    elements.achievementModal.classList.remove('hidden');
}

function closeAchievementModal() {
    elements.achievementModal.classList.add('hidden');
}

// Utility Functions
function updateUI() {
    updateProgress();
    updateModeContent();
}

function saveAppState() {
    localStorage.setItem('soilMonitorState', JSON.stringify(appState));
}

// Make functions globally accessible for debugging
window.soilMonitor = {
    appState,
    saveAppState,
    checkAchievement,
    showAchievementModal
};