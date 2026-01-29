


import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World welcome react!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Episode -2 
// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1", {}, "I am an h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1", {}, "I am an h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//     ]),
// ]) ;

// console.log(parent); // object
//  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
//  root.render(parent);

// Episode 3  - Laying the foundation 

// const heading:React.ReactElement = React.createElement("h1", {id:"Heading"}, "NAmste React!");

// jsx
// React Element 
// const heading = (
// <h2 className ="head" tabIndex={5}>React Revision!</h2>
// );

// const Title = (
//     <h1 className = "title">This is React element</h1>
// )
// //  React Functional component 
//  const HeadingComponent  = () =>(
//     <div id ="container">
//      {Title}
//     <h1 className = "heading">
//      It is functional component 
//      </h1>
    
//       </div>
// );
 

//   REder the react element 
//  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

//  root.render(jsxheading);
// root.render(<HeadingComponent/>);

// Episode -4 
 
//**
//*Header
//-logo 
// - Nav Item 
// Body 
// - search
// -Restaurent Container
// -Restaurent card
// *Footer
// -Copyright
// -Links
// -Address
// -Contact
//  */

const Header = ():JSX.Elemen =>{
    return(
        <div className ="Header">
            <div className = "logo-container">
               <img className = "logo"
               src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
               />
            </div>
            <div className="nav-item">
             <ul>
                <li>Home</li>
                <li>about</li>
                <li>COntact Us </li>
                <li>Cart</li>
             </ul>
            </div>

        </div>
    )
}
  type RestaurantCardProps = {
   resData: any;
    
  };

const RestaurentCard = (props:RestaurantCardProps) => {
    //  const {resData} = props;
    //  console.log("rest data:",resList)
    // console.log("props",props)
     
     const { name, cuisines, avgRating, costForTwo, deliveryTime} =
    props.resData[0].card.card.gridElements.infoWithStyle.restaurants[0].info;


    // console.log(props);
  return(
    <div className="res-card">
        <img className="res-logo" 
        alt = "res-logo"
        src ={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
           props.resData[0].card.card.gridElements.infoWithStyle.restaurants[0].info.cloudinaryImageId
        }/>
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{deliveryTime}</h3>
        
      {/* <h3>{props.resData.info.cuisines}</h3>
      <h3>{props.resData.info.avgRating}</h3>
       <h3>{props.resData.info.costForTwo }</h3> */}
    </div>
  );
};

