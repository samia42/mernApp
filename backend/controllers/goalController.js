const Goal = require('../models/goalModel')


// Get Goals
// @route GET /api/goals
const getGoals = async(req,res)=>{

    const goals = await Goal.find()
    res.status(200).json(goals)
};

// Set Goals
// @route POST /api/goals
const setGoal = async(req,res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error("Please add text Field")
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
};

// PUT Goals
// @route PUT /api/goals/:id
const updateGoal = async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    
    if(!goal){
        res.status(400)
        throw new Error('goal not found');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedGoal)
};

// DELETE Goals
// @route DELETE /api/goals/:id
const deleteGoal = async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    
    if(!goal){
        res.status(400)
        throw new Error('goal not found');
    }
    await goal.remove()
    res.status(200).json({id : req.params.id})
};

module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}