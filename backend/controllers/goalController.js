// Get Goals
// @route GET /api/goals
const getGoals = (req,res)=>{
    res.status(200).json({message:"its goals"})
};

// Set Goals
// @route POST /api/goals
const setGoal = (req,res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error("Please add text Field")
    }

    res.status(200).json({message:"set goals"})
};

// PUT Goals
// @route PUT /api/goals/:id
const updateGoal = (req,res)=>{
    res.status(200).json({message:`update goal with id ${req.params.id}`})
};

// DELETE Goals
// @route DELETE /api/goals/:id
const deleteGoal = (req,res)=>{
    res.status(200).json({message:`delete goal with id ${req.params.id}`})
};

module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}