"use client";

import React from "react";
import { useCharacterList } from "@/hooks/rick-morty/useCharacterList";
import CharacterSnippet from "./components/CharacterSnippet";
import CharacterModal from "./components/CharacterModal";

const CharacterList: React.FC = () => {
  const {
    characters,
    loading,
    error,
    selectedCharacter,
    handleCharacterClick,
    closeModal,
  } = useCharacterList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Character List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterSnippet
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default CharacterList;
