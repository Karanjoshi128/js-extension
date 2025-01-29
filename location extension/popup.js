document.getElementById('get-location').addEventListener('click', () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
  
          // Display coordinates
          document.getElementById('output').innerHTML = `
            <p><strong>Latitude:</strong> ${latitude.toFixed(5)}</p>
            <p><strong>Longitude:</strong> ${longitude.toFixed(5)}</p>
          `;
  
          // Initialize the map
          const mapContainer = document.getElementById('map-container');
          mapContainer.innerHTML = ''; // Clear any existing map
          const map = L.map(mapContainer).setView([latitude, longitude], 15);
  
          // Add OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);
  
          // Add a marker for the current location
          L.marker([latitude, longitude]).addTo(map).bindPopup("You are here!").openPopup();
        },
        (error) => {
          document.getElementById('output').innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
          `;
        }
      );
    } else {
      document.getElementById('output').innerHTML = `
        <p style="color: red;">Geolocation is not supported by your browser.</p>
      `;
    }
  });
  