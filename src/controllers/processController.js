const Process = require('../models/Process');

// Get all processes (sorted by stepNumber)
exports.getProcesses = async (req, res) => {
    try {
        const processes = await Process.find().sort({ stepNumber: 1 });
        res.status(200).json(processes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new process
exports.createProcess = async (req, res) => {
    try {
        const process = new Process(req.body);
        const savedProcess = await process.save();
        res.status(201).json(savedProcess);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a process
exports.updateProcess = async (req, res) => {
    try {
        const updatedProcess = await Process.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProcess) return res.status(404).json({ message: 'Process not found' });
        res.status(200).json(updatedProcess);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a process
exports.deleteProcess = async (req, res) => {
    try {
        const deletedProcess = await Process.findByIdAndDelete(req.params.id);
        if (!deletedProcess) return res.status(404).json({ message: 'Process not found' });
        res.status(200).json({ message: 'Process deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
