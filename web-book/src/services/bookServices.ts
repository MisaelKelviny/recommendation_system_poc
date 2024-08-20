export const getByGenre = (genre: string): Promise<Response> => {
  return fetch(`http://localhost:8080/api/books?genre=${genre}`);
};

export const getBySearch = (search: string): Promise<Response> => {
  return fetch(`http://localhost:8080/api/books?search=${search}`);
};
