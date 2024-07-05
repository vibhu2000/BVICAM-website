import { API } from "../backend";
export const getTeam = (type) => {
  return fetch(`${API}/getTeam/${type}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getTeamMember = (startupId) => {
  return fetch(`${API}/getTeamMember/${startupId}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getImages = (type) => {
  return fetch(`${API}/getImages/${type}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const addContact = (contact) => {
  return fetch(`${API}/addContact`, {
    method: "POST",

    body: contact,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getStartups = (type) => {
  return fetch(`${API}/getStartups/${type}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getCourses = (type) => {
  return fetch(`${API}/getCourses/${type}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getTestimonials = () => {
  return fetch(`${API}/getTestimonials`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getAllEvents = () => {
  return fetch(`${API}/getEvents`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getEvent = (eventId) => {
  return fetch(`${API}/getEvent/${eventId}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getStartup = (startupId) => {
  return fetch(`${API}/getStartup/${startupId}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getCourse = (courseId) => {
  return fetch(`${API}/getCourse/${courseId}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getVideos = () => {
  return fetch(`${API}/getVideos`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
