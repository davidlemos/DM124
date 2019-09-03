const Delivery = require ('../models/delivery');
const notFound = require ('../middleware/not-found');

class DeliveryController {
  async store (req, res){
    const delivery =  await Delivery.create( req.body );
    return res.json(delivery);
  }

  async show (req, res){
    const deliveries =  await Delivery.find();
    deliveries 
      ? res.json(deliveries)
      : notFound(req, res);
  }

  async showById (req, res){
    var delivery;

    try{
      delivery =  await Delivery.findById(req.params.id);
    }
    catch (err){
      notFound(req, res);
    }

    delivery 
      ? res.json(delivery)
      : notFound(req, res);
  }


  async update (req, res){
    await Delivery.updateOne({_id: req.params.id}, req.body, function (err, delivery){
      delivery.nModified 
      ? res.json(delivery)
      : notFound(req, res); 
    });
  }
}

module.exports = new DeliveryController();