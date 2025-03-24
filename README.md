# DSAlytics
A web app that compares LeetCode users' stats and declares a winner with a 🏆 trophy

DSAlytics is a web application that allows you to compare the performance of two LeetCode users side-by-side. It fetches statistics from the LeetCode API and displays key metrics—including total solved problems, difficulty breakdown, acceptance rate, contribution points, and ranking—along with visual pie charts for an engaging and intuitive experience.

Features
User Comparison: Compare two LeetCode profiles by entering their usernames.
Comprehensive Stats: View total solved, easy/medium/hard problem breakdown, ranking, acceptance rate, and contribution points.
Dynamic Visualization: Pie charts generated using Chart.js illustrate the breakdown of problems solved by difficulty.
Winner Highlight: The user with a higher total solved count is recognized with a trophy (🏆) displayed next to their name.
Modern UI: Features a sleek, glassmorphism design with gradient backgrounds and responsive layout.
Error Handling: Notifies users of invalid usernames or issues fetching data.

Technologies Used:
HTML5 & CSS3 – For structure and styling, including a modern glassmorphic design and responsive layout.
JavaScript (ES6) – For fetching data from the API, processing the stats, and dynamically updating the UI.
Chart.js – To render interactive and responsive pie charts.
LeetCode Stats API – To retrieve user statistics.

Live Demo
View Live Demo
(Replace with your GitHub Pages link or any live demo URL if available.)


Acknowledgements:
Special thanks to the LeetCode Stats API for providing the data.
Inspired by modern UI trends and the growing need for competitive coding analytics.

Usage:
Enter two LeetCode usernames in the provided input fields.
Click on the "Compare" button.
The app will fetch data from the LeetCode Stats API and display:
Detailed statistics for both users.
Pie charts that show the breakdown of easy, medium, and hard problems solved.
A trophy (🏆) next to the username of the user with a higher total solved count.
If any error occurs (e.g., invalid username or API issues), an alert message will display the error.

Customization
Styling:
The UI uses a glassmorphic design. Feel free to modify style.css to adjust colors, gradients, or overall layout.

Chart Settings:
The pie charts are generated using Chart.js. You can update the chart configurations in script.js under the chart creation section.

Contributing:
Contributions are welcome! If you have suggestions or improvements, please follow these steps:
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.



