import React from "react";
import { Character } from "@/types/rick-morty/allCharacters";

interface CharacterSnippetProps {
  character: Character;
  onClick: () => void;
}

const CharacterSnippet: React.FC<CharacterSnippetProps> = ({
  character,
  onClick,
}) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{character.name}</h2>
      <p className="text-gray-600">Status: {character.status}</p>
      <p className="text-gray-600">Species: {character.species}</p>
      <p className="text-gray-600">Gender: {character.gender}</p>
      <p className="text-gray-600">Origin: {character.origin.name}</p>
      <p className="text-gray-600">Location: {character.location.name}</p>
    </div>
  );
};

export default CharacterSnippet;
