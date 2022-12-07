import React from "react";
import "../styles/AddCargoForm.css";
import { useState, useRef, useEffect } from "react";

export default function AddCargoForm(props) {
  const [startCity, setStartCity] = useState("Adana");
  const [startCountie, setStartCountie] = useState(false);
  const [startNeighbourhood, setStartNeighbourhood] = useState(false);
  const [startStreet, setStartStreet] = useState(false);
  const [startNo, setStartNo] = useState(false);

  const [endCity, setEndCity] = useState("Adana");
  const [endCountie, setEndCountie] = useState(false);
  const [endNeighbourhood, setEndNeighbourhood] = useState(false);
  const [endStreet, setEndStreet] = useState(false);
  const [endNo, setEndNo] = useState(false);

  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [distance, setDistance] = useState(false);
  const [vehicleType, setVehicleType] = useState(false);
  const [trailerType, setTrailerType] = useState(false);
  const [weight, setWeight] = useState(false);
  const [width, setWidth] = useState(false);
  const [lenght, setLenght] = useState(false);
  const [height, setHeight] = useState(false);
  const [cargoType, setCargoType] = useState(false);
  const [price, setPrice] = useState(false);
  const [paymentType, setPaymentType] = useState(false);
  const [startPointId, setStartPointId] = useState(false);
  const [endPointId, setEndPointId] = useState(false);
  const firstUpdate = useRef(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setStartCity(props.add === true ? "Adana" : props.cargo.startCity);
    setStartCountie(props.add === true ? false : props.cargo.startCountie);
    setStartNeighbourhood(
      props.add === true ? false : props.cargo.startNeighbourhood
    );
    setStartStreet(props.add === true ? false : props.cargo.startStreet);
    setStartNo(props.add === true ? false : props.cargo.startNo);

    setEndCity(props.add === true ? "Adana" : props.cargo.endCity);
    setEndCountie(props.add === true ? false : props.cargo.endCountie);
    setEndNeighbourhood(
      props.add === true ? false : props.cargo.endNeighbourhood
    );
    setEndStreet(props.add === true ? false : props.cargo.endStreet);
    setEndNo(props.add === true ? false : props.cargo.endNo);

    setStartDate(props.add === true ? false : props.cargo.startDate);
    setEndDate(props.add === true ? false : props.cargo.endDate);
    setDistance(props.add === true ? false : props.cargo.distance);
    setVehicleType(props.add === true ? false : props.cargo.vehicleType);
    setTrailerType(props.add === true ? false : props.cargo.trailerType);
    setWeight(props.add === true ? false : props.cargo.weight);
    setWidth(props.add === true ? false : props.cargo.widht);
    setLenght(props.add === true ? false : props.cargo.lenght);
    setHeight(props.add === true ? false : props.cargo.height);
    setCargoType(props.add === true ? false : props.cargo.cargoType);
    setPrice(props.add === true ? false : props.cargo.price);
    setPaymentType(props.add === true ? false : props.cargo.paymentType);
  }, []);

  function Insert() {
    InsertStartPoint();
    InsertEndPoint();
  }
  function Update(){
    UpdateStartPoint();
    UpdateEndPoint();
  }
  function UpdateStartPoint(){
    fetch("http://localhost:3000/point/".concat(props.cargo.startPointId), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: startCity,
        countie: startCountie,
        Neighbourhood: startNeighbourhood,
        street: startStreet,
        no: startNo,
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then(() => {
        setStartPointId(props.cargo.startPointId);
      })
      .catch((err) => console.log(err));
  }
  function UpdateEndPoint(){
    fetch("http://localhost:3000/point/".concat(props.cargo.endPointId), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: endCity,
        countie: endCountie,
        Neighbourhood: endNeighbourhood,
        street: endStreet,
        no: endNo,
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then(() => {
        setEndPointId(props.cargo.endPointId);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    console.log(firstUpdate.current)
    if (firstUpdate.current < 2) {
      firstUpdate.current = firstUpdate.current + 1;
      return;
    }
    else if(props.add !== true){
      fetch("http://localhost:3000/cargo/".concat(props.cargo.cargoId), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employerId: props.user.id,
        startPointId: startPointId,
        endPointId: endPointId,
        startDate: startDate,
        endDate: endDate,
        vehicleType: vehicleType,
        trailerType: trailerType,
        tonnage: weight,
        volume: width * lenght * height,
        cargoType: cargoType,
        paymentType: paymentType,
        price: price,
        distance: distance,
        width: width,
        lenght: lenght,
        height: height,
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setAlert(true);
      })
      .catch((err) => console.log(err));
    }
    else{
      fetch("http://localhost:3000/cargo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employerId: props.user.id,
          startPointId: startPointId,
          endPointId: endPointId,
          startDate: startDate,
          endDate: endDate,
          vehicleType: vehicleType,
          trailerType: trailerType,
          tonnage: weight,
          volume: width * lenght * height,
          cargoType: cargoType,
          paymentType: paymentType,
          price: price,
          distance: distance,
          width: width,
          lenght: lenght,
          height: height,
        }),
      })
        .then((res) => {
          if (res.ok && res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          setAlert(true);
        })
        .catch((err) => console.log(err));
    }
    
  }, [endPointId]);
  function InsertEndPoint() {
    fetch("http://localhost:3000/point/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: endCity,
        countie: endCountie,
        Neighbourhood: endNeighbourhood,
        street: endStreet,
        no: endNo,
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setEndPointId(data.insertId);
      })
      .catch((err) => console.log(err));
  }
  function InsertStartPoint() {
    fetch("http://localhost:3000/point/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: startCity,
        countie: startCountie,
        Neighbourhood: startNeighbourhood,
        street: startStreet,
        no: startNo,
      }),
    })
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setStartPointId(data.insertId);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="form-style-5">
      {alert === true ? (
        <div className="alertOk">
          <span
            className="closebtn"
            onClick={() => {
              setAlert(false);
            }}
          >
            ×
          </span>
          {props.add === true ? "BAŞARIYLA EKLENDİ." : "BAŞARIYLA GÜNCELLENDİ."}
          
        </div>
      ) : null}
      <form>
        <fieldset>
          <legend>
            <span
              className={
                props.add === true ? "add-color number" : "update-color number"
              }
            >
              1
            </span>
            Yükleme Noktası Adresi
          </legend>
          <label htmlFor="start_city">Şehir:</label>
          <select
            id="start_city"
            defaultValue={props.add === true ? "Adana" : props.cargo.startCity}
            name="startc"
            onChange={(event) => setStartCity(event.target.value)}
          >
            <optgroup label="Yükleme Şehiri">
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyon">Afyon</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Amasya">Amasya</option>
              <option value="Ankara">Ankara</option>
              <option value="Antalya">Antalya</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkari">Hakkari</option>
              <option value="Hatay">Hatay</option>
              <option value="Isparta">Isparta</option>
              <option value="İçel (Mersin)">İçel (Mersin)</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Mardin">Mardin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Karaman">Karaman</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Batman">Batman</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Bartın">Bartın</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Yalova">Yalova</option>
              <option value="Karabük">Karabük</option>
              <option value="Kilis">Kilis</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Düzce">Düzce</option>
            </optgroup>
          </select>
          <label htmlFor="start_countie">İlçe:</label>
          <input
            type="text"
            defaultValue={props.cargo.startCountie}
            name="field1"
            onChange={(event) => setStartCountie(event.target.value)}
          />
          <label htmlFor="start_neighbourhood">Mahalle:</label>
          <input
            type="text"
            defaultValue={props.cargo.startNeighbourhood}
            name="field1"
            onChange={(event) => setStartNeighbourhood(event.target.value)}
          />
          <label htmlFor="start_street">Cadde:</label>
          <input
            type="text"
            defaultValue={props.cargo.startStreet}
            name="field1"
            onChange={(event) => setStartStreet(event.target.value)}
          />
          <label htmlFor="start_no">No:</label>
          <input
            type="text"
            defaultValue={props.cargo.startNo}
            name="field1"
            onChange={(event) => setStartNo(event.target.value)}
          />
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend>
            <span
              className={
                props.add === true ? "add-color number" : "update-color number"
              }
            >
              2
            </span>
            İndirme Noktası Adresi
          </legend>
          <label htmlFor="end_city">İndirme Noktası:</label>
          <select
            id="end_city"
            defaultValue={props.add === true ? "Adana" : props.cargo.endCity}
            name="endc"
            onChange={(event) => setEndCity(event.target.value)}
          >
            <optgroup label="İndirme Şehiri">
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyon">Afyon</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Amasya">Amasya</option>
              <option value="Ankara">Ankara</option>
              <option value="Antalya">Antalya</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkari">Hakkari</option>
              <option value="Hatay">Hatay</option>
              <option value="Isparta">Isparta</option>
              <option value="İçel (Mersin)">İçel (Mersin)</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Mardin">Mardin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Karaman">Karaman</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Batman">Batman</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Bartın">Bartın</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Yalova">Yalova</option>
              <option value="Karabük">Karabük</option>
              <option value="Kilis">Kilis</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Düzce">Düzce</option>
            </optgroup>
          </select>
          <label htmlFor="end_countie">İlçe:</label>
          <input
            type="text"
            defaultValue={props.cargo.endCountie}
            name="field1"
            onChange={(event) => setEndCountie(event.target.value)}
          />
          <label htmlFor="end_neighbourhood">Mahalle:</label>
          <input
            type="text"
            defaultValue={props.cargo.endNeighbourhood}
            name="field1"
            onChange={(event) => setEndNeighbourhood(event.target.value)}
          />
          <label htmlFor="end_street">Cadde:</label>
          <input
            type="text"
            defaultValue={props.cargo.endStreet}
            name="field1"
            onChange={(event) => setEndStreet(event.target.value)}
          />
          <label htmlFor="end_no">No:</label>
          <input
            type="text"
            defaultValue={props.cargo.endNo}
            name="field1"
            onChange={(event) => setEndNo(event.target.value)}
          />
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend>
            <span
              className={
                props.add === true ? "add-color number" : "update-color number"
              }
            >
              3
            </span>{" "}
            Tarih
          </legend>
          <label htmlFor="end_date">Yükleme Tarihi:</label>
          <input
            type="date"
            defaultValue={props.cargo.endDate}
            name="field1"
            onChange={(event) => setStartDate(event.target.value)}
          />
          <label htmlFor="end_date">İndirme Tarihi:</label>
          <input
            type="date"
            defaultValue={props.cargo.endDate}
            name="field2"
            onChange={(event) => setEndDate(event.target.value)}
          />
          <legend>
            <span
              className={
                props.add === true ? "add-color number" : "update-color number"
              }
            >
              4
            </span>{" "}
            Yük
          </legend>
          <label htmlFor="weight">Ağırlık (KG):</label>
          <input
            type="number"
            defaultValue={props.cargo.tonnage}
            name="field6"
            onChange={(event) => setWeight(event.target.value)}
          />
          <label htmlFor="volume">Boyut (cm):</label>
          <div style={{ display: "flex" }}>
            <input
              type="number"
              defaultValue={props.cargo.width}
              min="1"
              name="field7"
              placeholder="En (cm)"
              onChange={(event) => setWidth(event.target.value)}
            />
            <input
              type="number"
              defaultValue={props.cargo.lenght}
              min="1"
              name="field8"
              placeholder="Boy (cm)"
              onChange={(event) => setLenght(event.target.value)}
            />
            <input
              type="number"
              defaultValue={props.cargo.height}
              min="1"
              name="field9"
              placeholder="Yükseklik (cm)"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <label htmlFor="cargo_type">Kargo Tipi:</label>
          <input
            type="text"
            defaultValue={props.cargo.cargoType}
            name="field10"
            onChange={(event) => setCargoType(event.target.value)}
          />
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend>
            <span
              className={
                props.add === true ? "add-color number" : "update-color number"
              }
            >
              5
            </span>{" "}
            Diğer
          </legend>
          <label htmlFor="price">FİYAT (TL):</label>
          <input
            type="number"
            defaultValue={props.cargo.price}
            name="field3"
            onChange={(event) => setPrice(event.target.value)}
          />
          <label htmlFor="distance">Mesafe (KM):</label>
          <input
            type="number"
            defaultValue={props.cargo.distance}
            name="field3"
            onChange={(event) => setDistance(event.target.value)}
          />
          <label htmlFor="vehicle_type">Araç Tipi:</label>
          <input
            type="text"
            defaultValue={props.cargo.vehicleType}
            name="field4"
            onChange={(event) => setVehicleType(event.target.value)}
          />
          <label htmlFor="trailer_type">Dorse Tipi:</label>
          <input
            type="text"
            defaultValue={props.cargo.trailerType}
            name="field5"
            onChange={(event) => setTrailerType(event.target.value)}
          />

          <label htmlFor="payment_type">Ödeme Tipi:</label>
          <input
            type="text"
            defaultValue={props.cargo.paymentType}
            name="field11"
            onChange={(event) => setPaymentType(event.target.value)}
          />
          <input
            type="button"
            value={props.add === true ? "EKLE" : "GÜNCELLE"}
            className={props.add === true ? "add-color" : "update-color"}
            onClick={props.add === true ? Insert : Update}
          />
          <input type="button" value="İPTAL ET" className="cancelled-color" />
        </fieldset>
      </form>
    </div>
  );
}
