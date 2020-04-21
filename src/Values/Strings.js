export const BASE_URL = "https://www.kampon.ir/api/v1";
export const HOME_ROUTE = BASE_URL + "/home";
export const CHECK_TOKEN = BASE_URL + "/checkToken";
export const GET_DEACTIVE_KAMPON = BASE_URL + "/owner/getDeactives";
export const GET_ACTIVE_KAMPON = BASE_URL + "/owner/getActives";
export const GET_SOLD_KAMPON = BASE_URL + "/owner/getUsed";
export const GET_UNSOLD_KAMPON = BASE_URL + "/owner/getNotUsed";
export const POST_SUBMIT_KAMPON = BASE_URL + "/owner/isUsed";
export const GET_TRANSACTION = BASE_URL + "/owner/transactions";
export const GET_OWNER_INFO = BASE_URL + "/owner/info";
export const WITHDRAW_REQUEST = BASE_URL + "/owner/withdrawalRequest";
export const GET_DISCOUNT_INFO = BASE_URL + "/d";
export const ADD_SHOW_CART = BASE_URL + "/cart";
export const ADD_BOOKMARK = BASE_URL + "/bookmark";
export const CATEGORY_INFINITIES = BASE_URL + "/d/sport/1";
export const CATEGORY_INFINITIES_SLIDER = BASE_URL + "/s";
export const REPORT = BASE_URL + "/member/report";
export const SUBCATS = BASE_URL + "/c/";

export const USE = "USE";

export const ACTIVE = "ACTIVE";
export const TOMAN = "تومان";

export const INTRO_FIRST_TITLE = "بیشترین تخفیف";
export const INTRO_SECOND_TITLE = "صفحه ویژه";
export const INTRO_THIRTH_TITLE = "خرید آسان";
export const INTRO_FORTH_TITLE = "کمپُن";

export const INTRO_FIRST_DESCRIPTION =
  "همیشه میتونی بیشترین تخفیف هارو اینجا پیدا کنی";
export const INTRO_SECEND_DESCRIPTION =
  "میتونی تخفیفارو بر اساس پربازدیدترین ،پرتخفیف ترین ،و...فیلتر کنی";
export const INTRO_THIRTH_DESCRIPTION =
  "میتونی خیلی راحت با چند تا کلیک کمپُنِتُ بخری";
export const INTRO_FORTH_DESCRIPTION = "با کمپُن خرجتُ کم کُن";
export const MOBILE_WRONG = "لطفا موبایل خود را کامل وارد کنید";
//=================== Async storage constants ==========================
export const MOBILE_NUMBER = "mobileNumber";
export const IS_LOGIN = "isLogin";
export const SHOW_INTRO = "showIntro";
export const TOKEN = "token";

export const MOST_DISCOUNT = "پرتخفیف ترین ها";
export const NEWEST = "پرفروش ترین ها";
export const POPULAR = "محبوب ترین ها";
export const FOR_YOU = "جدید ترین ها";

//============== Response Codes ==================

export const AUTH_SUCCESS = 2022;
export const BOOKMARK_ADDED = 2023;
export const SUCCESS_EXIST_IN_CART = 2057;
export const SUCCESS_KAMPON_SUBMITED = 2098;
export const SUCCESS_GET_TRANSACTION = 2058;

//============== Check Codes ===========================
export const CART_EXIST = 5047;

//============== Delete Codes ===========================
export const DELETE_SUCESS = 3064;

export const SUBMIT_KAMPON = "ثبت کمپن";
export const CANCEL = "انصراف";
export const FEATUR = "ویژگی ها";
export const TERM_OF_USE = "شرایط استفاده";
export const TOKEN_WRONG = "کد وارد شده صحیح نیست";
export const PLEASE_ENTER_CODE = "کد دریافتی را کامل وارد کنید";
export const PLEASE_ENTER_MOBILE_NUMBER = "شماره همراه خود را کامل وارد کنید";
export const MOBILE_SHOULD_START_WITH_09 = "شماره همراه اشتباه است";
export const MOBILE_NOT_SUBMIT_IN_DB =
  "شماره شما در سامانه کمپُن موجود نیست با واحد پشتیبانی تماس بگیرید";
export const ENTER_TOKEN = "کد تایید را وارد کنید";
export const KAMPON_INFORMATION = "مشخصات تخفیف";
export const KAMPONS = "کمپُن ها";
export const SOLD_KAMPONS = "کمپُن های فروخته شده";
export const BOUGHT_KAMPONS = "کمپُن های خریداری شده";
export const USED_KAMPONS = "کمپُن های استفاده شده";
export const ACTIVE_KAMPONS = "کمپُن های  فعال";
export const BOOKMARKED = "علاقه مندی ها";

export const LOGIN_TITLE = "ورود به کمپُن";
export const MSG_SMT_WRONG = "لطفا دوباره تلاش کنید";
export const INTERNET_ERROR_MSG = "اتصال به اینترنت را بررسی کنید";
export const DATA_ERROR_MSG =
  "دریافت اطلاعات با مشکل مواجه شده است لطفا دوباره تلاش کنید";
export const NULL_ERROR_MSG = "موردی برای نمایش یافت نشد";
export const PROFILE_LOGIN_MSG =
  "لطفا برای دیدن اطلاعات کاربری خود ابتدا ثبت نام کنید";
export const INPUT_PERSIAN_ERROR_MGS =
  "لطفا از حروف فارسی  و اعداد استفاده  کنید";
export const SUCCESS_REQ = "درخواست با موفقیت ثبت شد";
export const DENIED_REQ = "درخواست با خطا مواجه شد";
export const DENIED_LOGIN = "لطفا برای ثبت گزارش ابتدا ثبت نام کنید";

export const WITHDRAW = "WITHDRAW";
export const DEPOSIT = "DEPOSIT";
//============== Error Codes==================
export const AUTH_FAILED = 1022;
export const FAILED_NOT_OWNER = 1082;
export const FAILED_TOKEN = 1014;
export const FAILED_NETWORK = 1015;
export const NO_DISCOUNT_INCART = 1047;

export const DISCOUNT_IS_USED = 1094;
export const DISCOUNT_INVALID = 1093;
export const DELETE_CART_FAILED = 1027;
export const MEMBER_NOT_LOGIN = 1000;
export const NO_INTERNET = 1001;
export const SMT_WRONG = 1002;

//============== Null Errors ===========================
export const NULL_TRANSACTION = 9010;
export const MOBILE_NUMBERR = "شماره همراه";
export const EMAIL_ADDRESS = "آدرس ایمیل";
export const ADDRESS_MEMBER = "آدرس محل سکونت:";

export const NEW_PRICE = "قیمت جدید:";
export const OLD_PRICE = "قیمت قبلی:";
export const ADDRESS = "آدرس:";
export const PHONES = "شماره تماس:";
export const FEATURES = "ویژگی ها";
export const TERMS_OF_USE = "شرایط استفاده";