const resList = [
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      "layout": {
        "columns": 2
      },
      "id": "restaurant_grid_listing_v2",
      "gridElements": {
        "infoWithStyle": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
          "restaurants": [
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "807690",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4b7cef00-0f81-473f-af41-1e46b589d2dd_807690.JPG",
                "locality": "Sadar Bazar",
                "areaName": "Sadar Bazar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Pizzas"
                ],
                "avgRating": 4.2,
                "parentId": "721",
                "avgRatingString": "4.2",
                "totalRatingsString": "1.5K+",
                "sla": {
                  "deliveryTime": 21,
                  "lastMileTravel": 0.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "0.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-30 04:45:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹59"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.8",
                    "ratingCount": "189"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/pizza-hut-sadar-bazar-rest807690",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "673230",
                "name": "IGP Cakes",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/29/6dc9ddda-8493-49c5-a204-04a82e003def_673230.JPG",
                "locality": "Baktawar Community Center",
                "areaName": "Sohna Road",
                "costForTwo": "₹299 for two",
                "cuisines": [
                  "Desserts",
                  "Bakery"
                ],
                "avgRating": 4,
                "veg": true,
                "parentId": "392350",
                "avgRatingString": "4.0",
                "totalRatingsString": "1.8K+",
                "sla": {
                  "deliveryTime": 36,
                  "lastMileTravel": 4.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "4.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-29 23:59:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹39"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/igp-cakes-baktawar-community-center-sohna-road-rest673230",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "39292",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/ec4573fb-6b96-4c0e-a1f3-1e39c258f2e2_39292.JPG",
                "locality": "Huda Market",
                "areaName": "Sector 14",
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "Burgers",
                  "Fast Food",
                  "Rolls & Wraps"
                ],
                "avgRating": 4.1,
                "parentId": "547",
                "avgRatingString": "4.1",
                "totalRatingsString": "17K+",
                "sla": {
                  "deliveryTime": 31,
                  "lastMileTravel": 3.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "3.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-30 03:00:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/kfc-huda-market-sector-14-rest39292",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "125878",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/dad2ee5b-536b-4d6c-b42f-8dad70b1df6f_125878.jpg",
                "locality": "Old Rly Road",
                "areaName": "Sector 4",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Burgers",
                  "American"
                ],
                "avgRating": 4.3,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "44K+",
                "sla": {
                  "deliveryTime": 23,
                  "lastMileTravel": 2.1,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "2.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-29 23:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    },
                    {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "bolt!",
                            "imageId": "android/static-assets/icons/big_rx.png"
                          }
                        },
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                          }
                        }
                      ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹59"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "921"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/burger-king-old-rly-road-sector-4-rest125878",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "651214",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e21d1285-b7ff-4233-a6d5-f442916bab5c_651214.JPG",
                "locality": "Huda Market",
                "areaName": "Sector 77",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "American",
                  "Fast Food"
                ],
                "avgRating": 4.4,
                "parentId": "630",
                "avgRatingString": "4.4",
                "totalRatingsString": "9.8K+",
                "sla": {
                  "deliveryTime": 32,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-30 03:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                          }
                        }
                      ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹49"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/mcdonalds-huda-market-sector-77-rest651214",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "175260",
                "name": "New Colony Chaap Wale",
                "cloudinaryImageId": "zzzbr1id0b5h3tm0odoe",
                "locality": "Sector 7",
                "areaName": "Sector 7",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Chinese",
                  "Continental",
                  "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "370553",
                "avgRatingString": "4.1",
                "totalRatingsString": "4.6K+",
                "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 1.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "1.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-29 23:59:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    },
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "bolt!",
                            "imageId": "android/static-assets/icons/big_rx.png"
                          }
                        },
                        {
                          "attributes": {
                            "description": "pureveg",
                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                        }
                      ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "101"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/new-colony-chaap-wale-sector-7-rest175260",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "154653",
                "name": "Jagdish Vaishno Dhaba",
                "cloudinaryImageId": "seyuhw8itjtlmvm7wscy",
                "locality": "Sector 4",
                "areaName": "Old Railway Road",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "North Indian",
                  "Tandoor",
                  "Biryani"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "15300",
                "avgRatingString": "4.5",
                "totalRatingsString": "34K+",
                "sla": {
                  "deliveryTime": 22,
                  "lastMileTravel": 1.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "1.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-29 23:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "bolt!",
                            "imageId": "android/static-assets/icons/big_rx.png"
                          }
                        }
                      ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹39"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/jagdish-vaishno-dhaba-sector-4-old-railway-road-rest154653",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "805488",
                "name": "Pizza Wings",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_805488.JPG",
                "locality": "Sector 30",
                "areaName": "Sector 30",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Pizzas",
                  "Pastas",
                  "Rolls & Wraps",
                  "Italian",
                  "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "159048",
                "avgRatingString": "4.1",
                "totalRatingsString": "2.0K+",
                "sla": {
                  "deliveryTime": 47,
                  "lastMileTravel": 4.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "45-50 mins",
                  "lastMileTravelString": "4.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-01-30 03:30:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹19"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.9",
                    "ratingCount": "1.3K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-10d807d7-9ac5-4d8c-9d51-8d0572e8c508"
              },
              "cta": {
                "link": "https://www.swiggy.com/city/gurgaon/pizza-wings-sector-30-rest805488",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
          ],
          "theme": "SeoRestaurantListingGridWidget"
        }
      }
    }
  }
}
];
    


const Body = () =>{
    return(
    <div className ="body-container">
        <div className = "search-bar">Search</div>
        <div className="res-Container">
          <RestaurentCard resData ={resList[0]}/> 
          <RestaurentCard resData ={resList[1]}/> 
          <RestaurentCard resData ={resList[2]}/> 
          <RestaurentCard resData ={resList[3]}/> 
          <RestaurentCard resData ={resList[4]}/> 
          <RestaurentCard resData ={resList[5]}/> 
          <RestaurentCard resData ={resList[6]}/> 
          <RestaurentCard resData ={resList[7]}/> 
          
        </div>
    </div>
    );
};


const AppLayout = ():JSX.Element =>{
    return(
        <div id = "app">
         <Header/>
          <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(< AppLayout/>);







 


