import PriceOption from "../PriceOption/PriceOption";


const Price = () => {
   const priceOption = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Basic weightlifting area",
              "Group fitness classes"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Full access to all gym facilities",
              "Personalized workout plans",
              "Sauna and spa facilities"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": 79.99,
            "features": [
              "Access for all family members",
              "Discounts on group fitness classes",
              "Childcare services"
            ]
          },
          {
            "id": 4,
            "name": "Student Membership",
            "price": 24.99,
            "features": [
              "Valid student ID required",
              "Access to gym during off-peak hours",
              "Discounts on personal training sessions"
            ]
          }
        ]
      
      
    return (
        <div>
            <h2 className="text-5xl">best price in the town </h2>
            {
                priceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default Price;