const Tutor = require("../models/tutors");

module.exports.getTutors = async (req,res) => {
    try {
        const tutors = await Tutor.find();

        const mostratTutors = {
            name: tutors.name,
            correo: tutors.email
        }
        res.json(tutors);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getTutor = async (req,res) => {
    try {
        const tutor = await Tutor.findOne({email: req.body.email});
        return res.status(200).json(tutor);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports.addTutor = async (req,res) => {

    const tutorfind = await Tutor.findOne({email: req.body.email});
    try {
        if(tutorfind){
          res.status(404).json("User already exist");
        } else{
  
          const tutor = new Tutor({
            name: req.body.name,
            email: req.body.email,
            period: req.body.period,
            day_1: req.body.day_1,
            hour1: req.body.hour1,
            day_2: req.body.day_2,
            hour2: req.body.hour2
          });
  
          const insertedtutor = await tutor.save();
          res.status(201).json(insertedtutor);
          
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports.deleteTutor = async (req,res) => {

    try {
        const deletedtutor = await Tutor.deleteOne({email: req.body.email});
        res.status(200).json(deletedtutor);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

module.exports.updateTutor = async (req, res) => {
    try {
        const updatedtutor = await Tutor.updateOne({cid:req.params.id}, {$set: req.body});
        res.status(200).json(updatedtutor);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}