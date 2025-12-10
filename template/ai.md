You are an expert front-end web developer. Your task is to create a single-page web application using HTML, CSS, and JavaScript to dynamically generate and display a course curriculum flowchart based on a provided JSON dataset. The final output should visually recreate the structure and connections of a course dependency chart, similar to the provided reference image.

**Image:**  

https://techinfo.profinfo.ca/assets/GrilleDeCoursInformatiqueVictoriaville-2023.svg  

**Objective:**

Create three files: `index.html`, `style.css`, and `script.js`. The application will read a JSON object (which will be provided in the `script.js` file) and render it as a flowchart in the browser.

**JSON Data Structure:**

The data is an array of diagram objects, each containing an array of course objects. Each object has the following structure:

```json
{
    "titre": "String (e.g., 'Formation spécifique)",
    "cours": [
{
  "sigle": "String (e.g., '420-1D6-VI')",
  "session": "Number (e.g., 1)",
  "heures": "Number (e.g., 90)",
  "titre": "String (e.g., 'Programmation 1')",
  "description": "String (e.g., 'Algorithmique élémentaire, programmation C#')",
  "dependances": "Array of strings (e.g., ['420-1C4-VI'])",
  "concommitantes": "Array of strings (e.g., ['420-1C4-VI'])",
  "dependances_optionnelles": "Array of strings (e.g., ['420-1C4-VI'])"
}]
```

**Core Requirements:**

**1. HTML (`index.html`)**
*   Create a basic HTML5 structure.
*   Include a main container element (e.g., `<main id="flowchart-container"></main>`) where the flowchart will be rendered by JavaScript.
*   Include placeholders for the two main titles: "Techniques de l'informatique - Formation spécifique" and "Techniques de l'informatique - Formation générale et complémentaire".
*   Link to the `style.css` and `script.js` files.

**2. CSS (`style.css`)**
*   **Course Cards:** Style the `div` elements that represent each course. They should have:
    *   Rounded corners (`border-radius`).
    *   A subtle box shadow for depth.
    *   Internal padding.
    *   A clear and readable font.
*   **Layout:**
    *   Use a modern layout system like **CSS Grid** or **Flexbox** to organize the courses into columns representing the different sessions (semesters).
    *   The main container should be wide enough to accommodate all stages side-by-side.
*   **Color Coding:** Assign different background colors to the course cards. You can create a simple function in JavaScript to assign a color based on the course `sigle` prefix (e.g., '420' courses are blue, '109' are green, '340' are grey, etc.). This mimics the color scheme in the reference image.
*   **Typography:** The course `sigle` and `heures` should be prominent (e.g., bold, smaller font on a top line), followed by the `titre` in a larger font, and the `description` in a smaller, italicized font.

**3. JavaScript (`script.js`)**

This is the core of the application.

*   **Data:** Store the full JSON data provided at the beginning of this task in a constant variable within this file.
*   **Course Positioning (The Session Algorithm):**
    *   Before rendering, you must determine which "Session" (column) each course belongs to from the session number.
*   **Dynamic Element Creation:**
    *   Loop through the array of course objects.
    *   For each course, create a `div` element (`<div class="course-card">`).
    *   Set a unique ID for each div (e.g., using the `sigle`).
    *   Populate the `div` with the course's `sigle`, `titre`, `heures`, and `description`.
    *   Append each newly created course `div` to the correct column within the `#flowchart-container`.
*   **Drawing Dependency Lines:**
    *   This is the most challenging part. After all the course cards are rendered and positioned on the page, draw lines connecting a course to each of its dependencies.
    *   **Recommended approach:** Use a lightweight JavaScript library to draw the connector lines. **LeaderLine.js** is an excellent choice for this.
        *   After creating all the course cards, loop through the courses again.
        *   For each course, get its `dependances`.
        *   For each dependency `sigle` in the array, find the corresponding DOM elements (e.g., `document.getElementById(courseSigle)`) and draw a line between them using the library.
    *   The lines should be clearly visible, perhaps a dark grey color, and should end with an arrowhead pointing to the course that has the dependency.

**Final Deliverable:**

Provide the complete and working code for the three files: `index.html`, `style.css`, and `script.js`. The code should be well-commented, especially the logic for stage calculation and line drawing. The final result should be a clean, readable, and interactive flowchart of the provided curriculum.