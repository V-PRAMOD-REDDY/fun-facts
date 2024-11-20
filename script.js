const facts = [
    "At 20 years old, I've already developed a deep love for the mountains and enjoy exploring their beauty.",
    "I am passionate about hiking and have a goal to visit as many mountain ranges as possible.",
    "I find peace and inspiration in the mountains, often spending my weekends on trails.",
    "I am learning about the flora and fauna unique to mountainous regions.",
    "I aspire to combine my love for mountains with photography, capturing breathtaking landscapes."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
