import uuid
from uuid import UUID
import json

class UUIDEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, UUID):
            # if the obj is uuid, we simply return the value of uuid
            return obj.hex
        return json.JSONEncoder.default(self, obj)

items = [
    {"title":"Leche de vaca entera, 1 galón","price":4.23,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Fairlife Leche entera, 52 onzas","price":3.11,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Nestle Nesquik Leche chocolatada baja en grasa, 16 pecks","price":11.54,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Moo-Moo Leche desnatada con ingredientes seleccionados, 1 cuarto","price":0.92,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Moo-Moo Leche desnatada con ingredientes seleccionados Moo-Moo, 1 galón","price":2.30,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Silk Leche de coco sin azúcar, 1/2 galón","price":2.99,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Fairlife Leche desnatada, 52 onzas","price":3.13,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Horizon Organic Leche chocolatada baja en grasa enriquecida con omega-3 DHA, 12 pecks","price":11.94,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Yoo-hoo Bebida de chocolate, 3 pecks","price":1,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Moo-Moo Leche con ingredientes seleccionados reducida al 2% en grasa, 1/2 galón","price":1.33,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Borden Leche Entera, 1 galón","price":3.53,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Caravelle Chaudoc Leche de Coco, 14 onzas","price":1.96,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Horizon Organic Leche Entera, 1/2 galón","price":3.88,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Nesquik Leche baja en grasa con sabor a fresa, 8 onzas","price":0.92,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Nesquik Leche baja en grasa con sabor a vainilla, 14 onzas","price":1.34,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Moo-Moo Leche con ingredientes seleccionados 1% baja en grasa, 1 galón","price":2.24,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Polar Premium Leche de coco orgánica, 13.5 onzas","price":2.94,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Borden Leche chocolatada holandesa, 1 pinta","price":1.56,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Borden Leche chocolatada holandesa, 1/2 galón","price":2.70,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Saco Leche desnatada instantánea orgánica, 3.2 onzas","price":2.48,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Hill Country Fare Leche reducida en grasa al 2%, 1 galón","price":2.32,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Horizon Organic Leche de vainilla baja en grasa enriquecida con omega-3 DHA, 6 pecks","price":6.36,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Horizon Organic Leche reducida en grasa al 2% enriquecida con omega-3 DHA, 1/2 galón","price":4.34,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Moo-Moo Leche chocolatada, 1/2 galón","price":2.70,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"A Taste of Thai Leche de coco Lite, 13.5 onzas","price":2.29,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Meyenberg Leche de cabra, 1/2 galón","price":7.80,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
{"title":"Kerrygold Mantequilla irlandesa con aceite de canola, 7.5 onzas","price":2.80,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
{"title":"Danish Creamery Mantequilla sin sal, estilo europeo, 8 onzas","price":2.97,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
{"title":"Kelapo Ghee Mantequilla clarificada, 13 onzas","price":8.82,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
{"title":"Land O Lakes Mantequilla baja en sodio con aceite de canola, 15 onzas","price":3.87,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
{"title":"California Farms Leche orgánica endulzada condensada, 14 onzas","price":3.49,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
{"title":"Lactaid Leche entera, 96 onzas","price":5.47,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
]

pos = []

for item in items:
    item_pos = {
        "_id": uuid.uuid4(),
        "title": item["title"],
        "image": item["link"],
        "price": item["price"],
        "is_new": False,
        }
    pos.append(item_pos)

my_json = json.dumps(pos, cls=UUIDEncoder)
print(my_json)