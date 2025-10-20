const projectData = require("../data/projectData"); 
const sectorData = require("../data/sectorData");

let projects = [];

function initialize() {
    return new Promise((resolve, reject) => {
        try {
            // Process each project and add sector name
            projectData.forEach(project => {
                // Find matching sector
                const sector = sectorData.find(s => s.id === project.sector_id);
                
                // Create project copy with sector property
                const projectWithSector = {
                    ...project,
                    sector: sector ? sector.sector_name : "Unknown"
                };
                
                projects.push(projectWithSector);
            });
            resolve();
        } catch (err) {
            reject(`Initialization failed: ${err.message}`);
        }
    });
}

function getAllProjects() {
    return new Promise((resolve) => {
        resolve(projects);
    });
}

function getProjectById(projectId) {
    return new Promise((resolve, reject) => {
        const project = projects.find(p => p.id === parseInt(projectId, 10));
        if (project) {
            resolve(project);
        } else {
            reject(`Project with ID ${projectId} not found`);
        }
    });
}

function getProjectsBySector(sector) {
    return new Promise((resolve, reject) => {
        const lowerSector = sector.toLowerCase();
        const matchedProjects = projects.filter(p => 
            p.sector.toLowerCase().includes(lowerSector)
        );
        
        if (matchedProjects.length > 0) {
            resolve(matchedProjects);
        } else {
            reject(`No projects found in sector: ${sector}`);
        }
    });
}

module.exports = {
    initialize,
    getAllProjects,
    getProjectById,
    getProjectsBySector
};
