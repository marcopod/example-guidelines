import { GetAllCharactersResponse } from "@/types/rick-morty/allCharacters";
import axios from "axios";
// import { getToken } from "../helpers/helper";

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? process.env.NEXT_PUBLIC_API_URL
//     : "http://localhost:3001";

const getAllCharacters = async (): Promise<GetAllCharactersResponse> => {
  try {
    // const config = {
    //   headers: { authorization: getToken() },
    // };

    // const response = await axios.get(
    //   `${baseUrl}/professor/someApiFunction`,
    //   config
    // );
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

export default {
  getAllCharacters,
};
