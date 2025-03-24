document.addEventListener("DOMContentLoaded", () => {
    const compareBtn = document.getElementById("compare-btn");
    const comparisonContainer = document.getElementById("comparison-container");
    let user1Chart, user2Chart;

    const fetchUserData = async (username) => {
        try {
            const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
            if (!response.ok) throw new Error("User not found or API error");

            const data = await response.json();
            if (!data.totalSolved && data.totalSolved !== 0) throw new Error("No data available for this user");

            console.log("Fetched data:", data); 
            return data;
        } catch (error) {
            alert(`Error fetching data for ${username}: ${error.message}`);
            console.error(`Error fetching data for ${username}:`, error);
            return null;
        }
    };

    const updateStats = (userId, username, data, isWinner) => {
        const nameElement = document.getElementById(`${userId}-name`);
        nameElement.innerHTML = isWinner ? `${username} 🏆` : username;

        
        const totalSolved = data.totalSolved || 0;
        const totalEasy = data.easySolved || 0;
        const totalMedium = data.mediumSolved || 0;
        const totalHard = data.hardSolved || 0;
        const totalEasyQuestions = data.totalEasy || 1; 
        const totalMediumQuestions = data.totalMedium || 1;
        const totalHardQuestions = data.totalHard || 1;
        const ranking = data.ranking || "N/A";
        const contributionPoints = data.contributionPoints || 0;

        document.getElementById(`${userId}-stats`).innerHTML = `
            <div class="metric-card">Total Solved: ${totalSolved}</div>
            <div class="metric-card">Easy: ${totalEasy}/${totalEasyQuestions}</div>
            <div class="metric-card">Medium: ${totalMedium}/${totalMediumQuestions}</div>
            <div class="metric-card">Hard: ${totalHard}/${totalHardQuestions}</div>
            <div class="metric-card">Ranking: #${ranking}</div>
            <div class="metric-card">Contribution Points: ${contributionPoints}</div>
        `;

       
        if (userId === "user1" && user1Chart) user1Chart.destroy();
        if (userId === "user2" && user2Chart) user2Chart.destroy();

        
        const ctx = document.getElementById(`${userId}PieChart`).getContext("2d");
        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Easy", "Medium", "Hard"],
                datasets: [{
                    data: [totalEasy, totalMedium, totalHard],
                    backgroundColor: ["#4CAF50", "#FFC107", "#FF3B30"],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });

        if (userId === "user1") user1Chart = chart;
        else user2Chart = chart;
    };

    compareBtn.addEventListener("click", async () => {
        const user1Name = document.getElementById("user1-input").value.trim();
        const user2Name = document.getElementById("user2-input").value.trim();

        if (!user1Name || !user2Name) {
            alert("Please enter both usernames.");
            return;
        }

        const user1 = await fetchUserData(user1Name);
        const user2 = await fetchUserData(user2Name);

        if (user1 && user2) {
        
            const winner = user1.totalSolved > user2.totalSolved ? "user1" : "user2";

            updateStats("user1", user1Name, user1, winner === "user1");
            updateStats("user2", user2Name, user2, winner === "user2");

            comparisonContainer.classList.remove("hidden");
        }
    });
});
