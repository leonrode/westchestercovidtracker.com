import style from "../styles/dropdown.module.css";

export default function RightDropdownContent({ show, elementClickHandler }) {
  function handle(event) {
    elementClickHandler(event.target.textContent);
  }

  const towns = [
    "Ardsley",
    "Bedford",
    "Briarcliff Manor",
    "Bronxville",
    "Buchanan",
    "Cortlandt",
    "Croton-on-Hudson",
    "Dobbs Ferry",
    "Eastchester",
    "Elmsford",
    "Greenburgh",
    "Harrison",
    "Hastings-on-Hudson",
    "Irvington",
    "Larchmont",
    "Lewisboro",
    "Mamaroneck Town",
    "Mamaroneck Village",
    "Mount Kisco",
    "Mount Pleasant",
    "Mount Vernon",
    "New Castle",
    "New Rochelle",
    "North Castle",
    "North Salem",
    "Ossining Town",
    "Ossining Village",
    "Peekskill",
    "Pelham",
    "Pelham Manor",
    "Pleasantville",
    "Port Chester",
    "Pound Ridge",
    "Rye Brook",
    "Rye City",
    "Scarsdale",
    "Sleepy Hollow",
    "Somers",
    "Tarrytown",
    "Tuckahoe",
    "White Plains",
    "Yonkers",
    "Yorktown",
  ];

  const elements = towns.map((town) => {
    return (
      <div onClick={handle} className={style.dropdownElement} key={town}>
        {town}
      </div>
    );
  });

  return (
    <div
      className={show ? style.rightDropdownShow : style.rightDropdownDefault}
    >
      <div
        className={style.dropdownElement}
        onClick={() => {
          elementClickHandler("None");
        }}
      >
        None
      </div>

      {elements}
    </div>
  );
}
