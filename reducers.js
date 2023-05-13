import { combineReducers } from "redux";

function pageHeader(
  state = {
    title: "کانال تخفيف، مرجع رایگان اشتراک گذاری کوپن و کد تخفیف",
    description:
      "خرید ارزان با کوپن تخفیف. کد تخفیف رایگان دیجی کالا، اسنپ، فیلیمو، اسنپ فود، اکالا و بیش از 750 سایت و اپلیکیشن دیگر. خرج کمتر، خرید بیشتر با کانال تخفیف.",
  },
  action
) {
  let result = {
    ...state,
  };

  switch (action.type) {
    case "FILTER_BY_SHOP":
      if (!action.shop) {
        state = {
          title: "کانال تخفيف، مرجع رایگان اشتراک گذاری کوپن و کد تخفیف",
          description:
            "خرید ارزان با کوپن تخفیف. کد تخفیف رایگان دیجی کالا، اسنپ، فیلیمو، اسنپ فود، اکالا و بیش از 750 سایت و اپلیکیشن دیگر. خرج کمتر، خرید بیشتر با کانال تخفیف.",
        };
        return state;
      } else {
        result.title = "کد تخفیف " + action.shop.persian_name + " | کانال تخفیف";
        result.description =
          "کد  و کوپن تخفیف " +
          action.shop.persian_name +
          " - " +
          action.shop.name +
          " | کانال تخفیف";
        return result;
      }
   

      let firstType = "سفارش";
      if (action.coupon.shop.category.title === "transport") firstType = "سفر";
      else if (["market", "digikala"].includes(action.coupon.shop.category.title))
        firstType = "خرید";

      let description = "";
      description += action.coupon.is_first_order_only
        ? "مخصوص " + firstType + " اول - "
        : action.coupon.is_first_order_only === false
        ? "بدون محدودیت " + firstType + " اول - "
        : "";

      description += action.coupon.has_num_limit ? " تعداد محدود - " : "";

      description += action.coupon.max_value
        ? "حداکثر تخفیف " + action.coupon.max_value.toLocaleString() + "تومان - "
        : "";

      description += action.coupon.min_order
        ? "برای سفارش‌های بالای " + action.coupon.min_order.toLocaleString() + "تومان - "
        : "";

      description += action.coupon.is_app_only ? " مخصوص اپلیکیشن - " : "";

      description += cleanDescription;

      return {
        title: "تخفیف " + value + " " + action.coupon.shop.persian_name + " | کانال تخفیف",
        description: description,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  pageHeader,
});

export default rootReducers;
