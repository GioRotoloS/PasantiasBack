const Inter = require("../models/inters");

module.exports.getInters = async (req, res) => {
  try {
      const inters = await Inter.find();
      res.json(inters);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}

module.exports.getInter = async (req, res) => {
  const inter = await Inter.findOne({email: req.body.email});

  try {
      if(inter){
          
          res.status(200).json(inter);
        
      } else{
        res.status(404).json("Usuario incorrecto o no existe");
        
      }
  } catch (error) {
      res.status(404).json({message: error.message});
  }
}


module.exports.register = async (req, res) => {

  const interfind = await Inter.findOne({email: req.body.email});
  try {
      if(interfind){
        res.status(404).json("User already exist");
      } else{

        const inter = new Inter({
          name: req.body.name,
          email: req.body.email,
          period: req.body.period,
          inter_type: req.body.inter_type,
          tutor: req.body.tutor,
          advisorys_day: req.body.advisorys_day,
          advisorys_hour: req.body.advisorys_hour
        });

        const insertedinter = await inter.save();
        res.status(201).json(insertedinter);
        
      }
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

module.exports.updateInter = async (req, res) => {
  try {
      const updatedinter = await Inter.updateOne({_id:req.params.id}, {$set: req.body});
      res.status(200).json(updatedinter);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

module.exports.deletedInter = async (req, res) => {
  try {
      const deletedinter = await Inter.deleteOne({_id:req.params.id});
      res.status(200).json(deletedinter);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}