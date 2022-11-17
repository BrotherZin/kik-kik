<template>
  
</template>

<script>
import Vue from "vue"

// export default {
//     name: "Home",
//     data: () => {
//         return{

//         }
//     }
// }
const items = [
  {
    name: "햄버거",
    src: require("/image/food/hamburger.jpg")
  },
  {
    name: "피자",
    src: require("/image/food/pizza.jpg")
  },
  {
    name: "닭발",
    src: require("/image/food/dakbal.jpg")
  },
  {
    name: "족발",
    src: require("/image/food/jokbal.jpg")
  }
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">Favorite Worldcup</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;

</script>

<style>
.title {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 0px 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
    min-width: 500px;
    overflow: hidden;
    background-color: black;
    position: relative;
  }
  .food-img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
  }
  .food-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  .name {
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 10%;
    font-size: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>