document.addEventListener("DOMContentLoaded", () => {
  // SVG rendering objects for each section
  const sectionSvgRenderers = {};

  // JSON data for the course curriculum
  const curriculumData = [
    {
      titre: "Formation spécifique",
      cours: [
        {
          sigle: "420-1C4-VI",
          session: 1,
          heures: 60,
          titre: "Outils informatiques",
          description: "Bureautique en ligne, utilitaires, Intro Mac",
          dependances: [],
        },
        {
          sigle: "420-1B4-VI",
          session: 1,
          heures: 60,
          titre: "Fonctionnement de l'ordinateur",
          description: "Installation, Linux",
          dependances: [],
        },
        {
          sigle: "420-1E6-VI",
          session: 1,
          heures: 90,
          titre: "Design Web",
          description: "Web client (HTML, CSS, Bootstrap, Javascript)",
          dependances: [],
        },
        {
          sigle: "420-1D6-VI",
          session: 1,
          heures: 90,
          titre: "Programmation 1",
          description: "Algorithmique élémentaire, programmation C#",
          dependances: [],
          concommitantes: ["201-1A3-VI"],
        },
        {
          sigle: "201-1A3-VI",
          session: 1,
          heures: 45,
          titre: "Mathématiques de l'ordinateur",
          description: "Nombres, algèbre de bool",
          dependances: [],
        },
        {
          sigle: "420-2D4-VI",
          session: 2,
          heures: 60,
          titre: "Support technique",
          description: "Word, Excel, PowerPoint, Centre d'assistance",
          dependances: [],
        },
        {
          sigle: "420-2A4-VI",
          session: 2,
          heures: 60,
          titre: "Développement Web 1",
          description: "PHP vanille, intégration MySQL",
          dependances: ["420-1E6-VI", "420-1D6-VI"],
          concommitantes: ["420-2B4-VI"],
        },
        {
          sigle: "420-2B4-VI",
          session: 2,
          heures: 60,
          titre: "Bases de données 1",
          description: "MySQL, jointure, procédures stockées, déclencheur",
          dependances: ["420-1D6-VI"],
        },
        {
          sigle: "420-2A6-VI",
          session: 2,
          heures: 90,
          titre: "Programmation 2",
          description: "Programmation objet, MonoGame",
          dependances: ["420-1D6-VI"],
        },
        {
          sigle: "420-2C4-VI",
          session: 2,
          heures: 60,
          titre: "Réseautique",
          description: "",
          dependances: ["201-1A3-VI"],
        },
        {
          sigle: "420-3A5-VI",
          session: 3,
          heures: 75,
          titre: "Développement Web 2",
          description: "WordPress",
          dependances: ["420-2A4-VI"],
        },
        {
          sigle: "420-3B4-VI",
          session: 3,
          heures: 60,
          titre: "Bases de données 2",
          description: "Modélisation, CRUD, Python",
          dependances: ["420-2B4-VI"],
        },
        {
          sigle: "420-3C4-VI",
          session: 3,
          heures: 60,
          titre: "Piratage éthique",
          description:
            "Sécurité prog, BD, réseau, encryption, firewall, antivirus",
          dependances: ["420-2C4-VI"],
          dependances_optionnelles: ["420-2B4-VI", "420-2A4-VI"],
        },
        {
          sigle: "420-3A4-VI",
          session: 3,
          heures: 60,
          titre: "Objets connectés 1",
          description: "Programmation, domotique sous Mac ou Linux",
          dependances: ["420-1D6-VI"],
        },
        {
          sigle: "420-3B3-VI",
          session: 3,
          heures: 45,
          titre: "Jeux 2D",
          description: "Godot, python",
          dependances: ["420-2A6-VI"],
        },
        {
          sigle: "420-3A3-VI",
          session: 3,
          heures: 45,
          titre: "Nano-ordinateurs",
          description: "Python, Linux, Pi, Servos, capteurs",
          dependances: ["420-2A6-VI"],
          dependances_optionnelles: ["201-1A3-VI"],
        },
        {
          sigle: "420-4A4-VI",
          session: 4,
          heures: 60,
          titre: "Services Web",
          description: "API, AJAX",
          dependances: ["420-2A4-VI"],
        },
        {
          sigle: "420-4C4-VI",
          session: 4,
          heures: 60,
          titre: "Mégadonnées",
          description: "NoSQL, Python",
          dependances: ["420-3B4-VI"],
        },
        {
          sigle: "420-4B4-VI",
          session: 4,
          heures: 60,
          titre: "Conception de systèmes",
          description: "Analyse, Agile, interfaces, projets fictifs",
          dependances: ["420-3B4-VI"],
        },
        {
          sigle: "420-4A6-VI",
          session: 4,
          heures: 90,
          titre: "Programmation 3",
          description: "Algorithme en C++ ou en Java",
          dependances: ["420-2A6-VI"],
        },
        {
          sigle: "420-4D4-VI",
          session: 4,
          heures: 60,
          titre: "Applications mobiles 1",
          description: "Android, iOS ou multi-plateformes",
          dependances: ["420-2A6-VI"],
        },
        {
          sigle: "201-4A4-VI",
          session: 4,
          heures: 60,
          titre: "Géométrie et statistiques",
          description: "Figures géométriques, statistiques descriptives",
          dependances: [],
        },
        {
          sigle: "420-5A5-VI",
          session: 5,
          heures: 75,
          titre: "Développement Web 3",
          description: "Les tendances du moment Node, PWA, React",
          dependances: ["420-4A4-VI", "420-4C4-VI"],
        },
        {
          sigle: "420-5B5-VI",
          session: 5,
          heures: 75,
          titre: "Projet intégrateur 1",
          description: "Projets fictifs, En équipe",
          dependances: ["420-4B4-VI", "420-4A6-VI"],
        },
        {
          sigle: "420-5A4-VI",
          session: 5,
          heures: 60,
          titre: "Jeux 3D",
          description: "Unity 3D",
          dependances: ["420-2A6-VI"],
        },
        {
          sigle: "420-5B4-VI",
          session: 5,
          heures: 60,
          titre: "Applications mobiles 2",
          description: "Android, iOS ou multi-plateformes",
          dependances: ["420-2A6-VI"],
        },
        {
          sigle: "420-5A3-VI",
          session: 5,
          heures: 45,
          titre: "Technologies émergentes",
          description: "Veille techno, Évaluation de composantes",
          dependances: [],
        },
        {
          sigle: "350-6A3-VI",
          session: 6,
          heures: 45,
          titre: "Interrelations professionnelles",
          description: "",
          dependances: [],
          concommitantes: ["420-6A7-VI"],
        },
        {
          sigle: "420-6A7-VI",
          session: 6,
          heures: 105,
          titre: "Projet intégrateur 2",
          description: "Projets communautaires individuels, cours porteur ESP",
          dependances: ["420-5B5-VI"],
        },
        {
          sigle: "420-6B3-VI",
          session: 6,
          heures: 45,
          titre: "Environnements immersifs",
          description: "Réalité virtuelle et augmentée",
          dependances: ["420-5A4-VI"],
        },
        {
          sigle: "420-6A3-VI",
          session: 6,
          heures: 45,
          titre: "Objets connectés 2",
          description: "",
          dependances: ["420-3A3-VI", "420-3A4-VI"],
          dependances_optionnelles: ["420-4D4-VI"],
        },
        {
          sigle: "420-6C3-VI",
          session: 6,
          heures: 45,
          titre: "Projet personnel",
          description: "Intensif sur 2 semaines, Veille, expérimentation, avis",
          dependances: [],
        },
      ],
    },
    {
      titre: "Formation générale et complémentaire",
      cours: [
        {
          sigle: "109-102-MQ",
          session: 1,
          heures: 30,
          titre: "Activité physique et efficacité",
          description: "",
          dependances: [],
        },
        {
          sigle: "340-101-MQ",
          session: 1,
          heures: 60,
          titre: "Philosophie et rationalité",
          description: "",
          dependances: [],
        },
        {
          sigle: "601-101-MQ",
          session: 2,
          heures: 60,
          titre: "Écriture et littérature",
          description: "",
          dependances: [],
        },
        {
          sigle: "ANG-FGC-R4",
          session: 2,
          heures: 45,
          titre: "Anglais Formation générale commune",
          description: "",
          dependances: [],
        },
        {
          sigle: "109-101-MQ",
          session: 4,
          heures: 30,
          titre: "Activité physique et santé",
          description: "",
          dependances: ["109-102-MQ"],
        },
        {
          sigle: "601-102-MQ",
          session: 3,
          heures: 60,
          titre: "Littérature et imaginaire",
          description: "",
          dependances: ["601-101-MQ"],
        },
        {
          sigle: "ANG-FGP-R4",
          session: 3,
          heures: 45,
          titre: "Anglais Formation générale propre",
          description: "",
          dependances: ["ANG-FGC-R4"],
        },
        {
          sigle: "340-102-MQ",
          session: 4,
          heures: 45,
          titre: "L'être humain",
          description: "",
          dependances: ["340-101-MQ"],
        },
        {
          sigle: "601-103-MQ",
          session: 5,
          heures: 60,
          titre: "Littérature québécoise",
          description: "",
          dependances: ["601-102-MQ"],
        },
        {
          sigle: "109-103-MQ",
          session: 5,
          heures: 30,
          titre: "Activité physique et autonomie",
          description: "",
          dependances: ["109-101-MQ"],
        },
        {
          sigle: "340-PP3-VI",
          session: 6,
          heures: 45,
          titre: "Philosophie Formation générale propre",
          description: "",
          dependances: ["340-102-MQ"],
        },
        {
          sigle: "COM-001-03",
          session: 5,
          heures: 45,
          titre: "Cours complémentaire 1",
          description: "",
          dependances: [],
        },
        {
          sigle: "601-FP4-VI",
          session: 6,
          heures: 60,
          titre: "Français Formation générale propre",
          description: "",
          dependances: ["601-103-MQ"],
        },
        {
          sigle: "COM-002-03",
          session: 6,
          heures: 45,
          titre: "Cours complémentaire 2",
          description: "",
          dependances: [],
        },
      ],
    },
  ];

  const specificContainer = document.getElementById(
    "flowchart-specific-container"
  );
  const generalContainer = document.getElementById(
    "flowchart-general-container"
  );
  const specificSvg = document.getElementById("flowchart-specific-svg");
  const generalSvg = document.getElementById("flowchart-general-svg");

  const allCourses = curriculumData.flatMap((section) => section.cours);
  const courseMap = new Map(allCourses.map((course) => [course.sigle, course]));
  const elementPositions = new Map();

  function getColorClass(sigle) {
    const prefix = sigle.split("-")[0];
    switch (prefix) {
      case "420":
        return "color-420";
      case "582":
        return "color-582";
      case "109":
        return "color-109";
      case "340":
        return "color-340";
      case "604":
        return "color-604";
      case "350":
        return "color-350";
      case "EFG":
        return "color-efg";
      default:
        if (sigle.startsWith("ANG") || sigle.startsWith("CPL")) {
          return "color-gen";
        }
        return "color-default";
    }
  }

  function renderFlowchart(sections) {
    const containers = {
      "Formation spécifique": specificContainer,
      "Formation générale et complémentaire": generalContainer,
    };
    sections.forEach((section) => {
      const container = containers[section.titre];
      if (!container) return;
      const sessions = {};
      section.cours.forEach((course) => {
        if (!sessions[course.session]) sessions[course.session] = [];
        sessions[course.session].push(course);
      });
      Object.keys(sessions)
        .sort()
        .forEach((sessionNumber) => {
          let column = container.querySelector(`.session-${sessionNumber}`);
          if (!column) {
            column = document.createElement("div");
            column.className = `session-column session-${sessionNumber}`;
            column.dataset.session = sessionNumber;
            container.appendChild(column);
          }
          sessions[sessionNumber].forEach((course) => {
            const card = document.createElement("div");
            card.className = `course-card ${getColorClass(course.sigle)}`;
            card.id = course.sigle;
            card.innerHTML = `
                        <div class="card-header"><span>${course.sigle}</span><span>${course.heures}h</span></div>
                        <div class="course-title">${course.titre}</div>
                        <p class="course-description">${course.description}</p>
                    `;
            column.appendChild(card);
          });
        });
    });
    setTimeout(() => {
      captureElementPositions();
      drawLinesWithSVG();
    }, 100);
  }

  function captureElementPositions() {
    elementPositions.clear();
    allCourses.forEach((course) => {
      const element = document.getElementById(course.sigle);
      if (element) {
        const rect = element.getBoundingClientRect();
        elementPositions.set(course.sigle, {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    });
  }

  function drawLinesWithSVG() {
    // Clear existing SVGs
    specificSvg.innerHTML = "";
    generalSvg.innerHTML = "";

    const sectionCourses = {
      specific: allCourses.filter((c) =>
        document
          .getElementById(c.sigle)
          ?.closest("#flowchart-specific-container")
      ),
      general: allCourses.filter((c) =>
        document
          .getElementById(c.sigle)
          ?.closest("#flowchart-general-container")
      ),
    };

    // Draw lines for each section
    Object.entries(sectionCourses).forEach(([section, courses]) => {
      const svgElement = section === "specific" ? specificSvg : generalSvg;
      const container =
        section === "specific" ? specificContainer : generalContainer;
      drawSectionLines(svgElement, container, courses);
    });
  }

  function drawSectionLines(svgElement, container, courses) {
    const containerRect = container.getBoundingClientRect();

    // Create lines for dependencies
    courses.forEach((course) => {
      if (!course.dependances || course.dependances.length === 0) return;

      const toPos = elementPositions.get(course.sigle);
      if (!toPos) return;

      course.dependances.forEach((depSigle) => {
        const fromPos = elementPositions.get(depSigle);
        if (!fromPos) return;

        // Convert to relative positions within container
        const fromX = fromPos.x - containerRect.left + container.scrollLeft;
        const fromY = fromPos.y - containerRect.top + container.scrollTop;
        const toX = toPos.x - containerRect.left + container.scrollLeft;
        const toY = toPos.y - containerRect.top + container.scrollTop;

        // Calculate connection points: right side of source, left side of target
        const fromCenterX = fromX + fromPos.width; // Right edge of source
        const fromCenterY = fromY + fromPos.height / 2; // Vertical center of source
        const toCenterX = toX; // Left edge of target
        const toCenterY = toY + toPos.height / 2; // Vertical center of target

        // Get all obstacles between start and end
        const obstacles = getObstaclesBetween(
          fromPos,
          toPos,
          containerRect,
          container
        );

        drawBezierLine(
          svgElement,
          fromCenterX,
          fromCenterY,
          toCenterX,
          toCenterY,
          obstacles
        );
      });
    });

    // Update SVG dimensions
    updateSvgDimensions(svgElement, container);
  }

  function getObstaclesBetween(fromPos, toPos, containerRect, container) {
    // Find all course cards that are between the source and target
    const obstacles = [];
    const fromX = fromPos.x - containerRect.left + container.scrollLeft;
    const fromY = fromPos.y - containerRect.top + container.scrollTop;
    const toX = toPos.x - containerRect.left + container.scrollLeft;
    const toY = toPos.y - containerRect.top + container.scrollTop;

    const minX = Math.min(fromX, toX);
    const maxX = Math.max(fromX, toX);
    const minY = Math.min(fromY, toY);
    const maxY = Math.max(fromY, toY);

    // Check all courses
    elementPositions.forEach((pos, sigle) => {
      const cardX = pos.x - containerRect.left + container.scrollLeft;
      const cardY = pos.y - containerRect.top + container.scrollTop;

      // Check if this card is between start and end (with padding)
      const padding = 10;
      if (
        cardX + pos.width > minX - padding &&
        cardX < maxX + padding &&
        cardY + pos.height > minY - padding &&
        cardY < maxY + padding
      ) {
        // Exclude the source and target cards themselves
        if (
          !(
            cardX === fromX &&
            cardY === fromY &&
            pos.width === fromPos.width
          ) &&
          !(cardX === toX && cardY === toY && pos.width === toPos.width)
        ) {
          obstacles.push({
            x: cardX,
            y: cardY,
            width: pos.width,
            height: pos.height,
          });
        }
      }
    });

    return obstacles;
  }

  function drawBezierLine(svgElement, x1, y1, x2, y2, obstacles = []) {
    // Create SVG path with routing that avoids obstacles
    const path = createSmartPath(x1, y1, x2, y2, obstacles);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.setAttribute("d", path);
    line.setAttribute("stroke", "#34495e");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("fill", "none");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("stroke-linejoin", "round");

    svgElement.appendChild(line);

    // Add arrow marker
    addArrowMarker(svgElement);
    line.setAttribute("marker-end", "url(#arrowhead)");
  }

  function createSmartPath(x1, y1, x2, y2, obstacles = []) {
    // Create orthogonal routing with 90-degree angles that goes around obstacles

    const verticalDistance = y2 - y1;

    if (obstacles.length === 0) {
      // No obstacles - use simple path: down -> across -> up
      const midY1 = y1 + verticalDistance * 0.4;
      const midX = (x1 + x2) / 2;
      const midY2 = y2 - verticalDistance * 0.4;
      return `M ${x1} ${y1} L ${x1} ${midY1} L ${midX} ${midY1} L ${midX} ${y2} L ${x2} ${y2}`;
    }

    // Find the rightmost obstacle edge to route around
    let maxObstacleRight = -Infinity;
    obstacles.forEach((obs) => {
      maxObstacleRight = Math.max(maxObstacleRight, obs.x + obs.width);
    });

    // Route to the right of all obstacles
    const routeX = maxObstacleRight + 30; // 30px padding from obstacle

    // Path goes: down a bit -> right around obstacles -> across -> left back -> up to target
    const midY1 = y1 + Math.abs(verticalDistance) * 0.2;
    const midY2 = y2 - Math.abs(verticalDistance) * 0.2;

    return `M ${x1} ${y1} L ${x1} ${midY1} L ${routeX} ${midY1} L ${routeX} ${midY2} L ${x2} ${midY2} L ${x2} ${y2}`;
  }

  function addArrowMarker(svgElement) {
    // Add arrow marker only if it doesn't exist
    if (svgElement.querySelector("#arrowhead")) return;

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "marker"
    );
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "10");
    marker.setAttribute("refX", "9");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute("points", "0 0, 10 3, 0 6");
    polygon.setAttribute("fill", "#34495e");

    marker.appendChild(polygon);
    defs.appendChild(marker);
    svgElement.insertBefore(defs, svgElement.firstChild);
  }

  function updateSvgDimensions(svgElement, container) {
    const allPaths = svgElement.querySelectorAll("path");
    if (allPaths.length === 0) {
      svgElement.setAttribute("viewBox", "0 0 100 100");
      return;
    }

    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    allPaths.forEach((path) => {
      const bbox = path.getBBox();
      minX = Math.min(minX, bbox.x);
      minY = Math.min(minY, bbox.y);
      maxX = Math.max(maxX, bbox.x + bbox.width);
      maxY = Math.max(maxY, bbox.y + bbox.height);
    });

    // Add padding
    const padding = 20;
    const width = Math.max(container.scrollWidth, maxX + padding);
    const height = Math.max(container.scrollHeight, maxY + padding);

    svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svgElement.setAttribute("width", width);
    svgElement.setAttribute("height", height);
  }

  function repositionLines() {
    captureElementPositions();
    drawLinesWithSVG();
  }

  // Initial render and event listeners
  renderFlowchart(curriculumData);
  window.addEventListener("resize", repositionLines);
  specificContainer.addEventListener("scroll", repositionLines);
  generalContainer.addEventListener("scroll", repositionLines);
});
