const copaAmerica2024 = {
    year: 2024,
    host_country: "Estados Unidos",
    teams: [
        {
            name: "Argentina",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Canada",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Chile",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Peru",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Ecuador",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Jamaica",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Mexico",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Venezuela",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },        
        {
            name: "Bolivia",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Panamá",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Uruguay",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Estados Unidos",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },        
        {
            name: "Brasil",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Colombia",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Costa Rica",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
        {
            name: "Paraguay",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0,
            wins: 0,
            draws:0,
            losses: 0,
            goal_difference: 0
        },
    ]
};

let groupMatches = {};

function generateGroups() {
    const groups = {};
    copaAmerica2024.teams.forEach(team => {
        if (!groups[team.group]) {
            groups[team.group] = [];
        }
        groups[team.group].push(team);
    });
    return groups;
}

function displayGroups() {
    const groups = generateGroups();
    const groupsContainer = document.getElementById('groups');
    groupsContainer.innerHTML = '';

    for (const group in groups) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('group');
        groupDiv.innerHTML = `<h2>Grupo ${group}</h2>`;
        
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>GD</th>
                    <th>G</th>
                    <th>E</th>
                    <th>P</th>
                    <th>Ptos</th>
                </tr>
            </thead>
            <tbody id="group-${group}">
                ${groups[group].map((team, index) => `
                    <tr id="team-${group}-${index}">
                       <td>${team.name}</td>
                        <td>${team.games_played}</td>
                        <td>${team.pro_goals}</td>
                        <td>${team.ag_goal}</td>
                        <td>${team.goal_difference}</td>
                        <td>${team.wins}</td>
                        <td>${team.draws}</td>
                        <td>${team.losses}</td>
                        <td>${team.points}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        groupDiv.appendChild(table);

        const generateButton = document.createElement('button');
        generateButton.textContent = 'Generar Resultados del Grupo';
        generateButton.onclick = () => {
            generateGroupResults(group);
            updateTable(group);
            displayMatchesForGroup(group);
        };
        groupDiv.appendChild(generateButton);

        groupsContainer.appendChild(groupDiv);
    }
}

function generateGroupResults(group) {
    const groups = generateGroups();
    const groupTeams = groups[group];

    groupTeams.forEach(team => {
        team.games_played = 0;
        team.pro_goals = 0;
        team.ag_goal = 0;
        team.wins = 0;
        team.draws = 0;
        team.losses = 0;
        team.points = 0;
        team.goal_difference=0;
    });

    const matches = [];
    for (let i = 0; i < groupTeams.length; i++) {
        for (let j = i + 1; j < groupTeams.length; j++) {
            const result = `${Math.floor(Math.random() * 4)} - ${Math.floor(Math.random() * 4)}`;
            matches.push({
                team1: groupTeams[i],
                team2: groupTeams[j],
                score: result
            });
            updateScores(groupTeams[i], groupTeams[j], result);
        }
    }
    groupMatches[group] = matches;
}

function updateScores(team1, team2, result) {
    const [goals1, goals2] = result.split(' - ').map(Number);

    team1.games_played++;
    team2.games_played++;
    team1.pro_goals += goals1;
    team2.pro_goals += goals2;
    team1.ag_goal += goals2;
    team2.ag_goal += goals1;
    team1.goal_difference = team1.pro_goals - team1.ag_goal;
    team2.goal_difference = team2.pro_goals - team2.ag_goal;

    if (goals1 > goals2) {
        team1.points += 3;
        team1.wins++;
        team2.losses++;
    } else if (goals2 > goals1) {
        team2.points += 3;
        team2.wins++;
        team1.losses++;
    } else {
        team1.points += 1;
        team2.points += 1;
        team1.draws++;
        team2.draws++;
    }
}

function updateTable(group) {
    const groups = generateGroups();
    const groupTeams = groups[group];

    const tableBody = document.getElementById(`group-${group}`);
    tableBody.innerHTML = groupTeams.map((team, index) => `
         <tr id="team-${group}-${index}">
            <td>${team.name}</td>
            <td>${team.games_played}</td>
            <td>${team.pro_goals}</td>
            <td>${team.ag_goal}</td>
            <td>${team.goal_difference}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.points}</td>
        </tr>
    `).join('');
}

function displayMatchesForGroup(group) {
    const matches = groupMatches[group];
    const groupDiv = document.getElementById(`group-${group}`).parentElement;
    let matchesDiv = groupDiv.querySelector('.matches');

    if (!matchesDiv) {
        matchesDiv = document.createElement('div');
        matchesDiv.classList.add('matches');
        matchesDiv.innerHTML = `<h3>Partidos del Grupo ${group}</h3>`;
        groupDiv.appendChild(matchesDiv);
    }

    matchesDiv.innerHTML = `
        <h3>Partidos del Grupo ${group}</h3>
        <table>
            <thead>
                <tr>
                    <th>Equipo 1</th>
                    <th>Equipo 2</th>
                    <th>Marcador</th>
                </tr>
            </thead>
            <tbody>
                ${matches.map(match => `
                    <tr>
                        <td>${match.team1.name}</td>
                        <td>${match.team2.name}</td>
                        <td>${match.score}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function generateFinalJSON() {
    const groups = generateGroups();
    const standings = {};

    for (const group in groups) {
        groups[group].sort((a, b) => b.points - a.points || (b.pro_goals - b.ag_goal) - (a.pro_goals - a.ag_goal) || b.pro_goals - a.pro_goals || a.ag_goal - b.ag_goal);
        standings[group] = groups[group].slice(0, 2).map(team => ({
            name: team.name,
            group: team.group,
            games_played: team.games_played,
            pro_goals: team.pro_goals,
            ag_goal: team.ag_goal,
            wins: team.wins,
            draws: team.draws,
            losses: team.losses,
            points: team.points,
            goal_difference: team.goal_difference
        }));
    }

    
    document.getElementById('json-output').textContent = JSON.stringify(standings, null, 2);
}


window.onload = displayGroups;
