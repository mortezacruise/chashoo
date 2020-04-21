import createDtateContext from "./createDataContext";
import manto1 from "../Assets/OK/manto.png";
import manto2 from "../Assets/OK/manto2.png";
import manto3 from "../Assets/OK/manto3.png";
import shalvar1 from "../Assets/OK/manto4.png";
import shalvar2 from "../Assets/OK/shalvar.png";
import image from "../Assets/mantomodel/mantoBlackCharkhoone.png";
import image1 from "../Assets/mantomodel/mantoBlackHashtag.png";
import image2 from "../Assets/mantomodel/mantoBlueHashtag.png";
import image3 from "../Assets/mantomodel/mantoRedHashtag.png";
import image4 from "../Assets/chasho/banner3.jpg";
const DataContext = (state, action) => {
  switch (action.type) {
    case "shimmer_swicher":
      return { ...state, isShimmerVisible: action.payload };
    case "home_data":
      return { ...state, homeData: action.payload };
    default:
      return state;
  }
};

const addDataToState = (dispatch) => (data) => {
  dispatch({ type: "add_data", payload: data });
};
const shimmerSwicher = (dispatch) => (data) => {
  console.log("context");

  setTimeout(() => {
    dispatch({ type: "shimmer_swicher", payload: true });
  }, 5000);
};
const getData = (dispatch) => (data) => {
  dispatch({ type: "home_data", payload: data });
};
export const { Provider, Context } = createDtateContext(
  DataContext,
  { shimmerSwicher, getData },
  {
    isShimmerVisible: false,
    homeData: null,
    specialist: {
      categories: [],
      specialData: [
        {
          newClub: {
            title: "جدید ترین مانتو ها",
            data: [
              {
                image: manto1,
                title: "مانتو ظرح شب بافی مدل۱"
              },
              {
                image: manto2,
                title: "مانتو ظرح شب بافی مدل۲"
              },
              {
                image: manto3,
                title: "مانتو ظرح شب بافی مدل۳"
              },
              {
                image: shalvar1,
                title: "شلوار  مدل چادر شب بافی مدل ۱"
              },
              {
                image: shalvar2,
                title: "شلوار  مدل چادر شب بافی مدل 2"
              },
              {
                image: shalvar2,
                title: "شلوار  مدل چادر شب بافی مدل 2"
              }
            ]
          }
        },

        {
          todayDiscount: {
            title: "جدید ترین شلوار ها",
            data: []
          }
        },
        {
          popular: {
            title: "جدید ترین  ها",
            data: [
              {
                image: image,
                title: "رستوران سنتی شهربانو"
              },
              {
                image: image,
                title: "رستوران سنتی شهربانو"
              },
              {
                image: image,
                title: "رستوران سنتی شهربانو"
              },
              {
                image: image,
                title: "رستوران سنتی شهربانو"
              },
              {
                image: image,
                title: "رستوران سنتی شهربانو"
              }
            ]
          }
        }
        // {
        //   firstbaner: {
        //     url:
        //       "https://dkstatics-public.digikala.com/digikala-adservice-banners/1000018224.jpg"
        //   }
        // }
      ],
      banners: [
        {
          firstbaner: {
            url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1000018224.jpg"
          }
        },
        {
          secondBanner: [
            {
              url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1000018313.jpg"
            },
            {
              url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1000017267.jpg"
            }
          ]
        }
      ]
    }
  }
);
