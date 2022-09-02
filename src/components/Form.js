import React, {useState} from "react";

function Form() {
  const [form, setForm] = useState({ name: "", surname: "", gender: "0"});

    const handleChange = (e) => {
        setForm({...form,  [e.target.name]: e.target.value });
    }



    return (
      <div>
        <h2>Form</h2>
        <form>
          <input
            onChange={handleChange}
            value={form.name}
            name="name"
            type="text"
            placeholder="Adınız"
          />
          <input
            onChange={handleChange}
            value={form.surname}
            name="surname"
            type="text"
            placeholder="Soyadınız"
          />
          <button type="submit">Gönder</button>
        </form>
        <br />
        <br />
        <div>
          <div>Cinsiyet</div>
          <select value={form.gender} onChange={handleChange} name="gender">
            <option value="0">Erkek</option>
            <option value="1">Kadın</option>
          </select>
        </div>
        <hr />
        İsim:
        <strong>
          {form.name} {form.surname}
        </strong>
        <br />
        Cinsiyet:
        <strong>{form.gender === "0" ? "Erkek" : "Kadın"}</strong>
      </div>
    );



}
export default Form;