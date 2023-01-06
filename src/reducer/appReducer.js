export default function reducer(state, action) {
  switch (action.type) {
    case "SET_ALL_ROOMS":
      let maxPrice = action.payload.map((ele) => {
        return ele.fields.price;
      });
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        allrooms: [...action.payload],
        filterProducts: [...action.payload],
        filters: {
          ...state.filters,
          roomPrice: maxPrice,
          maxPrice,
        },
      };
    case "SET_FILTER_VALUE":
      let { name, value } = action.payload;
      if (name === "pets" || name === "breakfast") {
        value = value === "false" ? "true" : "false";
      }
      if (name === "roomPrice") {
        value = parseInt(value);
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "SET_FILTER_PROD":
      let tempFilter = [...state.allrooms];
      const { roomType, guests, roomPrice, roomSize, breakfast, pets } =
        state.filters;

      if (roomType !== "all") {
        tempFilter = tempFilter.filter((ele) => {
          return ele.fields.type === roomType;
        });
      }

      if (guests !== "all") {
        tempFilter = tempFilter.filter((ele) => {
          return ele.fields.capacity === parseInt(guests);
        });
      }

      if (roomPrice !== 0) {
        tempFilter = tempFilter.filter((ele) => {
          return ele.fields.price <= roomPrice;
        });
      } else {
        tempFilter = tempFilter.filter((ele) => {
          return ele.fields.price === roomPrice;
        });
      }

      if (roomSize !== "all") {
        tempFilter = tempFilter.filter((ele) => {
          return ele.fields.size === parseInt(roomSize);
        });
      }

      if (breakfast) {
        tempFilter = tempFilter.filter((ele) => {
          return `${ele.fields.breakfast}` === breakfast;
        });
      }

      if (pets) {
        tempFilter = tempFilter.filter((ele) => {
          return `${ele.fields.pets}` === pets;
        });
      }

      return {
        ...state,
        filterProducts: tempFilter,
      };

    default:
      return state;
  }
}
