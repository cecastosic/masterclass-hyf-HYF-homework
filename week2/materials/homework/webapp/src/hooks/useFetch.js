import useSwr from "swr";

export const baseUrl = "https://6hwwi0vg7j.execute-api.us-east-1.amazonaws.com/Prod";

export const useFetch = (
  path, 
  name
) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSwr(url);

  return { data, error };
};
