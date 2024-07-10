const Questions = require("../models/questionSchema");
const Results = require("../models/resultSchema");
const { questions, answers } = require('../config/data');

/** Get all questions */
async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Insert all questions */
async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Delete all questions */
async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Get all results */
async function getResults(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Post a result */
async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
            throw new Error('Username and Result are required fields.');
        }

        const newResult = new Results({ username, result, attempts, points, achieved });
        await newResult.save();
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Delete all results */
async function dropResults(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Results Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getQuestions,
    insertQuestions,
    dropQuestions,
    getResults,
    storeResult,
    dropResults,
};
