document.addEventListener("DOMContentLoaded", function() {
    fetchPatientData();

    function fetchPatientData() {
        fetch('https://api.codingthesmartway.com/patient/123456') // Replace with actual API endpoint
            .then(response => response.json())
            .then(data => {
                displayPatientData(data);
                createBloodPressureChart(data.bloodPressure);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayPatientData(data) {
        const patientDetails = document.getElementById('patient-details');
        patientDetails.innerHTML = `
            Age: ${data.age}<br>
            Gender: ${data.gender}<br>
            Address: ${data.address}<br>
        `;
    }

    function createBloodPressureChart(bloodPressureData) {
        const ctx = document.getElementById('bloodPressureChart').getContext('2d');
        const labels = bloodPressureData.map(entry => entry.year);
        const systolic = bloodPressureData.map(entry => entry.systolic);
        const diastolic = bloodPressureData.map(entry => entry.diastolic);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Systolic',
                        data: systolic,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Diastolic',
                        data: diastolic,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the API or use static data
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = [65, 59, 80, 81, 56, 55]; // Example data

    // Create a new Chart.js chart instance
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // Specify the type of chart (line, bar, pie, etc.)
        data: {
            labels: labels,
            datasets: [{
                label: 'My Dataset', // Label for the dataset
                data: data, // Data to be plotted on the chart
                borderColor: 'rgb(75, 192, 192)', // Border color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color (with transparency)
                borderWidth: 1 // Border width
            }]
        },
        options: {
            // Customization options, such as title, axes, etc.
        }
    });
});
