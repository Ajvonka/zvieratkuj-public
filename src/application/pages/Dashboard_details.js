import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "../../application/App.css";
import "../../styles/Details-page/DetailsPage.css";
import Avatar from "../images/dog-avatar.png";
import moment from "moment";

function Dashboard_details() {
  const { id } = useParams();
  const pets = useSelector((state) => state.pet);

  const pet = pets
    .filter((item) => item.id == id)
    .map(
      ({
        name,
        dateOfBirth,
        gender,
        origin,
        pils,
        canineDistemper,
        hepa,
        parvo,
        lepto,
        rabies,
        deworming,
        deseasesId,
      }) => ({
        name,
        dateOfBirth,
        gender,
        origin,
        pils,
        canineDistemper,
        hepa,
        parvo,
        lepto,
        rabies,
        deworming,
        deseasesId,
      })
    );

  const vaccinationList = [
    {
      name: "Canine distemper: ",
      date: pet.map((n) => n.canineDistemper),
    },
    {
      name: "Hepatitis: ",
      date: pet.map((n) => n.hepa),
    },
    {
      name: "Parvovirose: ",
      date: pet.map((n) => n.parvo),
    },
    {
      name: "Leptospirosis: ",
      date: pet.map((n) => n.lepto),
    },
    {
      name: "Rabies: ",
      date: pet.map((n) => n.rabies),
    },
    {
      name: "Deworming: ",
      date: pet.map((n) => n.deworming),
    },
  ];

  const medications = pet.map((item) => item.pils).toString() !== "";
  const deseases = pet.map((item) => item.deseasesId).toString() !== "";

  return (
    <>
      <div className="details-title">
        <h1
          style={{
            fontSize: "40px",
            color: "#34495e",
          }}
        >
          Details page: {pet.map((n) => n.name)}
        </h1>
      </div>

      <div className="details-info">
        <section className="details-info-section">
          <div className="section-title">
            <h1>{pet.map((n) => n.name)}</h1> {medications}
            {deseases}
          </div>
          <img id="dogAvatar" src={Avatar} alt="Dog Avatar"></img>
          <div className="info">
            <p style={{ fontSize: "20px" }}>
              <b>Date of birth:</b> {pet.map((n) => n.dateOfBirth)}
            </p>
            <p style={{ fontSize: "20px" }}>
              <b>Gender:</b> {pet.map((n) => n.gender)}
            </p>
            <p style={{ fontSize: "20px" }}>
              <b>Origin:</b> {pet.map((n) => n.origin)}
            </p>
          </div>
        </section>

        <div className="details-data">
          <div className="deseases-medication-section">
            <section className="deseases-medication-section-inner">
              <div className="details-content">
                <div className="section-title">
                  <h2>Deseases</h2>
                </div>
                <div id="details-content">
                  {deseases ? (
                    pet.map((n) => (
                      <div
                        className="dm-field"
                        style={{
                          backgroundColor: "#87A3B2",
                        }}
                      >
                        <p>{n.deseasesId}</p>
                      </div>
                    ))
                  ) : (
                    <div
                      className="dm-field"
                      style={{
                        backgroundColor: "#87A3B2",
                      }}
                    >
                      <p>None</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
            <section className="deseases-medication-section-inner">
              <div className="details-content">
                <div className="section-title">
                  <h2>Current Medications</h2>
                </div>
                <div id="details-content">
                  {medications ? (
                    pet.map((n) => (
                      <div
                        className="dm-field"
                        style={{
                          backgroundColor: "#87A3B2",
                        }}
                      >
                        <p>{n.pils}</p>
                      </div>
                    ))
                  ) : (
                    <div
                      className="dm-field"
                      style={{
                        backgroundColor: "#87A3B2",
                      }}
                    >
                      <p>None</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          <section className="vaccinations-section">
            <div className="details-content">
              <div className="section-title">
                <h2>Last vaccinations</h2>
              </div>
              <div id="vaccinations">
                {vaccinationList
                  .sort(
                    (a, b) =>
                      moment(a.date, "MM-DD-YYYY") -
                      moment(b.date, "MM-DD-YYYY")
                  )
                  .map((n) => (
                    <div className="vaccinations-field">
                      <p>
                        {n.name} {n.date}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard_details;
