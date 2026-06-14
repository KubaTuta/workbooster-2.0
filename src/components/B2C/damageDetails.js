import { Details } from "./styled";

function DamageDetails({ car }) {
  return (
    car.damages.length > 0 ? (
    <Details>
      {car.damages.map((property, index) => (
        <div key={index}>
          {property.damageCost} PLN ----- {property.damageType} ----- {property.damageDate.trim()}
        </div>
      ))}
    </Details>
  ) : (
    <Details>Brak zarejestrowanych szkód</Details>
  )
  )
}

export default DamageDetails;
