const Tutor = require("../models/tutors");

module.exports.getTutors = async (req,res) => {
    try {
        const tutors = await Tutor.find();
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

    const tutorfind = await Tutor.findOne({name: req.body.name});
    try {
        if(tutorfind){
          res.status(404).json("Ya existe un tutor con ese nombre");
        } else{
  
          const tutorfind2 = await Tutor.findOne({email: req.body.email});

          if(tutorfind2){
            res.status(404).json("Ya existe un tutor con ese correo");
          } else{
            day1 = req.body.day_1;
          day2 = req.body.day_2;

          if(day1 === day2){
            res.status(404).json("Los dias estan iguales")
          } else{
            const tutor = new Tutor({
                name: req.body.name,
                email: req.body.email,
                period: req.body.period,
                day_1: req.body.day_1,
                hour1_1: req.body.hour1_1,
                hour1_2: req.body.hour1_2,
                hour1_3: req.body.hour1_3,
                hour1_4: req.body.hour1_4,
                hour1_5: req.body.hour1_5,
                hour1_6: req.body.hour1_6,
                hour1_7: req.body.hour1_7,
                hour1_8: req.body.hour1_8,
                hour1_9: req.body.hour1_9,
                hour1_10: req.body.hour1_10,
                day_2: req.body.day_2,
                hour2_1: req.body.hour2_1,
                hour2_2: req.body.hour2_2,
                hour2_3: req.body.hour2_3,
                hour2_4: req.body.hour2_4,
                hour2_5: req.body.hour2_5,
                hour2_6: req.body.hour2_6,
                hour2_7: req.body.hour2_7,
                hour2_8: req.body.hour2_8,
                hour2_9: req.body.hour2_9,
                hour2_10: req.body.hour2_10,
                });
      
              const insertedtutor = await tutor.save();
              res.status(201).json(insertedtutor);
            }
          }
          
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
        const updatedtutor = await Tutor.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedtutor);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}