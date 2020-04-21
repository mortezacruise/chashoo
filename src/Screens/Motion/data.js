import moment, { months } from "moment";
import mostDiscount from "../../Assets/Images/page_most_discounted1.png";
import mostSold from "../../Assets/Images/page_best_selling.png";
import mostPopular from "../../Assets/Images/page_most_popular.png";
import mostNew from "../../Assets/Images/page_the_newest.png";
const data = [
  {
    name: "پرتخفیف ترین ها",
    bg: mostDiscount,
    amount: "",
    date: moment(),
    isReceived: false
  },
  {
    name: "پرفروش ترین ها",
    bg: mostSold,
    amount: "",
    date: moment(),
    isReceived: false
  },
  {
    name: "محبوب ترین ها",
    bg: mostPopular,
    amount: "",
    date: moment(),
    isReceived: false
  },
  {
    name: "جدید ترین ها",
    bg: mostNew,
    amount: "",
    date: moment(),
    isReceived: false
  }
];

export default data;
