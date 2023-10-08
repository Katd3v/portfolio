import React from "react";
import moment from "moment";

const LearnDuration = ({ startDate }) => {
  // utilise moment pour la gestion des dates
  const currentDate = moment();
  const startDateTime = moment(startDate);

  // calcul de la différence entre les dates
  const duration = moment.duration(currentDate.diff(startDateTime));

  // récupère en année, mois et jours
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();

  return (
    <div>
      <p className="text-center">Temps de pratique :</p>
      <p className="text-center font-bold">
        {" "}
        {years > 0 && years < 2 ? (
          <span> {years} an</span>
        ) : (
          years > 0 && <span> {years} ans</span>
        )}
        {months > 0 && <span> {months} mois</span>}
        {days > 0 && days < 2 ? (
          <span> {days} jour</span>
        ) : (
          days > 1 && <span> {days} jours</span>
        )}
      </p>
    </div>
  );
};

export default LearnDuration;
