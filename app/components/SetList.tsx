import Image from "next/image";
import paper from "../../public/paper.png";

export default function SetList() {
  const songs = [
    {
      id: 0,
      title: "Select a song",
      value: "selectASong",
    },
    {
      id: 1,
      title: "Cowboy Milk",
      value: "cowboyMilk",
    },
    {
      id: 2,
      title: "Reaper",
      value: "reaper",
    },
    {
      id: 3,
      title: "Gloom",
      value: "gloom",
    },
    {
      id: 4,
      title: "Take It Slow",
      value: "takeItSlow",
    },
    {
      id: 5,
      title: "Silver",
      value: "silver",
    },
    {
      id: 6,
      title: "Oak",
      value: "oak",
    },
    {
      id: 7,
      title: "Pawn Shop Jewels",
      value: "pawnShopJewels",
    },
    {
      id: 8,
      title: "Only Nature",
      value: "onlyNature",
    },
    {
      id: 9,
      title: "Ekimae",
      value: "ekimae",
    },
    {
      id: 10,
      title: "Monster",
      value: "monster",
    },
    {
      id: 11,
      title: "Drysocket",
      value: "drysocket",
    },
    {
      id: 12,
      title: "Evergreen",
      value: "evergreen",
    },
    {
      id: 13,
      title: "Happiness",
      value: "happiness",
    },
    {
      id: 14,
      title: "Nightwalker",
      value: "nightwalker",
    },
    {
      id: 15,
      title: "Junior",
      value: "junior",
    },
  ];

  const setlistChoice = [
    {
      id: 1,
      name: "Song 1",
      selectName: "songOne",
      idName: "songOne",
      value: "",
    },
    {
      id: 2,
      name: "Song 2",
      selectName: "songTwo",
      idName: "songTwo",
      value: "",
    },
    {
      id: 3,
      name: "Song 3",
      selectName: "songThree",
      idName: "songThree",
      value: "",
    },
    {
      id: 4,
      name: "Song 4",
      selectName: "songFour",
      idName: "songFour",
      value: "",
    },
    {
      id: 5,
      name: "Song 5",
      selectName: "songFive",
      idName: "songFive",
      value: "",
    },
    {
      id: 6,
      name: "Song 6",
      selectName: "songSix",
      idName: "songSix",
      value: "",
    },
    {
      id: 7,
      name: "Song 7",
      selectName: "songSeven",
      idName: "songSeven",
      value: "",
    },
    {
      id: 8,
      name: "Song 8",
      selectName: "songEight",
      idName: "songEight",
      value: "",
    },
  ];
  return (
    <div
      className="h-[90%] w-full lg:w-1/2 flex flex-col items-center justify-center p-4 uppercase gap-8 rounded relative"
      id="setlist-container"
    >
      <div className="z-10 flex flex-col gap-6">
        {setlistChoice.map((song) => (
          <span
            key={song.id}
            className="flex justify-center items-center gap-4"
          >
            <select
              className="border-b-2 border-black p-1 font-light"
              name={song.selectName}
              id={song.idName}
            >
              {songs.map((song) => (
                <option key={song.id} value={song.value}>
                  {song.title}
                </option>
              ))}
            </select>
          </span>
        ))}
      </div>
      <Image
        src={paper}
        alt="A png of paper"
        className="absolute h-[80%] w-auto"
      />
    </div>
  );
}
