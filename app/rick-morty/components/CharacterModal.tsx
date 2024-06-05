import React from "react";
import { Character } from "@/types/rick-morty/allCharacters";
import CloseButton from "@/components/common/CloseButton";

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto relative">
        <CloseButton onClose={onClose} />
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover rounded-t-lg mb-4"
        />
        <h2 className="text-2xl font-semibold mb-4">{character.name}</h2>
        <p className="text-gray-600">Status: {character.status}</p>
        <p className="text-gray-600">Species: {character.species}</p>
        <p className="text-gray-600">Gender: {character.gender}</p>
        <p className="text-gray-600">Origin: {character.origin.name}</p>
        <p className="text-gray-600">Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
