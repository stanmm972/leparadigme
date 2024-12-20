import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import axios from "axios";
import { toast } from "react-toastify";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } =
    useContext(AppContext);
  const daysOfWeek = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];

  const [docInfo, setDocInfo] = useState(false);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [rdvMotif, setrdvMotif] = useState("Select option");
  const navigate = useNavigate();

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSolts = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 30; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 6 || dayOfWeek === 0) {
        continue; // Skip this day
      }

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(15, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(7);
        currentDate.setMinutes(30);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;

        const isSlotAvailable =
          docInfo.slots_booked[slotDate] &&
          docInfo.slots_booked[slotDate].includes(slotTime)
            ? false
            : true;

        if (isSlotAvailable) {
          // Add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warning("Login to book appointment");
      return navigate("/login");
    }

    const date = docSlots[slotIndex][0].datetime;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const slotDate = day + "_" + month + "_" + year;

    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        { docId, slotDate, slotTime, rdvMotif },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getDoctosData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSolts();
    }
  }, [docInfo]);

  return docInfo ? (
    <div>
      {/* ---------- Doctor Details ----------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt=""
          />
        </div>

        <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* ----- Doc Info : name, degree, experience ----- */}

          <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
            {docInfo.name}{" "}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            {/*             <p>
              {docInfo.degree} - {docInfo.speciality}
            </p> */}
            {/*             <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button> */}
          </div>

          {/* ----- Doc About ----- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
              Qui suis-je ?{" "}
              <img className="w-3" src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
            <p>
              <span className="text-red-800 font-bold">
                Comment réserver un soin?
              </span>
            </p>
            <p>
              <span className="text-red-600">Étape 1: </span>Sélectionnez le
              soin que vous désirez dans le menu déroulant.
            </p>
            <p>
              <span className="text-red-600">Étape 2: </span> Choisissez la date
              et l'heure qui vous convient le mieux.
            </p>
            <p>
              <span className="text-red-600">Étape 3: </span> Cliquez sur
              Réservez maintenant pour confirmer votre demande.{" "}
            </p>
            <p>
              <span className="font-extralight">
                N'oubliez que vous pouvez toujours annuler à tout moment, sur
                Mes rendez-vous dans votre profil en haut à droite de l'écran.{" "}
              </span>
            </p>
          </div>

          <p className="text-gray-600 font-medium mt-4">
            Quel soin désirez-vous ?:{" "}
            <span className="text-gray-800">
              <select
                onChange={(e) => setrdvMotif(e.target.value)}
                value={rdvMotif}
                className="border rounded px-2 py-2"
              >
                <option value="Choisir ici votre soin">
                  Choisir votre soin
                </option>
                <option value="Mal d'oreille | Lavage d'oreille">
                  Mal d'oreille | Lavage d'oreille
                </option>
                <option value="Prise de sang | Vaccination | Dépistage ITSS">
                  Prise de sang | Vaccination | Dépistage ITSS
                </option>
                <option value="Traitement de verrues">
                  Traitement de verrues
                </option>
                <option value="Contraception">Contraception</option>
                <option value="Points de suture et pansement">
                  Points de suture et pansement
                </option>
                <option value="Pap test">Pap test</option>
                <option value="Bilan annuel | Bilan sanguin">
                  Bilan annuel | Bilan sanguin
                </option>
                <option value="Renouvellement de prescription">
                  Renouvellement de prescription
                </option>
                <option value="Formulaire de la SAAQ">
                  Formulaire de la SAAQ
                </option>
                <option value="Analyse urinaire">Analyse urinaire</option>
                <option value="Soutien à l'allaitement">
                  Soutien à l'allaitement
                </option>
              </select>
            </span>{" "}
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
        <p>Horaire disponible</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-red-800 text-white"
                    : "border border-[#DDDDDD]"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-red-800 text-white"
                    : "text-[#949494] border border-[#B4B4B4]"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          onClick={bookAppointment}
          className="bg-red-800 text-white text-sm font-light px-20 py-3 rounded-full my-6"
        >
          Réservez maintenant
        </button>
      </div>

      {/* Listing Releated Doctors */}
      {/* <RelatedDoctors speciality={docInfo.speciality} docId={docId} /> */}
    </div>
  ) : null;
};

export default Appointment;
