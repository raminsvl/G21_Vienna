function Leaderboard(profiles) {
    // Convert the profiles object to an array
    const profilesArray = Object.values(profiles);
  
    // Sort the profiles by score in descending order
    const sortedProfiles = profilesArray.sort((a, b) => b.score - a.score);
  
    // Create an HTML table element
    const table = document.createElement('table');
  
    // Create the table header row
    const headerRow = table.insertRow();
    const headerNames = ['Name', 'Score', 'Time', 'Shared Code'];
  
    headerNames.forEach(headerName => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerName;
      headerRow.appendChild(headerCell);
    });
  
    // Create table rows for each profile
    sortedProfiles.forEach(profile => {
      const row = table.insertRow();
      const { name, score, time, sharedCode } = profile;
  
      const nameCell = row.insertCell();
      nameCell.textContent = name;
  
      const scoreCell = row.insertCell();
      scoreCell.textContent = String(score);
  
      const timeCell = row.insertCell();
      timeCell.textContent = String(time);
  
      const sharedCodeCell = row.insertCell();
      sharedCodeCell.textContent = String(sharedCode);
    });
  
    // Append the table to the document body
    document.body.appendChild(table);
  }
  
  // Make a fetch request to retrieve the response data
  fetch('http://localhost:5006/Munch')
    .then(response => response.json())
    .then(data => {
      // Convert the score, time, and sharedCode to numbers
      const profiles = data.map(profile => ({
        ...profile,
        score: parseInt(profile.score),
        time: parseInt(profile.time),
        sharedCode: parseInt(profile.sharedCode)
      }));
  
      Leaderboard(profiles); // Pass the response data to the Leaderboard function
    })
    .catch(error => {
      console.error(error);
    });
  
  export default Leaderboard;
  