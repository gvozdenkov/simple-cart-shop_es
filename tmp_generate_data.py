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
    {"title":"Dairy Pure Whole Milk, 1 gal","price":4.23,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Fairlife Whole Milk, 52 oz","price":3.11,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Nestle Nesquik Chocolate Lowfat Milk, 16 pk","price":11.54,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Moo-Moo Select Ingredients Fat Free Milk, 1 qt","price":0.92,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Moo-Moo Select Ingredients Fat Free Milk, 1 gal","price":2.30,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Silk Unsweetened Coconut Milk, 1/2 gal","price":2.99,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Fairlife Fat Free Milk, 52 oz","price":3.13,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Horizon Organic DHA Omega-3 Chocolate Lowfat Milk, 12 pk","price":11.94,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Yoo-hoo Chocolate Drink, 3 pk","price":1,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Moo-Moo Select Ingredients Reduced Fat 2% Milk, 1/2 gal","price":1.33,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Borden Whole Milk, 1 gal","price":3.53,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Caravelle Chaudoc Coconut Milk, 14 oz","price":1.96,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Horizon Organic Whole Milk, 1/2 gal","price":3.88,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Nesquik Strawberry Lowfat Milk, 8 oz","price":0.92,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Nesquik Vanilla Lowfat Milk, 14 oz","price":1.34,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Moo-Moo Select Ingredients Low Fat 1% Milk, 1 gal","price":2.24,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Polar Premium Organic Coconut Milk, 13.5 oz","price":2.94,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Borden Dutch Chocolate Milk, 1 pt","price":1.56,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Borden Dutch Chocolate Milk, 1/2 gal","price":2.70,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Saco Fat-Free Instant Organic Milk, 3.2 oz","price":2.48,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Hill Country Fare Reduced Fat 2% Milk, 1 gal","price":2.32,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Horizon Organic DHA Omega-3 Vanilla Lowfat Milk, 6 pk","price":6.36,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Horizon Organic DHA Omega-3 2% Reduced Fat Milk, 1/2 gal","price":4.34,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Moo-Moo Chocolate Milk, 1/2 gal","price":2.70,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"A Taste of Thai Lite Coconut Milk, 13.5 oz","price":2.29,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Meyenberg Goat Milk, 1/2 gal","price":7.80,"link":"https://store.data-analyst.practicum-services.com/images/tild3564-6334-4930-b639-323763376263__HTB1NWeENVXXXXa4XpXX.jpg"},
    {"title":"Kerrygold Irish Butter with Canola Oil, 7.5 oz","price":2.80,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
    {"title":"Danish Creamery Unsalted European Style Butter, 8 oz","price":2.97,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
    {"title":"Kelapo Ghee Clarified Butter, 13 oz","price":8.82,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
    {"title":"Land O Lakes Less Sodium Butter with Canola Oil, 15 oz","price":3.87,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
    {"title":"California Farms Organic Sweetened Condensed Milk, 14 oz","price":3.49,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
    {"title":"Lactaid Whole Milk, 96 oz","price":5.47,"link":"https://i5.walmartimages.com/asr/1342d1f0-34b9-44b2-a6d0-d07930c45562.ec0222cd3a81a5bfb32678158bfc037a.png"},
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