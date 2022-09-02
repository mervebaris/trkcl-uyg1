import React, {useState} from "react";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [gender, setGender] = useState("0");


    return (
      <div>
        <h2>Form</h2>
        <form>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Adınız"
          />
          <input
            onChange={(e) => setSurName(e.target.value)}
            type="text"
            placeholder="Soyadınız"
          />
          <button type="submit">Gönder</button>
        </form>
        <br />
        <br />
        <div>
          <div>Cinsiyet</div>
          <select value={gender} onChange={(e ) => setGender(e.target.value)}>
            <option value="0">Erkek</option>
            <option value="1">Kadın</option>
          </select>
        </div>
        <hr />
        İsim:
        <strong>
          {name} {surname}
        </strong>
        <br />
        Cinsiyet:
        <strong>
            {gender === "0" ? "Erkek" : "Kadın"}
        </strong>
      </div>
    );



}
export default Form;