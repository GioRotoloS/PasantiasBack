const Inter = require("../models/inters");
const Tutor = require("../models/tutors");

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
        res.status(404).json("Este correo ya fue asignado a un pasante");
      } else{

        const tutor = await Tutor.findOne({name: req.body.tutor})

        if(tutor){
          const periodo = tutor.period

          if(periodo === req.body.period){
            const day1 = tutor.day_1;
            const day2 = tutor.day_2;

            if(day1 === req.body.advisorys_day){
                const hour1 = tutor.hour2_1;
                const hour2 = tutor.hour2_2;
                const hour3 = tutor.hour2_3;
                const hour4 = tutor.hour2_4;
                const hour5 = tutor.hour2_5;
                const hour6 = tutor.hour2_6;
                const hour7 = tutor.hour2_7;
                const hour8 = tutor.hour2_8;
                const hour9 = tutor.hour2_9;
                const hour10 = tutor.hour2_10;

                if(hour1 === req.body.advisorys_hour){
                  const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                  if(otherinter){
                    res.status(404).json("Esta hora ya esta ocupada");
                  } else {
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

              }else if(hour2 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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

              } else if(hour3 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour4 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour5 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour6 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour7 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour8 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour9 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour10 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else{
                res.status(404).json("El tutor seleccionado no tiene horario para ese dia en la hora seleccionada");
              }
            } else if(day2 === req.body.advisorys_day){
              const hour1 = tutor.hour1_1;
                const hour2 = tutor.hour1_2;
                const hour3 = tutor.hour1_3;
                const hour4 = tutor.hour1_4;
                const hour5 = tutor.hour1_5;
                const hour6 = tutor.hour1_6;
                const hour7 = tutor.hour1_7;
                const hour8 = tutor.hour1_8;
                const hour9 = tutor.hour1_9;
                const hour10 = tutor.hour1_10;

                if(hour1 === req.body.advisorys_hour){
                  const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                  if(otherinter){
                    res.status(404).json("Esta hora ya esta ocupada");
                  } else {
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

              }else if(hour2 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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

              } else if(hour3 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour4 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour5 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour6 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour7 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour8 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour9 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else if(hour10 === req.body.advisorys_hour){

                const otherinter = await Inter.findOne({tutor: req.body.tutor, advisorys_hour: req.body.advisorys_hour})

                if(otherinter){
                  res.status(404).json("Esta hora ya esta ocupada");
                } else {
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
                
              } else{
                res.status(404).json("El tutor seleccionado no tiene horario para ese dia en la hora seleccionada");
              }
            } else{
              res.status(404).json("El tutor seleccionado no tiene horario para este dia");
            }
          } else{
            res.status(404).json("El tutor seleccionado no tiene horario para ese periodo");
          }
        } else{
          res.status(404).json("Este tutor no existe");
        }
        
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