export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("jwt.user"))?._id,
    subName: "",
    semester: "",
    courseType: "",
    syllabus: "",
    courseMaterial: [],
    intppr: "",
    extppr: "",
    labFile: "",
    assignment: "",
    teacherName: "",
  };
  
  export const Reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "ADD_IMAGES":
        return {
          ...state,
          syllabus: action.payload.cover,
          courseMaterial: action.payload.images,
        };
      case "ADD_FEATURE":
        return {
          ...state,
          features: [...state.features, action.payload],
        };
      case "REMOVE_FEATURE":
        return {
          ...state,
          features: state.features.filter(
            (feature) => feature !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };