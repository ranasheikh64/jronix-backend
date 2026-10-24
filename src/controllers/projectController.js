const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
const getProjects = async (req, res) => {
    try {
        // Optional: Filter by category (e.g., ?category=App)
        const filter = req.query.category && req.query.category !== 'All' 
            ? { category: req.query.category } 
            : {};
            
        const projects = await Project.find(filter);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single project details
// @route   GET /api/projects/:id
const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a project
// @route   POST /api/projects
const createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        const createdProject = await project.save();
        res.status(201).json(createdProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
const updateProject = async (req, res) => {
    console.log("=== UPDATE PROJECT INITIATED ===");
    console.log("Project ID:", req.params.id);
    console.log("Incoming req.body:", JSON.stringify(req.body, null, 2));
    try {
        const project = await Project.findById(req.params.id);
        
        if (project) {
            console.log("Found existing project:", project.title);
            project.category = req.body.category !== undefined ? req.body.category : project.category;
            project.typeBadge = req.body.typeBadge !== undefined ? req.body.typeBadge : project.typeBadge;
            project.isFeatured = req.body.isFeatured !== undefined ? req.body.isFeatured : project.isFeatured;
            project.image = req.body.image !== undefined ? req.body.image : project.image;
            project.gallery = req.body.gallery !== undefined ? req.body.gallery : project.gallery;
            project.title = req.body.title !== undefined ? req.body.title : project.title;
            project.description = req.body.description !== undefined ? req.body.description : project.description;
            project.stats = req.body.stats !== undefined ? req.body.stats : project.stats;
            project.techStack = req.body.techStack !== undefined ? req.body.techStack : project.techStack;
            project.link = req.body.link !== undefined ? req.body.link : project.link;
            project.appStoreLink = req.body.appStoreLink !== undefined ? req.body.appStoreLink : project.appStoreLink;
            
            const updatedProject = await project.save();
            console.log("=== UPDATE SUCCESSFUL ===");
            console.log("Saved Project Gallery:", updatedProject.gallery);
            res.status(200).json(updatedProject);
        } else {
            console.log("=== UPDATE FAILED: PROJECT NOT FOUND ===");
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        console.log("=== UPDATE ERROR ===", error.message);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        
        if (project) {
            await Project.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: 'Project removed' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };
